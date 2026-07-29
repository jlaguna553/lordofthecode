import type { Adventure } from "@/lib/game/adventure";
import {
  CHAPTER_1,
  CHAPTER_2,
  CHAPTER_3,
  CHAPTER_4,
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
import { CHAPTER_JS_1 } from "./js-chapters";

/** Capítulos de la aventura de PHP (La Comunidad del Anillo + práctica). */
const PHP_CHAPTERS = [
  CHAPTER_1,
  CHAPTER_2,
  CHAPTER_3,
  CHAPTER_4,
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
];

/** Capítulos de la aventura de Python (Las Dos Torres). */
const PYTHON_CHAPTERS = [CHAPTER_GOLLUM, CHAPTER_HELM];

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
    name: {
      es: "La Comunidad del Anillo — PHP",
      en: "The Fellowship of the Ring — PHP",
    },
    blurb: {
      es: "Programación orientada a objetos en PHP, de las clases a los patrones. La campaña original.",
      en: "Object-oriented programming in PHP, from classes to design patterns. The original campaign.",
    },
    chapters: PHP_CHAPTERS,
  },
  {
    id: "python",
    tech: "Python",
    icon: "🐍",
    accent: "sky",
    status: "available",
    name: {
      es: "Las Dos Torres — Python",
      en: "The Two Towers — Python",
    },
    blurb: {
      es: "Python desde cero: variables, control de flujo, funciones, colecciones y clases.",
      en: "Python from scratch: variables, control flow, functions, collections and classes.",
    },
    chapters: PYTHON_CHAPTERS,
  },
  {
    id: "javascript",
    tech: "JavaScript",
    icon: "🟨",
    accent: "amber",
    status: "available",
    name: {
      es: "Las Tierras del Navegador — JavaScript",
      en: "The Lands of the Browser — JavaScript",
    },
    blurb: {
      es: "El lenguaje de la web, ejecutándose de verdad en tu navegador. Bilingüe.",
      en: "The language of the web, running for real in your browser. Bilingual.",
    },
    chapters: [CHAPTER_JS_1],
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
    chapters: [],
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
    chapters: [],
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
    chapters: [],
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
    chapters: [],
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
    chapters: [],
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
    chapters: [],
  },
];

export const DEFAULT_ADVENTURE = "php";

export function getAdventure(id: string): Adventure | undefined {
  return ADVENTURES.find((a) => a.id === id);
}

/** Aventura que contiene un capítulo con ese número (para migrar progreso). */
export function adventureOfChapter(chapterNum: number): Adventure | undefined {
  return ADVENTURES.find((a) =>
    a.chapters.some((c) => c.chapter === chapterNum),
  );
}
