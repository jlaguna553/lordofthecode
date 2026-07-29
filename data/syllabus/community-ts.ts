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
