import type { Adventure } from "@/lib/game/adventure";
import { allChapters } from "@/lib/game/adventure";
import { BOOK_FELLOWSHIP, BOOK_APPENDICES } from "@/lib/game/book";
import {
  CHAPTER_SOLID,
  CHAPTER_ALGOS,
  CHAPTER_ALGOS_2,
  CHAPTER_ALGOS_3,
  CHAPTER_LOGICA,
  CHAPTER_CALENTAMIENTO,
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
import {
  SYL_REACT_COMMUNITY_1,
  SYL_REACT_COMMUNITY_2,
  SYL_REACT_COMMUNITY_3,
  SYL_REACT_COMMUNITY_4,
  SYL_REACT_COMMUNITY_5,
  SYL_REACT_COMMUNITY_6,
  SYL_REACT_COMMUNITY_7,
  SYL_REACT_COMMUNITY_8,
} from "./syllabus/community-react";
import {
  SYL_PY_COMMUNITY_1,
  SYL_PY_COMMUNITY_2,
  SYL_PY_COMMUNITY_3,
  SYL_PY_COMMUNITY_4,
  SYL_PY_COMMUNITY_5,
  SYL_PY_COMMUNITY_6,
  SYL_PY_COMMUNITY_7,
  SYL_PY_COMMUNITY_8,
} from "./syllabus/community-python";
import {
  SYL_DATA_1,
  SYL_DATA_2,
  SYL_DATA_3,
  SYL_DATA_4,
  SYL_DATA_5,
  SYL_DATA_6,
  SYL_DATA_7,
  SYL_DATA_8,
} from "./syllabus/data-python";
import {
  SYL_MPL_1,
  SYL_MPL_2,
  SYL_MPL_3,
  SYL_MPL_4,
  SYL_MPL_5,
  SYL_MPL_6,
  SYL_MPL_7,
  SYL_MPL_8,
} from "./syllabus/matplotlib-python";

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
const PY_COMMUNITY_1 = buildChapter(NARR_COMMUNITY_1, SYL_PY_COMMUNITY_1, "python");
const PY_COMMUNITY_2 = buildChapter(NARR_COMMUNITY_2, SYL_PY_COMMUNITY_2, "python");
const PY_COMMUNITY_3 = buildChapter(NARR_COMMUNITY_3, SYL_PY_COMMUNITY_3, "python");
const PY_COMMUNITY_4 = buildChapter(NARR_COMMUNITY_4, SYL_PY_COMMUNITY_4, "python");
const PY_COMMUNITY_5 = buildChapter(NARR_COMMUNITY_5, SYL_PY_COMMUNITY_5, "python");
const PY_COMMUNITY_6 = buildChapter(NARR_COMMUNITY_6, SYL_PY_COMMUNITY_6, "python");
const PY_COMMUNITY_7 = buildChapter(NARR_COMMUNITY_7, SYL_PY_COMMUNITY_7, "python");
const PY_COMMUNITY_8 = buildChapter(NARR_COMMUNITY_8, SYL_PY_COMMUNITY_8, "python");
const DATA_1 = buildChapter(NARR_COMMUNITY_1, SYL_DATA_1, "python");
const DATA_2 = buildChapter(NARR_COMMUNITY_2, SYL_DATA_2, "python");
const DATA_3 = buildChapter(NARR_COMMUNITY_3, SYL_DATA_3, "python");
const DATA_4 = buildChapter(NARR_COMMUNITY_4, SYL_DATA_4, "python");
const DATA_5 = buildChapter(NARR_COMMUNITY_5, SYL_DATA_5, "python");
const DATA_6 = buildChapter(NARR_COMMUNITY_6, SYL_DATA_6, "python");
const DATA_7 = buildChapter(NARR_COMMUNITY_7, SYL_DATA_7, "python");
const DATA_8 = buildChapter(NARR_COMMUNITY_8, SYL_DATA_8, "python");
const MPL_1 = buildChapter(NARR_COMMUNITY_1, SYL_MPL_1, "python");
const MPL_2 = buildChapter(NARR_COMMUNITY_2, SYL_MPL_2, "python");
const MPL_3 = buildChapter(NARR_COMMUNITY_3, SYL_MPL_3, "python");
const MPL_4 = buildChapter(NARR_COMMUNITY_4, SYL_MPL_4, "python");
const MPL_5 = buildChapter(NARR_COMMUNITY_5, SYL_MPL_5, "python");
const MPL_6 = buildChapter(NARR_COMMUNITY_6, SYL_MPL_6, "python");
const MPL_7 = buildChapter(NARR_COMMUNITY_7, SYL_MPL_7, "python");
const MPL_8 = buildChapter(NARR_COMMUNITY_8, SYL_MPL_8, "python");
const REACT_COMMUNITY_1 = buildChapter(
  NARR_COMMUNITY_1,
  SYL_REACT_COMMUNITY_1,
  "react",
);
const REACT_COMMUNITY_2 = buildChapter(
  NARR_COMMUNITY_2,
  SYL_REACT_COMMUNITY_2,
  "react",
);
const REACT_COMMUNITY_3 = buildChapter(
  NARR_COMMUNITY_3,
  SYL_REACT_COMMUNITY_3,
  "react",
);
const REACT_COMMUNITY_4 = buildChapter(
  NARR_COMMUNITY_4,
  SYL_REACT_COMMUNITY_4,
  "react",
);
const REACT_COMMUNITY_5 = buildChapter(NARR_COMMUNITY_5, SYL_REACT_COMMUNITY_5, "react");
const REACT_COMMUNITY_6 = buildChapter(NARR_COMMUNITY_6, SYL_REACT_COMMUNITY_6, "react");
const REACT_COMMUNITY_7 = buildChapter(NARR_COMMUNITY_7, SYL_REACT_COMMUNITY_7, "react");
const REACT_COMMUNITY_8 = buildChapter(NARR_COMMUNITY_8, SYL_REACT_COMMUNITY_8, "react");

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
      es: "Python desde cero: variables, control de flujo, funciones, colecciones, clases, herencia y excepciones.",
      en: "Python from scratch: variables, control flow, functions, collections, classes, inheritance and exceptions.",
    },
    books: [
      {
        book: BOOK_FELLOWSHIP,
        chapters: [
          PY_COMMUNITY_1,
          PY_COMMUNITY_2,
          PY_COMMUNITY_3,
          PY_COMMUNITY_4,
          PY_COMMUNITY_5,
          PY_COMMUNITY_6,
          PY_COMMUNITY_7,
          PY_COMMUNITY_8,
        ],
      },
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
      {
        book: BOOK_FELLOWSHIP,
        chapters: [
          REACT_COMMUNITY_1,
          REACT_COMMUNITY_2,
          REACT_COMMUNITY_3,
          REACT_COMMUNITY_4,
          REACT_COMMUNITY_5,
          REACT_COMMUNITY_6,
          REACT_COMMUNITY_7,
          REACT_COMMUNITY_8,
        ],
      },
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
  {
    id: "design-patterns",
    category: "architecture",
    tech: "Patrones",
    icon: "♟️",
    accent: "rose",
    status: "soon",
    name: { es: "Patrones de Diseño", en: "Design Patterns" },
    blurb: {
      es: "Los patrones de la Banda de los Cuatro: Singleton, Factory, Strategy, Observer, Decorator y más.",
      en: "The Gang of Four patterns: Singleton, Factory, Strategy, Observer, Decorator and more.",
    },
    books: [],
  },
  {
    id: "react-native",
    category: "frameworks",
    tech: "React Native",
    icon: "📱",
    accent: "cyan",
    status: "soon",
    name: { es: "React Native", en: "React Native" },
    blurb: {
      es: "Apps móviles nativas con React: componentes, navegación y estilos.",
      en: "Native mobile apps with React: components, navigation and styles.",
    },
    books: [],
  },
  {
    id: "symfony",
    category: "frameworks",
    tech: "Symfony",
    icon: "🎼",
    accent: "slate",
    status: "soon",
    name: { es: "Symfony", en: "Symfony" },
    blurb: {
      es: "El framework PHP para empresas: servicios, rutas y Doctrine.",
      en: "The enterprise PHP framework: services, routing and Doctrine.",
    },
    books: [],
  },
  {
    id: "laravel",
    category: "frameworks",
    tech: "Laravel",
    icon: "🔺",
    accent: "rose",
    status: "soon",
    name: { es: "Laravel", en: "Laravel" },
    blurb: {
      es: "PHP elegante: Eloquent, Blade, rutas y colas.",
      en: "Elegant PHP: Eloquent, Blade, routing and queues.",
    },
    books: [],
  },
  {
    id: "django",
    category: "frameworks",
    tech: "Django",
    icon: "🎸",
    accent: "emerald",
    status: "soon",
    name: { es: "Django", en: "Django" },
    blurb: {
      es: "El framework Python «con baterías incluidas»: ORM, vistas y admin.",
      en: "Python's \"batteries-included\" framework: ORM, views and admin.",
    },
    books: [],
  },
  {
    id: "flask",
    category: "frameworks",
    tech: "Flask",
    icon: "🧪",
    accent: "sky",
    status: "soon",
    name: { es: "Flask", en: "Flask" },
    blurb: {
      es: "Microframework Python: rutas, plantillas y APIs ligeras.",
      en: "Python microframework: routing, templates and lightweight APIs.",
    },
    books: [],
  },
  {
    id: "kubernetes",
    category: "devops",
    tech: "Kubernetes",
    icon: "☸️",
    accent: "indigo",
    status: "soon",
    name: { es: "Kubernetes", en: "Kubernetes" },
    blurb: {
      es: "Orquestación de contenedores: pods, deployments, services e ingress.",
      en: "Container orchestration: pods, deployments, services and ingress.",
    },
    books: [],
  },
  {
    id: "data-analyst-python",
    category: "data",
    tech: "Data Analyst",
    icon: "🐼",
    accent: "emerald",
    status: "available",
    name: {
      es: "Analista de Datos con Python",
      en: "Data Analyst with Python",
    },
    blurb: {
      es: "Análisis de datos con Python: NumPy, pandas, filtrado, agrupación, limpieza y análisis.",
      en: "Data analysis with Python: NumPy, pandas, filtering, grouping, cleaning and analysis.",
    },
    books: [
      {
        book: BOOK_FELLOWSHIP,
        chapters: [
          DATA_1,
          DATA_2,
          DATA_3,
          DATA_4,
          DATA_5,
          DATA_6,
          DATA_7,
          DATA_8,
        ],
      },
    ],
  },
  {
    id: "matplotlib-python",
    category: "data",
    tech: "Matplotlib",
    icon: "📈",
    accent: "cyan",
    status: "available",
    name: {
      es: "Visualización con Matplotlib",
      en: "Visualization with Matplotlib",
    },
    blurb: {
      es: "Visualización de datos con Python: figuras y ejes, líneas, barras, estilo y anotaciones con Matplotlib.",
      en: "Data visualization with Python: figures and axes, lines, bars, styling and annotations with Matplotlib.",
    },
    books: [
      {
        book: BOOK_FELLOWSHIP,
        chapters: [MPL_1, MPL_2, MPL_3, MPL_4, MPL_5, MPL_6, MPL_7, MPL_8],
      },
    ],
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
