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
      blocks: [
        "package main",
        'import "fmt"',
        "func presentarse(nombre string) string {",
        '\treturn fmt.Sprintf("Soy %s de la Comarca", nombre)',
        "}",
        '\treturn "Soy " + nombre',
        "func presentarse(nombre int) string {",
      ],
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
      blocks: [
        "package main",
        "func ocultar(actual, n int) int {",
        "\tsuma := actual + n",
        "\tif suma > 100 {",
        "\t\treturn 100",
        "\t}",
        "\treturn suma",
        "}",
        "func esVisible(sigilo, percepcion int) bool {",
        "\treturn sigilo < percepcion",
        "}",
        "\treturn actual + n",
        "\treturn sigilo > percepcion",
      ],
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

/** Preguntas de combate reutilizables sobre slices. */
const Q_SLICE_TYPE = {
  question: P(
    "¿Cómo se declara el tipo de un slice de strings en Go?",
    "How do you declare the type of a slice of strings in Go?",
  ),
  options: [
    P("[]string", "[]string"),
    P("string[]", "string[]"),
    P("Array<string>", "Array<string>"),
    P("slice(string)", "slice(string)"),
  ],
  correct: 0,
  explanation: P(
    "Los corchetes van DELANTE del tipo: `[]string`, `[]int`. Un slice es una vista de tamaño dinámico sobre un array; es lo que se usa el 99% del tiempo (los arrays de tamaño fijo `[3]int` son raros).",
    "The brackets go BEFORE the type: `[]string`, `[]int`. A slice is a dynamically-sized view over an array; it's what you use 99% of the time (fixed-size arrays `[3]int` are rare).",
  ),
};
const Q_APPEND = {
  question: P(
    "¿Cómo se añade un elemento a un slice `xs`?",
    "How do you add an element to a slice `xs`?",
  ),
  options: [
    P("xs = append(xs, elem)", "xs = append(xs, elem)"),
    P("xs.push(elem)", "xs.push(elem)"),
    P("xs.add(elem)", "xs.add(elem)"),
    P("xs[] = elem", "xs[] = elem"),
  ],
  correct: 0,
  explanation: P(
    "`append` devuelve un slice NUEVO (puede reubicar la memoria), por eso hay que REASIGNAR: `xs = append(xs, elem)`. Olvidar el `xs =` es el error clásico de principiante en Go.",
    "`append` returns a NEW slice (it may relocate memory), so you must REASSIGN: `xs = append(xs, elem)`. Forgetting the `xs =` is the classic beginner mistake in Go.",
  ),
};
const Q_RANGE = {
  question: P(
    "¿Qué da `for i, v := range xs` en cada vuelta?",
    "What does `for i, v := range xs` give each iteration?",
  ),
  options: [
    P("El índice `i` y el valor `v` de cada elemento", "The index `i` and the value `v` of each element"),
    P("Sólo el valor", "Only the value"),
    P("Sólo el índice", "Only the index"),
    P("Un puntero al elemento", "A pointer to the element"),
  ],
  correct: 0,
  explanation: P(
    "`range` sobre un slice da (índice, valor). Si no quieres el índice, usa `for _, v := range xs` con el guion bajo. `for i := range xs` da sólo el índice. En Go el `_` descarta lo que no usas (y lo no usado es error).",
    "`range` over a slice gives (index, value). If you don't want the index, use `for _, v := range xs` with the blank identifier. `for i := range xs` gives only the index. In Go `_` discards what you don't use (and unused vars are errors).",
  ),
};
const Q_LEN = {
  question: P(
    "¿Cómo se obtiene la longitud de un slice `xs`?",
    "How do you get the length of a slice `xs`?",
  ),
  options: [
    P("len(xs)", "len(xs)"),
    P("xs.length", "xs.length"),
    P("xs.len()", "xs.len()"),
    P("count(xs)", "count(xs)"),
  ],
  correct: 0,
  explanation: P(
    "`len` es una función incorporada (builtin): `len(xs)` para slices, arrays, strings y maps. También existe `cap(xs)` para la capacidad. No son métodos: se llaman como funciones.",
    "`len` is a builtin function: `len(xs)` for slices, arrays, strings and maps. There's also `cap(xs)` for capacity. They aren't methods: you call them as functions.",
  ),
};
const Q_MAKE = {
  question: P(
    "¿Qué crea `make([]int, 0)` frente a `var xs []int`?",
    "What does `make([]int, 0)` create versus `var xs []int`?",
  ),
  options: [
    P("Un slice VACÍO no-nil; `var xs []int` deja un slice nil", "An empty non-nil slice; `var xs []int` leaves a nil slice"),
    P("Lo mismo exactamente", "Exactly the same"),
    P("Un array de tamaño fijo", "A fixed-size array"),
    P("Un map", "A map"),
  ],
  correct: 0,
  explanation: P(
    "`make([]int, 0)` (o `[]int{}`) es un slice vacío pero no nil; `var xs []int` es nil. Para `append` da igual (funciona con nil). Pero al serializar a JSON, un slice nil sale como `null` y uno vacío como `[]` — cuidado con eso.",
    "`make([]int, 0)` (or `[]int{}`) is an empty but non-nil slice; `var xs []int` is nil. For `append` it doesn't matter (it works on nil). But when serializing to JSON, a nil slice becomes `null` and an empty one `[]` — mind that.",
  ),
};
const Q_SLICING = {
  question: P(
    "Con `xs := []int{10, 20, 30, 40}`, ¿qué es `xs[1:3]`?",
    "With `xs := []int{10, 20, 30, 40}`, what is `xs[1:3]`?",
  ),
  options: [
    P("[20 30] — del índice 1 al 3 sin incluir el 3", "[20 30] — from index 1 up to but not including 3"),
    P("[10 20 30]", "[10 20 30]"),
    P("[20 30 40]", "[20 30 40]"),
    P("[10 20]", "[10 20]"),
  ],
  correct: 0,
  explanation: P(
    "El slicing `xs[inicio:fin]` incluye `inicio` y EXCLUYE `fin`: `xs[1:3]` son los índices 1 y 2 → [20 30]. Puedes omitir extremos: `xs[:2]` (desde el principio) o `xs[2:]` (hasta el final).",
    "Slicing `xs[start:end]` includes `start` and EXCLUDES `end`: `xs[1:3]` is indices 1 and 2 → [20 30]. You can omit ends: `xs[:2]` (from the start) or `xs[2:]` (to the end).",
  ),
};

/** Capítulo 2 · Slices: []T, append, range y len. */
export const SYL_GO_COMMUNITY_2: Syllabus = {
  c2_raiz: { kind: "battle", questions: [Q_SLICE_TYPE, Q_APPEND, Q_LEN] },
  c2_niebla: { kind: "battle", questions: [Q_RANGE, Q_SLICING, Q_SLICE_TYPE] },
  c2_sauce: { kind: "battle", questions: [Q_APPEND, Q_MAKE, Q_RANGE] },
  c2_jefe_tumulario: { kind: "battle", questions: [Q_SLICING, Q_MAKE, Q_LEN, Q_APPEND] },
  pergamino_ciclo_vida: {
    kind: "scroll",
    title: P("El Pergamino de las Listas", "The Scroll of Lists"),
    lore_intro: P(
      "En un claro del Bosque Viejo, un pergamino enseña a manejar MUCHAS cosas a la vez: los slices de Go.",
      "In a clearing of the Old Forest, a scroll teaches how to handle MANY things at once: Go's slices.",
    ),
    scroll: {
      topic: P("Slices: []T, append, range y len", "Slices: []T, append, range and len"),
      sections: [
        {
          heading: P("Declarar y recorrer", "Declare and iterate"),
          body: P(
            "`[]T` es un slice (lista dinámica). Se recorre con `range`, que da índice y valor; usa `_` para descartar el que no necesites. `len(xs)` da la longitud.",
            "`[]T` is a slice (dynamic list). Iterate with `range`, which gives index and value; use `_` to discard the one you don't need. `len(xs)` gives the length.",
          ),
          code:
            'nombres := []string{"Frodo", "Sam"}\nfor _, n := range nombres {\n\tfmt.Println(n)\n}\nfmt.Println(len(nombres)) // 2',
        },
        {
          heading: P("append: crece reasignando", "append: grows by reassigning"),
          body: P(
            "`append` devuelve un slice nuevo, así que hay que REASIGNAR: `xs = append(xs, v)`. Empieza con `[]T{}` (vacío no-nil) para acumular; un slice nil serializa a `null` y uno vacío a `[]`.",
            "`append` returns a new slice, so you must REASSIGN: `xs = append(xs, v)`. Start with `[]T{}` (empty non-nil) to accumulate; a nil slice serializes to `null` and an empty one to `[]`.",
          ),
          code:
            'out := []string{}\nfor _, n := range nombres {\n\tout = append(out, n+"!")\n}',
        },
        {
          heading: P("Slicing", "Slicing"),
          body: P(
            "`xs[inicio:fin]` toma un sub-slice: incluye `inicio`, excluye `fin`. `xs[:2]` desde el principio; `xs[2:]` hasta el final. No copia: comparte memoria con el original.",
            "`xs[start:end]` takes a sub-slice: includes `start`, excludes `end`. `xs[:2]` from the start; `xs[2:]` to the end. It doesn't copy: it shares memory with the original.",
          ),
          code:
            "xs := []int{10, 20, 30, 40}\nxs[1:3] // [20 30]\nxs[:2]  // [10 20]\nxs[2:]  // [30 40]",
        },
      ],
      keyTakeaway: P(
        "`[]T` para listas; recorre con `range` (índice, valor; `_` descarta); crece con `xs = append(xs, v)` (¡reasigna!); mide con `len`; corta con `xs[a:b]` (excluye b). Empieza en `[]T{}` para no acabar en nil.",
        "`[]T` for lists; iterate with `range` (index, value; `_` discards); grow with `xs = append(xs, v)` (reassign!); measure with `len`; cut with `xs[a:b]` (excludes b). Start at `[]T{}` to avoid ending up nil.",
      ),
    },
  },
  viejo_hombre_sauce: {
    kind: "challenge",
    title: P("El Viejo Hombre Sauce", "Old Man Willow"),
    lore_intro: P(
      "Las raíces del Sauce atrapan a los hobbits uno a uno. Recorre el slice de nombres y devuelve otro.",
      "The Willow's roots snare the hobbits one by one. Iterate the slice of names and return another.",
    ),
    challenge: {
      topic: P("Slices, range y append", "Slices, range and append"),
      instructions: P(
        'Escribe `atrapar(nombres []string) []string` que devuelva un slice NUEVO con cada nombre seguido de " queda atrapado". Empieza con `[]string{}` y usa `range` + `append`.\n\nEjemplo: `atrapar([]string{"Merry"})` → `["Merry queda atrapado"]`.',
        'Write `atrapar(nombres []string) []string` returning a NEW slice with each name followed by " queda atrapado". Start with `[]string{}` and use `range` + `append`.\n\nExample: `atrapar([]string{"Merry"})` → `["Merry queda atrapado"]`.',
      ),
      starter_code:
        'package main\n\nfunc atrapar(nombres []string) []string {\n\tresultado := []string{}\n\t// range + append\n\treturn resultado\n}\n',
      blocks: [
        "package main",
        "func atrapar(nombres []string) []string {",
        "\tresultado := []string{}",
        "\tfor _, n := range nombres {",
        '\t\tresultado = append(resultado, n+" queda atrapado")',
        "\t}",
        "\treturn resultado",
        "}",
        "\t\tresultado = append(resultado, n)",
        "\tfor n := range nombres {",
      ],
      hints: [
        P("`for _, n := range nombres { ... }` recorre los valores.", "`for _, n := range nombres { ... }` iterates the values."),
        P('Acumula: `resultado = append(resultado, n+" queda atrapado")`.', 'Accumulate: `resultado = append(resultado, n+" queda atrapado")`.'),
      ],
      test_cases: [
        { input: 'atrapar([]string{"Merry", "Pippin"})', expected: ["Merry queda atrapado", "Pippin queda atrapado"], description: P("Cada nombre atrapado", "Each name snared"), raw: true },
        { input: "atrapar([]string{})", expected: [], description: P("Slice vacío", "Empty slice"), raw: true },
        { input: 'atrapar([]string{"Frodo"})', expected: ["Frodo queda atrapado"], description: P("Uno solo", "Just one"), raw: true },
      ],
    },
  },
  tumulo_espectro: {
    kind: "challenge",
    title: P("El Túmulo del Espectro", "The Wight's Barrow"),
    lore_intro: P(
      "El Tumulario drena la vida de cada hobbit. Aplica el drenaje a todo el slice de vidas, sin bajar de 0.",
      "The Barrow-wight drains the life of each hobbit. Apply the drain to the whole slice of lives, never below 0.",
    ),
    challenge: {
      topic: P("Slices de int y control de flujo", "Int slices and control flow"),
      instructions: P(
        "Escribe `drenarVarios(vidas []int, drenaje int) []int` que reste `drenaje` a cada vida, sin bajar nunca de 0. Empieza en `[]int{}`.\n\nEjemplo: `drenarVarios([]int{100, 20, 5}, 30)` → `[70, 0, 0]`.",
        "Write `drenarVarios(vidas []int, drenaje int) []int` subtracting `drenaje` from each life, never below 0. Start at `[]int{}`.\n\nExample: `drenarVarios([]int{100, 20, 5}, 30)` → `[70, 0, 0]`.",
      ),
      starter_code:
        "package main\n\nfunc drenarVarios(vidas []int, drenaje int) []int {\n\tresultado := []int{}\n\t// range + if para no bajar de 0\n\treturn resultado\n}\n",
      blocks: [
        "package main",
        "func drenarVarios(vidas []int, drenaje int) []int {",
        "\tresultado := []int{}",
        "\tfor _, v := range vidas {",
        "\t\tx := v - drenaje",
        "\t\tif x < 0 {",
        "\t\t\tx = 0",
        "\t\t}",
        "\t\tresultado = append(resultado, x)",
        "\t}",
        "\treturn resultado",
        "}",
        "\t\tx := v + drenaje",
        "\t\tif x > 0 {",
      ],
      hints: [
        P("Por cada vida: `x := v - drenaje; if x < 0 { x = 0 }`.", "For each life: `x := v - drenaje; if x < 0 { x = 0 }`."),
        P("`resultado = append(resultado, x)`.", "`resultado = append(resultado, x)`."),
      ],
      test_cases: [
        { input: "drenarVarios([]int{100, 20, 5}, 30)", expected: [70, 0, 0], description: P("Resta acotada a 0", "Subtraction clamped at 0"), raw: true },
        { input: "drenarVarios([]int{50}, 10)", expected: [40], description: P("Una sola vida", "A single life"), raw: true },
        { input: "drenarVarios([]int{}, 10)", expected: [], description: P("Sin vidas", "No lives"), raw: true },
      ],
    },
  },
  canto_bombadil: {
    kind: "challenge",
    title: P("El Canto de Tom Bombadil", "Tom Bombadil's Song"),
    lore_intro: P(
      "El canto de Tom rompe el hechizo. Resume los versos: cuántos son y el canto entero unido.",
      "Tom's song breaks the spell. Summarize the verses: how many there are and the whole song joined.",
    ),
    challenge: {
      topic: P("len, strings.Join y fmt.Sprintf", "len, strings.Join and fmt.Sprintf"),
      instructions: P(
        'Escribe `resumen(versos []string) string` que devuelva "{n}: {canto}", donde `n` es cuántos versos hay y `canto` son todos unidos por un espacio (con `strings.Join`).\n\nEjemplo: `resumen([]string{"ho", "hey"})` → `"2: ho hey"`.',
        'Write `resumen(versos []string) string` returning "{n}: {song}", where `n` is how many verses there are and `song` is all of them joined by a space (with `strings.Join`).\n\nExample: `resumen([]string{"ho", "hey"})` → `"2: ho hey"`.',
      ),
      starter_code:
        'package main\n\nimport (\n\t"fmt"\n\t"strings"\n)\n\nfunc resumen(versos []string) string {\n\t// fmt.Sprintf con len(versos) y strings.Join(versos, " ")\n}\n',
      blocks: [
        "package main",
        'import (\n\t"fmt"\n\t"strings"\n)',
        "func resumen(versos []string) string {",
        '\treturn fmt.Sprintf("%d: %s", len(versos), strings.Join(versos, " "))',
        "}",
        '\treturn strings.Join(versos, " ")',
        '\treturn fmt.Sprintf("%s: %d", strings.Join(versos, " "), len(versos))',
      ],
      hints: [
        P("`len(versos)` cuenta; `strings.Join(versos, \" \")` une.", "`len(versos)` counts; `strings.Join(versos, \" \")` joins."),
        P('`return fmt.Sprintf("%d: %s", len(versos), strings.Join(versos, " "))`.', '`return fmt.Sprintf("%d: %s", len(versos), strings.Join(versos, " "))`.'),
      ],
      test_cases: [
        { input: 'resumen([]string{"ho", "hey"})', expected: "2: ho hey", description: P("Cantidad y canto", "Count and song"), raw: true },
        { input: "resumen([]string{})", expected: "0: ", description: P("Sin versos", "No verses"), raw: true },
        { input: 'resumen([]string{"solo"})', expected: "1: solo", description: P("Un verso", "One verse"), raw: true },
      ],
    },
  },
};
