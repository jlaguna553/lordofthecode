import type { Adventure } from "@/lib/game/adventure";
import { allChapters } from "@/lib/game/adventure";
import {
  BOOK_FELLOWSHIP,
  BOOK_TWO_TOWERS,
  BOOK_APPENDICES,
} from "@/lib/game/book";
import {
  CHAPTER_5,
  CHAPTER_6,
  CHAPTER_7,
  CHAPTER_8,
  CHAPTER_SOLID,
  CHAPTER_ALGOS,
  CHAPTER_ALGOS_2,
  CHAPTER_ALGOS_3,
  CHAPTER_LOGICA,
  CHAPTER_CALENTAMIENTO,
  CHAPTER_GOLLUM,
  CHAPTER_HELM,
} from "./chapters";
import { buildChapter } from "@/lib/game/narrative";
import {
  NARR_COMMUNITY_1,
  NARR_COMMUNITY_2,
  NARR_COMMUNITY_3,
  NARR_COMMUNITY_4,
} from "./narrative/community";
import {
  SYL_PHP_COMMUNITY_1,
  SYL_PHP_COMMUNITY_2,
  SYL_PHP_COMMUNITY_3,
  SYL_PHP_COMMUNITY_4,
} from "./syllabus/community-php";
import {
  SYL_JS_COMMUNITY_1,
  SYL_JS_COMMUNITY_2,
  SYL_JS_COMMUNITY_3,
  SYL_JS_COMMUNITY_4,
} from "./syllabus/community-js";

// Capítulo 1 de la Comunidad, construido fundiendo la MISMA narrativa con el
// temario de cada lenguaje.
const PHP_COMMUNITY_1 = buildChapter(
  NARR_COMMUNITY_1,
  SYL_PHP_COMMUNITY_1,
  "php",
);
const JS_COMMUNITY_1 = buildChapter(
  NARR_COMMUNITY_1,
  SYL_JS_COMMUNITY_1,
  "javascript",
);
const PHP_COMMUNITY_2 = buildChapter(
  NARR_COMMUNITY_2,
  SYL_PHP_COMMUNITY_2,
  "php",
);
const JS_COMMUNITY_2 = buildChapter(
  NARR_COMMUNITY_2,
  SYL_JS_COMMUNITY_2,
  "javascript",
);
const PHP_COMMUNITY_3 = buildChapter(NARR_COMMUNITY_3, SYL_PHP_COMMUNITY_3, "php");
const JS_COMMUNITY_3 = buildChapter(NARR_COMMUNITY_3, SYL_JS_COMMUNITY_3, "javascript");
const PHP_COMMUNITY_4 = buildChapter(NARR_COMMUNITY_4, SYL_PHP_COMMUNITY_4, "php");
const JS_COMMUNITY_4 = buildChapter(NARR_COMMUNITY_4, SYL_JS_COMMUNITY_4, "javascript");

/**
 * Catálogo de aventuras. Las `available` son jugables; las `soon` aparecen en
 * el selector como "próximamente". Se irán activando por fases, empezando por
 * las que ejecutan código en el navegador (JavaScript, TypeScript, SQL).
 */
export const ADVENTURES: Adventure[] = [
  {
    id: "php",
    tech: "PHP",
    icon: "🐘",
    accent: "violet",
    status: "available",
    name: { es: "PHP", en: "PHP" },
    blurb: {
      es: "Programación orientada a objetos en PHP, de las clases a los patrones. La campaña original.",
      en: "Object-oriented programming in PHP, from classes to design patterns. The original campaign.",
    },
    books: [
      {
        book: BOOK_FELLOWSHIP,
        chapters: [
          PHP_COMMUNITY_1,
          PHP_COMMUNITY_2,
          PHP_COMMUNITY_3,
          PHP_COMMUNITY_4,
          CHAPTER_5,
          CHAPTER_6,
          CHAPTER_7,
          CHAPTER_8,
        ],
      },
      {
        book: BOOK_APPENDICES,
        chapters: [
          CHAPTER_SOLID,
          CHAPTER_ALGOS,
          CHAPTER_ALGOS_2,
          CHAPTER_ALGOS_3,
          CHAPTER_LOGICA,
          CHAPTER_CALENTAMIENTO,
        ],
      },
    ],
  },
  {
    id: "python",
    tech: "Python",
    icon: "🐍",
    accent: "sky",
    status: "available",
    name: { es: "Python", en: "Python" },
    blurb: {
      es: "Python desde cero: variables, control de flujo, funciones, colecciones y clases.",
      en: "Python from scratch: variables, control flow, functions, collections and classes.",
    },
    books: [
      { book: BOOK_TWO_TOWERS, chapters: [CHAPTER_GOLLUM, CHAPTER_HELM] },
    ],
  },
  {
    id: "javascript",
    tech: "JavaScript",
    icon: "🟨",
    accent: "amber",
    status: "available",
    name: { es: "JavaScript", en: "JavaScript" },
    blurb: {
      es: "El lenguaje de la web, ejecutándose de verdad en tu navegador. Bilingüe.",
      en: "The language of the web, running for real in your browser. Bilingual.",
    },
    books: [
      {
        book: BOOK_FELLOWSHIP,
        chapters: [JS_COMMUNITY_1, JS_COMMUNITY_2, JS_COMMUNITY_3, JS_COMMUNITY_4],
      },
    ],
  },
  {
    id: "typescript",
    tech: "TypeScript",
    icon: "🔷",
    accent: "sky",
    status: "soon",
    name: { es: "TypeScript", en: "TypeScript" },
    blurb: {
      es: "JavaScript con tipos: seguridad y tooling para proyectos serios.",
      en: "JavaScript with types: safety and tooling for serious projects.",
    },
    books: [],
  },
  {
    id: "sql",
    tech: "SQL",
    icon: "🗄️",
    accent: "emerald",
    status: "soon",
    name: { es: "SQL", en: "SQL" },
    blurb: {
      es: "Consultas a bases de datos, de SELECT a los JOIN más retorcidos.",
      en: "Querying databases, from SELECT to the trickiest JOINs.",
    },
    books: [],
  },
  {
    id: "java",
    tech: "Java",
    icon: "☕",
    accent: "orange",
    status: "soon",
    name: { es: "Java", en: "Java" },
    blurb: {
      es: "El clásico de la industria: tipado fuerte y orientación a objetos.",
      en: "The industry classic: strong typing and object orientation.",
    },
    books: [],
  },
  {
    id: "react",
    tech: "React",
    icon: "⚛️",
    accent: "cyan",
    status: "soon",
    name: { es: "React", en: "React" },
    blurb: {
      es: "Interfaces con componentes, estado y hooks.",
      en: "Interfaces with components, state and hooks.",
    },
    books: [],
  },
  {
    id: "nextjs",
    tech: "Next.js",
    icon: "▲",
    accent: "slate",
    status: "soon",
    name: { es: "Next.js", en: "Next.js" },
    blurb: {
      es: "El framework de React para producción: rutas, renderizado y datos.",
      en: "The React framework for production: routing, rendering and data.",
    },
    books: [],
  },
  {
    id: "aws",
    tech: "AWS",
    icon: "☁️",
    accent: "amber",
    status: "soon",
    name: { es: "AWS", en: "AWS" },
    blurb: {
      es: "La nube de Amazon: cómputo, almacenamiento y despliegue.",
      en: "Amazon's cloud: compute, storage and deployment.",
    },
    books: [],
  },
];

export const DEFAULT_ADVENTURE = "php";

export function getAdventure(id: string): Adventure | undefined {
  return ADVENTURES.find((a) => a.id === id);
}

/** Aventura que contiene un capítulo con ese número (para migrar progreso). */
export function adventureOfChapter(chapterNum: number): Adventure | undefined {
  return ADVENTURES.find((a) =>
    allChapters(a).some((c) => c.chapter === chapterNum),
  );
}
