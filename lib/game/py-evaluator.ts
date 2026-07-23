import type { EvalResult, PooChallenge, TestResult } from "./types";

/**
 * Evaluador de Python en el navegador vía Pyodide (CPython compilado a
 * WebAssembly). Espejo del evaluador de PHP: mismo protocolo de marcadores
 * (@@TiS@@…@@TiE@@) para poder compartir la interfaz del reto.
 *
 * - Pyodide se carga desde su CDN oficial (≈10 MB) la primera vez que se abre
 *   un reto de Python. Sólo Las Dos Torres lo necesita.
 * - Reutiliza UNA instancia; cada intento corre en un espacio de nombres nuevo
 *   para poder redeclarar clases sin arrastrar estado del intento anterior.
 */

const PYODIDE_VERSION = "0.27.7";
const CDN = `https://cdn.jsdelivr.net/pyodide/v${PYODIDE_VERSION}/full`;

interface PyProxy {
  destroy: () => void;
}
interface Pyodide {
  runPython: (code: string, opts?: { globals?: PyProxy }) => unknown;
  setStdout: (opts: { batched: (s: string) => void }) => void;
  setStderr: (opts: { batched: (s: string) => void }) => void;
}

let pyodidePromise: Promise<Pyodide> | null = null;
const buffer = { out: "", err: "" };

/** Carga el script de Pyodide del CDN una sola vez (inyectando un <script>). */
function loadPyodideScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    const w = window as unknown as { loadPyodide?: unknown };
    if (w.loadPyodide) return resolve();
    const s = document.createElement("script");
    s.src = `${CDN}/pyodide.js`;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("No se pudo cargar Pyodide del CDN"));
    document.head.appendChild(s);
  });
}

async function getPyodide(): Promise<Pyodide> {
  if (pyodidePromise) return pyodidePromise;
  pyodidePromise = (async () => {
    await loadPyodideScript();
    const w = window as unknown as {
      loadPyodide: (opts: { indexURL: string }) => Promise<Pyodide>;
    };
    const py = await w.loadPyodide({ indexURL: `${CDN}/` });
    // Redirigimos las salidas a nuestros buffers (se vacían por intento).
    py.setStdout({ batched: (s: string) => (buffer.out += s) });
    py.setStderr({ batched: (s: string) => (buffer.err += s) });
    return py;
  })();
  return pyodidePromise;
}

export function pythonSupported(): boolean {
  return typeof window !== "undefined" && typeof WebAssembly !== "undefined";
}

/** Precarga Pyodide (para lanzarlo mientras el jugador lee el lore). */
export function warmupPython(): void {
  if (pythonSupported()) void getPyodide();
}

/** Quita un posible bloque markdown ```python ... ``` envolvente. */
function stripFences(code: string): string {
  return code.replace(/^\s*```\w*\n?/, "").replace(/```\s*$/, "");
}

/**
 * Construye el script Python: soporte + código del jugador + arnés de tests.
 *
 * Todo el arnés va indentado dentro de una función `__run()` para no chocar con
 * el código del jugador a nivel de módulo, y se serializa con `json.dumps`
 * usando separadores compactos y `ensure_ascii=False`, de modo que la salida
 * coincida byte a byte con el `JSON.stringify` con el que se compara.
 */
export function buildPyHarness(playerCode: string, c: PooChallenge): string {
  const lines: string[] = [
    "import json as __json",
    "def __ser(v):",
    "    return __json.dumps(v, ensure_ascii=False, separators=(',', ':'))",
    "",
    c.support_code ?? "",
    "",
    stripFences(playerCode),
    "",
  ];

  if (c.sut) {
    lines.push(
      "try:",
      `    __sut = ${c.sut}`,
      "except Exception as __e:",
      `    __sut = None`,
      `    print('@@SUTERR@@' + str(__e) + '@@SUTERR@@')`,
      "sut = __sut",
    );
  }

  c.test_cases.forEach((t, i) => {
    // raw evalúa la expresión tal cual; con sut se antepone el objeto.
    const expr = t.raw || !c.sut ? t.input : `__sut.${t.input}`;
    lines.push(
      "try:",
      `    print('@@T${i}S@@' + __ser(${expr}) + '@@T${i}E@@')`,
      "except Exception as __e:",
      `    print('@@T${i}S@@__ERR__' + str(__e) + '@@T${i}E@@')`,
    );
  });

  return lines.join("\n");
}

function parseOutput(
  out: string,
  err: string,
  challenge: PooChallenge,
): EvalResult {
  const results: TestResult[] = [];
  let anyMissing = false;

  challenge.test_cases.forEach((t, i) => {
    const m = out.match(new RegExp(`@@T${i}S@@([\\s\\S]*?)@@T${i}E@@`));
    const raw = m ? m[1] : null;
    if (raw === null) anyMissing = true;
    const expected = JSON.stringify(t.expected);
    const isErr = raw?.startsWith("__ERR__") ?? false;
    const got =
      raw === null
        ? "<sin salida>"
        : isErr
          ? "⚠ " + raw.replace("__ERR__", "")
          : raw;
    results.push({
      input: t.input,
      description: t.description,
      expected,
      got,
      pass: !isErr && raw !== null && raw === expected,
    });
  });

  const stdout = out
    .replace(/@@T\d+S@@[\s\S]*?@@T\d+E@@/g, "")
    .replace(/@@SUTERR@@[\s\S]*?@@SUTERR@@/g, "")
    .trim();

  const sutErr = out.match(/@@SUTERR@@([\s\S]*?)@@SUTERR@@/)?.[1];
  const errText = [err, stdout].filter(Boolean).join("\n").trim();
  let phpError: string | undefined; // el campo se llama así por herencia del de PHP
  if (sutErr) phpError = `Al construir el objeto: ${sutErr}`;
  else if (anyMissing && err.trim()) phpError = err.trim().slice(0, 600);

  const ok = results.length > 0 && results.every((r) => r.pass);
  return { ok, results, phpError, stdout: stdout || undefined };
}

/** Ejecuta el código Python del jugador contra los test_cases del reto. */
export async function runPyChallenge(
  playerCode: string,
  challenge: PooChallenge,
): Promise<EvalResult> {
  const py = await getPyodide();
  buffer.out = "";
  buffer.err = "";
  const harness = buildPyHarness(playerCode, challenge);
  // Espacio de nombres nuevo por intento (dict vacío): equivale al refresh()
  // de PHP, aísla las clases del jugador de un intento a otro.
  const ns = py.runPython("dict()") as PyProxy;
  try {
    py.runPython(harness, { globals: ns });
  } catch (e) {
    // Errores de sintaxis o de tiempo de ejecución no atrapados por el arnés.
    buffer.err += e instanceof Error ? e.message : String(e);
  } finally {
    ns.destroy();
  }
  return parseOutput(buffer.out, buffer.err, challenge);
}
