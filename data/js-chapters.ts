import type { Chapter } from "@/lib/game/types";

/**
 * Aventura de JavaScript (bilingüe ES/EN desde el origen). JS se ejecuta de
 * forma nativa en el navegador, sin runtime que descargar. Temática ligera: un
 * aprendiz recorre las Tierras del Navegador aprendiendo el lenguaje de la web.
 */
export const CHAPTER_JS_1: Chapter = {
  chapter: 1,
  title: {
    es: "Las Tierras del Navegador",
    en: "The Lands of the Browser",
  },
  lore: {
    es: "Empieza un nuevo viaje en el lenguaje que mueve la web. Aquí se aprende JavaScript desde la primera línea: variables, tipos y decisiones.",
    en: "A new journey begins in the language that powers the web. Here you learn JavaScript from the first line: variables, types and decisions.",
  },
  mapSize: { cols: 24, rows: 14 },
  spawn: { x: 2, y: 7 },
  scenery: {
    ground: "grass",
    pathRows: [7],
    npcs: [{ spriteId: "aldeano", x: 5, y: 9, label: { es: "El Mentor", en: "The Mentor" } }],
    dialogues: [
      {
        x: 8,
        y: 8,
        speaker: "aldeano",
        name: { es: "El Mentor", en: "The Mentor" },
        text: {
          es: "En JavaScript casi todo es una expresión. Prueba, observa, ajusta.",
          en: "In JavaScript almost everything is an expression. Try, observe, adjust.",
        },
      },
    ],
    decor: [
      { type: "tree", x: 6, y: 2 },
      { type: "tree", x: 11, y: 3 },
      { type: "tree", x: 16, y: 2 },
      { type: "tree", x: 20, y: 4 },
      { type: "rock", x: 9, y: 5 },
      { type: "rock", x: 14, y: 10 },
      { type: "tree", x: 4, y: 12 },
      { type: "tree", x: 18, y: 12 },
    ],
  },
  nodes: [
    {
      node_id: "js1_pergamino",
      kind: "scroll",
      title: { es: "El Pergamino del Guión", en: "The Scroll of the Script" },
      lore_intro: {
        es: "Grabado en una piedra a la entrada de las Tierras del Navegador.",
        en: "Carved on a stone at the entrance to the Lands of the Browser.",
      },
      position: { x: 4, y: 5 },
      scroll: {
        topic: {
          es: "JavaScript desde cero: variables, tipos y decisiones",
          en: "JavaScript from scratch: variables, types and decisions",
        },
        sections: [
          {
            heading: { es: "Variables: const y let", en: "Variables: const and let" },
            body: {
              es: "Se declara con `const` (no se reasigna) o `let` (sí). Evita `var`. No se declara el tipo: lo deduce el valor. El nombre distingue mayúsculas.",
              en: "Declare with `const` (never reassigned) or `let` (reassignable). Avoid `var`. You don't declare the type: the value implies it. Names are case-sensitive.",
            },
            code:
              "const nombre = 'Frodo';   // string\nlet edad = 50;            // number\nedad = 51;                // ok con let\nconst activo = true;      // boolean\nlet nada = null;          // ausencia de valor",
          },
          {
            heading: { es: "Template strings", en: "Template strings" },
            body: {
              es: "Con comillas invertidas (`) puedes incrustar expresiones con ${...}. Más legible que concatenar con +.",
              en: "With backticks (`) you can embed expressions with ${...}. More readable than concatenating with +.",
            },
            code:
              "const n = 'Sam';\n`Hola, ${n}`          // 'Hola, Sam'\n`El doble es ${2 * 21}`  // 'El doble es 42'",
          },
          {
            heading: { es: "Tipos y comparación", en: "Types and comparison" },
            body: {
              es: "`Number('42')` convierte texto a número; `String(42)` al revés. Usa SIEMPRE `===` (estricto): compara valor y tipo. `==` hace conversiones traicioneras.",
              en: "`Number('42')` turns text into a number; `String(42)` the reverse. Always use `===` (strict): compares value and type. `==` does treacherous conversions.",
            },
            code:
              "Number('42')     // 42\n42 === 42        // true\n42 === '42'      // false (distinto tipo)\n42 == '42'       // true  (¡evítalo!)",
          },
          {
            heading: { es: "Decisiones", en: "Decisions" },
            body: {
              es: "`if` / `else if` / `else` para ramificar. El ternario `cond ? a : b` es una expresión que devuelve un valor. Los operadores lógicos son &&, ||, !.",
              en: "`if` / `else if` / `else` to branch. The ternary `cond ? a : b` is an expression that returns a value. Logical operators are &&, ||, !.",
            },
            code:
              "if (n <= 0) estado = 'vacío';\nelse if (n < 3) estado = 'algo';\nelse estado = 'lleno';\n\nconst signo = x >= 0 ? '+' : '-';",
          },
        ],
        keyTakeaway: {
          es: "const por defecto, let si reasignas, nunca var. Template strings con `${}`. Compara con === (nunca ==). Tipos: Number()/String().",
          en: "const by default, let if you reassign, never var. Template strings with `${}`. Compare with === (never ==). Types: Number()/String().",
        },
      },
    },
    {
      node_id: "js1_presentar",
      title: { es: "La primera línea", en: "The first line" },
      lore_intro: {
        es: "«Antes de andar, aprende a saludar», dice el Mentor.",
        en: "\"Before you walk, learn to greet\", says the Mentor.",
      },
      position: { x: 9, y: 6 },
      spriteId: "aldeano",
      poo_challenge: {
        lang: "javascript",
        topic: {
          es: "Variables y template strings",
          en: "Variables and template strings",
        },
        instructions: {
          es: "Escribe `presentar(nombre, edad)` que devuelva una template string con el formato exacto:\n\n  Nombre (edad)\n\nPor ejemplo, `presentar('Frodo', 50)` devuelve `'Frodo (50)'`. Usa comillas invertidas y ${...}.",
          en: "Write `presentar(nombre, edad)` that returns a template string with the exact format:\n\n  Name (age)\n\nFor example, `presentar('Frodo', 50)` returns `'Frodo (50)'`. Use backticks and ${...}.",
        },
        starter_code:
          "function presentar(nombre, edad) {\n  // devuelve `Nombre (edad)`\n}\n",
        hints: [
          {
            es: "Una template string va entre comillas invertidas: `...`.",
            en: "A template string is wrapped in backticks: `...`.",
          },
          {
            es: "Las expresiones van dentro de ${ }: `${nombre} (${edad})`.",
            en: "Expressions go inside ${ }: `${nombre} (${edad})`.",
          },
          {
            es: "return `${nombre} (${edad})`;",
            en: "return `${nombre} (${edad})`;",
          },
        ],
        test_cases: [
          {
            input: "presentar('Frodo', 50)",
            expected: "Frodo (50)",
            description: { es: "El formato exacto", en: "The exact format" },
            raw: true,
          },
          {
            input: "presentar('Sam', 38)",
            expected: "Sam (38)",
            description: { es: "Con otros valores", en: "With other values" },
            raw: true,
          },
          {
            input: "presentar('Gandalf', 2019)",
            expected: "Gandalf (2019)",
            description: { es: "Y números grandes", en: "And big numbers" },
            raw: true,
          },
        ],
      },
    },
    {
      node_id: "js1_numeros",
      title: { es: "Cuentas del camino", en: "Roadside sums" },
      lore_intro: {
        es: "El Mentor dibuja números en la tierra con un palo.",
        en: "The Mentor draws numbers in the dirt with a stick.",
      },
      position: { x: 14, y: 5 },
      spriteId: "aldeano",
      poo_challenge: {
        lang: "javascript",
        topic: { es: "Números, tipos y ===", en: "Numbers, types and ===" },
        instructions: {
          es: "Escribe dos funciones:\n\n• `esMayor(n)` — devuelve true si `n` es 18 o más.\n• `aEntero(texto)` — convierte un texto como '42' a su número (para poder sumarlo).\n\nUsa `Number(...)` para convertir y comparación estricta.",
          en: "Write two functions:\n\n• `esMayor(n)` — returns true if `n` is 18 or more.\n• `aEntero(texto)` — converts a text like '42' into its number (so it can be added).\n\nUse `Number(...)` to convert and strict comparison.",
        },
        starter_code:
          "function esMayor(n) {\n  // ...\n}\n\nfunction aEntero(texto) {\n  // ...\n}\n",
        hints: [
          {
            es: "`n >= 18` ya es un booleano: puedes devolverlo directamente.",
            en: "`n >= 18` is already a boolean: you can return it directly.",
          },
          {
            es: "`Number('42')` devuelve el número 42, no el texto.",
            en: "`Number('42')` returns the number 42, not the text.",
          },
          {
            es: "return n >= 18; y return Number(texto);",
            en: "return n >= 18; and return Number(texto);",
          },
        ],
        test_cases: [
          { input: "esMayor(18)", expected: true, description: { es: "Justo 18", en: "Exactly 18" }, raw: true },
          { input: "esMayor(17)", expected: false, description: { es: "Uno menos", en: "One less" }, raw: true },
          { input: "esMayor(40)", expected: true, description: { es: "De sobra", en: "Well over" }, raw: true },
          { input: "aEntero('42')", expected: 42, description: { es: "Texto a número", en: "Text to number" }, raw: true },
          { input: "aEntero('42') + 8", expected: 50, description: { es: "Y se puede sumar", en: "And it can be added" }, raw: true },
        ],
      },
    },
    {
      node_id: "js1_decidir",
      title: { es: "La encrucijada", en: "The crossroads" },
      lore_intro: {
        es: "Tres caminos se abren según lo que lleves en el zurrón.",
        en: "Three paths open depending on what's in your satchel.",
      },
      position: { x: 20, y: 6 },
      spriteId: "aldeano",
      poo_challenge: {
        lang: "javascript",
        topic: { es: "Condicionales", en: "Conditionals" },
        instructions: {
          es: "Escribe `clasificar(n)` que devuelva:\n\n• 'vacío' si `n` es 0 o menos\n• 'algo' si es 1 o 2\n• 'lleno' si es 3 o más\n\nUsa if / else if / else.",
          en: "Write `clasificar(n)` that returns:\n\n• 'vacío' if `n` is 0 or less\n• 'algo' if it's 1 or 2\n• 'lleno' if it's 3 or more\n\nUse if / else if / else.",
        },
        starter_code:
          "function clasificar(n) {\n  if (n <= 0) return 'vacío';\n  // añade else if y else\n}\n",
        hints: [
          {
            es: "Tres casos, tres ramas: if (n <= 0) … else if (n < 3) … else …",
            en: "Three cases, three branches: if (n <= 0) … else if (n < 3) … else …",
          },
          {
            es: "Con `<= 0` cubres el 0 y los negativos; con `< 3`, el 1 y el 2.",
            en: "`<= 0` covers 0 and negatives; `< 3` covers 1 and 2.",
          },
          {
            es: "El else final recoge 3 o más.",
            en: "The final else catches 3 or more.",
          },
        ],
        test_cases: [
          { input: "clasificar(0)", expected: "vacío", description: { es: "Nada", en: "Nothing" }, raw: true },
          { input: "clasificar(-2)", expected: "vacío", description: { es: "Negativo", en: "Negative" }, raw: true },
          { input: "clasificar(2)", expected: "algo", description: { es: "Uno o dos", en: "One or two" }, raw: true },
          { input: "clasificar(3)", expected: "lleno", description: { es: "Tres justos", en: "Exactly three" }, raw: true },
          { input: "clasificar(9)", expected: "lleno", description: { es: "De ahí p'arriba", en: "And up" }, raw: true },
        ],
      },
    },
    {
      node_id: "js1_quiz",
      kind: "quiz",
      title: { es: "El acertijo del Mentor", en: "The Mentor's riddle" },
      lore_intro: {
        es: "«Una última pregunta antes de dejarte pasar.»",
        en: "\"One last question before I let you pass.\"",
      },
      position: { x: 12, y: 11 },
      spriteId: "aldeano",
      quiz: {
        topic: { es: "Fundamentos de JavaScript", en: "JavaScript fundamentals" },
        questions: [
          {
            question: {
              es: "¿Qué imprime `42 === '42'`?",
              en: "What does `42 === '42'` print?",
            },
            options: [
              { es: "false, porque son de distinto tipo", en: "false, because they're different types" },
              { es: "true", en: "true" },
              { es: "Error de tipos", en: "Type error" },
              { es: "'42'", en: "'42'" },
            ],
            correct: 0,
            explanation: {
              es: "`===` compara valor Y tipo, sin conversiones: un number nunca es igual a un string. `==` sí convertiría y daría true, por eso se evita.",
              en: "`===` compares value AND type, no conversions: a number is never equal to a string. `==` would convert and return true, which is why it's avoided.",
            },
          },
          {
            question: {
              es: "¿Cuál usarías para una variable que NO vas a reasignar?",
              en: "Which would you use for a variable you will NOT reassign?",
            },
            options: [
              { es: "const", en: "const" },
              { es: "let", en: "let" },
              { es: "var", en: "var" },
              { es: "Da igual", en: "It doesn't matter" },
            ],
            correct: 0,
            explanation: {
              es: "`const` por defecto: expresa que el valor no cambia y evita reasignaciones accidentales. `let` sólo si vas a reasignar. `var` está obsoleto.",
              en: "`const` by default: it states the value won't change and prevents accidental reassignment. `let` only if you'll reassign. `var` is obsolete.",
            },
          },
          {
            question: {
              es: "¿Cómo se incrusta una expresión en una template string?",
              en: "How do you embed an expression in a template string?",
            },
            options: [
              { es: "`texto ${expresión}`", en: "`text ${expression}`" },
              { es: "\"texto {expresión}\"", en: "\"text {expression}\"" },
              { es: "'texto' + expresión", en: "'text' + expression" },
              { es: "`texto #{expresión}`", en: "`text #{expression}`" },
            ],
            correct: 0,
            explanation:
              {
                es: "Comillas invertidas y ${ }. La opción con + es concatenación normal (funciona, pero es menos legible); #{} es de otros lenguajes.",
                en: "Backticks and ${ }. The + option is plain concatenation (works, but less readable); #{} is from other languages.",
              },
          },
        ],
      },
    },
  ],
};
