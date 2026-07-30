import type { Adventure } from "@/lib/game/adventure";
import { allChapters } from "@/lib/game/adventure";
import {
  BOOK_FELLOWSHIP,
  BOOK_TWO_TOWERS,
  BOOK_APPENDICES,
} from "@/lib/game/book";
import {
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
  NARR_COMMUNITY_5,
  NARR_COMMUNITY_6,
  NARR_COMMUNITY_7,
  NARR_COMMUNITY_8,
} from "./narrative/community";
import {
  SYL_PHP_COMMUNITY_1,
  SYL_PHP_COMMUNITY_2,
  SYL_PHP_COMMUNITY_3,
  SYL_PHP_COMMUNITY_4,
  SYL_PHP_COMMUNITY_5,
  SYL_PHP_COMMUNITY_6,
  SYL_PHP_COMMUNITY_7,
  SYL_PHP_COMMUNITY_8,
} from "./syllabus/community-php";
import {
  SYL_JS_COMMUNITY_1,
  SYL_JS_COMMUNITY_2,
  SYL_JS_COMMUNITY_3,
  SYL_JS_COMMUNITY_4,
  SYL_JS_COMMUNITY_5,
  SYL_JS_COMMUNITY_6,
  SYL_JS_COMMUNITY_7,
  SYL_JS_COMMUNITY_8,
} from "./syllabus/community-js";
import {
  SYL_TS_COMMUNITY_1,
  SYL_TS_COMMUNITY_2,
  SYL_TS_COMMUNITY_3,
  SYL_TS_COMMUNITY_4,
  SYL_TS_COMMUNITY_5,
  SYL_TS_COMMUNITY_6,
  SYL_TS_COMMUNITY_7,
  SYL_TS_COMMUNITY_8,
} from "./syllabus/community-ts";
import {
  SYL_GO_COMMUNITY_1,
  SYL_GO_COMMUNITY_2,
  SYL_GO_COMMUNITY_3,
  SYL_GO_COMMUNITY_4,
  SYL_GO_COMMUNITY_5,
  SYL_GO_COMMUNITY_6,
  SYL_GO_COMMUNITY_7,
  SYL_GO_COMMUNITY_8,
} from "./syllabus/community-go";
import { SYL_REACT_COMMUNITY_1 } from "./syllabus/community-react";

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
const PHP_COMMUNITY_5 = buildChapter(NARR_COMMUNITY_5, SYL_PHP_COMMUNITY_5, "php");
const JS_COMMUNITY_5 = buildChapter(NARR_COMMUNITY_5, SYL_JS_COMMUNITY_5, "javascript");
const PHP_COMMUNITY_6 = buildChapter(NARR_COMMUNITY_6, SYL_PHP_COMMUNITY_6, "php");
const JS_COMMUNITY_6 = buildChapter(NARR_COMMUNITY_6, SYL_JS_COMMUNITY_6, "javascript");
const PHP_COMMUNITY_7 = buildChapter(NARR_COMMUNITY_7, SYL_PHP_COMMUNITY_7, "php");
const JS_COMMUNITY_7 = buildChapter(NARR_COMMUNITY_7, SYL_JS_COMMUNITY_7, "javascript");
const PHP_COMMUNITY_8 = buildChapter(NARR_COMMUNITY_8, SYL_PHP_COMMUNITY_8, "php");
const JS_COMMUNITY_8 = buildChapter(NARR_COMMUNITY_8, SYL_JS_COMMUNITY_8, "javascript");
const TS_COMMUNITY_1 = buildChapter(NARR_COMMUNITY_1, SYL_TS_COMMUNITY_1, "typescript");
const TS_COMMUNITY_2 = buildChapter(NARR_COMMUNITY_2, SYL_TS_COMMUNITY_2, "typescript");
const TS_COMMUNITY_3 = buildChapter(NARR_COMMUNITY_3, SYL_TS_COMMUNITY_3, "typescript");
const TS_COMMUNITY_4 = buildChapter(NARR_COMMUNITY_4, SYL_TS_COMMUNITY_4, "typescript");
const TS_COMMUNITY_5 = buildChapter(NARR_COMMUNITY_5, SYL_TS_COMMUNITY_5, "typescript");
const TS_COMMUNITY_6 = buildChapter(NARR_COMMUNITY_6, SYL_TS_COMMUNITY_6, "typescript");
const TS_COMMUNITY_7 = buildChapter(NARR_COMMUNITY_7, SYL_TS_COMMUNITY_7, "typescript");
const TS_COMMUNITY_8 = buildChapter(NARR_COMMUNITY_8, SYL_TS_COMMUNITY_8, "typescript");
const GO_COMMUNITY_1 = buildChapter(NARR_COMMUNITY_1, SYL_GO_COMMUNITY_1, "go");
const GO_COMMUNITY_2 = buildChapter(NARR_COMMUNITY_2, SYL_GO_COMMUNITY_2, "go");
const GO_COMMUNITY_3 = buildChapter(NARR_COMMUNITY_3, SYL_GO_COMMUNITY_3, "go");
const GO_COMMUNITY_4 = buildChapter(NARR_COMMUNITY_4, SYL_GO_COMMUNITY_4, "go");
const GO_COMMUNITY_5 = buildChapter(NARR_COMMUNITY_5, SYL_GO_COMMUNITY_5, "go");
const GO_COMMUNITY_6 = buildChapter(NARR_COMMUNITY_6, SYL_GO_COMMUNITY_6, "go");
const GO_COMMUNITY_7 = buildChapter(NARR_COMMUNITY_7, SYL_GO_COMMUNITY_7, "go");
const GO_COMMUNITY_8 = buildChapter(NARR_COMMUNITY_8, SYL_GO_COMMUNITY_8, "go");
const REACT_COMMUNITY_1 = buildChapter(
  NARR_COMMUNITY_1,
  SYL_REACT_COMMUNITY_1,
  "react",
);

/**
 * Catálogo de aventuras. Las `available` son jugables; las `soon` aparecen en
 * el selector como "próximamente". Se irán activando por fases, empezando por
 * las que ejecutan código en el navegador (JavaScript, TypeScript, SQL).
 */
export const ADVENTURES: Adventure[] = [
  {
    id: "php",
    category: "languages",
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
          PHP_COMMUNITY_5,
          PHP_COMMUNITY_6,
          PHP_COMMUNITY_7,
          PHP_COMMUNITY_8,
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
    category: "languages",
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
    category: "languages",
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
        chapters: [
          JS_COMMUNITY_1,
          JS_COMMUNITY_2,
          JS_COMMUNITY_3,
          JS_COMMUNITY_4,
          JS_COMMUNITY_5,
          JS_COMMUNITY_6,
          JS_COMMUNITY_7,
          JS_COMMUNITY_8,
        ],
      },
    ],
  },
  {
    id: "typescript",
    category: "languages",
    tech: "TypeScript",
    icon: "🔷",
    accent: "sky",
    status: "available",
    name: { es: "TypeScript", en: "TypeScript" },
    blurb: {
      es: "JavaScript con tipos: seguridad y tooling para proyectos serios. Se transpila y ejecuta en tu navegador. Bilingüe.",
      en: "JavaScript with types: safety and tooling for serious projects. Transpiled and run in your browser. Bilingual.",
    },
    books: [
      {
        book: BOOK_FELLOWSHIP,
        chapters: [
          TS_COMMUNITY_1,
          TS_COMMUNITY_2,
          TS_COMMUNITY_3,
          TS_COMMUNITY_4,
          TS_COMMUNITY_5,
          TS_COMMUNITY_6,
          TS_COMMUNITY_7,
          TS_COMMUNITY_8,
        ],
      },
    ],
  },
  {
    id: "sql",
    category: "languages",
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
    category: "languages",
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
    category: "frameworks",
    tech: "React",
    icon: "⚛️",
    accent: "cyan",
    status: "available",
    name: { es: "React", en: "React" },
    blurb: {
      es: "Interfaces con componentes, props y JSX, renderizadas de verdad en tu navegador. Bilingüe.",
      en: "Interfaces with components, props and JSX, truly rendered in your browser. Bilingual.",
    },
    books: [
      { book: BOOK_FELLOWSHIP, chapters: [REACT_COMMUNITY_1] },
    ],
  },
  {
    id: "nextjs",
    category: "frameworks",
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
    id: "go",
    category: "languages",
    tech: "Go",
    icon: "🐹",
    accent: "cyan",
    status: "available",
    name: { es: "Go", en: "Go" },
    blurb: {
      es: "El lenguaje de Google: simple y compilado. Interpretado de verdad en tu navegador (Yaegi → WASM). Bilingüe.",
      en: "Google's language: simple and compiled. Truly interpreted in your browser (Yaegi → WASM). Bilingual.",
    },
    books: [
      {
        book: BOOK_FELLOWSHIP,
        chapters: [
          GO_COMMUNITY_1,
          GO_COMMUNITY_2,
          GO_COMMUNITY_3,
          GO_COMMUNITY_4,
          GO_COMMUNITY_5,
          GO_COMMUNITY_6,
          GO_COMMUNITY_7,
          GO_COMMUNITY_8,
        ],
      },
    ],
  },
  {
    id: "aws",
    category: "cloud",
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
  {
    id: "cloud",
    category: "cloud",
    tech: "Cloud",
    icon: "🌩️",
    accent: "sky",
    status: "soon",
    name: { es: "Fundamentos Cloud", en: "Cloud Fundamentals" },
    blurb: {
      es: "Conceptos de nube agnósticos: IaaS/PaaS/SaaS, regiones, escalado y coste.",
      en: "Vendor-agnostic cloud concepts: IaaS/PaaS/SaaS, regions, scaling and cost.",
    },
    books: [],
  },
  {
    id: "docker",
    category: "devops",
    tech: "Docker",
    icon: "🐳",
    accent: "sky",
    status: "soon",
    name: { es: "Docker", en: "Docker" },
    blurb: {
      es: "Contenedores desde cero: imágenes, Dockerfile, volúmenes y redes.",
      en: "Containers from scratch: images, Dockerfile, volumes and networks.",
    },
    books: [],
  },
  {
    id: "cicd",
    category: "devops",
    tech: "CI/CD",
    icon: "🔁",
    accent: "emerald",
    status: "soon",
    name: { es: "CI/CD", en: "CI/CD" },
    blurb: {
      es: "Integración y entrega continuas: pipelines, pruebas automáticas y despliegue.",
      en: "Continuous integration and delivery: pipelines, automated tests and deployment.",
    },
    books: [],
  },
  {
    id: "architecture",
    category: "architecture",
    tech: "Arquitectura",
    icon: "🏛️",
    accent: "indigo",
    status: "soon",
    name: { es: "Arquitectura de Software", en: "Software Architecture" },
    blurb: {
      es: "Patrones y decisiones: capas, hexagonal, microservicios, DDD y trade-offs.",
      en: "Patterns and decisions: layers, hexagonal, microservices, DDD and trade-offs.",
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
