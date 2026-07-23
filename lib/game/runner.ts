import type { EvalResult, PooChallenge } from "./types";
import { runChallenge as runPhp, warmupPhp } from "./evaluator";
import { runPyChallenge, warmupPython } from "./py-evaluator";

/**
 * Punto único de ejecución de retos: despacha al evaluador de PHP o de Python
 * según `challenge.lang`. La Comunidad del Anillo es PHP; Las Dos Torres, Python.
 */

export function langOf(c: PooChallenge): "php" | "python" {
  return c.lang ?? "php";
}

/** Precarga el runtime del lenguaje del reto mientras el jugador lee el lore. */
export function warmup(c: PooChallenge): void {
  if (langOf(c) === "python") warmupPython();
  else warmupPhp();
}

export function runChallenge(
  code: string,
  c: PooChallenge,
): Promise<EvalResult> {
  return langOf(c) === "python" ? runPyChallenge(code, c) : runPhp(code, c);
}
