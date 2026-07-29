import type {
  Chapter,
  CombatQuestion,
  MapNode,
  PooChallenge,
  Reward,
  Scenery,
  ScrollContent,
} from "./types";
import type { Localized } from "@/lib/i18n/core";
import type { Lang } from "./runner";

/**
 * Separación narrativa / temario.
 *
 * La NARRATIVA (esta cara) es el esqueleto compartido por todas las aventuras:
 * el mapa, los personajes, los enemigos y su lore — la historia de la Tierra
 * Media, igual la juegues en el lenguaje que la juegues.
 *
 * El TEMARIO (`Syllabus`) es lo que cada lenguaje aporta: qué enseña cada nodo,
 * sus pergaminos, retos y preguntas. `buildChapter(narrativa, temario, lang)`
 * funde ambos en un `Chapter` completo.
 *
 * Reparto de responsabilidades:
 * - COMBATES: el enemigo (nombre, sprite, vida, daño, XP, jefe, recompensa,
 *   burla) y su título/intro son NARRATIVA. Sólo las preguntas son temario.
 * - PERGAMINOS/RETOS/ENIGMAS: la narrativa fija dónde están y qué personaje los
 *   da; el título, la intro y el contenido los pone el TEMARIO, porque van
 *   ligados al concepto que se enseña (y ése cambia con el lenguaje).
 */

interface NarrativeBase {
  node_id: string;
  position: { x: number; y: number };
  spriteId?: string;
}

/** Combate: narrativa completa salvo las preguntas. */
export interface NarrativeBattle extends NarrativeBase {
  kind: "battle";
  title: Localized<string>;
  lore_intro: Localized<string>;
  enemy: {
    name: Localized<string>;
    spriteId: string;
    hp: number;
    damage: number;
    xp: number;
    boss?: boolean;
    taunt?: Localized<string>;
    reward?: Reward;
  };
}

/** Hueco para un pergamino, reto o enigma: la narrativa sólo fija el sitio. */
export interface NarrativeSlot extends NarrativeBase {
  kind: "scroll" | "challenge" | "quiz";
}

export type NarrativeNode = NarrativeBattle | NarrativeSlot;

/** El esqueleto narrativo de un capítulo, sin temario. */
export interface ChapterNarrative {
  chapter: number;
  title: Localized<string>;
  lore: Localized<string>;
  mapSize: { cols: number; rows: number };
  spawn: { x: number; y: number };
  scenery?: Scenery;
  companions?: string[];
  xpParaRetos?: number;
  unlockedBy?: number;
  nodes: NarrativeNode[];
}

/** El contenido técnico de un nodo, en un lenguaje concreto. */
export type SyllabusEntry =
  | {
      kind: "challenge";
      title: Localized<string>;
      lore_intro: Localized<string>;
      challenge: Omit<PooChallenge, "lang">;
    }
  | {
      kind: "scroll";
      title: Localized<string>;
      lore_intro: Localized<string>;
      scroll: ScrollContent;
    }
  | {
      kind: "quiz";
      title: Localized<string>;
      lore_intro: Localized<string>;
      topic: Localized<string>;
      timeLimitSec?: number;
      questions: CombatQuestion[];
    }
  | { kind: "battle"; questions: CombatQuestion[] };

/** Temario de un capítulo: contenido técnico por node_id. */
export type Syllabus = Record<string, SyllabusEntry>;

/** Funde una narrativa con un temario para producir el capítulo jugable. */
export function buildChapter(
  narr: ChapterNarrative,
  syl: Syllabus,
  lang: Lang,
): Chapter {
  const nodes: MapNode[] = narr.nodes.map((n) => {
    const s = syl[n.node_id];
    if (!s) {
      throw new Error(
        `Temario incompleto: falta el nodo "${n.node_id}" (${lang}).`,
      );
    }
    if (s.kind !== n.kind) {
      throw new Error(
        `Tipo de temario ("${s.kind}") no coincide con la narrativa ("${n.kind}") en "${n.node_id}".`,
      );
    }

    if (n.kind === "battle" && s.kind === "battle") {
      return {
        node_id: n.node_id,
        title: n.title,
        lore_intro: n.lore_intro,
        position: n.position,
        spriteId: n.spriteId,
        kind: "battle",
        enemy: { ...n.enemy, questions: s.questions },
      };
    }
    // Pergamino / reto / enigma: envoltorio y contenido del temario.
    if (s.kind === "battle") {
      // Inalcanzable (n.kind no es "battle" aquí), pero estrecha el tipo.
      throw new Error(`Nodo "${n.node_id}": temario de combate en un hueco.`);
    }
    const base = {
      node_id: n.node_id,
      title: s.title,
      lore_intro: s.lore_intro,
      position: n.position,
      spriteId: n.spriteId,
    };
    if (s.kind === "scroll") return { ...base, kind: "scroll", scroll: s.scroll };
    if (s.kind === "quiz")
      return {
        ...base,
        kind: "quiz",
        quiz: {
          topic: s.topic,
          timeLimitSec: s.timeLimitSec,
          questions: s.questions,
        },
      };
    // challenge
    return {
      ...base,
      poo_challenge: { ...s.challenge, lang },
    };
  });

  return {
    chapter: narr.chapter,
    title: narr.title,
    lore: narr.lore,
    mapSize: narr.mapSize,
    spawn: narr.spawn,
    scenery: narr.scenery,
    companions: narr.companions,
    xpParaRetos: narr.xpParaRetos,
    unlockedBy: narr.unlockedBy,
    nodes,
  };
}
