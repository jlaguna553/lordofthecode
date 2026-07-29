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


/** Preguntas de combate sobre control de flujo en JavaScript. */
const Q_FOR = {
  question: P("¿Cómo recorres cada elemento de un array `xs`?", "How do you go over each element of an array `xs`?"),
  options: [
    P("for (const x of xs) { ... }", "for (const x of xs) { ... }"),
    P("for (x in xs) { ... }", "for (x in xs) { ... }"),
    P("foreach (xs as x) { ... }", "foreach (xs as x) { ... }"),
    P("loop xs { ... }", "loop xs { ... }"),
  ],
  correct: 0,
  explanation: P(
    "`for...of` recorre los VALORES de un array. `for...in` recorre las CLAVES (índices como string) y casi nunca es lo que quieres para arrays.",
    "`for...of` iterates the VALUES of an array. `for...in` iterates the KEYS (indices as strings) and is rarely what you want for arrays.",
  ),
};
const Q_WHILE = {
  question: P("¿Qué bucle usas cuando no sabes de antemano cuántas vueltas dará?", "Which loop do you use when you don't know how many turns you'll need?"),
  options: [
    P("while", "while"),
    P("for de rango fijo", "a fixed-range for"),
    P("map", "map"),
    P("switch", "switch"),
  ],
  correct: 0,
  explanation: P(
    "`while (condición)` repite mientras la condición sea cierta: ideal cuando la parada depende de un estado que evoluciona. Algo dentro debe acercar la condición a falsa, o el bucle es infinito.",
    "`while (condition)` repeats while the condition holds: ideal when stopping depends on an evolving state. Something inside must move the condition toward false, or the loop is infinite.",
  ),
};
const Q_PUSH = {
  question: P("¿Cómo añades un elemento al final de un array `r`?", "How do you add an element to the end of an array `r`?"),
  options: [
    P("r.push(x)", "r.push(x)"),
    P("r.add(x)", "r.add(x)"),
    P("r[] = x", "r[] = x"),
    P("r.append(x)", "r.append(x)"),
  ],
  correct: 0,
  explanation: P(
    "`array.push(x)` añade al final. `r[] = x` es de PHP; `.add()`/`.append()` son de otros lenguajes.",
    "`array.push(x)` appends. `r[] = x` is PHP; `.add()`/`.append()` are from other languages.",
  ),
};
const Q_BREAK = {
  question: P("¿Qué diferencia hay entre `break` y `continue` dentro de un bucle?", "What's the difference between `break` and `continue` inside a loop?"),
  options: [
    P("break sale del bucle; continue salta a la siguiente vuelta", "break exits the loop; continue jumps to the next turn"),
    P("Son sinónimos", "They're synonyms"),
    P("break salta una vuelta; continue termina el bucle", "break skips one turn; continue ends the loop"),
    P("continue sale del programa", "continue exits the program"),
  ],
  correct: 0,
  explanation: P(
    "`break` abandona el bucle por completo; `continue` sólo se salta lo que queda del cuerpo y sigue con la próxima iteración.",
    "`break` leaves the loop entirely; `continue` only skips the rest of the body and moves to the next iteration.",
  ),
};
const Q_LEN = {
  question: P("¿Cómo obtienes cuántos elementos tiene un array `xs`?", "How do you get how many elements an array `xs` has?"),
  options: [
    P("xs.length", "xs.length"),
    P("xs.size()", "xs.size()"),
    P("count(xs)", "count(xs)"),
    P("len(xs)", "len(xs)"),
  ],
  correct: 0,
  explanation: P(
    "`xs.length` es una PROPIEDAD (sin paréntesis), no un método. `count()` es de PHP y `len()` de Python.",
    "`xs.length` is a PROPERTY (no parentheses), not a method. `count()` is PHP and `len()` is Python.",
  ),
};

/** Capítulo 2 · Control de flujo: bucles y arrays. */
export const SYL_JS_COMMUNITY_2: Syllabus = {
  c2_raiz: { kind: "battle", questions: [Q_FOR, Q_PUSH, Q_LEN] },
  c2_niebla: { kind: "battle", questions: [Q_WHILE, Q_BREAK, Q_FOR] },
  c2_sauce: { kind: "battle", questions: [Q_PUSH, Q_LEN, Q_WHILE] },
  c2_jefe_tumulario: { kind: "battle", questions: [Q_FOR, Q_WHILE, Q_BREAK, Q_PUSH] },
  pergamino_ciclo_vida: {
    kind: "scroll",
    title: P("El Pergamino del Camino", "The Scroll of the Path"),
    lore_intro: P(
      "Junto a la Cerca, un aviso enseña a recorrer y repetir sin cansarse.",
      "By the Hedge, a notice teaches how to traverse and repeat without tiring.",
    ),
    scroll: {
      topic: P("Control de flujo: bucles y arrays", "Control flow: loops and arrays"),
      sections: [
        {
          heading: P("for...of: recorrer un array", "for...of: iterate an array"),
          body: P(
            "`for (const x of xs)` toma cada VALOR del array. Para acumular resultados, empieza con un array vacío y usa `push`.",
            "`for (const x of xs)` takes each VALUE of the array. To collect results, start with an empty array and use `push`.",
          ),
          code: "const r = [];\nfor (const n of [1, 2, 3]) {\n  r.push(n * 2);\n}\n// r === [2, 4, 6]",
        },
        {
          heading: P("while: repetir mientras algo sea cierto", "while: repeat while something holds"),
          body: P(
            "`while (cond)` repite hasta que la condición deje de cumplirse. Úsalo cuando no sabes cuántas vueltas harán falta.",
            "`while (cond)` repeats until the condition stops holding. Use it when you don't know how many turns you'll need.",
          ),
          code: "let vida = 100;\nlet golpes = 0;\nwhile (vida > 0) {\n  vida -= 30;\n  golpes++;\n}",
        },
        {
          heading: P("Arrays: length y push", "Arrays: length and push"),
          body: P(
            "`xs.length` (propiedad, sin paréntesis) da el número de elementos. `xs.push(x)` añade al final. `Math.max(0, n)` acota por abajo.",
            "`xs.length` (a property, no parentheses) gives the element count. `xs.push(x)` appends. `Math.max(0, n)` clamps from below.",
          ),
          code: "const a = ['Frodo', 'Sam'];\na.length      // 2\na.push('Merry');\nMath.max(0, -5)  // 0",
        },
      ],
      keyTakeaway: P(
        "for...of recorre valores; while repite mientras algo sea cierto; con [] + push acumulas resultados. length es propiedad, no método.",
        "for...of iterates values; while repeats while something holds; with [] + push you collect results. length is a property, not a method.",
      ),
    },
  },
  viejo_hombre_sauce: {
    kind: "challenge",
    title: P("El Viejo Hombre Sauce", "Old Man Willow"),
    lore_intro: P(
      "El sauce atrapa a los hobbits uno a uno. Recorre la lista con un bucle.",
      "The willow snares the hobbits one by one. Walk the list with a loop.",
    ),
    challenge: {
      topic: P("Bucle for sobre un array", "for loop over an array"),
      instructions: P(
        "Escribe `atrapar(nombres)` que reciba un array de nombres y devuelva un array nuevo donde cada nombre pasa a ser `'{nombre} queda atrapado'`.\n\nPor ejemplo, `atrapar(['Merry', 'Pippin'])` → `['Merry queda atrapado', 'Pippin queda atrapado']`.",
        "Write `atrapar(nombres)` that takes an array of names and returns a new array where each name becomes `'{name} queda atrapado'`.\n\nFor example, `atrapar(['Merry', 'Pippin'])` → `['Merry queda atrapado', 'Pippin queda atrapado']`.",
      ),
      starter_code:
        "function atrapar(nombres) {\n  const r = [];\n  // recorre y añade con push\n  return r;\n}\n",
      hints: [
        P("`for (const n of nombres) { ... }` recorre cada nombre.", "`for (const n of nombres) { ... }` goes over each name."),
        P("Dentro: `r.push(`${n} queda atrapado`)`.", "Inside: `r.push(`${n} queda atrapado`)`."),
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
      "El frío del Tumulario drena varias vidas a la vez, pero nunca por debajo de cero.",
      "The wight's cold drains several lives at once, but never below zero.",
    ),
    challenge: {
      topic: P("Bucle con condición (Math.max)", "Loop with a condition (Math.max)"),
      instructions: P(
        "Escribe `drenarVarios(vidas, frio)` que reciba un array de vidas y un número `frio`, y devuelva un array nuevo con cada vida menos `frio`, SIN bajar de 0. Usa `Math.max(0, ...)`.\n\nEjemplo: `drenarVarios([100, 20, 5], 30)` → `[70, 0, 0]`.",
        "Write `drenarVarios(vidas, frio)` that takes an array of lives and a number `frio`, and returns a new array with each life minus `frio`, never below 0. Use `Math.max(0, ...)`.\n\nExample: `drenarVarios([100, 20, 5], 30)` → `[70, 0, 0]`.",
      ),
      starter_code:
        "function drenarVarios(vidas, frio) {\n  const r = [];\n  // recorre y resta, sin bajar de 0\n  return r;\n}\n",
      hints: [
        P("`for (const v of vidas)` recorre cada vida.", "`for (const v of vidas)` goes over each life."),
        P("`r.push(Math.max(0, v - frio))` nunca añade menos de 0.", "`r.push(Math.max(0, v - frio))` never adds less than 0."),
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
      "Tom canta y el hechizo se debilita golpe a golpe. ¿Cuántos versos hacen falta para romperlo?",
      "Tom sings and the spell weakens verse by verse. How many verses does it take to break it?",
    ),
    challenge: {
      topic: P("Bucle while con contador", "while loop with a counter"),
      instructions: P(
        "Escribe `romperHechizo(fuerza, golpe)` que devuelva cuántos versos (de valor `golpe`) hacen falta para reducir la `fuerza` del hechizo a 0 o menos.\n\nCada verso resta `golpe` a la fuerza. Cuenta los versos con un `while`. Si la fuerza ya es 0 o menos, hacen falta 0.",
        "Write `romperHechizo(fuerza, golpe)` that returns how many verses (of value `golpe`) it takes to reduce the spell's `fuerza` to 0 or less.\n\nEach verse subtracts `golpe`. Count the verses with a `while`. If `fuerza` is already 0 or less, it takes 0.",
      ),
      starter_code:
        "function romperHechizo(fuerza, golpe) {\n  let versos = 0;\n  // mientras el hechizo aguante, canta\n  return versos;\n}\n",
      hints: [
        P("`while (fuerza > 0)` repite mientras el hechizo resista.", "`while (fuerza > 0)` repeats while the spell holds."),
        P("Dentro: `fuerza -= golpe;` y `versos++;`.", "Inside: `fuerza -= golpe;` and `versos++;`."),
      ],
      test_cases: [
        { input: "romperHechizo(35, 10)", expected: 4, description: P("35 → 25 → 15 → 5 → -5: cuatro versos", "35 → 25 → 15 → 5 → -5: four verses"), raw: true },
        { input: "romperHechizo(30, 10)", expected: 3, description: P("Tres justos", "Exactly three"), raw: true },
        { input: "romperHechizo(0, 10)", expected: 0, description: P("Ya estaba roto", "Already broken"), raw: true },
      ],
    },
  },
};


/** Preguntas de combate sobre funciones en JavaScript. */
const Q_DEF = {
  question: P("¿Cómo se declara una función clásica en JavaScript?", "How do you declare a classic function in JavaScript?"),
  options: [
    P("function suma(a, b) { return a + b; }", "function suma(a, b) { return a + b; }"),
    P("def suma(a, b): return a + b", "def suma(a, b): return a + b"),
    P("func suma(a, b) => a + b", "func suma(a, b) => a + b"),
    P("function suma(a, b): { a + b }", "function suma(a, b): { a + b }"),
  ],
  correct: 0,
  explanation: P(
    "`function nombre(params) { ... return ... }`. El `def` es de Python; en JS el cuerpo va entre llaves y el valor se devuelve con `return`.",
    "`function name(params) { ... return ... }`. `def` is Python; in JS the body goes in braces and the value is returned with `return`.",
  ),
};
const Q_ARROW = {
  question: P("¿Qué es `(x) => x * 2`?", "What is `(x) => x * 2`?"),
  options: [
    P("Una arrow function: una función corta que devuelve x * 2", "An arrow function: a short function that returns x * 2"),
    P("Un comentario", "A comment"),
    P("Una comparación", "A comparison"),
    P("Un bucle", "A loop"),
  ],
  correct: 0,
  explanation: P(
    "Las arrow functions son una forma breve de escribir funciones. Con una sola expresión, `x => x * 2` la devuelve sin `return` ni llaves.",
    "Arrow functions are a short way to write functions. With a single expression, `x => x * 2` returns it without `return` or braces.",
  ),
};
const Q_DEFAULT = {
  question: P("¿Qué hace `function saluda(n, s = 'Hola') { ... }`?", "What does `function saluda(n, s = 'Hola') { ... }` do?"),
  options: [
    P("Da a `s` el valor 'Hola' si no se pasa argumento", "Gives `s` the value 'Hola' if no argument is passed"),
    P("Obliga a pasar siempre `s`", "Forces you to always pass `s`"),
    P("Declara `s` como constante", "Declares `s` as a constant"),
    P("Es un error de sintaxis", "It's a syntax error"),
  ],
  correct: 0,
  explanation: P(
    "Un valor por defecto se usa cuando el argumento falta (o es undefined). `saluda('Sam')` usa 'Hola'; `saluda('Sam', 'Ey')` usa 'Ey'.",
    "A default value is used when the argument is missing (or undefined). `saluda('Sam')` uses 'Hola'; `saluda('Sam', 'Ey')` uses 'Ey'.",
  ),
};
const Q_HOF = {
  question: P("¿Puede una función recibir OTRA función como argumento?", "Can a function receive ANOTHER function as an argument?"),
  options: [
    P("Sí: las funciones son valores de primera clase en JS", "Yes: functions are first-class values in JS"),
    P("No: sólo se pasan números y textos", "No: only numbers and text are passed"),
    P("Sólo con la palabra clave callback", "Only with the callback keyword"),
    P("Sólo si se declara con arrow", "Only if declared as arrow"),
  ],
  correct: 0,
  explanation: P(
    "En JS una función es un valor como cualquier otro: puedes guardarla en una variable, pasarla como argumento y devolverla. Eso son las funciones de orden superior (map, filter…).",
    "In JS a function is a value like any other: you can store it in a variable, pass it as an argument and return it. That's higher-order functions (map, filter…).",
  ),
};
const Q_RETURN = {
  question: P("Una función sin `return`, ¿qué devuelve?", "A function with no `return` returns what?"),
  options: [
    P("undefined", "undefined"),
    P("null", "null"),
    P("0", "0"),
    P("Una cadena vacía", "An empty string"),
  ],
  correct: 0,
  explanation: P(
    "Si una función no ejecuta ningún `return` (o hace `return;` a secas), devuelve `undefined`. Ojo con usar su resultado esperando un valor.",
    "If a function runs no `return` (or does a bare `return;`), it returns `undefined`. Beware of using its result expecting a value.",
  ),
};

/** Capítulo 3 · Funciones: parámetros, arrow y orden superior. */
export const SYL_JS_COMMUNITY_3: Syllabus = {
  c3_ferny: { kind: "battle", questions: [Q_DEF, Q_ARROW, Q_RETURN] },
  c3_espia_nazgul: { kind: "battle", questions: [Q_DEFAULT, Q_HOF, Q_DEF] },
  c3_montaraz_falso: { kind: "battle", questions: [Q_ARROW, Q_RETURN, Q_DEFAULT] },
  c3_jefe_reybrujo: { kind: "battle", questions: [Q_HOF, Q_ARROW, Q_DEFAULT, Q_DEF] },
  pergamino_herencia: {
    kind: "scroll",
    title: P("El Pergamino de los Montaraces", "The Rangers' Scroll"),
    lore_intro: P(
      "En el Póney Pisador, un pergamino enseña a nombrar acciones y reutilizarlas: funciones.",
      "At the Prancing Pony, a scroll teaches how to name actions and reuse them: functions.",
    ),
    scroll: {
      topic: P("Funciones: parámetros, arrow y orden superior", "Functions: parameters, arrow and higher-order"),
      sections: [
        {
          heading: P("Declarar y llamar", "Declare and call"),
          body: P(
            "Una función encapsula una acción con nombre. Recibe parámetros y devuelve un valor con `return`.",
            "A function wraps a named action. It takes parameters and returns a value with `return`.",
          ),
          code: "function viajar(nombre, destino) {\n  return `${nombre} viaja hacia ${destino}`;\n}\nviajar('Trancos', 'Rivendel');",
        },
        {
          heading: P("Arrow functions y valores por defecto", "Arrow functions and default values"),
          body: P(
            "`(x) => x * 2` es una función corta. Un parámetro puede tener valor por defecto: se usa si no se pasa.",
            "`(x) => x * 2` is a short function. A parameter can have a default value: used if none is passed.",
          ),
          code: "const doble = (x) => x * 2;\n\nfunction saludar(nombre, saludo = 'Salve') {\n  return `${saludo}, ${nombre}`;\n}",
        },
        {
          heading: P("Funciones de orden superior", "Higher-order functions"),
          body: P(
            "Una función es un valor: puedes pasarla a otra función o devolverla. Así se construyen piezas reutilizables.",
            "A function is a value: you can pass it to another function or return it. That's how reusable pieces are built.",
          ),
          code: "function aplicarDoble(fn, x) {\n  return fn(fn(x));   // llama fn dos veces\n}\naplicarDoble((n) => n + 1, 5);   // 7",
        },
      ],
      keyTakeaway: P(
        "function declara; return devuelve (o undefined si no hay). Las arrow (=>) son cortas, los parámetros admiten valor por defecto, y una función puede pasarse o devolverse como cualquier valor.",
        "function declares; return returns (or undefined if none). Arrows (=>) are short, parameters can have defaults, and a function can be passed or returned like any value.",
      ),
    },
  },
  poney_pisador: {
    kind: "challenge",
    title: P("Trancos, el Montaraz", "Strider the Ranger"),
    lore_intro: P(
      "Un montaraz saluda distinto según la ocasión. Escribe la función que lo haga.",
      "A ranger greets differently depending on the moment. Write the function that does it.",
    ),
    challenge: {
      topic: P("Función con valor por defecto", "Function with a default value"),
      instructions: P(
        "Escribe `saludar(nombre, saludo = 'Salve')` que devuelva `'{saludo}, {nombre}'`.\n\nSi no se pasa `saludo`, usa 'Salve'. Ejemplos: `saludar('Frodo')` → `'Salve, Frodo'`; `saludar('Sam', 'Hola')` → `'Hola, Sam'`.",
        "Write `saludar(nombre, saludo = 'Salve')` returning `'{saludo}, {nombre}'`.\n\nIf `saludo` isn't passed, use 'Salve'. Examples: `saludar('Frodo')` → `'Salve, Frodo'`; `saludar('Sam', 'Hola')` → `'Hola, Sam'`.",
      ),
      starter_code:
        "function saludar(nombre, saludo = 'Salve') {\n  // devuelve `${saludo}, ${nombre}`\n}\n",
      hints: [
        P("El valor por defecto va en la firma: `(nombre, saludo = 'Salve')`.", "The default goes in the signature: `(nombre, saludo = 'Salve')`."),
        P("`return `${saludo}, ${nombre}``;", "`return `${saludo}, ${nombre}``;"),
      ],
      test_cases: [
        { input: "saludar('Frodo')", expected: "Salve, Frodo", description: P("Sin saludo: usa el por defecto", "No greeting: uses the default"), raw: true },
        { input: "saludar('Sam', 'Hola')", expected: "Hola, Sam", description: P("Con saludo propio", "With a custom greeting"), raw: true },
        { input: "saludar('Merry', 'Ey')", expected: "Ey, Merry", description: P("Otro saludo", "Another greeting"), raw: true },
      ],
    },
  },
  hojas_de_tumulo: {
    kind: "challenge",
    title: P("Las Hojas de los Túmulos", "The Barrow-blades"),
    lore_intro: P(
      "Una hoja encantada aplica su filo dos veces. En JS, una función puede recibir otra y usarla.",
      "An enchanted blade applies its edge twice. In JS, a function can take another and use it.",
    ),
    challenge: {
      topic: P("Funciones de orden superior", "Higher-order functions"),
      instructions: P(
        "Escribe `aplicarDoble(fn, x)` que llame a la función `fn` DOS veces sobre `x` y devuelva el resultado: `fn(fn(x))`.\n\nEjemplo: `aplicarDoble((n) => n + 1, 5)` → `7`.",
        "Write `aplicarDoble(fn, x)` that calls the function `fn` TWICE on `x` and returns the result: `fn(fn(x))`.\n\nExample: `aplicarDoble((n) => n + 1, 5)` → `7`.",
      ),
      starter_code:
        "function aplicarDoble(fn, x) {\n  // llama fn sobre x, y otra vez sobre el resultado\n}\n",
      hints: [
        P("`fn` es una función: la llamas con paréntesis, `fn(x)`.", "`fn` is a function: call it with parentheses, `fn(x)`."),
        P("`return fn(fn(x));` — el resultado de la primera llamada entra en la segunda.", "`return fn(fn(x));` — the first call's result feeds the second."),
      ],
      test_cases: [
        { input: "aplicarDoble((n) => n + 1, 5)", expected: 7, description: P("+1 dos veces", "+1 twice"), raw: true },
        { input: "aplicarDoble((n) => n * 2, 3)", expected: 12, description: P("×2 dos veces", "×2 twice"), raw: true },
        { input: "aplicarDoble((s) => s + '!', 'ea')", expected: "ea!!", description: P("También con textos", "Works with text too"), raw: true },
      ],
    },
  },
  cima_de_los_vientos: {
    kind: "challenge",
    title: P("La Cima de los Vientos", "Weathertop"),
    lore_intro: P(
      "Forja un arma que recuerde su daño. Una función puede DEVOLVER otra función que lo conserva.",
      "Forge a weapon that remembers its damage. A function can RETURN another function that keeps it.",
    ),
    challenge: {
      topic: P("Closures: devolver una función", "Closures: returning a function"),
      instructions: P(
        "Escribe `crearGolpe(danio)` que DEVUELVA una función. Esa función, al llamarla sin argumentos, devuelve el `danio` con el que se creó.\n\nEjemplo: `crearGolpe(20)()` → `20`.",
        "Write `crearGolpe(danio)` that RETURNS a function. That function, called with no arguments, returns the `danio` it was created with.\n\nExample: `crearGolpe(20)()` → `20`.",
      ),
      starter_code:
        "function crearGolpe(danio) {\n  // devuelve una función que devuelve danio\n}\n",
      hints: [
        P("`crearGolpe` debe `return` una función, p. ej. una arrow.", "`crearGolpe` must `return` a function, e.g. an arrow."),
        P("`return () => danio;` — la función interior recuerda `danio` (closure).", "`return () => danio;` — the inner function remembers `danio` (closure)."),
      ],
      test_cases: [
        { input: "crearGolpe(20)()", expected: 20, description: P("Recuerda su daño", "Remembers its damage"), raw: true },
        { input: "crearGolpe(7)()", expected: 7, description: P("Con otro valor", "With another value"), raw: true },
        { input: "typeof crearGolpe(1)", expected: "function", description: P("Devuelve una función", "Returns a function"), raw: true },
      ],
    },
  },
};
