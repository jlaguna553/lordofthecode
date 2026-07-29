import type { Syllabus } from "@/lib/game/narrative";

/**
 * Temario de JavaScript para el Libro I. Reviste la MISMA narrativa compartida
 * de la Comunidad (Sombras en la Comarca) con fundamentos de JavaScript.
 * Bilingüe ES/EN.
 */

const P = (es: string, en: string) => ({ es, en });

/** Preguntas de combate reutilizables sobre fundamentos de JS. */
const Q_CONST_LET = {
  question: P(
    "¿Qué usarías para una variable que NO vas a reasignar?",
    "What would you use for a variable you will NOT reassign?",
  ),
  options: [
    P("const", "const"),
    P("let", "let"),
    P("var", "var"),
    P("Da igual", "It doesn't matter"),
  ],
  correct: 0,
  explanation: P(
    "`const` por defecto: expresa que el valor no cambia y evita reasignaciones accidentales. `let` sólo si vas a reasignar; `var` está obsoleto.",
    "`const` by default: states the value won't change and prevents accidental reassignment. `let` only if you'll reassign; `var` is obsolete.",
  ),
};

const Q_STRICT = {
  question: P("¿Qué imprime `42 === '42'`?", "What does `42 === '42'` print?"),
  options: [
    P("false, porque son de distinto tipo", "false, they're different types"),
    P("true", "true"),
    P("Error de tipos", "Type error"),
    P("'42'", "'42'"),
  ],
  correct: 0,
  explanation: P(
    "`===` compara valor Y tipo sin conversiones: un number nunca es igual a un string. `==` convertiría y daría true, por eso se evita.",
    "`===` compares value AND type with no conversions: a number is never equal to a string. `==` would convert and return true, which is why it's avoided.",
  ),
};

const Q_TEMPLATE = {
  question: P(
    "¿Cómo se incrusta una expresión en una template string?",
    "How do you embed an expression in a template string?",
  ),
  options: [
    P("`texto ${expresión}`", "`text ${expression}`"),
    P('"texto {expresión}"', '"text {expression}"'),
    P("'texto' + expresión", "'text' + expression"),
    P("`texto #{expresión}`", "`text #{expression}`"),
  ],
  correct: 0,
  explanation: P(
    "Comillas invertidas y ${ }. La opción con + es concatenación normal (funciona, pero menos legible); #{} es de otros lenguajes.",
    "Backticks and ${ }. The + option is plain concatenation (works, but less readable); #{} is from other languages.",
  ),
};

const Q_TYPEOF = {
  question: P(
    "¿Qué devuelve `typeof 42`?",
    "What does `typeof 42` return?",
  ),
  options: [
    P("'number'", "'number'"),
    P("'int'", "'int'"),
    P("'42'", "'42'"),
    P("number", "number"),
  ],
  correct: 0,
  explanation: P(
    "`typeof` devuelve un STRING con el nombre del tipo: 'number', 'string', 'boolean', 'undefined'… En JS no hay int/float separados: todo número es `number`.",
    "`typeof` returns a STRING with the type name: 'number', 'string', 'boolean', 'undefined'… JS has no separate int/float: every number is `number`.",
  ),
};

const Q_NUMBER = {
  question: P(
    "¿Cómo conviertes el texto '42' en el número 42?",
    "How do you turn the text '42' into the number 42?",
  ),
  options: [
    P("Number('42')", "Number('42')"),
    P("int('42')", "int('42')"),
    P("'42'.toNumber()", "'42'.toNumber()"),
    P("(int) '42'", "(int) '42'"),
  ],
  correct: 0,
  explanation: P(
    "`Number('42')` (o `parseInt`) convierte texto a número. No existe `int()` ni casts con paréntesis como en otros lenguajes.",
    "`Number('42')` (or `parseInt`) turns text into a number. There is no `int()` nor paren casts like in other languages.",
  ),
};

const Q_FALSY = {
  question: P(
    "¿Cuál de estos valores es 'falsy' (se comporta como false)?",
    "Which of these values is 'falsy' (behaves like false)?",
  ),
  options: [
    P("0", "0"),
    P("'0'", "'0'"),
    P("[]", "[]"),
    P("'false'", "'false'"),
  ],
  correct: 0,
  explanation: P(
    "Los falsy en JS son: false, 0, '', null, undefined y NaN. Ojo: '0', [] y 'false' son todos TRUTHY (un string no vacío o un array siempre lo son).",
    "The falsy values in JS are: false, 0, '', null, undefined and NaN. Careful: '0', [] and 'false' are all TRUTHY (a non-empty string or an array always are).",
  ),
};

const Q_TERNARY = {
  question: P(
    "¿Qué es `x >= 0 ? '+' : '-'`?",
    "What is `x >= 0 ? '+' : '-'`?",
  ),
  options: [
    P("Un operador ternario: devuelve un valor según la condición", "A ternary operator: returns a value based on the condition"),
    P("Un error de sintaxis", "A syntax error"),
    P("Un bucle", "A loop"),
    P("Una función anónima", "An anonymous function"),
  ],
  correct: 0,
  explanation: P(
    "El ternario `cond ? a : b` es una EXPRESIÓN que devuelve `a` si la condición es cierta y `b` si no. Práctico para asignar un valor según una condición.",
    "The ternary `cond ? a : b` is an EXPRESSION that returns `a` if the condition is true and `b` otherwise. Handy to assign a value based on a condition.",
  ),
};

export const SYL_JS_COMMUNITY_1: Syllabus = {
  c1_espia: {
    kind: "battle",
    questions: [Q_CONST_LET, Q_TEMPLATE, Q_TYPEOF],
  },
  c1_jinete_rastreador: {
    kind: "battle",
    questions: [Q_STRICT, Q_NUMBER, Q_FALSY],
  },
  c1_perro_negro: {
    kind: "battle",
    questions: [Q_TEMPLATE, Q_TYPEOF, Q_TERNARY],
  },
  c1_jefe_nazgul: {
    kind: "battle",
    questions: [Q_STRICT, Q_CONST_LET, Q_FALSY, Q_NUMBER],
  },
  pergamino_clases: {
    kind: "scroll",
    title: P("El Pergamino del Guión", "The Scroll of the Script"),
    lore_intro: P(
      "Entre los papeles del viejo Bilbo, un pergamino en una lengua nueva enseña a nombrar las cosas.",
      "Among old Bilbo's papers, a scroll in a new tongue teaches how to name things.",
    ),
    scroll: {
      topic: P(
        "JavaScript desde cero: variables, tipos y decisiones",
        "JavaScript from scratch: variables, types and decisions",
      ),
      sections: [
        {
          heading: P("Variables: const y let", "Variables: const and let"),
          body: P(
            "Se declara con `const` (no se reasigna) o `let` (sí). Evita `var`. No se declara el tipo: lo deduce el valor.",
            "Declare with `const` (never reassigned) or `let` (reassignable). Avoid `var`. You don't declare the type: the value implies it.",
          ),
          code:
            "const nombre = 'Frodo';   // string\nlet edad = 50;            // number\nedad = 51;                // ok con let\nconst activo = true;      // boolean",
        },
        {
          heading: P("Template strings", "Template strings"),
          body: P(
            "Con comillas invertidas (`) incrustas expresiones con ${...}. Más legible que concatenar con +.",
            "With backticks (`) you embed expressions with ${...}. More readable than concatenating with +.",
          ),
          code: "const n = 'Sam';\n`Hola, ${n}`          // 'Hola, Sam'\n`El doble es ${2 * 21}`  // 'El doble es 42'",
        },
        {
          heading: P("Tipos y comparación", "Types and comparison"),
          body: P(
            "`Number('42')` convierte texto a número. Usa SIEMPRE `===` (estricto): compara valor y tipo. `==` hace conversiones traicioneras.",
            "`Number('42')` turns text into a number. Always use `===` (strict): compares value and type. `==` does treacherous conversions.",
          ),
          code: "Number('42')     // 42\n42 === 42        // true\n42 === '42'      // false (distinto tipo)\n42 == '42'       // true  (¡evítalo!)",
        },
        {
          heading: P("Decisiones", "Decisions"),
          body: P(
            "`if` / `else if` / `else` para ramificar. El ternario `cond ? a : b` es una expresión que devuelve un valor.",
            "`if` / `else if` / `else` to branch. The ternary `cond ? a : b` is an expression that returns a value.",
          ),
          code: "if (n <= 0) estado = 'vacío';\nelse if (n < 3) estado = 'algo';\nelse estado = 'lleno';\n\nconst signo = x >= 0 ? '+' : '-';",
        },
      ],
      keyTakeaway: P(
        "const por defecto, let si reasignas, nunca var. Template strings con `${}`. Compara con === (nunca ==).",
        "const by default, let if you reassign, never var. Template strings with `${}`. Compare with === (never ==).",
      ),
    },
  },
  sendero_comarca: {
    kind: "challenge",
    title: P("Preparar la Huida", "Preparing to Flee"),
    lore_intro: P(
      "Antes de partir, aprende a decir quién eres. Escribe tu primera función.",
      "Before you leave, learn to say who you are. Write your first function.",
    ),
    challenge: {
      topic: P("Funciones y template strings", "Functions and template strings"),
      instructions: P(
        "Escribe `presentarse(nombre)` que devuelva una template string con el formato exacto:\n\n  Soy {nombre} de la Comarca\n\nPor ejemplo, `presentarse('Frodo')` devuelve `'Soy Frodo de la Comarca'`.",
        "Write `presentarse(nombre)` that returns a template string with the exact format:\n\n  Soy {name} de la Comarca\n\nFor example, `presentarse('Frodo')` returns `'Soy Frodo de la Comarca'`.",
      ),
      starter_code:
        "function presentarse(nombre) {\n  // devuelve `Soy ${nombre} de la Comarca`\n}\n",
      hints: [
        P(
          "Una template string va entre comillas invertidas: `...`.",
          "A template string is wrapped in backticks: `...`.",
        ),
        P(
          "La variable va dentro de ${ }: `Soy ${nombre} de la Comarca`.",
          "The variable goes inside ${ }: `Soy ${nombre} de la Comarca`.",
        ),
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
      "Un Jinete Negro olfatea el aire. Controla tu Sigilo con números y comparaciones para pasar inadvertido.",
      "A Black Rider sniffs the air. Control your Stealth with numbers and comparisons to slip by unseen.",
    ),
    challenge: {
      topic: P("Números y comparación", "Numbers and comparison"),
      instructions: P(
        "Escribe dos funciones:\n\n• `ocultar(actual, n)` — suma `n` al sigilo `actual`, SIN pasar de 100. Usa `Math.min`.\n• `esVisible(sigilo, percepcion)` — devuelve true si tu `sigilo` es MENOR que la `percepcion` del Nazgûl.",
        "Write two functions:\n\n• `ocultar(actual, n)` — adds `n` to the current stealth, capped at 100. Use `Math.min`.\n• `esVisible(sigilo, percepcion)` — returns true if your `sigilo` is LESS than the Nazgûl's `percepcion`.",
      ),
      starter_code:
        "function ocultar(actual, n) {\n  // Math.min(100, ...)\n}\n\nfunction esVisible(sigilo, percepcion) {\n  // ...\n}\n",
      hints: [
        P(
          "`Math.min(100, actual + n)` nunca devuelve más de 100.",
          "`Math.min(100, actual + n)` never returns more than 100.",
        ),
        P(
          "`sigilo < percepcion` ya es un booleano: devuélvelo.",
          "`sigilo < percepcion` is already a boolean: return it.",
        ),
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
