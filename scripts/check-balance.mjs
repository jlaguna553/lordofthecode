#!/usr/bin/env node
/**
 * check-balance.mjs — comprueba que la campaña es superable.
 *
 * La puerta de experiencia de un capítulo (`xpParaRetos`) tiene que poder
 * alcanzarse venciendo SÓLO a sus enemigos normales: el jefe está detrás de los
 * retos de código, así que su experiencia no cuenta para abrirlos. Si la puerta
 * pide más de lo que dan los enemigos, el capítulo queda encallado — y eso no
 * lo detecta ni TypeScript ni el build.
 *
 * Uso:  pnpm check:balance
 */
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const raiz = join(dirname(fileURLToPath(import.meta.url)), "..");

const src = readFileSync(join(raiz, "data", "chapters.ts"), "utf8");
const capitulos = [...src.matchAll(/export const CHAPTER_\w+: Chapter = \{([\s\S]*?)\n\};/g)];

let fallos = 0;
for (const [, bloque] of capitulos) {
  const num = bloque.match(/chapter: (\d+)/)?.[1];
  const puerta = bloque.match(/xpParaRetos: (\d+)/)?.[1];
  if (!puerta) continue;

  const enemigos = [
    ...bloque.matchAll(
      /name: "([^"]+)",\s*\n\s*spriteId[\s\S]{0,200}?xp: (\d+),(\s*\n\s*boss: true,)?/g,
    ),
  ].map((m) => ({ nombre: m[1], xp: +m[2], jefe: Boolean(m[3]) }));

  const normales = enemigos.filter((e) => !e.jefe);
  const disponible = normales.reduce((a, e) => a + e.xp, 0);

  if (disponible < +puerta) {
    fallos++;
    console.error(
      `✗ Capítulo ${num}: la puerta pide ${puerta} XP pero sus enemigos sólo dan ${disponible}. ` +
        `Faltan ${+puerta - disponible}.`,
    );
    continue;
  }
  if (!enemigos.some((e) => e.jefe)) {
    fallos++;
    console.error(`✗ Capítulo ${num}: exige experiencia pero no tiene jefe que desbloquee el siguiente.`);
    continue;
  }
  console.log(
    `✓ Capítulo ${String(num).padStart(2)} · puerta ${String(puerta).padStart(3)} XP · ` +
      `enemigos ${normales.map((e) => e.xp).join("+")} = ${disponible}` +
      (disponible === +puerta ? " (justo)" : ` (margen ${disponible - +puerta})`),
  );
}

// Todo capítulo con `unlockedBy` debe apuntar a uno que tenga jefe.
for (const [, bloque] of capitulos) {
  const num = bloque.match(/chapter: (\d+)/)?.[1];
  const previo = bloque.match(/unlockedBy: (\d+)/)?.[1];
  if (!previo) continue;
  const bloquePrevio = capitulos.find(
    ([, b]) => b.match(/chapter: (\d+)/)?.[1] === previo,
  );
  if (!bloquePrevio || !/boss: true/.test(bloquePrevio[1])) {
    fallos++;
    console.error(
      `✗ Capítulo ${num} depende del ${previo}, que no tiene jefe: quedaría inalcanzable.`,
    );
  }
}

if (fallos) {
  console.error(`\n${fallos} problema(s) de equilibrio.`);
  process.exit(1);
}
console.log("\nCampaña superable.");
