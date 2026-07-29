import type { Syllabus } from "@/lib/game/narrative";

/**
 * Temario de TypeScript para el Libro I. Reviste la MISMA narrativa compartida
 * de la Comunidad (Sombras en la Comarca) con los fundamentos de TypeScript:
 * anotaciones de tipo, primitivos, inferencia y funciones tipadas. El código
 * del jugador se TRANSPILA a JS y se ejecuta de verdad. Bilingüe ES/EN.
 */

const P = (es: string, en: string) => ({ es, en });

/** Preguntas de combate reutilizables sobre tipos en TypeScript. */
const Q_ANNOTATION = {
  question: P(
    "¿Cómo se anota el tipo de una variable en TypeScript?",
    "How do you annotate a variable's type in TypeScript?",
  ),
  options: [
    P("let edad: number = 50", "let edad: number = 50"),
    P("let number edad = 50", "let number edad = 50"),
    P("let edad = number(50)", "let edad = number(50)"),
    P("let edad as number = 50", "let edad as number = 50"),
  ],
  correct: 0,
  explanation: P(
    "El tipo va DESPUÉS del nombre, tras dos puntos: `nombre: tipo`. Es la sintaxis base de TypeScript, y funciona igual en variables, parámetros y valores de retorno.",
    "The type goes AFTER the name, following a colon: `name: type`. It's the base syntax of TypeScript, and works the same for variables, parameters and return values.",
  ),
};
const Q_PRIMITIVES = {
  question: P(
    "¿Cuáles son los tres tipos primitivos más habituales?",
    "What are the three most common primitive types?",
  ),
  options: [
    P("string, number, boolean", "string, number, boolean"),
    P("String, Int, Bool", "String, Int, Bool"),
    P("text, int, float", "text, int, float"),
    P("str, num, bit", "str, num, bit"),
  ],
  correct: 0,
  explanation: P(
    "En minúscula: `string`, `number` (no hay int/float aparte) y `boolean`. Los que empiezan por mayúscula (`String`, `Number`) son los objetos envoltorio de JS y casi nunca se usan como tipo.",
    "Lowercase: `string`, `number` (no separate int/float) and `boolean`. The capitalized ones (`String`, `Number`) are JS's wrapper objects and are almost never used as a type.",
  ),
};
const Q_INFERENCE = {
  question: P(
    "`const nombre = 'Frodo'`. ¿Qué tipo infiere TypeScript?",
    "`const nombre = 'Frodo'`. What type does TypeScript infer?",
  ),
  options: [
    P("string (lo deduce del valor, no hace falta anotarlo)", "string (it's inferred from the value, no annotation needed)"),
    P("any", "any"),
    P("object", "object"),
    P("Ninguno: hay que anotarlo siempre", "None: you must always annotate it"),
  ],
  correct: 0,
  explanation: P(
    "TypeScript INFIERE el tipo del valor inicial: aquí `string`. No hace falta anotar lo obvio; se anota sobre todo en parámetros de función y en APIs públicas.",
    "TypeScript INFERS the type from the initial value: here `string`. You don't need to annotate the obvious; you mainly annotate function parameters and public APIs.",
  ),
};
const Q_FUNC_TYPE = {
  question: P(
    "¿Cómo se tipa una función que recibe un `string` y devuelve un `string`?",
    "How do you type a function that takes a `string` and returns a `string`?",
  ),
  options: [
    P("function saludar(n: string): string { ... }", "function saludar(n: string): string { ... }"),
    P("function saludar(string n): string { ... }", "function saludar(string n): string { ... }"),
    P("function string saludar(n) { ... }", "function string saludar(n) { ... }"),
    P("function saludar(n): { ... }: string", "function saludar(n): { ... }: string"),
  ],
  correct: 0,
  explanation: P(
    "Cada parámetro lleva su tipo (`n: string`) y el tipo de retorno va tras los paréntesis, antes de las llaves (`): string`). Anotar el retorno hace que el compilador te avise si devuelves algo que no cuadra.",
    "Each parameter carries its type (`n: string`) and the return type goes after the parentheses, before the braces (`): string`). Annotating the return makes the compiler warn you if you return something that doesn't fit.",
  ),
};
const Q_UNION = {
  question: P(
    "¿Qué significa el tipo `string | number`?",
    "What does the type `string | number` mean?",
  ),
  options: [
    P("El valor puede ser un string O un number", "The value can be a string OR a number"),
    P("Un string y un number a la vez", "A string and a number at the same time"),
    P("Un array de strings y numbers", "An array of strings and numbers"),
    P("Un error de sintaxis", "A syntax error"),
  ],
  correct: 0,
  explanation: P(
    "La barra `|` forma un tipo UNIÓN: el valor es uno de esos tipos. Antes de usarlo como uno concreto, normalmente compruebas cuál es (`typeof x === 'string'`) — eso se llama reducción de tipo (narrowing).",
    "The bar `|` forms a UNION type: the value is one of those types. Before using it as a specific one, you usually check which it is (`typeof x === 'string'`) — that's called narrowing.",
  ),
};
const Q_WHY_TS = {
  question: P(
    "¿Cuál es la principal ventaja de TypeScript sobre JavaScript?",
    "What's the main advantage of TypeScript over JavaScript?",
  ),
  options: [
    P("Detecta errores de tipo ANTES de ejecutar, al compilar", "It catches type errors BEFORE running, at compile time"),
    P("Se ejecuta más rápido en el navegador", "It runs faster in the browser"),
    P("Ocupa menos memoria", "It uses less memory"),
    P("No necesita transpilarse", "It doesn't need transpiling"),
  ],
  correct: 0,
  explanation: P(
    "Los tipos se comprueban al compilar y desaparecen al transpilar: el navegador ejecuta JS puro, sin coste ni velocidad extra. La ganancia es cazar errores (un typo, un argumento cambiado) en el editor, no en producción.",
    "Types are checked at compile time and vanish on transpile: the browser runs plain JS, with no extra cost or speed. The win is catching errors (a typo, a swapped argument) in the editor, not in production.",
  ),
};
const Q_ANY = {
  question: P(
    "¿Qué hace el tipo `any`?",
    "What does the `any` type do?",
  ),
  options: [
    P("Desactiva la comprobación de tipos para ese valor", "It turns off type checking for that value"),
    P("Acepta sólo números o textos", "It accepts only numbers or text"),
    P("Es lo mismo que unknown", "It's the same as unknown"),
    P("Convierte el valor a string", "It converts the value to a string"),
  ],
  correct: 0,
  explanation: P(
    "`any` es la vía de escape: con él TypeScript deja de comprobar y vuelves a JS sin red. Úsalo lo mínimo — cada `any` es un agujero por donde se cuelan los errores que TS debía atrapar.",
    "`any` is the escape hatch: with it TypeScript stops checking and you're back to JS with no safety net. Use it as little as possible — each `any` is a hole where the errors TS should catch slip through.",
  ),
};

/** Capítulo 1 · TypeScript desde cero: tipos, anotaciones e inferencia. */
export const SYL_TS_COMMUNITY_1: Syllabus = {
  c1_espia: { kind: "battle", questions: [Q_ANNOTATION, Q_PRIMITIVES, Q_INFERENCE] },
  c1_jinete_rastreador: { kind: "battle", questions: [Q_FUNC_TYPE, Q_WHY_TS, Q_PRIMITIVES] },
  c1_perro_negro: { kind: "battle", questions: [Q_INFERENCE, Q_UNION, Q_ANY] },
  c1_jefe_nazgul: { kind: "battle", questions: [Q_FUNC_TYPE, Q_ANNOTATION, Q_UNION, Q_WHY_TS] },
  pergamino_clases: {
    kind: "scroll",
    title: P("El Pergamino del Guión Tipado", "The Scroll of the Typed Script"),
    lore_intro: P(
      "Entre los papeles del viejo Bilbo, un pergamino en una lengua nueva enseña a nombrar las cosas… y a decir de qué están hechas.",
      "Among old Bilbo's papers, a scroll in a new tongue teaches how to name things… and to say what they're made of.",
    ),
    scroll: {
      topic: P(
        "TypeScript desde cero: tipos, anotaciones e inferencia",
        "TypeScript from scratch: types, annotations and inference",
      ),
      sections: [
        {
          heading: P("Anotar el tipo: nombre: tipo", "Annotate the type: name: type" ),
          body: P(
            "TypeScript es JavaScript con tipos. El tipo va tras el nombre y dos puntos. Los primitivos, en minúscula: `string`, `number`, `boolean`.",
            "TypeScript is JavaScript with types. The type goes after the name and a colon. The primitives, lowercase: `string`, `number`, `boolean`.",
          ),
          code:
            "const nombre: string = 'Frodo';\nlet edad: number = 50;\nconst activo: boolean = true;",
        },
        {
          heading: P("Inferencia: no anotes lo obvio", "Inference: don't annotate the obvious"),
          body: P(
            "Si el valor deja claro el tipo, TypeScript lo INFIERE y no hace falta anotarlo. Se anota sobre todo en parámetros de función, donde no hay valor del que deducir.",
            "If the value makes the type clear, TypeScript INFERS it and you needn't annotate. You mainly annotate function parameters, where there's no value to deduce from.",
          ),
          code:
            "const n = 'Sam';   // TS infiere string\nlet x = 41;        // infiere number\n// x = 'hola';     // ❌ error: string no es number",
        },
        {
          heading: P("Funciones tipadas", "Typed functions"),
          body: P(
            "Cada parámetro lleva su tipo; el tipo de retorno va tras los paréntesis. Si devuelves algo que no cuadra, el compilador te avisa en el editor.",
            "Each parameter carries its type; the return type goes after the parentheses. If you return something that doesn't fit, the compiler warns you in the editor.",
          ),
          code:
            "function presentarse(nombre: string): string {\n  return `Soy ${nombre} de la Comarca`;\n}",
        },
        {
          heading: P("Uniones y any", "Unions and any"),
          body: P(
            "`string | number` es un tipo UNIÓN: uno u otro. `any` apaga la comprobación (evítalo). Los tipos desaparecen al transpilar: el navegador ejecuta JS puro.",
            "`string | number` is a UNION type: one or the other. `any` turns off checking (avoid it). Types vanish on transpile: the browser runs plain JS.",
          ),
          code:
            "let id: string | number = 42;\nid = 'A-42';          // también válido\nlet libre: any = 7;   // sin red: úsalo poco",
        },
      ],
      keyTakeaway: P(
        "El tipo va tras `: `. Anota parámetros y retornos; deja que TS infiera el resto. `|` une tipos, `any` los apaga. Al transpilar, los tipos se borran y queda JS.",
        "The type goes after `: `. Annotate parameters and returns; let TS infer the rest. `|` unites types, `any` turns them off. On transpile, types are erased and JS remains.",
      ),
    },
  },
  sendero_comarca: {
    kind: "challenge",
    title: P("Preparar la Huida", "Preparing to Flee"),
    lore_intro: P(
      "Antes de partir, aprende a decir quién eres. Escribe tu primera función tipada.",
      "Before you leave, learn to say who you are. Write your first typed function.",
    ),
    challenge: {
      topic: P("Funciones tipadas y template strings", "Typed functions and template strings"),
      instructions: P(
        "Escribe `presentarse(nombre: string): string` que devuelva una template string con el formato exacto:\n\n  Soy {nombre} de la Comarca\n\nPor ejemplo, `presentarse('Frodo')` devuelve `'Soy Frodo de la Comarca'`. Anota el parámetro y el tipo de retorno.",
        "Write `presentarse(nombre: string): string` that returns a template string with the exact format:\n\n  Soy {name} de la Comarca\n\nFor example, `presentarse('Frodo')` returns `'Soy Frodo de la Comarca'`. Annotate the parameter and the return type.",
      ),
      starter_code:
        "function presentarse(nombre: string): string {\n  // devuelve `Soy ${nombre} de la Comarca`\n}\n",
      hints: [
        P("El parámetro lleva su tipo: `(nombre: string)`, y el retorno tras los paréntesis: `): string`.", "The parameter carries its type: `(nombre: string)`, and the return after the parentheses: `): string`."),
        P("La variable va dentro de ${ } en una template string: `` `Soy ${nombre} de la Comarca` ``.", "The variable goes inside ${ } in a template string: `` `Soy ${nombre} de la Comarca` ``."),
      ],
      test_cases: [
        {
          input: "presentarse('Frodo')",
          expected: "Soy Frodo de la Comarca",
          description: P("El formato exacto", "The exact format"),
          raw: true,
        },
        {
          input: "presentarse('Sam')",
          expected: "Soy Sam de la Comarca",
          description: P("Con otro nombre", "With another name"),
          raw: true,
        },
      ],
    },
  },
  halito_negro: {
    kind: "challenge",
    title: P("El Hálito Negro", "The Black Breath"),
    lore_intro: P(
      "Un Jinete Negro olfatea el aire. Controla tu Sigilo con números tipados y comparaciones para pasar inadvertido.",
      "A Black Rider sniffs the air. Control your Stealth with typed numbers and comparisons to slip by unseen.",
    ),
    challenge: {
      topic: P("Tipos number y boolean", "number and boolean types"),
      instructions: P(
        "Escribe dos funciones tipadas:\n\n• `ocultar(actual: number, n: number): number` — suma `n` al sigilo `actual`, SIN pasar de 100. Usa `Math.min`.\n• `esVisible(sigilo: number, percepcion: number): boolean` — devuelve true si tu `sigilo` es MENOR que la `percepcion` del Nazgûl.",
        "Write two typed functions:\n\n• `ocultar(actual: number, n: number): number` — adds `n` to the current stealth, capped at 100. Use `Math.min`.\n• `esVisible(sigilo: number, percepcion: number): boolean` — returns true if your `sigilo` is LESS than the Nazgûl's `percepcion`.",
      ),
      starter_code:
        "function ocultar(actual: number, n: number): number {\n  // Math.min(100, ...)\n}\n\nfunction esVisible(sigilo: number, percepcion: number): boolean {\n  // ...\n}\n",
      hints: [
        P("`Math.min(100, actual + n)` nunca devuelve más de 100.", "`Math.min(100, actual + n)` never returns more than 100."),
        P("`sigilo < percepcion` ya es un `boolean`: devuélvelo.", "`sigilo < percepcion` is already a `boolean`: return it."),
      ],
      test_cases: [
        { input: "ocultar(0, 70)", expected: 70, description: P("Suma normal", "Plain sum"), raw: true },
        { input: "ocultar(70, 50)", expected: 100, description: P("70+50 se corta en 100", "70+50 caps at 100"), raw: true },
        { input: "ocultar(90, 30)", expected: 100, description: P("Nunca pasa de 100", "Never over 100"), raw: true },
        { input: "esVisible(100, 50)", expected: false, description: P("Sigilo alto: no te ve", "High stealth: unseen"), raw: true },
        { input: "esVisible(40, 120)", expected: true, description: P("Nazgûl muy perceptivo", "Very perceptive Nazgûl"), raw: true },
      ],
    },
  },
};

/** Preguntas de combate reutilizables sobre arrays y tuplas tipados. */
const Q_ARR_TYPE = {
  question: P(
    "¿Cómo se tipa un array de números en TypeScript?",
    "How do you type an array of numbers in TypeScript?",
  ),
  options: [
    P("number[]  (o Array<number>)", "number[]  (or Array<number>)"),
    P("array<number>", "array<number>"),
    P("[number]", "[number]"),
    P("number{}", "number{}"),
  ],
  correct: 0,
  explanation: P(
    "`number[]` es la forma habitual; `Array<number>` es equivalente. Ojo: `[number]` NO es «array de números», sino una TUPLA de exactamente un número.",
    "`number[]` is the usual form; `Array<number>` is equivalent. Careful: `[number]` is NOT \"array of numbers\", but a TUPLE of exactly one number.",
  ),
};
const Q_ARR_INFER = {
  question: P(
    "`const nombres = ['Frodo', 'Sam']`. ¿Qué tipo infiere TypeScript?",
    "`const nombres = ['Frodo', 'Sam']`. What type does TypeScript infer?",
  ),
  options: [
    P("string[]", "string[]"),
    P("[string, string]", "[string, string]"),
    P("any[]", "any[]"),
    P("Array", "Array"),
  ],
  correct: 0,
  explanation: P(
    "De un array literal de strings, TS infiere `string[]` (no una tupla). Si quieres una tupla de tamaño fijo, tienes que anotarla o usar `as const`.",
    "From a string array literal, TS infers `string[]` (not a tuple). If you want a fixed-size tuple, you must annotate it or use `as const`.",
  ),
};
const Q_TUPLE = {
  question: P(
    "¿Qué describe el tipo `[number, string]`?",
    "What does the type `[number, string]` describe?",
  ),
  options: [
    P("Una tupla: un array de longitud fija con un number y luego un string", "A tuple: a fixed-length array with a number then a string"),
    P("Un array de numbers o strings", "An array of numbers or strings"),
    P("Un objeto con dos campos", "An object with two fields"),
    P("Dos variables sueltas", "Two separate variables"),
  ],
  correct: 0,
  explanation: P(
    "Una tupla fija la LONGITUD y el tipo de cada posición: `[number, string]` es exactamente dos elementos, primero number y luego string. Útil para devolver «un par» sin crear un objeto.",
    "A tuple fixes the LENGTH and the type of each position: `[number, string]` is exactly two elements, first a number then a string. Handy to return \"a pair\" without creating an object.",
  ),
};
const Q_ARR_METHOD = {
  question: P(
    "`const xs: number[] = [1, 2, 3]`. ¿Qué tipo tiene `xs.map(n => n * 2)`?",
    "`const xs: number[] = [1, 2, 3]`. What type does `xs.map(n => n * 2)` have?",
  ),
  options: [
    P("number[] (map devuelve un array nuevo del tipo que produce la función)", "number[] (map returns a new array of the type the function produces)"),
    P("number", "number"),
    P("any[]", "any[]"),
    P("void", "void"),
  ],
  correct: 0,
  explanation: P(
    "`map` conserva los tipos: sobre `number[]` con una función que devuelve number, el resultado es `number[]`. Si la función devolviera string, sería `string[]`. TS deduce el tipo de `n` (number) sin anotarlo.",
    "`map` preserves types: over `number[]` with a function returning number, the result is `number[]`. If the function returned string, it'd be `string[]`. TS infers `n`'s type (number) without annotation.",
  ),
};
const Q_READONLY_ARR = {
  question: P(
    "¿Qué garantiza el tipo `readonly number[]`?",
    "What does the type `readonly number[]` guarantee?",
  ),
  options: [
    P("Que no puedes mutar el array (ni push, ni asignar por índice)", "That you can't mutate the array (no push, no index assignment)"),
    P("Que sus números no cambian de valor", "That its numbers don't change value"),
    P("Que el array es privado", "That the array is private"),
    P("Que sólo se lee una vez", "That it's read only once"),
  ],
  correct: 0,
  explanation: P(
    "`readonly number[]` prohíbe en tiempo de compilación cualquier mutación: `push`, `pop` o `xs[0] = 9` dan error. Es útil para parámetros que no deberías modificar. Como todo tipo, desaparece al transpilar.",
    "`readonly number[]` forbids any mutation at compile time: `push`, `pop` or `xs[0] = 9` error out. Useful for parameters you shouldn't modify. Like all types, it vanishes on transpile.",
  ),
};
const Q_MIXED_ARR = {
  question: P(
    "¿Cómo se tipa un array que puede contener strings Y numbers mezclados?",
    "How do you type an array that can contain strings AND numbers mixed?",
  ),
  options: [
    P("(string | number)[]", "(string | number)[]"),
    P("string | number[]", "string | number[]"),
    P("string[] & number[]", "string[] & number[]"),
    P("[string, number]", "[string, number]"),
  ],
  correct: 0,
  explanation: P(
    "Los paréntesis importan: `(string | number)[]` es «array de (string o number)». Sin ellos, `string | number[]` significa «un string O un array de numbers», que es otra cosa.",
    "The parentheses matter: `(string | number)[]` is \"array of (string or number)\". Without them, `string | number[]` means \"a string OR an array of numbers\", which is something else.",
  ),
};

/** Capítulo 2 · Arrays y tuplas tipados. */
export const SYL_TS_COMMUNITY_2: Syllabus = {
  c2_raiz: { kind: "battle", questions: [Q_ARR_TYPE, Q_ARR_INFER, Q_ARR_METHOD] },
  c2_niebla: { kind: "battle", questions: [Q_TUPLE, Q_MIXED_ARR, Q_ARR_TYPE] },
  c2_sauce: { kind: "battle", questions: [Q_ARR_METHOD, Q_READONLY_ARR, Q_ARR_INFER] },
  c2_jefe_tumulario: { kind: "battle", questions: [Q_TUPLE, Q_READONLY_ARR, Q_MIXED_ARR, Q_ARR_METHOD] },
  pergamino_ciclo_vida: {
    kind: "scroll",
    title: P("El Pergamino de las Listas", "The Scroll of Lists"),
    lore_intro: P(
      "En un claro del Bosque Viejo, un pergamino enseña a nombrar no una cosa, sino MUCHAS: arrays con tipo, y tuplas de posición fija.",
      "In a clearing of the Old Forest, a scroll teaches how to name not one thing but MANY: typed arrays, and fixed-position tuples.",
    ),
    scroll: {
      topic: P("Arrays y tuplas tipados", "Typed arrays and tuples"),
      sections: [
        {
          heading: P("Arrays con tipo", "Typed arrays"),
          body: P(
            "`number[]` es un array de números; `string[]` de textos. TS lo infiere de un literal, pero lo anotas en parámetros. Los métodos conservan el tipo: `map` sobre `number[]` da otro array del tipo que produzca la función.",
            "`number[]` is an array of numbers; `string[]` of texts. TS infers it from a literal, but you annotate it in parameters. Methods preserve the type: `map` over `number[]` gives another array of whatever the function produces.",
          ),
          code:
            "const vidas: number[] = [100, 40, 5];\nconst nombres: string[] = ['Frodo', 'Sam'];\nconst dobles = vidas.map(v => v * 2); // number[]",
        },
        {
          heading: P("Tuplas: longitud y posición fijas", "Tuples: fixed length and position"),
          body: P(
            "Una tupla `[number, string]` es un array de tamaño fijo donde cada posición tiene su tipo. Perfecta para devolver «un par» sin montar un objeto.",
            "A tuple `[number, string]` is a fixed-size array where each position has its own type. Perfect to return \"a pair\" without building an object.",
          ),
          code:
            "function medir(xs: string[]): [number, string] {\n  return [xs.length, xs.join(' ')];\n}\nconst [n, texto] = medir(['a', 'b']); // n: number, texto: string",
        },
        {
          heading: P("Uniones y readonly", "Unions and readonly"),
          body: P(
            "`(string | number)[]` mezcla tipos (ojo a los paréntesis). `readonly number[]` prohíbe mutar el array: ni `push` ni asignar por índice. Ideal para parámetros que no debes tocar.",
            "`(string | number)[]` mixes types (mind the parentheses). `readonly number[]` forbids mutating the array: no `push`, no index assignment. Ideal for parameters you must not touch.",
          ),
          code:
            "const mixto: (string | number)[] = ['A', 42];\nfunction total(xs: readonly number[]): number {\n  return xs.reduce((a, b) => a + b, 0); // leer sí; mutar no\n}",
        },
      ],
      keyTakeaway: P(
        "`T[]` para listas de un tipo; `[A, B]` para tuplas de posición fija; `(A | B)[]` para mezclas; `readonly T[]` cuando no debe mutarse. Los métodos de array conservan el tipo.",
        "`T[]` for lists of one type; `[A, B]` for fixed-position tuples; `(A | B)[]` for mixes; `readonly T[]` when it mustn't mutate. Array methods preserve the type.",
      ),
    },
  },
  viejo_hombre_sauce: {
    kind: "challenge",
    title: P("El Viejo Hombre Sauce", "Old Man Willow"),
    lore_intro: P(
      "Las raíces del Sauce atrapan a los hobbits uno a uno. Recorre la lista de nombres y devuelve otra, tipada.",
      "The Willow's roots snare the hobbits one by one. Walk the list of names and return another, typed.",
    ),
    challenge: {
      topic: P("Arrays de string y map", "String arrays and map"),
      instructions: P(
        "Escribe `atrapar(nombres: string[]): string[]` que devuelva un array NUEVO con cada nombre seguido de ' queda atrapado'.\n\nEjemplo: `atrapar(['Merry'])` → `['Merry queda atrapado']`.",
        "Write `atrapar(nombres: string[]): string[]` that returns a NEW array with each name followed by ' queda atrapado'.\n\nExample: `atrapar(['Merry'])` → `['Merry queda atrapado']`.",
      ),
      starter_code:
        "function atrapar(nombres: string[]): string[] {\n  // usa map y una template string\n}\n",
      hints: [
        P("`nombres.map(n => ...)` devuelve un `string[]` nuevo.", "`nombres.map(n => ...)` returns a new `string[]`."),
        P("Cada elemento: `` `${n} queda atrapado` ``.", "Each element: `` `${n} queda atrapado` ``."),
      ],
      test_cases: [
        { input: "atrapar(['Merry', 'Pippin'])", expected: ["Merry queda atrapado", "Pippin queda atrapado"], description: P("Cada nombre atrapado", "Each name snared"), raw: true },
        { input: "atrapar([])", expected: [], description: P("Lista vacía", "Empty list"), raw: true },
        { input: "atrapar(['Frodo'])", expected: ["Frodo queda atrapado"], description: P("Uno solo", "Just one"), raw: true },
      ],
    },
  },
  tumulo_espectro: {
    kind: "challenge",
    title: P("El Túmulo del Espectro", "The Wight's Barrow"),
    lore_intro: P(
      "El Tumulario drena la vida de cada hobbit. Aplica el drenaje a toda la lista de vidas, sin bajar nunca de 0.",
      "The Barrow-wight drains the life of each hobbit. Apply the drain to the whole list of lives, never dropping below 0.",
    ),
    challenge: {
      topic: P("Arrays de number y clamp", "Number arrays and clamp"),
      instructions: P(
        "Escribe `drenarVarios(vidas: number[], drenaje: number): number[]` que reste `drenaje` a cada vida, sin bajar nunca de 0. Usa `Math.max`.\n\nEjemplo: `drenarVarios([100, 20, 5], 30)` → `[70, 0, 0]`.",
        "Write `drenarVarios(vidas: number[], drenaje: number): number[]` that subtracts `drenaje` from each life, never going below 0. Use `Math.max`.\n\nExample: `drenarVarios([100, 20, 5], 30)` → `[70, 0, 0]`.",
      ),
      starter_code:
        "function drenarVarios(vidas: number[], drenaje: number): number[] {\n  // map + Math.max(0, ...)\n}\n",
      hints: [
        P("`vidas.map(v => Math.max(0, v - drenaje))`.", "`vidas.map(v => Math.max(0, v - drenaje))`."),
        P("`Math.max(0, ...)` evita los negativos.", "`Math.max(0, ...)` avoids negatives."),
      ],
      test_cases: [
        { input: "drenarVarios([100, 20, 5], 30)", expected: [70, 0, 0], description: P("Resta acotada a 0", "Subtraction clamped at 0"), raw: true },
        { input: "drenarVarios([50], 10)", expected: [40], description: P("Una sola vida", "A single life"), raw: true },
        { input: "drenarVarios([], 10)", expected: [], description: P("Sin vidas", "No lives"), raw: true },
      ],
    },
  },
  canto_bombadil: {
    kind: "challenge",
    title: P("El Canto de Tom Bombadil", "Tom Bombadil's Song"),
    lore_intro: P(
      "El canto de Tom rompe el hechizo. Resume los versos en un par: cuántos son y el canto entero. Una tupla lo dice todo.",
      "Tom's song breaks the spell. Summarize the verses in a pair: how many there are and the whole song. A tuple says it all.",
    ),
    challenge: {
      topic: P("Tuplas [number, string]", "Tuples [number, string]"),
      instructions: P(
        "Escribe `resumen(versos: string[]): [number, string]` que devuelva una TUPLA con:\n• cuántos versos hay,\n• todos los versos unidos por un espacio.\n\nEjemplo: `resumen(['ho', 'hey'])` → `[2, 'ho hey']`.",
        "Write `resumen(versos: string[]): [number, string]` that returns a TUPLE with:\n• how many verses there are,\n• all verses joined by a space.\n\nExample: `resumen(['ho', 'hey'])` → `[2, 'ho hey']`.",
      ),
      starter_code:
        "function resumen(versos: string[]): [number, string] {\n  // devuelve [longitud, versos unidos por ' ']\n}\n",
      hints: [
        P("`versos.length` da la cantidad; `versos.join(' ')` los une.", "`versos.length` gives the count; `versos.join(' ')` joins them."),
        P("Devuelve las dos cosas como tupla: `return [versos.length, versos.join(' ')];`.", "Return both as a tuple: `return [versos.length, versos.join(' ')];`."),
      ],
      test_cases: [
        { input: "resumen(['ho', 'hey'])", expected: [2, "ho hey"], description: P("Cantidad y canto", "Count and song"), raw: true },
        { input: "resumen([])", expected: [0, ""], description: P("Sin versos", "No verses"), raw: true },
        { input: "resumen(['solo'])", expected: [1, "solo"], description: P("Un verso", "One verse"), raw: true },
      ],
    },
  },
};

/** Preguntas de combate reutilizables sobre interfaces y tipos de objeto. */
const Q_INTERFACE = {
  question: P(
    "¿Para qué sirve una `interface` en TypeScript?",
    "What is an `interface` for in TypeScript?",
  ),
  options: [
    P("Describe la FORMA de un objeto: qué propiedades y tipos tiene", "It describes the SHAPE of an object: what properties and types it has"),
    P("Crea un objeto con valores por defecto", "It creates an object with default values"),
    P("Ejecuta código al instanciar", "It runs code on instantiation"),
    P("Es lo mismo que una clase", "It's the same as a class"),
  ],
  correct: 0,
  explanation: P(
    "Una interfaz es sólo un CONTRATO de forma: dice qué campos y métodos debe tener un objeto, sin aportar código ni valores. Como todo lo de tipos, desaparece al transpilar.",
    "An interface is only a SHAPE contract: it says what fields and methods an object must have, without providing code or values. Like everything type-related, it vanishes on transpile.",
  ),
};
const Q_OBJ_TYPE = {
  question: P(
    "¿Cómo se anota un parámetro que es un objeto con `nombre: string` y `edad: number`?",
    "How do you annotate a parameter that is an object with `nombre: string` and `edad: number`?",
  ),
  options: [
    P("(h: { nombre: string; edad: number })", "(h: { nombre: string; edad: number })"),
    P("(h: object)", "(h: object)"),
    P("(h: [string, number])", "(h: [string, number])"),
    P("(h: {string, number})", "(h: {string, number})"),
  ],
  correct: 0,
  explanation: P(
    "Puedes escribir el tipo del objeto en línea entre llaves, con cada campo y su tipo. `object` a secas apenas dice nada (no conoce los campos); una tupla `[string, number]` es un array, no un objeto con nombres.",
    "You can write the object type inline in braces, with each field and its type. Plain `object` says almost nothing (it doesn't know the fields); a tuple `[string, number]` is an array, not an object with names.",
  ),
};
const Q_OPTIONAL = {
  question: P(
    "En `interface Arma { nombre: string; encantada?: boolean }`, ¿qué significa el `?`?",
    "In `interface Arma { nombre: string; encantada?: boolean }`, what does the `?` mean?",
  ),
  options: [
    P("La propiedad es OPCIONAL: puede faltar", "The property is OPTIONAL: it may be absent"),
    P("La propiedad es booleana", "The property is boolean"),
    P("La propiedad es privada", "The property is private"),
    P("La propiedad es de sólo lectura", "The property is read-only"),
  ],
  correct: 0,
  explanation: P(
    "El `?` marca la propiedad como opcional: un objeto válido puede tenerla o no. Al leerla, su tipo es `boolean | undefined`, así que conviene comprobarla antes de usarla.",
    "The `?` marks the property as optional: a valid object may or may not have it. When you read it, its type is `boolean | undefined`, so you should check it before using it.",
  ),
};
const Q_TYPE_ALIAS = {
  question: P(
    "¿Qué diferencia práctica hay entre `interface` y `type` para describir un objeto?",
    "What's the practical difference between `interface` and `type` for describing an object?",
  ),
  options: [
    P("Casi ninguna para objetos; type además nombra uniones y tuplas", "Almost none for objects; type also names unions and tuples"),
    P("type no puede describir objetos", "type can't describe objects"),
    P("interface se ejecuta y type no", "interface runs and type doesn't"),
    P("Son incompatibles entre sí", "They're incompatible with each other"),
  ],
  correct: 0,
  explanation: P(
    "Para la forma de un objeto son casi intercambiables. `type` es más general (nombra uniones, tuplas, primitivos: `type Id = string | number`); `interface` se especializa en objetos y admite fusión de declaraciones. Elige uno y sé consistente.",
    "For an object's shape they're nearly interchangeable. `type` is more general (names unions, tuples, primitives: `type Id = string | number`); `interface` specializes in objects and allows declaration merging. Pick one and be consistent.",
  ),
};
const Q_METHOD_SIG = {
  question: P(
    "¿Cómo se declara en una interfaz un método `atacar` que devuelve `number`?",
    "How do you declare in an interface a method `atacar` that returns `number`?",
  ),
  options: [
    P("atacar(): number", "atacar(): number"),
    P("atacar: number", "atacar: number"),
    P("function atacar(): number { }", "function atacar(): number { }"),
    P("atacar => number", "atacar => number"),
  ],
  correct: 0,
  explanation: P(
    "En una interfaz sólo va la FIRMA, sin cuerpo: `atacar(): number`. `atacar: number` sería una propiedad numérica, no un método. El cuerpo lo pone el objeto o la clase que cumpla la interfaz.",
    "In an interface only the SIGNATURE goes, with no body: `atacar(): number`. `atacar: number` would be a numeric property, not a method. The body is provided by the object or class that fulfills the interface.",
  ),
};
const Q_STRUCTURAL = {
  question: P(
    "Una función espera un `{ nombre: string }`. Le pasas `{ nombre: 'Sam', edad: 38 }`. ¿Qué ocurre?",
    "A function expects `{ nombre: string }`. You pass `{ nombre: 'Sam', edad: 38 }`. What happens?",
  ),
  options: [
    P("Vale: TS es estructural, basta con que tenga (al menos) los campos pedidos", "Fine: TS is structural, it just needs (at least) the required fields"),
    P("Error: sobran campos", "Error: too many fields"),
    P("Error: hay que declarar una interfaz primero", "Error: you must declare an interface first"),
    P("Se ignoran los dos campos", "Both fields are ignored"),
  ],
  correct: 0,
  explanation: P(
    "TypeScript usa tipado ESTRUCTURAL: importa la forma, no el nombre del tipo. Si el objeto tiene todo lo que se pide, encaja aunque traiga campos de más (salvo el chequeo extra de objetos literales pasados directamente). No hace falta declarar que «implementa» nada.",
    "TypeScript uses STRUCTURAL typing: the shape matters, not the type's name. If the object has everything required, it fits even with extra fields (except the excess-property check on object literals passed directly). No need to declare it \"implements\" anything.",
  ),
};

/** Capítulo 3 · Interfaces y tipos de objeto. */
export const SYL_TS_COMMUNITY_3: Syllabus = {
  c3_ferny: { kind: "battle", questions: [Q_INTERFACE, Q_OBJ_TYPE, Q_OPTIONAL] },
  c3_espia_nazgul: { kind: "battle", questions: [Q_STRUCTURAL, Q_METHOD_SIG, Q_INTERFACE] },
  c3_montaraz_falso: { kind: "battle", questions: [Q_OPTIONAL, Q_TYPE_ALIAS, Q_OBJ_TYPE] },
  c3_jefe_reybrujo: { kind: "battle", questions: [Q_STRUCTURAL, Q_TYPE_ALIAS, Q_METHOD_SIG, Q_INTERFACE] },
  pergamino_herencia: {
    kind: "scroll",
    title: P("El Pergamino de las Formas", "The Scroll of Shapes"),
    lore_intro: P(
      "En El Póney Pisador, un pergamino enseña a describir de qué está hecho un objeto antes de crearlo: interfaces.",
      "At the Prancing Pony, a scroll teaches how to describe what an object is made of before creating it: interfaces.",
    ),
    scroll: {
      topic: P("Interfaces y tipos de objeto", "Interfaces and object types"),
      sections: [
        {
          heading: P("Interfaces: la forma de un objeto", "Interfaces: the shape of an object"),
          body: P(
            "Una `interface` describe qué campos y de qué tipo tiene un objeto. No es código: es un contrato de forma que desaparece al transpilar.",
            "An `interface` describes what fields an object has and of what type. It's not code: it's a shape contract that vanishes on transpile.",
          ),
          code:
            "interface Montaraz {\n  nombre: string;\n  oficio: string;\n}\nconst t: Montaraz = { nombre: 'Trancos', oficio: 'montaraz' };",
        },
        {
          heading: P("Propiedades opcionales y métodos", "Optional properties and methods"),
          body: P(
            "Un `?` marca una propiedad opcional (puede faltar; su tipo incluye `undefined`). Un método se declara con su firma, sin cuerpo: `atacar(): number`.",
            "A `?` marks an optional property (it may be absent; its type includes `undefined`). A method is declared by its signature, with no body: `atacar(): number`.",
          ),
          code:
            "interface Arma {\n  nombre: string;\n  danio: number;\n  encantada?: boolean;   // opcional\n}",
        },
        {
          heading: P("Estructural: encaja por forma", "Structural: it fits by shape"),
          body: P(
            "TS es de tipado estructural: si un objeto tiene lo que se pide, encaja — no hace falta declarar que «implementa» la interfaz. `type` es la alternativa para nombrar también uniones y tuplas.",
            "TS is structurally typed: if an object has what's required, it fits — no need to declare it \"implements\" the interface. `type` is the alternative to also name unions and tuples.",
          ),
          code:
            "function saludar(h: { nombre: string }): string {\n  return `Hola, ${h.nombre}`;\n}\nsaludar({ nombre: 'Sam', edad: 38 }); // vale: tiene nombre\n\ntype Id = string | number;",
        },
      ],
      keyTakeaway: P(
        "`interface` describe la forma de un objeto (campos y métodos, con `?` para opcionales). TS encaja por forma, no por nombre. `type` nombra además uniones y tuplas.",
        "`interface` describes an object's shape (fields and methods, with `?` for optional). TS fits by shape, not by name. `type` also names unions and tuples.",
      ),
    },
  },
  poney_pisador: {
    kind: "challenge",
    title: P("Trancos, el Montaraz", "Strider the Ranger"),
    lore_intro: P(
      "Un montaraz observa desde el rincón. Descríbelo con una interfaz y fabrícalo con su forma exacta.",
      "A ranger watches from the corner. Describe him with an interface and build him in his exact shape.",
    ),
    challenge: {
      topic: P("Interfaces y objetos tipados", "Interfaces and typed objects"),
      instructions: P(
        "Declara `interface Montaraz { nombre: string; oficio: string }` y escribe `crearMontaraz(nombre: string): Montaraz` que devuelva un objeto con ese `nombre` y `oficio` siempre `'montaraz'`.\n\nEjemplo: `crearMontaraz('Trancos')` → `{ nombre: 'Trancos', oficio: 'montaraz' }`.",
        "Declare `interface Montaraz { nombre: string; oficio: string }` and write `crearMontaraz(nombre: string): Montaraz` returning an object with that `nombre` and `oficio` always `'montaraz'`.\n\nExample: `crearMontaraz('Trancos')` → `{ nombre: 'Trancos', oficio: 'montaraz' }`.",
      ),
      starter_code:
        "interface Montaraz {\n  nombre: string;\n  oficio: string;\n}\n\nfunction crearMontaraz(nombre: string): Montaraz {\n  // devuelve un objeto con esa forma\n}\n",
      hints: [
        P("Devuelve un objeto literal con los dos campos: `{ nombre, oficio: 'montaraz' }`.", "Return an object literal with both fields: `{ nombre, oficio: 'montaraz' }`."),
        P("`{ nombre }` es abreviatura de `{ nombre: nombre }`.", "`{ nombre }` is shorthand for `{ nombre: nombre }`."),
      ],
      test_cases: [
        { input: "crearMontaraz('Trancos').nombre", expected: "Trancos", description: P("El nombre recibido", "The received name"), raw: true },
        { input: "crearMontaraz('Trancos').oficio", expected: "montaraz", description: P("Oficio fijo", "Fixed occupation"), raw: true },
        { input: "crearMontaraz('Aragorn').nombre", expected: "Aragorn", description: P("Con otro nombre", "With another name"), raw: true },
      ],
    },
  },
  hojas_de_tumulo: {
    kind: "challenge",
    title: P("Las Hojas de los Túmulos", "The Barrow-blades"),
    lore_intro: P(
      "Algunas hojas están encantadas y otras no. Descríbelas con una propiedad opcional y muéstralas según lo tengan.",
      "Some blades are enchanted and some aren't. Describe them with an optional property and show them accordingly.",
    ),
    challenge: {
      topic: P("Propiedades opcionales", "Optional properties"),
      instructions: P(
        "Con `interface Arma { nombre: string; danio: number; encantada?: boolean }`, escribe `describir(a: Arma): string` que devuelva `'{nombre}: {danio}'`, y si `encantada` es `true`, añada ` (encantada)` al final.\n\nEjemplos: `describir({ nombre: 'Daga', danio: 5 })` → `'Daga: 5'`; con `encantada: true` → `'Hoja: 8 (encantada)'`.",
        "With `interface Arma { nombre: string; danio: number; encantada?: boolean }`, write `describir(a: Arma): string` returning `'{nombre}: {danio}'`, and if `encantada` is `true`, append ` (encantada)`.\n\nExamples: `describir({ nombre: 'Daga', danio: 5 })` → `'Daga: 5'`; with `encantada: true` → `'Hoja: 8 (encantada)'`.",
      ),
      starter_code:
        "interface Arma {\n  nombre: string;\n  danio: number;\n  encantada?: boolean;\n}\n\nfunction describir(a: Arma): string {\n  // '{nombre}: {danio}' y ' (encantada)' si procede\n}\n",
      hints: [
        P("Base: `` `${a.nombre}: ${a.danio}` ``.", "Base: `` `${a.nombre}: ${a.danio}` ``."),
        P("`a.encantada` puede ser undefined: `a.encantada ? ... : ...` lo cubre.", "`a.encantada` may be undefined: `a.encantada ? ... : ...` covers it."),
      ],
      test_cases: [
        { input: "describir({ nombre: 'Daga', danio: 5 })", expected: "Daga: 5", description: P("Sin encantar", "Not enchanted"), raw: true },
        { input: "describir({ nombre: 'Hoja', danio: 8, encantada: true })", expected: "Hoja: 8 (encantada)", description: P("Encantada", "Enchanted"), raw: true },
        { input: "describir({ nombre: 'Espada', danio: 12, encantada: false })", expected: "Espada: 12", description: P("Opcional en false", "Optional set to false"), raw: true },
      ],
    },
  },
  cima_de_los_vientos: {
    kind: "challenge",
    title: P("La Cima de los Vientos", "Weathertop"),
    lore_intro: P(
      "Cinco Jinetes suben por Amon Sûl. De una lista de jinetes tipada, encuentra al más fuerte.",
      "Five Riders climb Amon Sûl. From a typed list of riders, find the strongest.",
    ),
    challenge: {
      topic: P("Arrays de objetos (interface[])", "Arrays of objects (interface[])"),
      instructions: P(
        "Con `interface Jinete { nombre: string; fuerza: number }`, escribe `masFuerte(jinetes: Jinete[]): string` que devuelva el `nombre` del jinete con mayor `fuerza`. La lista tendrá al menos uno.\n\nEjemplo: `masFuerte([{ nombre: 'A', fuerza: 3 }, { nombre: 'B', fuerza: 9 }])` → `'B'`.",
        "With `interface Jinete { nombre: string; fuerza: number }`, write `masFuerte(jinetes: Jinete[]): string` returning the `nombre` of the rider with the highest `fuerza`. The list has at least one.\n\nExample: `masFuerte([{ nombre: 'A', fuerza: 3 }, { nombre: 'B', fuerza: 9 }])` → `'B'`.",
      ),
      starter_code:
        "interface Jinete {\n  nombre: string;\n  fuerza: number;\n}\n\nfunction masFuerte(jinetes: Jinete[]): string {\n  // el nombre del de mayor fuerza\n}\n",
      hints: [
        P("`reduce` compara pares: `(a, b) => b.fuerza > a.fuerza ? b : a`.", "`reduce` compares pairs: `(a, b) => b.fuerza > a.fuerza ? b : a`."),
        P("Al final, toma su `.nombre`.", "At the end, take its `.nombre`."),
      ],
      test_cases: [
        { input: "masFuerte([{ nombre: 'A', fuerza: 3 }, { nombre: 'B', fuerza: 9 }])", expected: "B", description: P("El más fuerte", "The strongest"), raw: true },
        { input: "masFuerte([{ nombre: 'Solo', fuerza: 1 }])", expected: "Solo", description: P("Uno solo", "Just one"), raw: true },
        { input: "masFuerte([{ nombre: 'Rey Brujo', fuerza: 9 }, { nombre: 'Khamul', fuerza: 8 }])", expected: "Rey Brujo", description: P("El primero gana el empate hacia abajo", "The first keeps the lead"), raw: true },
      ],
    },
  },
};

/** Preguntas de combate reutilizables sobre enums y tipos literales. */
const Q_LITERAL = {
  question: P(
    "¿Qué describe el tipo `'paso' | 'trote' | 'galope'`?",
    "What does the type `'paso' | 'trote' | 'galope'` describe?",
  ),
  options: [
    P("Un valor que sólo puede ser una de esas TRES cadenas exactas", "A value that can only be one of those THREE exact strings"),
    P("Cualquier string", "Any string"),
    P("Un array de tres strings", "An array of three strings"),
    P("Tres variables", "Three variables"),
  ],
  correct: 0,
  explanation: P(
    "Es una UNIÓN de tipos literales: el valor debe ser exactamente una de esas cadenas. Si intentas `'volar'`, TS lo rechaza. Es la forma más ligera de un conjunto cerrado de opciones, sin declarar un enum.",
    "It's a UNION of literal types: the value must be exactly one of those strings. If you try `'volar'`, TS rejects it. It's the lightest form of a closed set of options, without declaring an enum.",
  ),
};
const Q_ENUM = {
  question: P(
    "¿Qué es un `enum` en TypeScript?",
    "What is an `enum` in TypeScript?",
  ),
  options: [
    P("Un conjunto de constantes con nombre que SÍ existe en tiempo de ejecución", "A named set of constants that DOES exist at runtime"),
    P("Un alias de tipo que desaparece al transpilar", "A type alias that vanishes on transpile"),
    P("Una interfaz con métodos", "An interface with methods"),
    P("Un array de números", "An array of numbers"),
  ],
  correct: 0,
  explanation: P(
    "A diferencia de los tipos (que se borran), un `enum` genera un OBJETO real en el JS transpilado. Por eso puedes recorrer sus valores en ejecución. Los enums de string (`Calmo = 'calmo'`) son los más previsibles.",
    "Unlike types (which are erased), an `enum` generates a real OBJECT in the transpiled JS. That's why you can iterate its values at runtime. String enums (`Calmo = 'calmo'`) are the most predictable.",
  ),
};
const Q_ENUM_VS_LITERAL = {
  question: P(
    "Para un conjunto cerrado de opciones, ¿cuándo basta una unión literal en vez de un enum?",
    "For a closed set of options, when does a literal union suffice instead of an enum?",
  ),
  options: [
    P("Casi siempre: es más ligera y no genera código", "Almost always: it's lighter and generates no code"),
    P("Nunca: hay que usar enum", "Never: you must use an enum"),
    P("Sólo con números", "Only with numbers"),
    P("Sólo dentro de una clase", "Only inside a class"),
  ],
  correct: 0,
  explanation: P(
    "La unión literal (`'a' | 'b'`) es puro tipo: cero coste en runtime y muy legible. El enum añade un objeto en ejecución — útil si necesitas iterar los valores o darles un nombre estable. Para lo demás, la unión suele ganar.",
    "The literal union (`'a' | 'b'`) is pure type: zero runtime cost and very readable. The enum adds a runtime object — handy if you need to iterate the values or give them a stable name. Otherwise, the union usually wins.",
  ),
};
const Q_EXHAUSTIVE = {
  question: P(
    "Con una unión literal en un `switch`, ¿qué te da cubrir TODOS los casos?",
    "With a literal union in a `switch`, what does covering ALL cases give you?",
  ),
  options: [
    P("Comprobación de exhaustividad: si añades una opción y olvidas un caso, TS avisa", "Exhaustiveness checking: if you add an option and miss a case, TS warns"),
    P("Más velocidad", "More speed"),
    P("Menos memoria", "Less memory"),
    P("Nada especial", "Nothing special"),
  ],
  correct: 0,
  explanation: P(
    "Si el tipo es una unión cerrada, TS sabe qué casos faltan. Con un `default` que asigne a una variable `never`, el compilador te avisa en cuanto amplíes la unión y olvides tratar el caso nuevo. Es una red de seguridad al refactorizar.",
    "If the type is a closed union, TS knows which cases are missing. With a `default` assigning to a `never` variable, the compiler warns you the moment you widen the union and forget to handle the new case. It's a safety net when refactoring.",
  ),
};
const Q_ENUM_NUMERIC = {
  question: P(
    "`enum Rango { Jinete = 1, Capitan = 3 }`. ¿Cuánto vale `Rango.Capitan`?",
    "`enum Rango { Jinete = 1, Capitan = 3 }`. What is `Rango.Capitan`?",
  ),
  options: [
    P("3", "3"),
    P("'Capitan'", "'Capitan'"),
    P("1", "1"),
    P("undefined", "undefined"),
  ],
  correct: 0,
  explanation: P(
    "Un enum numérico guarda el número asignado: `Rango.Capitan` es `3`. Si no asignas valores, empiezan en 0 y suben de uno en uno. Puedes usarlos como números normales (sumarlos, compararlos).",
    "A numeric enum stores the assigned number: `Rango.Capitan` is `3`. If you don't assign values, they start at 0 and increase by one. You can use them as regular numbers (add, compare).",
  ),
};

/** Capítulo 4 · Enums y tipos literales. */
export const SYL_TS_COMMUNITY_4: Syllabus = {
  c4_jinete_rezagado: { kind: "battle", questions: [Q_LITERAL, Q_ENUM, Q_ENUM_VS_LITERAL] },
  c4_lobo: { kind: "battle", questions: [Q_ENUM_NUMERIC, Q_EXHAUSTIVE, Q_LITERAL] },
  c4_jefe_nueve: { kind: "battle", questions: [Q_ENUM, Q_LITERAL, Q_ENUM_VS_LITERAL, Q_ENUM_NUMERIC] },
  c4_trasgo_montaraz: { kind: "battle", questions: [Q_EXHAUSTIVE, Q_ENUM_NUMERIC, Q_ENUM] },
  pergamino_estatico: {
    kind: "scroll",
    title: P("El Pergamino de los Estados Cerrados", "The Scroll of Closed States"),
    lore_intro: P(
      "Antes del Vado, un pergamino enseña a nombrar un conjunto CERRADO de posibilidades: uniones literales y enums.",
      "Before the Ford, a scroll teaches how to name a CLOSED set of possibilities: literal unions and enums.",
    ),
    scroll: {
      topic: P("Enums y tipos literales", "Enums and literal types"),
      sections: [
        {
          heading: P("Uniones literales: opciones sin coste", "Literal unions: options at no cost"),
          body: P(
            "`'paso' | 'trote' | 'galope'` es un tipo cuyo valor sólo puede ser una de esas cadenas exactas. Es puro tipo: no genera nada al transpilar y se lee de maravilla.",
            "`'paso' | 'trote' | 'galope'` is a type whose value can only be one of those exact strings. It's pure type: it generates nothing on transpile and reads beautifully.",
          ),
          code:
            "type Marcha = 'paso' | 'trote' | 'galope';\nfunction galopar(v: number): Marcha {\n  return v < 30 ? 'paso' : v < 70 ? 'trote' : 'galope';\n}",
        },
        {
          heading: P("Enums: constantes con presencia en runtime", "Enums: constants present at runtime"),
          body: P(
            "Un `enum` SÍ existe en el JS transpilado (es un objeto). Los numéricos guardan números; los de string, cadenas. Útil cuando necesitas iterar o nombrar valores de forma estable.",
            "An `enum` DOES exist in the transpiled JS (it's an object). Numeric ones store numbers; string ones store strings. Handy when you need to iterate or name values stably.",
          ),
          code:
            "enum Vado {\n  Calmo = 'calmo',\n  Crecido = 'crecido',\n  Desbordado = 'desbordado',\n}\nVado.Calmo === 'calmo'; // true",
        },
        {
          heading: P("¿Enum o unión?", "Enum or union?"),
          body: P(
            "Si sólo necesitas restringir valores, la unión literal gana: cero coste. Elige enum cuando quieras un objeto en runtime (iterar sus valores, un nombre estable). Y cubrir todos los casos de una unión te da chequeo de exhaustividad al refactorizar.",
            "If you only need to restrict values, the literal union wins: zero cost. Choose an enum when you want a runtime object (iterate its values, a stable name). And covering every case of a union gives you exhaustiveness checking when refactoring.",
          ),
          code:
            "enum Rango { Jinete = 1, Capitan = 3 }\nconst total = [Rango.Jinete, Rango.Capitan]\n  .reduce((a, r) => a + r, 0); // 4",
        },
      ],
      keyTakeaway: P(
        "Unión literal `'a' | 'b'` para opciones sin coste; `enum` cuando quieres el valor en runtime. Los enums de string son los más previsibles; los numéricos se usan como números.",
        "Literal union `'a' | 'b'` for options at no cost; `enum` when you want the value at runtime. String enums are the most predictable; numeric ones are used as numbers.",
      ),
    },
  },
  montura_asfaloth: {
    kind: "challenge",
    title: P("Asfaloth, el Corcel Élfico", "Asfaloth, the Elven Steed"),
    lore_intro: P(
      "El corcel de Glorfindel tiene tres marchas, ni una más. Un tipo literal las encierra todas.",
      "Glorfindel's steed has three gaits, not one more. A literal type encloses them all.",
    ),
    challenge: {
      topic: P("Uniones literales", "Literal unions"),
      instructions: P(
        "Declara `type Marcha = 'paso' | 'trote' | 'galope'` y escribe `galopar(v: number): Marcha` que devuelva `'paso'` si `v < 30`, `'trote'` si `v < 70`, y `'galope'` en los demás casos.\n\nEjemplo: `galopar(50)` → `'trote'`.",
        "Declare `type Marcha = 'paso' | 'trote' | 'galope'` and write `galopar(v: number): Marcha` returning `'paso'` if `v < 30`, `'trote'` if `v < 70`, and `'galope'` otherwise.\n\nExample: `galopar(50)` → `'trote'`.",
      ),
      starter_code:
        "type Marcha = 'paso' | 'trote' | 'galope';\n\nfunction galopar(v: number): Marcha {\n  // devuelve la marcha según v\n}\n",
      hints: [
        P("Un ternario encadenado: `v < 30 ? 'paso' : v < 70 ? 'trote' : 'galope'`.", "A chained ternary: `v < 30 ? 'paso' : v < 70 ? 'trote' : 'galope'`."),
        P("Sólo puedes devolver una de las tres cadenas del tipo Marcha.", "You can only return one of the three strings of the Marcha type."),
      ],
      test_cases: [
        { input: "galopar(10)", expected: "paso", description: P("Lento", "Slow"), raw: true },
        { input: "galopar(50)", expected: "trote", description: P("Medio", "Medium"), raw: true },
        { input: "galopar(200)", expected: "galope", description: P("A todo correr", "Full gallop"), raw: true },
      ],
    },
  },
  recuento_de_los_nueve: {
    kind: "challenge",
    title: P("El Recuento de los Nueve", "The Reckoning of the Nine"),
    lore_intro: P(
      "Cada rango de la Sombra pesa distinto. Un enum numérico les pone valor, y tú sumas la hueste.",
      "Each rank of the Shadow weighs differently. A numeric enum gives them a value, and you sum the host.",
    ),
    challenge: {
      topic: P("Enums numéricos", "Numeric enums"),
      instructions: P(
        "Declara `enum Rango { Jinete = 1, Capitan = 3 }` y escribe `contar(rangos: Rango[]): number` que devuelva la SUMA de sus valores.\n\nEjemplo: `contar([Rango.Jinete, Rango.Capitan])` → `4`.",
        "Declare `enum Rango { Jinete = 1, Capitan = 3 }` and write `contar(rangos: Rango[]): number` returning the SUM of their values.\n\nExample: `contar([Rango.Jinete, Rango.Capitan])` → `4`.",
      ),
      starter_code:
        "enum Rango { Jinete = 1, Capitan = 3 }\n\nfunction contar(rangos: Rango[]): number {\n  // suma los valores del enum\n}\n",
      hints: [
        P("Los valores del enum son números: `rangos.reduce((a, r) => a + r, 0)`.", "The enum values are numbers: `rangos.reduce((a, r) => a + r, 0)`."),
        P("`Rango.Jinete` vale 1 y `Rango.Capitan` vale 3.", "`Rango.Jinete` is 1 and `Rango.Capitan` is 3."),
      ],
      test_cases: [
        { input: "contar([Rango.Jinete, Rango.Capitan])", expected: 4, description: P("1 + 3", "1 + 3"), raw: true },
        { input: "contar([Rango.Jinete, Rango.Jinete, Rango.Jinete])", expected: 3, description: P("Tres jinetes", "Three riders"), raw: true },
        { input: "contar([])", expected: 0, description: P("Hueste vacía", "Empty host"), raw: true },
      ],
    },
  },
  vado_de_bruinen: {
    kind: "challenge",
    title: P("El Vado de Bruinen", "The Ford of Bruinen"),
    lore_intro: P(
      "Sólo el vado en calma se puede cruzar. Una unión literal restringe los estados posibles.",
      "Only the calm ford can be crossed. A literal union restricts the possible states.",
    ),
    challenge: {
      topic: P("Parámetro de unión literal", "Literal union parameter"),
      instructions: P(
        "Escribe `esVadeable(estado: 'calmo' | 'crecido' | 'desbordado'): boolean` que devuelva `true` SÓLO si el estado es `'calmo'`.\n\nEjemplo: `esVadeable('calmo')` → `true`; `esVadeable('crecido')` → `false`.",
        "Write `esVadeable(estado: 'calmo' | 'crecido' | 'desbordado'): boolean` returning `true` ONLY if the state is `'calmo'`.\n\nExample: `esVadeable('calmo')` → `true`; `esVadeable('crecido')` → `false`.",
      ),
      starter_code:
        "function esVadeable(estado: 'calmo' | 'crecido' | 'desbordado'): boolean {\n  // true sólo con 'calmo'\n}\n",
      hints: [
        P("Una comparación ya es booleana: `return estado === 'calmo';`.", "A comparison is already boolean: `return estado === 'calmo';`."),
        P("El parámetro sólo acepta una de las tres cadenas.", "The parameter only accepts one of the three strings."),
      ],
      test_cases: [
        { input: "esVadeable('calmo')", expected: true, description: P("El vado en calma se cruza", "The calm ford is crossable"), raw: true },
        { input: "esVadeable('crecido')", expected: false, description: P("Crecido, no", "Risen, no"), raw: true },
        { input: "esVadeable('desbordado')", expected: false, description: P("Desbordado, tampoco", "Flooded, neither"), raw: true },
      ],
    },
  },
  c4_runas_del_vado: {
    kind: "challenge",
    title: P("Las runas del Vado", "The runes of the Ford"),
    lore_intro: P(
      "Tres runas, tres estados del agua. Un enum de string los nombra y clasifica según el caudal.",
      "Three runes, three states of the water. A string enum names them and classifies by flow.",
    ),
    challenge: {
      topic: P("Enums de string", "String enums"),
      instructions: P(
        "Declara `enum Vado { Calmo = 'calmo', Crecido = 'crecido', Desbordado = 'desbordado' }` y escribe `segunCaudal(caudal: number): Vado` que devuelva `Vado.Calmo` si `caudal < 30`, `Vado.Crecido` si `< 70`, y `Vado.Desbordado` en los demás casos.\n\nEjemplo: `segunCaudal(10)` → `Vado.Calmo` (valor `'calmo'`).",
        "Declare `enum Vado { Calmo = 'calmo', Crecido = 'crecido', Desbordado = 'desbordado' }` and write `segunCaudal(caudal: number): Vado` returning `Vado.Calmo` if `caudal < 30`, `Vado.Crecido` if `< 70`, and `Vado.Desbordado` otherwise.\n\nExample: `segunCaudal(10)` → `Vado.Calmo` (value `'calmo'`).",
      ),
      starter_code:
        "enum Vado {\n  Calmo = 'calmo',\n  Crecido = 'crecido',\n  Desbordado = 'desbordado',\n}\n\nfunction segunCaudal(caudal: number): Vado {\n  // devuelve el caso del enum según el caudal\n}\n",
      hints: [
        P("Ternario encadenado devolviendo miembros del enum: `Vado.Calmo`, `Vado.Crecido`, `Vado.Desbordado`.", "Chained ternary returning enum members: `Vado.Calmo`, `Vado.Crecido`, `Vado.Desbordado`."),
        P("Un enum de string es igual a su valor: `Vado.Calmo === 'calmo'`.", "A string enum equals its value: `Vado.Calmo === 'calmo'`."),
      ],
      test_cases: [
        { input: "segunCaudal(10)", expected: "calmo", description: P("Caudal bajo", "Low flow"), raw: true },
        { input: "segunCaudal(50)", expected: "crecido", description: P("Caudal medio", "Medium flow"), raw: true },
        { input: "segunCaudal(200)", expected: "desbordado", description: P("El río contra los Nueve", "The river against the Nine"), raw: true },
        { input: "segunCaudal(10) === Vado.Calmo", expected: true, description: P("Devuelve el miembro del enum", "Returns the enum member"), raw: true },
      ],
    },
  },
};

/** Preguntas de combate reutilizables sobre clases tipadas. */
const Q_CLASS_FIELD = {
  question: P(
    "¿Cómo se declara en una clase un campo `calor` de tipo number con valor inicial 100?",
    "How do you declare in a class a field `calor` of type number with initial value 100?",
  ),
  options: [
    P("calor: number = 100;", "calor: number = 100;"),
    P("number calor = 100;", "number calor = 100;"),
    P("let calor: number = 100;", "let calor: number = 100;"),
    P("calor = number(100);", "calor = number(100);"),
  ],
  correct: 0,
  explanation: P(
    "Dentro de una clase el campo se declara como `nombre: tipo = valor`, sin `let`/`const`. TS también infiere el tipo del valor inicial, pero anotarlo documenta la intención.",
    "Inside a class the field is declared as `name: type = value`, without `let`/`const`. TS also infers the type from the initial value, but annotating it documents intent.",
  ),
};
const Q_ACCESS = {
  question: P(
    "¿Qué hace el modificador `private` en un campo de clase de TypeScript?",
    "What does the `private` modifier do on a TypeScript class field?",
  ),
  options: [
    P("Impide acceder al campo desde fuera de la clase (en tiempo de compilación)", "It prevents accessing the field from outside the class (at compile time)"),
    P("Lo hace inmutable", "It makes it immutable"),
    P("Lo comparte entre instancias", "It shares it across instances"),
    P("Lo borra al transpilar el valor", "It deletes its value on transpile"),
  ],
  correct: 0,
  explanation: P(
    "`private` restringe el acceso a la propia clase, comprobado al COMPILAR. Como los tipos, se borra al transpilar: en el JS resultante el campo sigue siendo accesible. Para privacidad real en runtime, usa `#campo`.",
    "`private` restricts access to the class itself, checked at COMPILE time. Like types, it's erased on transpile: in the resulting JS the field is still accessible. For real runtime privacy, use `#field`.",
  ),
};
const Q_PARAM_PROP = {
  question: P(
    "¿Qué hace `constructor(public readonly nombre: string) {}`?",
    "What does `constructor(public readonly nombre: string) {}` do?",
  ),
  options: [
    P("Declara Y asigna el campo `nombre` automáticamente (propiedad de parámetro)", "It declares AND assigns the field `nombre` automatically (parameter property)"),
    P("Sólo recibe un argumento, sin guardarlo", "It only receives an argument, without storing it"),
    P("Crea una variable local `nombre`", "It creates a local variable `nombre`"),
    P("Es un error de sintaxis", "It's a syntax error"),
  ],
  correct: 0,
  explanation: P(
    "Poner un modificador (`public`/`private`/`readonly`) en un parámetro del constructor crea el campo y lo asigna solo, sin escribir `this.nombre = nombre`. Es azúcar de TypeScript que ahorra el boilerplate más repetido.",
    "Putting a modifier (`public`/`private`/`readonly`) on a constructor parameter creates the field and assigns it for you, without writing `this.nombre = nombre`. It's TypeScript sugar that saves the most repeated boilerplate.",
  ),
};
const Q_READONLY_TS = {
  question: P(
    "¿Qué garantiza `readonly` en una propiedad de clase de TypeScript?",
    "What does `readonly` guarantee on a TypeScript class property?",
  ),
  options: [
    P("Que el compilador impide reasignarla tras el constructor (no en runtime)", "That the compiler prevents reassigning it after the constructor (not at runtime)"),
    P("Que nadie puede leerla", "That no one can read it"),
    P("Que se comparte entre instancias", "That it's shared across instances"),
    P("Que lanza un error si la tocas en ejecución", "That it throws an error if you touch it at runtime"),
  ],
  correct: 0,
  explanation: P(
    "`readonly` es una comprobación de COMPILACIÓN: TS marca error si reasignas la propiedad fuera del constructor. Pero desaparece al transpilar, así que en runtime el JS no lo impide (a diferencia del `readonly` de PHP, que sí lanza).",
    "`readonly` is a COMPILE-time check: TS flags an error if you reassign the property outside the constructor. But it vanishes on transpile, so at runtime the JS doesn't prevent it (unlike PHP's `readonly`, which does throw).",
  ),
};
const Q_CLASS_IMPL = {
  question: P(
    "¿Qué significa `class Espada implements Arma`?",
    "What does `class Espada implements Arma` mean?",
  ),
  options: [
    P("Espada se compromete a tener todo lo que declara la interfaz Arma", "Espada commits to having everything the interface Arma declares"),
    P("Espada hereda el código de Arma", "Espada inherits Arma's code"),
    P("Arma es una clase base", "Arma is a base class"),
    P("Crea una instancia de Arma", "It creates an instance of Arma"),
  ],
  correct: 0,
  explanation: P(
    "`implements` obliga a la clase a cumplir la FORMA de la interfaz: si falta un método o un campo, TS avisa. No aporta código (eso es `extends`); sólo verifica el contrato. Una clase puede implementar varias interfaces.",
    "`implements` forces the class to satisfy the interface's SHAPE: if a method or field is missing, TS warns. It provides no code (that's `extends`); it only verifies the contract. A class can implement several interfaces.",
  ),
};
const Q_STATIC_TS = {
  question: P(
    "`static readonly UMBRAL = 20` dentro de una clase `Nieve`. ¿Cómo lo lees?",
    "`static readonly UMBRAL = 20` inside a class `Nieve`. How do you read it?",
  ),
  options: [
    P("Nieve.UMBRAL", "Nieve.UMBRAL"),
    P("this.UMBRAL", "this.UMBRAL"),
    P("new Nieve().UMBRAL", "new Nieve().UMBRAL"),
    P("UMBRAL", "UMBRAL"),
  ],
  correct: 0,
  explanation: P(
    "`static` pertenece a la CLASE, no a la instancia: se lee con `Nieve.UMBRAL`. `readonly` le añade que no se reasigna. Es la forma típica de una constante ligada a la clase.",
    "`static` belongs to the CLASS, not the instance: read it with `Nieve.UMBRAL`. `readonly` adds that it isn't reassigned. It's the typical form of a class-bound constant.",
  ),
};

/** Capítulo 5 · Clases tipadas: campos, readonly, acceso y propiedades de parámetro. */
export const SYL_TS_COMMUNITY_5: Syllabus = {
  c5_crebain: { kind: "battle", questions: [Q_CLASS_FIELD, Q_PARAM_PROP, Q_READONLY_TS] },
  c5_lobo_nieve: { kind: "battle", questions: [Q_ACCESS, Q_STATIC_TS, Q_CLASS_FIELD] },
  c5_jefe_caradhras: { kind: "battle", questions: [Q_PARAM_PROP, Q_READONLY_TS, Q_CLASS_IMPL, Q_ACCESS] },
  c5_trasgo_montanes: { kind: "battle", questions: [Q_STATIC_TS, Q_CLASS_IMPL, Q_PARAM_PROP] },
  pergamino_hielo: {
    kind: "scroll",
    title: P("El Pergamino del Hielo Tipado", "The Scroll of Typed Ice"),
    lore_intro: P(
      "Gandalf resguarda un pergamino: enseña a moldear objetos con clases donde cada campo declara su tipo, su acceso y si puede cambiar.",
      "Gandalf shelters a scroll: it teaches how to shape objects with classes where each field declares its type, its access and whether it can change.",
    ),
    scroll: {
      topic: P("Clases tipadas: campos, acceso y readonly", "Typed classes: fields, access and readonly"),
      sections: [
        {
          heading: P("Campos con tipo y modificadores", "Typed fields and modifiers"),
          body: P(
            "Dentro de una clase, cada campo declara su tipo: `calor: number = 100`. Los modificadores `public` / `private` controlan el acceso (comprobado al compilar; se borra en runtime — para privacidad real, `#campo`).",
            "Inside a class, each field declares its type: `calor: number = 100`. The `public` / `private` modifiers control access (checked at compile time; erased at runtime — for real privacy, `#field`).",
          ),
          code:
            "class Resistencia {\n  private calor: number = 100;\n  getCalor(): number { return this.calor; }\n}",
        },
        {
          heading: P("Propiedades de parámetro y readonly", "Parameter properties and readonly"),
          body: P(
            "Un modificador en un parámetro del constructor crea y asigna el campo solo, sin `this.x = x`. `readonly` impide reasignarlo tras el constructor (comprobación de compilación).",
            "A modifier on a constructor parameter creates and assigns the field for you, without `this.x = x`. `readonly` prevents reassigning it after the constructor (a compile-time check).",
          ),
          code:
            "class Provision {\n  constructor(\n    public readonly nombre: string,\n    public readonly peso: number,\n  ) {}\n}\nnew Provision('lembas', 5).nombre; // 'lembas'",
        },
        {
          heading: P("static, implements e inmutabilidad", "static, implements and immutability"),
          body: P(
            "`static readonly UMBRAL = 20` es una constante de la clase (se lee `Clase.UMBRAL`). `implements` obliga a cumplir una interfaz. Como `readonly` no protege en runtime, para «cambiar» un valor inmutable se devuelve una instancia nueva.",
            "`static readonly UMBRAL = 20` is a class constant (read as `Class.UMBRAL`). `implements` forces satisfying an interface. Since `readonly` doesn't protect at runtime, to \"change\" an immutable value you return a new instance.",
          ),
          code:
            "class Temperatura {\n  constructor(public readonly grados: number) {}\n  conMas(g: number): Temperatura {\n    return new Temperatura(this.grados + g);\n  }\n}",
        },
      ],
      keyTakeaway: P(
        "Campos con `nombre: tipo`; `public`/`private` para el acceso; propiedades de parámetro para ahorrar boilerplate; `readonly` y `private` son de compilación (para privacidad real, `#`). `static` liga a la clase; «cambiar» un inmutable = nueva instancia.",
        "Fields as `name: type`; `public`/`private` for access; parameter properties to save boilerplate; `readonly` and `private` are compile-time (for real privacy, `#`). `static` binds to the class; \"changing\" an immutable = new instance.",
      ),
    },
  },
  carga_de_bill: {
    kind: "challenge",
    title: P("La Carga de Bill el Poney", "Bill the Pony's Load"),
    lore_intro: P(
      "Una provisión es lo que es: su nombre y su peso se fijan al crearla. Decláralos con una propiedad de parámetro readonly.",
      "A provision is what it is: its name and weight are set on creation. Declare them with a readonly parameter property.",
    ),
    challenge: {
      topic: P("Propiedades de parámetro y readonly", "Parameter properties and readonly"),
      instructions: P(
        "Crea `class Provision` cuyo constructor use propiedades de parámetro `public readonly nombre: string` y `public readonly peso: number` (sin escribir `this.x = x`).\n\nEjemplo: `new Provision('lembas', 5).nombre` → `'lembas'`.",
        "Create `class Provision` whose constructor uses parameter properties `public readonly nombre: string` and `public readonly peso: number` (without writing `this.x = x`).\n\nExample: `new Provision('lembas', 5).nombre` → `'lembas'`.",
      ),
      starter_code:
        "class Provision {\n  constructor(\n    // public readonly nombre: string, public readonly peso: number\n  ) {}\n}\n",
      hints: [
        P("Pon los modificadores en los parámetros: `constructor(public readonly nombre: string, public readonly peso: number) {}`.", "Put the modifiers on the parameters: `constructor(public readonly nombre: string, public readonly peso: number) {}`."),
        P("No necesitas cuerpo en el constructor: TS crea y asigna los campos.", "No constructor body needed: TS creates and assigns the fields."),
      ],
      test_cases: [
        { input: "new Provision('lembas', 5).nombre", expected: "lembas", description: P("El nombre queda fijado", "The name is set"), raw: true },
        { input: "new Provision('lembas', 5).peso", expected: 5, description: P("Y el peso", "And the weight"), raw: true },
        { input: "new Provision('cuerda', 2).peso", expected: 2, description: P("Con otros valores", "With other values"), raw: true },
      ],
    },
  },
  resistencia_comunidad: {
    kind: "challenge",
    title: P("La Resistencia de la Comunidad", "The Fellowship's Endurance"),
    lore_intro: P(
      "Vigila el calor de la Comunidad con un campo privado tipado y una constante de clase, sin bajar nunca de 0.",
      "Guard the Fellowship's warmth with a typed private field and a class constant, never dropping below 0.",
    ),
    challenge: {
      topic: P("Campos privados, static y métodos tipados", "Private fields, static and typed methods"),
      instructions: P(
        "Crea `class ResistenciaComunidad` con `static readonly UMBRAL = 20` y un campo `private calor: number = 100`. Añade:\n• `getCalor(): number`,\n• `enfriar(g: number): void` que reste sin bajar de 0 (`Math.max`),\n• `estaCongelada(): boolean` que devuelva true cuando el calor sea ≤ UMBRAL.",
        "Create `class ResistenciaComunidad` with `static readonly UMBRAL = 20` and a field `private calor: number = 100`. Add:\n• `getCalor(): number`,\n• `enfriar(g: number): void` that subtracts without going below 0 (`Math.max`),\n• `estaCongelada(): boolean` returning true when warmth is ≤ UMBRAL.",
      ),
      starter_code:
        "class ResistenciaComunidad {\n  static readonly UMBRAL = 20;\n  private calor: number = 100;\n\n  getCalor(): number {\n    // ...\n  }\n  enfriar(g: number): void {\n    // Math.max(0, ...)\n  }\n  estaCongelada(): boolean {\n    // ...\n  }\n}\n",
      hints: [
        P("Resta acotada: `this.calor = Math.max(0, this.calor - g);`.", "Clamped subtraction: `this.calor = Math.max(0, this.calor - g);`."),
        P("La constante se lee por la clase: `this.calor <= ResistenciaComunidad.UMBRAL`.", "Read the constant via the class: `this.calor <= ResistenciaComunidad.UMBRAL`."),
      ],
      test_cases: [
        { input: "new ResistenciaComunidad().getCalor()", expected: 100, description: P("Empieza intacta", "Starts intact"), raw: true },
        { input: "new ResistenciaComunidad().estaCongelada()", expected: false, description: P("No congelada al inicio", "Not frozen at first"), raw: true },
        { input: "(() => { const r = new ResistenciaComunidad(); r.enfriar(50); return r.getCalor(); })()", expected: 50, description: P("Baja a 50", "Drops to 50"), raw: true },
        { input: "(() => { const r = new ResistenciaComunidad(); r.enfriar(500); return r.getCalor(); })()", expected: 0, description: P("Nunca baja de 0", "Never below 0"), raw: true },
        { input: "(() => { const r = new ResistenciaComunidad(); r.enfriar(90); return r.estaCongelada(); })()", expected: true, description: P("Con 10 (≤ 20) se congela", "At 10 (≤ 20) it freezes"), raw: true },
      ],
    },
  },
  temperatura_montana: {
    kind: "challenge",
    title: P("El Umbral de la Nieve", "The Snow Threshold"),
    lore_intro: P(
      "Una medida no se altera: si el frío cambia, es OTRA medida. Un objeto de valor tipado que devuelve una instancia nueva.",
      "A measurement isn't altered: if the cold changes, it's ANOTHER measurement. A typed value object that returns a new instance.",
    ),
    challenge: {
      topic: P("Objetos de valor tipados", "Typed value objects"),
      instructions: P(
        "Crea `class Temperatura` con `public readonly grados: number` (propiedad de parámetro). El constructor debe lanzar un `Error` si `grados` está fuera de -40..40. Añade `conMas(g: number): Temperatura` que devuelva una INSTANCIA NUEVA con los grados sumados.\n\nEjemplo: `new Temperatura(-10).conMas(-5).grados` → `-15`.",
        "Create `class Temperatura` with `public readonly grados: number` (parameter property). The constructor must throw an `Error` if `grados` is outside -40..40. Add `conMas(g: number): Temperatura` returning a NEW INSTANCE with the added degrees.\n\nExample: `new Temperatura(-10).conMas(-5).grados` → `-15`.",
      ),
      starter_code:
        "class Temperatura {\n  constructor(public readonly grados: number) {\n    // valida -40..40 y lanza si se pasa\n  }\n  conMas(g: number): Temperatura {\n    // devuelve OTRA Temperatura\n  }\n}\n",
      hints: [
        P("Valida en el constructor: `if (grados < -40 || grados > 40) throw new Error('rango');`.", "Validate in the constructor: `if (grados < -40 || grados > 40) throw new Error('rango');`."),
        P("`conMas` no muta: `return new Temperatura(this.grados + g);`.", "`conMas` doesn't mutate: `return new Temperatura(this.grados + g);`."),
      ],
      test_cases: [
        { input: "new Temperatura(-10).grados", expected: -10, description: P("La de partida", "The starting one"), raw: true },
        { input: "new Temperatura(-10).conMas(-5).grados", expected: -15, description: P("Una más fría", "A colder one"), raw: true },
        { input: "(() => { const t = new Temperatura(-10); t.conMas(-5); return t.grados; })()", expected: -10, description: P("La original no cambia", "The original doesn't change"), raw: true },
        { input: "(() => { try { new Temperatura(-100); return false; } catch (e) { return true; } })()", expected: true, description: P("Rechaza fuera de rango", "Rejects out of range"), raw: true },
      ],
    },
  },
};
