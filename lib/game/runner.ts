import type { EvalResult, PooChallenge } from "./types";
import { runChallenge as runPhp, warmupPhp } from "./evaluator";
import { runPyChallenge, warmupPython } from "./py-evaluator";
import { runJsChallenge, warmupJs } from "./js-evaluator";
import { runTsChallenge, warmupTs } from "./ts-evaluator";
import { runGoChallenge, warmupGo } from "./go-evaluator";
import { runReactChallenge, warmupReact } from "./react-evaluator";

/**
 * Punto único de ejecución de retos: despacha al evaluador según `challenge.lang`
 * (php-wasm, Pyodide, JavaScript nativo, TypeScript transpilado, Go interpretado
 * en WASM o React con JSX renderizado a HTML). Cada aventura usa el suyo.
 */

export type Lang =
  | "php"
  | "python"
  | "javascript"
  | "typescript"
  | "go"
  | "react";

export function langOf(c: PooChallenge): Lang {
  return c.lang ?? "php";
}

/** Precarga el runtime del lenguaje del reto mientras el jugador lee el lore. */
export function warmup(c: PooChallenge): void {
  const lang = langOf(c);
  if (lang === "python") warmupPython(c.packages);
  else if (lang === "javascript") warmupJs();
  else if (lang === "typescript") warmupTs();
  else if (lang === "go") warmupGo();
  else if (lang === "react") warmupReact();
  else warmupPhp();
}

export function runChallenge(
  code: string,
  c: PooChallenge,
): Promise<EvalResult> {
  const lang = langOf(c);
  if (lang === "python") return runPyChallenge(code, c);
  if (lang === "javascript") return runJsChallenge(code, c);
  if (lang === "typescript") return runTsChallenge(code, c);
  if (lang === "go") return runGoChallenge(code, c);
  if (lang === "react") return runReactChallenge(code, c);
  return runPhp(code, c);
}
