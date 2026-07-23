/**
 * Tipos del RPG educativo "La Sintaxis Ancestral".
 * El esquema de desafío sigue el brief (sección 4): lore + reto POO + test_cases.
 */

/** Un caso de prueba: se evalúa `$sut->{input}` y se compara con `expected`. */
export interface TestCase {
  /** Expresión aplicada al objeto bajo prueba, p. ej. "susurrarPalabra('Mellon')". */
  input: string;
  /** Valor esperado (se compara vía json_encode en PHP). */
  expected: unknown;
  /** Descripción legible para la UI. */
  description?: string;
  /**
   * Si es true, `input` es una expresión PHP completa que se evalúa tal cual
   * (con `$__sut` disponible) en vez de anteponer `$__sut->`. Necesario para
   * comprobar efectos indirectos, como lo que hace un `__destruct`.
   */
  raw?: boolean;
}

export interface PooChallenge {
  /**
   * Lenguaje del reto. Por defecto "php" (La Comunidad del Anillo); los
   * capítulos de Las Dos Torres usan "python". Determina el evaluador y la
   * sintaxis de starter_code, support_code y test_cases.
   */
  lang?: "php" | "python";
  topic: string;
  instructions: string;
  /** Código inicial que ve y edita el jugador. */
  starter_code: string;
  /**
   * Expresión PHP que construye el objeto bajo prueba, p. ej. "new Hobbit()".
   * Opcional: los retos de FUNCIÓN (algoritmos) no tienen objeto, y sus
   * test_cases usan `raw` para llamar directamente a la función del jugador.
   */
  sut?: string;
  /** Clases/funciones auxiliares inyectadas antes del código del jugador (ocultas). */
  support_code?: string;
  /** Pistas que el jugador puede pedir una a una si se atasca. */
  hints?: string[];
  /**
   * Tiempo objetivo en segundos. Muestra un cronómetro en el reto (práctica
   * cronometrada estilo test técnico). No bloquea: sólo informa.
   */
  timeLimitSec?: number;
  test_cases: TestCase[];
}

/** Una sección de un Pergamino: teoría, opcionalmente con código de ejemplo. */
export interface ScrollSection {
  heading?: string;
  body: string;
  code?: string;
}

/** Contenido didáctico de un Pergamino (se lee antes de los acertijos). */
export interface ScrollContent {
  /** Concepto que enseña, p. ej. "Single Responsibility". */
  topic: string;
  sections: ScrollSection[];
  /** Frase para recordar / usar en una entrevista. */
  keyTakeaway?: string;
}

interface BaseNode {
  node_id: string;
  title: string;
  lore_intro: string;
  /** Posición en tiles dentro del mapa del capítulo. */
  position: { x: number; y: number };
  /** id del preset/sprite LPC asociado (opcional). */
  spriteId?: string;
}

/** Nodo de acertijo: hay que escribir PHP y pasar los tests. */
export interface ChallengeNode extends BaseNode {
  kind?: "challenge";
  poo_challenge: PooChallenge;
}

/** Una pregunta de combate: corta, de opción múltiple, sobre el tema del capítulo. */
export interface CombatQuestion {
  question: string;
  options: string[];
  correct: number;
  /** Por qué, para que fallar también enseñe. */
  explanation: string;
}

/**
 * Un enemigo de combate por turnos. La vida se mide en ACIERTOS: cada respuesta
 * correcta le quita un punto. Cada fallo te quita `damage` a ti.
 */
export interface Enemy {
  name: string;
  /** id de preset LPC (ver data/presets.ts). */
  spriteId: string;
  /** Aciertos necesarios para derrotarlo. */
  hp: number;
  /** Daño que te hace cada fallo. */
  damage: number;
  /** Experiencia que da al vencerlo. */
  xp: number;
  questions: CombatQuestion[];
  /**
   * Jefe de capítulo. Sólo se puede desafiar con todos los retos de código
   * resueltos, y derrotarlo desbloquea el capítulo siguiente.
   */
  boss?: boolean;
  /** Frase que suelta al empezar el combate. */
  taunt?: string;
  /** Recompensa por derrotarlo (normalmente sólo la dan los jefes). */
  reward?: Reward;
}

/** Lo que se gana al derrotar a un jefe. */
export interface Reward {
  /** id de preset que pasa a ser jugable (ver data/presets.ts). */
  hero: string;
  /** Nombre visible del personaje desbloqueado. */
  name: string;
  /** Por qué se une y qué aporta, para la pantalla de recompensa. */
  blurb: string;
}

/** Nodo de combate: se vence respondiendo bien antes de quedarte sin vida. */
export interface BattleNode extends BaseNode {
  kind: "battle";
  enemy: Enemy;
}

/** Nodo de Pergamino: enseña el concepto; se completa al leerlo. */
export interface ScrollNode extends BaseNode {
  kind: "scroll";
  scroll: ScrollContent;
}

/** Una pregunta de opción múltiple (test de lógica/razonamiento). */
export interface QuizQuestion {
  question: string;
  options: string[];
  /** Índice de la opción correcta dentro de `options`. */
  correct: number;
  /** Por qué es esa: se muestra al responder. */
  explanation: string;
}

export interface QuizContent {
  topic: string;
  /** Tiempo objetivo para la tanda completa (informativo). */
  timeLimitSec?: number;
  questions: QuizQuestion[];
}

/** Nodo de acertijo lógico: se completa acertando todas las preguntas. */
export interface QuizNode extends BaseNode {
  kind: "quiz";
  quiz: QuizContent;
}

/** Un nodo interactivo en el mapa (pergamino, acertijo, enigma, enemigo). */
export type MapNode = ChallengeNode | ScrollNode | QuizNode | BattleNode;

/** Suelos disponibles: cada capítulo elige su bioma. */
export type GroundType =
  | "grass" // La Comarca
  | "grassDark" // Bosque Viejo
  | "dry" // caminos y tierras secas (Bree)
  | "stone" // salas de Khazad-dûm
  | "darkstone" // cavernas profundas
  | "lava" // el Daño de Durin
  | "snow" // el Paso de Caradhras
  | "ice" // aguas heladas
  | "gold"; // los bosques de Lothlórien

export type DecorType = "tree" | "pine" | "rock" | "house" | "mallorn";

/** Escenario decorativo del capítulo (tiles LPC de terreno). */
export interface Scenery {
  /** Suelo base del capítulo. Por defecto "grass". */
  ground?: GroundType;
  /** Filas (y en tiles) que son camino. */
  pathRows?: number[];
  /** Textura del camino. Por defecto "path" (tierra). */
  pathGround?: GroundType | "path";
  /** Charca/río/lago de lava rectangular (en tiles). */
  pond?: { x: number; y: number; w: number; h: number };
  /** Textura de la charca. Por defecto "water". */
  pondGround?: GroundType | "water";
  /** PNJ ambientales: dan vida al mapa, no se puede interactuar con ellos. */
  npcs?: {
    /** id de preset LPC (ver data/presets.ts). */
    spriteId: string;
    x: number;
    y: number;
    label?: string;
  }[];
  /** Frases que suelta un compañero al pasar por un punto del mapa. */
  dialogues?: {
    x: number;
    y: number;
    /** id de preset del que habla (debe ir en `companions`). */
    speaker: string;
    /** Nombre visible. */
    name: string;
    text: string;
  }[];
  /** Objetos decorativos con ordenamiento por profundidad. */
  decor?: {
    type: DecorType;
    x: number;
    y: number;
    /** Rótulo opcional sobre el objeto (p. ej. "Bolsón Cerrado"). */
    label?: string;
  }[];
}

export interface Chapter {
  chapter: number;
  title: string;
  lore: string;
  /** Tamaño del mapa en tiles [ancho, alto]. */
  mapSize: { cols: number; rows: number };
  /** Posición inicial del jugador (Frodo) en tiles. */
  spawn: { x: number; y: number };
  nodes: MapNode[];
  scenery?: Scenery;
  /**
   * Compañeros que siguen a Frodo en este capítulo, en orden de la fila
   * (ids de preset). Caminan sobre el rastro del jugador.
   */
  companions?: string[];
  /**
   * Experiencia que hay que ganar EN ESTE CAPÍTULO (venciendo a sus enemigos)
   * antes de poder abrir sus retos de código. Sin este campo, los retos están
   * abiertos desde el principio (así siguen los libros de práctica).
   */
  xpParaRetos?: number;
  /**
   * Capítulo cuyo jefe hay que derrotar para desbloquear éste. Sin este campo,
   * el capítulo está siempre disponible.
   */
  unlockedBy?: number;
}

/** Resultado de un test individual tras ejecutar el PHP del jugador. */
export interface TestResult {
  input: string;
  description?: string;
  expected: string; // json
  got: string; // json o "<sin salida>"
  pass: boolean;
  /** Avisos de PHP emitidos durante este test (propiedad indefinida, etc.). */
  warning?: string;
}

/** Resultado global de una evaluación. */
export interface EvalResult {
  ok: boolean; // todos los tests pasaron
  results: TestResult[];
  /** Error de PHP (parse/fatal) si lo hubo. */
  phpError?: string;
  /** Salida cruda del jugador (echo/print fuera de los marcadores). */
  stdout?: string;
}
