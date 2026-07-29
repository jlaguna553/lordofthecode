import type { EvalResult, PooChallenge } from "./types";
import { runChallenge as runPhp, warmupPhp } from "./evaluator";
import { runPyChallenge, warmupPython } from "./py-evaluator";
import { runJsChallenge, warmupJs } from "./js-evaluator";

/**
 * Punto único de ejecución de retos: despacha al evaluador según `challenge.lang`
 * (php-wasm, Pyodide o JavaScript nativo). Cada aventura usa el suyo.
 */

export type Lang = "php" | "python" | "javascript";

export function langOf(c: PooChallenge): Lang {
  return c.lang ?? "php";
}

/** Precarga el runtime del lenguaje del reto mientras el jugador lee el lore. */
export function warmup(c: PooChallenge): void {
  const lang = langOf(c);
  if (lang === "python") warmupPython();
  else if (lang === "javascript") warmupJs();
  else warmupPhp();
}

export function runChallenge(
  code: string,
  c: PooChallenge,
): Promise<EvalResult> {
  const lang = langOf(c);
  if (lang === "python") return runPyChallenge(code, c);
  if (lang === "javascript") return runJsChallenge(code, c);
  return runPhp(code, c);
}
