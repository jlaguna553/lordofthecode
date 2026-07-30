import type { Syllabus } from "@/lib/game/narrative";

/**
 * Temario de Go para el Libro I. Reviste la MISMA narrativa compartida de la
 * Comunidad (Sombras en la Comarca) con los fundamentos de Go: paquetes,
 * funciones tipadas, variables y tipos básicos. El código del jugador se
 * INTERPRETA de verdad con Yaegi (Go → WASM). Bilingüe ES/EN.
 */

const P = (es: string, en: string) => ({ es, en });

/** Preguntas de combate reutilizables sobre fundamentos de Go. */
const Q_FUNC_GO = {
  question: P(
    "¿Cómo se declara en Go una función que recibe un `int` y devuelve un `string`?",
    "How do you declare in Go a function that takes an `int` and returns a `string`?",
  ),
  options: [
    P("func nombre(n int) string { ... }", "func nombre(n int) string { ... }"),
    P("function nombre(int n): string { ... }", "function nombre(int n): string { ... }"),
    P("func string nombre(n int) { ... }", "func string nombre(n int) { ... }"),
    P("def nombre(n): string { ... }", "def nombre(n): string { ... }"),
  ],
  correct: 0,
  explanation: P(
    "En Go la palabra clave es `func`, el TIPO va DESPUÉS del nombre del parámetro (`n int`), y el tipo de retorno va tras los paréntesis. Nada de punto y coma: las llaves y `gofmt` mandan.",
    "In Go the keyword is `func`, the TYPE goes AFTER the parameter name (`n int`), and the return type goes after the parentheses. No semicolons: braces and `gofmt` rule.",
  ),
};
const Q_TYPE_AFTER = {
  question: P(
    "En Go, ¿dónde va el tipo respecto al nombre de la variable?",
    "In Go, where does the type go relative to the variable name?",
  ),
  options: [
    P("Después: `var edad int`", "After: `var edad int`"),
    P("Antes: `int edad`", "Before: `int edad`"),
    P("No se escribe nunca", "It's never written"),
    P("Entre paréntesis: `(int) edad`", "In parentheses: `(int) edad`"),
  ],
  correct: 0,
  explanation: P(
    "Go pone el tipo DESPUÉS del nombre (`var edad int`, `nombre string`). Es al revés que C o Java. Se lee «edad, de tipo int».",
    "Go puts the type AFTER the name (`var edad int`, `nombre string`). It's the reverse of C or Java. It reads \"edad, of type int\".",
  ),
};
const Q_VAR_GO = {
  question: P(
    "¿Qué hace `nombre := \"Frodo\"` en Go?",
    "What does `nombre := \"Frodo\"` do in Go?",
  ),
  options: [
    P("Declara `nombre` e infiere su tipo (string) — declaración corta", "Declares `nombre` and infers its type (string) — short declaration"),
    P("Compara nombre con 'Frodo'", "Compares nombre with 'Frodo'"),
    P("Reasigna una variable ya existente", "Reassigns an existing variable"),
    P("Es un error de sintaxis", "It's a syntax error"),
  ],
  correct: 0,
  explanation: P(
    "`:=` es la declaración corta: crea la variable e infiere el tipo del valor. Sólo vale DENTRO de funciones. Fuera, o cuando quieres el tipo explícito, usas `var nombre string = \"Frodo\"`.",
    "`:=` is the short declaration: it creates the variable and infers the type from the value. It only works INSIDE functions. Outside, or when you want the explicit type, you use `var nombre string = \"Frodo\"`.",
  ),
};
const Q_PACKAGE = {
  question: P(
    "¿Con qué debe empezar todo archivo Go, y cómo se trae `fmt`?",
    "How must every Go file start, and how do you bring in `fmt`?",
  ),
  options: [
    P("`package main` y luego `import \"fmt\"`", "`package main` and then `import \"fmt\"`"),
    P("`#include <fmt>`", "`#include <fmt>`"),
    P("`using fmt;`", "`using fmt;`"),
    P("`require('fmt')`", "`require('fmt')`"),
  ],
  correct: 0,
  explanation: P(
    "Todo archivo Go declara su paquete en la primera línea (`package main` para un programa) y luego importa lo que use: `import \"fmt\"`. Un import sin usar es error de compilación: Go es estricto.",
    "Every Go file declares its package on the first line (`package main` for a program) and then imports what it uses: `import \"fmt\"`. An unused import is a compile error: Go is strict.",
  ),
};
const Q_MULTIRET = {
  question: P(
    "¿Qué permite Go que muchos lenguajes no, en el retorno de una función?",
    "What does Go allow in a function's return that many languages don't?",
  ),
  options: [
    P("Devolver VARIOS valores: `func dividir(a, b int) (int, error)`", "Returning MULTIPLE values: `func dividir(a, b int) (int, error)`"),
    P("No devolver nada nunca", "Never returning anything"),
    P("Devolver sólo strings", "Returning only strings"),
    P("Devolver una función anónima siempre", "Always returning an anonymous function"),
  ],
  correct: 0,
  explanation: P(
    "Go devuelve varios valores de forma nativa, y el idiomático es `(resultado, error)`: el que llama comprueba el error antes de usar el resultado. Es el patrón de errores de Go, sin excepciones.",
    "Go returns multiple values natively, and the idiomatic one is `(result, error)`: the caller checks the error before using the result. It's Go's error pattern, without exceptions.",
  ),
};
const Q_EXPORTED = {
  question: P(
    "En Go, ¿qué hace que una función o variable sea visible desde otros paquetes (exportada)?",
    "In Go, what makes a function or variable visible from other packages (exported)?",
  ),
  options: [
    P("Empezar con MAYÚSCULA: `Sumar` se exporta, `sumar` no", "Starting with an UPPERCASE letter: `Sumar` is exported, `sumar` isn't"),
    P("La palabra clave `public`", "The `public` keyword"),
    P("Un decorador `@export`", "An `@export` decorator"),
    P("Declararla con `export`", "Declaring it with `export`"),
  ],
  correct: 0,
  explanation: P(
    "Go no tiene `public`/`private`: la VISIBILIDAD la marca la primera letra. Mayúscula = exportada (visible fuera del paquete); minúscula = privada del paquete. Simple y sin palabras clave.",
    "Go has no `public`/`private`: VISIBILITY is set by the first letter. Uppercase = exported (visible outside the package); lowercase = package-private. Simple and keyword-free.",
  ),
};
const Q_NO_SEMI = {
  question: P(
    "¿Qué es cierto sobre el estilo de Go?",
    "What's true about Go's style?",
  ),
  options: [
    P("`gofmt` impone el formato y no se escriben puntos y coma", "`gofmt` enforces formatting and you don't write semicolons"),
    P("La sangría define los bloques, como en Python", "Indentation defines blocks, like Python"),
    P("Hay que terminar cada línea con `;`", "You must end each line with `;`"),
    P("El formato es libre", "Formatting is free-form"),
  ],
  correct: 0,
  explanation: P(
    "Go usa llaves `{ }` para los bloques (no la sangría), pero el compilador inserta los `;` por ti: no los escribes. Y `gofmt` deja todo el código con el MISMO formato — se acabaron las discusiones de estilo.",
    "Go uses braces `{ }` for blocks (not indentation), but the compiler inserts the `;` for you: you don't write them. And `gofmt` leaves all code in the SAME format — no more style debates.",
  ),
};

/** Capítulo 1 · Go desde cero: paquetes, funciones tipadas y tipos básicos. */
export const SYL_GO_COMMUNITY_1: Syllabus = {
  c1_espia: { kind: "battle", questions: [Q_FUNC_GO, Q_TYPE_AFTER, Q_PACKAGE] },
  c1_jinete_rastreador: { kind: "battle", questions: [Q_VAR_GO, Q_NO_SEMI, Q_FUNC_GO] },
  c1_perro_negro: { kind: "battle", questions: [Q_EXPORTED, Q_MULTIRET, Q_TYPE_AFTER] },
  c1_jefe_nazgul: { kind: "battle", questions: [Q_PACKAGE, Q_VAR_GO, Q_MULTIRET, Q_EXPORTED] },
  pergamino_clases: {
    kind: "scroll",
    title: P("El Pergamino del Gopher", "The Gopher's Scroll"),
    lore_intro: P(
      "Entre los papeles del viejo Bilbo, un pergamino de una lengua nueva, austera y veloz, enseña a nombrar las cosas al estilo de Go.",
      "Among old Bilbo's papers, a scroll in a new tongue — austere and fast — teaches how to name things the Go way.",
    ),
    scroll: {
      topic: P(
        "Go desde cero: paquetes, funciones y tipos",
        "Go from scratch: packages, functions and types",
      ),
      sections: [
        {
          heading: P("Paquete e imports", "Package and imports"),
          body: P(
            "Todo archivo empieza por `package`. Un programa es `package main` con una función `main`. Se importa lo que se usa; un import sin usar NO compila.",
            "Every file starts with `package`. A program is `package main` with a `main` function. You import what you use; an unused import does NOT compile.",
          ),
          code:
            'package main\n\nimport "fmt"\n\nfunc main() {\n\tfmt.Println("¡Hola, Comarca!")\n}',
        },
        {
          heading: P("Funciones: el tipo va después", "Functions: the type comes after"),
          body: P(
            "`func nombre(params) retorno`. El tipo va DESPUÉS del nombre (`n int`). La mayúscula inicial marca lo exportado. Go devuelve varios valores: lo idiomático es `(valor, error)`.",
            "`func name(params) return`. The type goes AFTER the name (`n int`). An initial uppercase marks what's exported. Go returns multiple values: the idiomatic one is `(value, error)`.",
          ),
          code:
            'func saludar(nombre string) string {\n\treturn fmt.Sprintf("Hola, %s", nombre)\n}\n\nfunc dividir(a, b int) (int, error) { /* ... */ }',
        },
        {
          heading: P("Variables y tipos", "Variables and types"),
          body: P(
            "`var edad int = 50` o, dentro de funciones, la forma corta `edad := 50` (infiere el tipo). Tipos básicos: `string`, `int`, `float64`, `bool`. Sin punto y coma; `gofmt` da formato.",
            "`var edad int = 50` or, inside functions, the short form `edad := 50` (infers the type). Basic types: `string`, `int`, `float64`, `bool`. No semicolons; `gofmt` formats.",
          ),
          code:
            'var nombre string = "Frodo"\nedad := 50          // infiere int\nactivo := true      // infiere bool\naltura := 1.2       // infiere float64',
        },
      ],
      keyTakeaway: P(
        "`package` + `import` en cada archivo. `func nombre(p Tipo) Retorno`, con el tipo tras el nombre. `:=` declara e infiere dentro de funciones. Mayúscula = exportado. Sin `;`; manda gofmt.",
        "`package` + `import` in every file. `func name(p Type) Return`, with the type after the name. `:=` declares and infers inside functions. Uppercase = exported. No `;`; gofmt rules.",
      ),
    },
  },
  sendero_comarca: {
    kind: "challenge",
    title: P("Preparar la Huida", "Preparing to Flee"),
    lore_intro: P(
      "Antes de partir, aprende a decir quién eres en la nueva lengua. Escribe tu primera función en Go.",
      "Before you leave, learn to say who you are in the new tongue. Write your first Go function.",
    ),
    challenge: {
      topic: P("Funciones y fmt.Sprintf", "Functions and fmt.Sprintf"),
      instructions: P(
        "Escribe la función `presentarse(nombre string) string` que devuelva, con `fmt.Sprintf`, el texto exacto:\n\n  Soy {nombre} de la Comarca\n\nEl código ya trae `package main` e `import \"fmt\"`. Por ejemplo, `presentarse(\"Frodo\")` devuelve `\"Soy Frodo de la Comarca\"`.",
        "Write the function `presentarse(nombre string) string` returning, with `fmt.Sprintf`, the exact text:\n\n  Soy {nombre} de la Comarca\n\nThe code already has `package main` and `import \"fmt\"`. For example, `presentarse(\"Frodo\")` returns `\"Soy Frodo de la Comarca\"`.",
      ),
      starter_code:
        'package main\n\nimport "fmt"\n\nfunc presentarse(nombre string) string {\n\t// usa fmt.Sprintf con el verbo %s\n}\n',
      hints: [
        P("`fmt.Sprintf` formatea sin imprimir: `%s` inserta un string.", "`fmt.Sprintf` formats without printing: `%s` inserts a string."),
        P('`return fmt.Sprintf("Soy %s de la Comarca", nombre)`.', '`return fmt.Sprintf("Soy %s de la Comarca", nombre)`.'),
      ],
      test_cases: [
        { input: 'presentarse("Frodo")', expected: "Soy Frodo de la Comarca", description: P("El formato exacto", "The exact format"), raw: true },
        { input: 'presentarse("Sam")', expected: "Soy Sam de la Comarca", description: P("Con otro nombre", "With another name"), raw: true },
        { input: 'presentarse("Bilbo")', expected: "Soy Bilbo de la Comarca", description: P("Y con cualquier valor", "And with any value"), raw: true },
      ],
    },
  },
  halito_negro: {
    kind: "challenge",
    title: P("El Hálito Negro", "The Black Breath"),
    lore_intro: P(
      "Un Jinete Negro olfatea el aire. Controla tu Sigilo con enteros y comparaciones tipadas para pasar inadvertido.",
      "A Black Rider sniffs the air. Control your Stealth with typed integers and comparisons to slip by unseen.",
    ),
    challenge: {
      topic: P("int, bool y control de flujo", "int, bool and control flow"),
      instructions: P(
        "Escribe dos funciones (el `package main` ya está):\n\n• `ocultar(actual, n int) int` — suma `n` al sigilo `actual`, SIN pasar de 100. Usa un `if`.\n• `esVisible(sigilo, percepcion int) bool` — devuelve true si tu `sigilo` es MENOR que la `percepcion`.",
        "Write two functions (the `package main` is already there):\n\n• `ocultar(actual, n int) int` — adds `n` to the current stealth, WITHOUT exceeding 100. Use an `if`.\n• `esVisible(sigilo, percepcion int) bool` — returns true if your `sigilo` is LESS than `percepcion`.",
      ),
      starter_code:
        "package main\n\nfunc ocultar(actual, n int) int {\n\t// suma y limita a 100 con un if\n}\n\nfunc esVisible(sigilo, percepcion int) bool {\n\t// ...\n}\n",
      hints: [
        P("Suma primero y comprueba: `if suma > 100 { return 100 }`.", "Sum first and check: `if suma > 100 { return 100 }`."),
        P("`sigilo < percepcion` ya es un `bool`: devuélvelo.", "`sigilo < percepcion` is already a `bool`: return it."),
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
