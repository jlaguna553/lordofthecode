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

/** Preguntas de combate reutilizables sobre funciones en Go. */
const Q_VARIADIC = {
  question: P(
    "¿Qué significa `func sumar(nums ...int) int`?",
    "What does `func sumar(nums ...int) int` mean?",
  ),
  options: [
    P("Recibe un número VARIABLE de int; dentro, `nums` es un []int", "Takes a VARIABLE number of ints; inside, `nums` is a []int"),
    P("Recibe exactamente tres int", "Takes exactly three ints"),
    P("Recibe un puntero a int", "Takes a pointer to int"),
    P("Es un error de sintaxis", "It's a syntax error"),
  ],
  correct: 0,
  explanation: P(
    "Los `...int` hacen la función variádica: `sumar(1,2,3)` o `sumar()` valen, y dentro `nums` es un slice `[]int` que recorres con `range`. Sólo el ÚLTIMO parámetro puede ser variádico.",
    "The `...int` makes the function variadic: `sumar(1,2,3)` or `sumar()` both work, and inside `nums` is a slice `[]int` you range over. Only the LAST parameter can be variadic.",
  ),
};
const Q_HOF_GO = {
  question: P(
    "¿Puede una función de Go recibir otra función como parámetro?",
    "Can a Go function take another function as a parameter?",
  ),
  options: [
    P("Sí: las funciones son valores de primera clase, p. ej. `fn func(int) int`", "Yes: functions are first-class values, e.g. `fn func(int) int`"),
    P("No: Go no tiene funciones de orden superior", "No: Go has no higher-order functions"),
    P("Sólo si se declara con `interface`", "Only if declared with `interface`"),
    P("Sólo funciones sin retorno", "Only functions with no return"),
  ],
  correct: 0,
  explanation: P(
    "En Go una función es un valor: puedes guardarla en una variable, pasarla como argumento (`fn func(int) int`) y devolverla. El tipo describe su firma. Es la base de callbacks y del estilo funcional.",
    "In Go a function is a value: you can store it in a variable, pass it as an argument (`fn func(int) int`) and return it. The type describes its signature. It's the basis of callbacks and functional style.",
  ),
};
const Q_CLOSURE_GO = {
  question: P(
    "Una función devuelve otra función que usa una variable local del padre. ¿Qué es?",
    "A function returns another function that uses a local variable of the parent. What is that?",
  ),
  options: [
    P("Una clausura (closure): la función interior recuerda ese estado", "A closure: the inner function remembers that state"),
    P("Una variable global", "A global variable"),
    P("Un puntero colgante", "A dangling pointer"),
    P("Un error de compilación", "A compile error"),
  ],
  correct: 0,
  explanation: P(
    "Una clausura captura las variables de su entorno y las mantiene vivas mientras exista. `func crearContador() func() int { n := 0; return func() int { n++; return n } }` devuelve funciones que recuerdan su propio `n`.",
    "A closure captures the variables of its environment and keeps them alive as long as it exists. `func crearContador() func() int { n := 0; return func() int { n++; return n } }` returns functions that remember their own `n`.",
  ),
};
const Q_NAMEDRET = {
  question: P(
    "¿Qué hace `func f() (total int) { total = 5; return }`?",
    "What does `func f() (total int) { total = 5; return }` do?",
  ),
  options: [
    P("Devuelve 5: `total` es un retorno con NOMBRE, y `return` a secas lo devuelve", "Returns 5: `total` is a NAMED return, and a bare `return` returns it"),
    P("Da error: falta el valor en `return`", "Errors: the `return` is missing a value"),
    P("Devuelve 0 siempre", "Always returns 0"),
    P("Devuelve un puntero", "Returns a pointer"),
  ],
  correct: 0,
  explanation: P(
    "Los retornos con nombre declaran la variable de salida en la firma. Un `return` desnudo devuelve sus valores actuales. Útil para claridad, pero con moderación: en exceso confunden.",
    "Named returns declare the output variable in the signature. A bare `return` returns their current values. Handy for clarity, but use sparingly: overused they confuse.",
  ),
};

/** Capítulo 3 · Funciones: variádicas, orden superior y clausuras. */
export const SYL_GO_COMMUNITY_3: Syllabus = {
  c3_ferny: { kind: "battle", questions: [Q_VARIADIC, Q_MULTIRET, Q_HOF_GO] },
  c3_espia_nazgul: { kind: "battle", questions: [Q_CLOSURE_GO, Q_HOF_GO, Q_VARIADIC] },
  c3_montaraz_falso: { kind: "battle", questions: [Q_NAMEDRET, Q_MULTIRET, Q_CLOSURE_GO] },
  c3_jefe_reybrujo: { kind: "battle", questions: [Q_HOF_GO, Q_VARIADIC, Q_CLOSURE_GO, Q_MULTIRET] },
  pergamino_herencia: {
    kind: "scroll",
    title: P("El Pergamino de los Montaraces", "The Rangers' Scroll"),
    lore_intro: P(
      "En el Póney Pisador, un pergamino enseña a tratar las funciones como lo que son en Go: valores. Variádicas, de orden superior y clausuras.",
      "At the Prancing Pony, a scroll teaches you to treat functions as what they are in Go: values. Variadic, higher-order and closures.",
    ),
    scroll: {
      topic: P("Funciones: variádicas, orden superior y clausuras", "Functions: variadic, higher-order and closures"),
      sections: [
        {
          heading: P("Variádicas y retornos múltiples", "Variadic and multiple returns"),
          body: P(
            "`...int` acepta un número variable de argumentos (dentro es un `[]int`). Y una función puede devolver varios valores: el patrón `(valor, error)` es el ADN de Go.",
            "`...int` accepts a variable number of arguments (inside it's a `[]int`). And a function can return several values: the `(value, error)` pattern is Go's DNA.",
          ),
          code: "func sumar(nums ...int) int {\n\ttotal := 0\n\tfor _, n := range nums {\n\t\ttotal += n\n\t}\n\treturn total\n}\n\nfunc dividir(a, b int) (int, int) {\n\treturn a / b, a % b // cociente y resto\n}",
        },
        {
          heading: P("Funciones de orden superior", "Higher-order functions"),
          body: P(
            "Una función es un valor: puedes pasarla como parámetro (`fn func(int) int`) o devolverla. Así se construyen callbacks y piezas reutilizables.",
            "A function is a value: you can pass it as a parameter (`fn func(int) int`) or return it. That's how callbacks and reusable pieces are built.",
          ),
          code: "func aplicarDoble(fn func(int) int, x int) int {\n\treturn fn(fn(x)) // llama fn dos veces\n}\naplicarDoble(func(n int) int { return n + 1 }, 5) // 7",
        },
        {
          heading: P("Clausuras: funciones que recuerdan", "Closures: functions that remember"),
          body: P(
            "Una función literal captura las variables de su entorno. La función devuelta las conserva vivas: eso es una clausura.",
            "A function literal captures the variables of its environment. The returned function keeps them alive: that's a closure.",
          ),
          code: "func crearGolpe(danio int) func() int {\n\treturn func() int { return danio } // recuerda danio\n}\ngolpe := crearGolpe(20)\ngolpe() // 20",
        },
      ],
      keyTakeaway: P(
        "En Go las funciones son valores: variádicas con `...T`, retornos múltiples con `(A, B)`, y clausuras que capturan su entorno. Pásalas y devuélvelas como cualquier dato.",
        "In Go functions are values: variadic with `...T`, multiple returns with `(A, B)`, and closures that capture their environment. Pass and return them like any data.",
      ),
    },
  },
  poney_pisador: {
    kind: "challenge",
    title: P("Trancos, el Montaraz", "Strider the Ranger"),
    lore_intro: P(
      "Un montaraz reúne la fuerza de cuantos viajeros haya, sean los que sean. Escribe una función variádica.",
      "A ranger gathers the strength of however many travelers there are. Write a variadic function.",
    ),
    challenge: {
      topic: P("Funciones variádicas (...int)", "Variadic functions (...int)"),
      instructions: P(
        "Escribe `sumarFuerzas(fuerzas ...int) int` que sume TODAS las fuerzas recibidas, sean cuantas sean. Con cero argumentos, devuelve 0.\n\nEjemplo: `sumarFuerzas(3, 5, 2)` → `10`.",
        "Write `sumarFuerzas(fuerzas ...int) int` that sums ALL the strengths received, however many. With zero arguments, return 0.\n\nExample: `sumarFuerzas(3, 5, 2)` → `10`.",
      ),
      starter_code:
        "package main\n\nfunc sumarFuerzas(fuerzas ...int) int {\n\t// recorre con range y acumula\n}\n",
      hints: [
        P("`fuerzas` es un `[]int`: recórrelo con `for _, f := range fuerzas`.", "`fuerzas` is a `[]int`: range over it with `for _, f := range fuerzas`."),
        P("Acumula en una variable que empiece en 0 y devuélvela.", "Accumulate in a variable starting at 0 and return it."),
      ],
      test_cases: [
        { input: "sumarFuerzas(3, 5, 2)", expected: 10, description: P("Varios argumentos", "Several arguments"), raw: true },
        { input: "sumarFuerzas()", expected: 0, description: P("Ninguno: 0", "None: 0"), raw: true },
        { input: "sumarFuerzas(7)", expected: 7, description: P("Uno solo", "Just one"), raw: true },
      ],
    },
  },
  hojas_de_tumulo: {
    kind: "challenge",
    title: P("Las Hojas de los Túmulos", "The Barrow-blades"),
    lore_intro: P(
      "Una hoja encantada aplica su filo dos veces. En Go, una función puede recibir otra y usarla.",
      "An enchanted blade applies its edge twice. In Go, a function can take another and use it.",
    ),
    challenge: {
      topic: P("Funciones de orden superior", "Higher-order functions"),
      instructions: P(
        "Escribe `aplicarDoble(fn func(int) int, x int) int` que llame a `fn` DOS veces sobre `x` y devuelva el resultado: `fn(fn(x))`.\n\nEjemplo: `aplicarDoble(func(n int) int { return n + 1 }, 5)` → `7`.",
        "Write `aplicarDoble(fn func(int) int, x int) int` that calls `fn` TWICE on `x` and returns the result: `fn(fn(x))`.\n\nExample: `aplicarDoble(func(n int) int { return n + 1 }, 5)` → `7`.",
      ),
      starter_code:
        "package main\n\nfunc aplicarDoble(fn func(int) int, x int) int {\n\t// llama fn sobre x, y otra vez sobre el resultado\n}\n",
      hints: [
        P("`fn` es una función: la llamas con paréntesis, `fn(x)`.", "`fn` is a function: call it with parentheses, `fn(x)`."),
        P("`return fn(fn(x))`: el resultado de la primera llamada entra en la segunda.", "`return fn(fn(x))`: the first call's result feeds the second."),
      ],
      test_cases: [
        { input: "aplicarDoble(func(n int) int { return n + 1 }, 5)", expected: 7, description: P("+1 dos veces", "+1 twice"), raw: true },
        { input: "aplicarDoble(func(n int) int { return n * 2 }, 3)", expected: 12, description: P("×2 dos veces", "×2 twice"), raw: true },
        { input: "aplicarDoble(func(n int) int { return n }, 9)", expected: 9, description: P("Identidad", "Identity"), raw: true },
      ],
    },
  },
  cima_de_los_vientos: {
    kind: "challenge",
    title: P("La Cima de los Vientos", "Weathertop"),
    lore_intro: P(
      "Forja un arma que recuerde su daño. Una función puede DEVOLVER otra función que lo conserva: una clausura.",
      "Forge a weapon that remembers its damage. A function can RETURN another function that keeps it: a closure.",
    ),
    challenge: {
      topic: P("Clausuras (closures)", "Closures"),
      instructions: P(
        "Escribe `crearGolpe(danio int) func() int` que DEVUELVA una función. Esa función, al llamarla sin argumentos, devuelve el `danio` con el que se creó.\n\nEjemplo: `crearGolpe(20)()` → `20`.",
        "Write `crearGolpe(danio int) func() int` that RETURNS a function. That function, called with no arguments, returns the `danio` it was created with.\n\nExample: `crearGolpe(20)()` → `20`.",
      ),
      starter_code:
        "package main\n\nfunc crearGolpe(danio int) func() int {\n\t// devuelve una func() int que devuelve danio\n}\n",
      hints: [
        P("Devuelve una función literal: `return func() int { ... }`.", "Return a function literal: `return func() int { ... }`."),
        P("La función interior recuerda `danio` (clausura): `return func() int { return danio }`.", "The inner function remembers `danio` (closure): `return func() int { return danio }`."),
      ],
      test_cases: [
        { input: "crearGolpe(20)()", expected: 20, description: P("Recuerda su daño", "Remembers its damage"), raw: true },
        { input: "crearGolpe(7)()", expected: 7, description: P("Con otro valor", "With another value"), raw: true },
        { input: "crearGolpe(0)()", expected: 0, description: P("También cero", "Zero too"), raw: true },
      ],
    },
  },
};

/** Preguntas de combate reutilizables sobre maps y constantes. */
const Q_MAP_TYPE = {
  question: P(
    "¿Cómo se declara en Go un diccionario de string a int?",
    "How do you declare in Go a dictionary from string to int?",
  ),
  options: [
    P("map[string]int", "map[string]int"),
    P("dict<string, int>", "dict<string, int>"),
    P("map<string, int>", "map<string, int>"),
    P("[string]int", "[string]int"),
  ],
  correct: 0,
  explanation: P(
    "Un map se escribe `map[Clave]Valor`: `map[string]int`. Se crea con `map[string]int{}` o `make(map[string]int)`. Acceder a una clave que no existe devuelve el valor cero del tipo (0 para int), nunca un error.",
    "A map is written `map[Key]Value`: `map[string]int`. Create it with `map[string]int{}` or `make(map[string]int)`. Accessing a missing key returns the type's zero value (0 for int), never an error.",
  ),
};
const Q_MAP_COMMAOK = {
  question: P(
    "¿Qué hace `v, ok := m[\"clave\"]` en un map?",
    "What does `v, ok := m[\"key\"]` do on a map?",
  ),
  options: [
    P("`v` es el valor (o el cero) y `ok` es un bool: si la clave existía", "`v` is the value (or the zero) and `ok` is a bool: whether the key existed"),
    P("Lanza un error si la clave falta", "Throws an error if the key is missing"),
    P("`ok` es la clave siguiente", "`ok` is the next key"),
    P("Borra la clave", "Deletes the key"),
  ],
  correct: 0,
  explanation: P(
    "La forma «comma, ok» distingue «la clave vale 0» de «la clave no está»: `v, ok := m[k]`. Si `ok` es false, la clave no existía. Es la manera idiomática de comprobar presencia en un map.",
    "The \"comma, ok\" form tells apart \"the key is 0\" from \"the key isn't there\": `v, ok := m[k]`. If `ok` is false, the key wasn't present. It's the idiomatic way to check for presence in a map.",
  ),
};
const Q_MAP_RANGE = {
  question: P(
    "`for k, v := range m` sobre un map, ¿en qué orden recorre las claves?",
    "`for k, v := range m` over a map iterates the keys in what order?",
  ),
  options: [
    P("En orden ALEATORIO: los maps de Go no garantizan orden", "In RANDOM order: Go maps guarantee no order"),
    P("Alfabético", "Alphabetical"),
    P("El de inserción", "Insertion order"),
    P("El inverso al de inserción", "Reverse insertion order"),
  ],
  correct: 0,
  explanation: P(
    "El recorrido de un map es deliberadamente aleatorio en Go: no dependas del orden. Si necesitas un orden, extrae las claves a un slice y ordénalo con `sort.Strings`.",
    "Map iteration is deliberately randomized in Go: don't rely on the order. If you need one, pull the keys into a slice and sort it with `sort.Strings`.",
  ),
};
const Q_CONST = {
  question: P(
    "¿Qué distingue a una `const` de una variable en Go?",
    "What sets a `const` apart from a variable in Go?",
  ),
  options: [
    P("Su valor se fija en compilación y no puede cambiar", "Its value is fixed at compile time and cannot change"),
    P("Ocupa más memoria", "It uses more memory"),
    P("Sólo existe dentro de funciones", "It only exists inside functions"),
    P("Se declara con `let`", "It's declared with `let`"),
  ],
  correct: 0,
  explanation: P(
    "Una `const` es un valor inmutable conocido en compilación: `const VelocidadMaxima = 120`. No se le puede asignar en ejecución. Sirve para números mágicos con nombre y para los enums con `iota`.",
    "A `const` is an immutable value known at compile time: `const VelocidadMaxima = 120`. You can't assign to it at runtime. It's used for named magic numbers and for `iota` enums.",
  ),
};
const Q_IOTA = {
  question: P(
    "En `const ( A = iota; B; C )`, ¿qué valores toman A, B y C?",
    "In `const ( A = iota; B; C )`, what values do A, B and C take?",
  ),
  options: [
    P("0, 1 y 2: iota se autoincrementa por línea", "0, 1 and 2: iota auto-increments per line"),
    P("1, 2 y 3", "1, 2 and 3"),
    P("Los tres valen 0", "All three are 0"),
    P("iota, iota+1, iota+2 sin evaluar", "iota, iota+1, iota+2 unevaluated"),
  ],
  correct: 0,
  explanation: P(
    "`iota` empieza en 0 en cada bloque `const` y sube de 1 en 1 por cada línea. `B` y `C` heredan la expresión `= iota`, así que valen 1 y 2. Es la forma idiomática de crear enumeraciones en Go.",
    "`iota` starts at 0 in each `const` block and increases by 1 per line. `B` and `C` inherit the `= iota` expression, so they're 1 and 2. It's the idiomatic way to build enumerations in Go.",
  ),
};

/** Capítulo 4 · Maps y constantes (iota). */
export const SYL_GO_COMMUNITY_4: Syllabus = {
  c4_jinete_rezagado: { kind: "battle", questions: [Q_MAP_TYPE, Q_MAP_COMMAOK, Q_CONST] },
  c4_lobo: { kind: "battle", questions: [Q_MAP_RANGE, Q_IOTA, Q_MAP_TYPE] },
  c4_jefe_nueve: { kind: "battle", questions: [Q_CONST, Q_IOTA, Q_MAP_COMMAOK, Q_MAP_RANGE] },
  c4_trasgo_montaraz: { kind: "battle", questions: [Q_MAP_COMMAOK, Q_MAP_TYPE, Q_IOTA] },
  pergamino_estatico: {
    kind: "scroll",
    title: P("El Pergamino del Recuento", "The Scroll of the Reckoning"),
    lore_intro: P(
      "Antes del Vado, un pergamino enseña a nombrar lo que no cambia (constantes, enums con iota) y a contar por clave (maps).",
      "Before the Ford, a scroll teaches how to name what doesn't change (constants, iota enums) and to count by key (maps).",
    ),
    scroll: {
      topic: P("Maps y constantes (iota)", "Maps and constants (iota)"),
      sections: [
        {
          heading: P("Maps: diccionarios por clave", "Maps: key-value dictionaries"),
          body: P(
            "`map[K]V` asocia claves con valores. Una clave ausente devuelve el valor cero (0, \"\", false…). La forma «comma, ok» distingue ausente de cero.",
            "`map[K]V` associates keys with values. A missing key returns the zero value (0, \"\", false…). The \"comma, ok\" form tells absent apart from zero.",
          ),
          code: "conteo := map[string]int{}\nconteo[\"nazgul\"]++          // ausente → 0, luego 1\nv, ok := conteo[\"rey\"]      // v=0, ok=false: no estaba",
        },
        {
          heading: P("Constantes", "Constants"),
          body: P(
            "Una `const` es un valor inmutable conocido en compilación. Da nombre a los números mágicos y no puede reasignarse.",
            "A `const` is an immutable value known at compile time. It names magic numbers and can't be reassigned.",
          ),
          code: "const VelocidadMaxima = 120\n\nfunc galopar(deseada int) int {\n\tif deseada > VelocidadMaxima {\n\t\treturn VelocidadMaxima\n\t}\n\treturn deseada\n}",
        },
        {
          heading: P("iota: enumeraciones", "iota: enumerations"),
          body: P(
            "Dentro de un bloque `const`, `iota` empieza en 0 y sube de 1 en 1 por línea. Es la forma idiomática de hacer enums en Go.",
            "Inside a `const` block, `iota` starts at 0 and rises by 1 per line. It's the idiomatic way to make enums in Go.",
          ),
          code: "const (\n\tCalmo = iota // 0\n\tCrecido      // 1\n\tDesbordado   // 2\n)",
        },
      ],
      keyTakeaway: P(
        "`map[K]V` cuenta y busca por clave (con «comma, ok» para la presencia y orden ALEATORIO al recorrer); `const` da nombre a lo inmutable, e `iota` numera enums desde 0.",
        "`map[K]V` counts and looks up by key (with \"comma, ok\" for presence and RANDOM iteration order); `const` names the immutable, and `iota` numbers enums from 0.",
      ),
    },
  },
  montura_asfaloth: {
    kind: "challenge",
    title: P("Asfaloth, el Corcel Élfico", "Asfaloth, the Elven Steed"),
    lore_intro: P(
      "Ningún corcel supera su límite. Ese límite no cambia: es una constante.",
      "No steed exceeds its limit. That limit never changes: it's a constant.",
    ),
    challenge: {
      topic: P("Constantes", "Constants"),
      instructions: P(
        "Declara la constante `VelocidadMaxima = 120` y escribe `galopar(deseada int) int` que devuelva la velocidad deseada SIN superar nunca la constante.\n\nEjemplo: `galopar(200)` → `120`.",
        "Declare the constant `VelocidadMaxima = 120` and write `galopar(deseada int) int` returning the wanted speed WITHOUT ever exceeding the constant.\n\nExample: `galopar(200)` → `120`.",
      ),
      starter_code:
        "package main\n\n// 1) const VelocidadMaxima = 120\n\nfunc galopar(deseada int) int {\n\t// 2) nunca por encima de la constante\n}\n",
      hints: [
        P("Declara la constante a nivel de paquete: `const VelocidadMaxima = 120`.", "Declare the constant at package level: `const VelocidadMaxima = 120`."),
        P("Con un `if`: si `deseada > VelocidadMaxima`, devuelve la constante; si no, `deseada`.", "With an `if`: if `deseada > VelocidadMaxima`, return the constant; otherwise `deseada`."),
      ],
      test_cases: [
        { input: "galopar(90)", expected: 90, description: P("Por debajo del límite", "Below the limit"), raw: true },
        { input: "galopar(200)", expected: 120, description: P("Nunca supera el máximo", "Never above the max"), raw: true },
        { input: "VelocidadMaxima", expected: 120, description: P("La constante es legible", "The constant is readable"), raw: true },
      ],
    },
  },
  recuento_de_los_nueve: {
    kind: "challenge",
    title: P("El Recuento de los Nueve", "The Reckoning of the Nine"),
    lore_intro: P(
      "Cuenta cuántas veces aparece cada jinete. Un map asocia cada nombre con su total.",
      "Count how many times each rider appears. A map associates each name with its total.",
    ),
    challenge: {
      topic: P("Maps: contar por clave", "Maps: counting by key"),
      instructions: P(
        "Escribe `contar(jinetes []string) map[string]int` que devuelva cuántas veces aparece cada nombre.\n\nEjemplo: `contar([]string{\"nazgul\", \"nazgul\", \"rey\"})` da un map con `\"nazgul\": 2` y `\"rey\": 1`.",
        "Write `contar(jinetes []string) map[string]int` returning how many times each name appears.\n\nExample: `contar([]string{\"nazgul\", \"nazgul\", \"rey\"})` gives a map with `\"nazgul\": 2` and `\"rey\": 1`.",
      ),
      starter_code:
        "package main\n\nfunc contar(jinetes []string) map[string]int {\n\t// crea el map, recorre y suma\n}\n",
      hints: [
        P("Empieza con `m := map[string]int{}`.", "Start with `m := map[string]int{}`."),
        P("Por cada nombre: `m[j]++` (la clave ausente empieza en 0).", "For each name: `m[j]++` (a missing key starts at 0)."),
      ],
      test_cases: [
        { input: 'contar([]string{"nazgul", "nazgul", "rey"})["nazgul"]', expected: 2, description: P("Dos nazgûl", "Two nazgûl"), raw: true },
        { input: 'contar([]string{"nazgul", "nazgul", "rey"})["rey"]', expected: 1, description: P("Un rey", "One king"), raw: true },
        { input: 'len(contar([]string{"a", "b", "a"}))', expected: 2, description: P("Dos claves distintas", "Two distinct keys"), raw: true },
      ],
    },
  },
  vado_de_bruinen: {
    kind: "challenge",
    title: P("El Vado de Bruinen", "The Ford of Bruinen"),
    lore_intro: P(
      "Cada punto del vado tiene su defensa; algunos, ninguna. Distingue «defensa 0» de «sin defensa» con «comma, ok».",
      "Each point of the ford has its defense; some, none. Tell \"defense 0\" apart from \"no defense\" with \"comma, ok\".",
    ),
    challenge: {
      topic: P("Maps: comma-ok", "Maps: comma-ok"),
      instructions: P(
        "Escribe `defensaDe(defensas map[string]int, nombre string) int` que devuelva la defensa del punto `nombre`. Si el punto NO está en el map, devuelve `-1` (usa la forma «comma, ok»).\n\nOjo: un punto puede tener defensa 0 y aun así existir.",
        "Write `defensaDe(defensas map[string]int, nombre string) int` returning the defense of point `nombre`. If the point is NOT in the map, return `-1` (use the \"comma, ok\" form).\n\nNote: a point may have defense 0 and still exist.",
      ),
      starter_code:
        "package main\n\nfunc defensaDe(defensas map[string]int, nombre string) int {\n\t// v, ok := defensas[nombre]; si !ok devuelve -1\n}\n",
      hints: [
        P("`v, ok := defensas[nombre]` te dice el valor y si existía.", "`v, ok := defensas[nombre]` gives you the value and whether it existed."),
        P("`if !ok { return -1 }` y si no, `return v`.", "`if !ok { return -1 }` otherwise `return v`."),
      ],
      test_cases: [
        { input: 'defensaDe(map[string]int{"vado": 50}, "vado")', expected: 50, description: P("Defensa presente", "Defense present"), raw: true },
        { input: 'defensaDe(map[string]int{"vado": 0}, "vado")', expected: 0, description: P("Presente con valor 0 (no es -1)", "Present with value 0 (not -1)"), raw: true },
        { input: 'defensaDe(map[string]int{}, "x")', expected: -1, description: P("Ausente: -1", "Absent: -1"), raw: true },
      ],
    },
  },
  c4_runas_del_vado: {
    kind: "challenge",
    title: P("Las runas del Vado", "The runes of the Ford"),
    lore_intro: P(
      "Tres estados del agua grabados en la roca: calmo, crecido, desbordado. Un enum con iota los numera desde 0.",
      "Three states of the water carved in the rock: calm, risen, overflowing. An iota enum numbers them from 0.",
    ),
    challenge: {
      topic: P("Constantes con iota (enums)", "Constants with iota (enums)"),
      instructions: P(
        "Declara un bloque `const` con `iota`: `Calmo` (0), `Crecido` (1) y `Desbordado` (2). Después escribe `estado(caudal int) int` que devuelva:\n• `Calmo` si el caudal es menor que 30,\n• `Crecido` si es menor que 70,\n• `Desbordado` en los demás casos.",
        "Declare a `const` block with `iota`: `Calmo` (0), `Crecido` (1) and `Desbordado` (2). Then write `estado(caudal int) int` returning:\n• `Calmo` if the flow is under 30,\n• `Crecido` if under 70,\n• `Desbordado` otherwise.",
      ),
      starter_code:
        "package main\n\nconst (\n\tCalmo = iota\n\t// Crecido, Desbordado\n)\n\nfunc estado(caudal int) int {\n\t// devuelve la constante según el caudal\n}\n",
      hints: [
        P("Tras `Calmo = iota`, basta listar `Crecido` y `Desbordado`: heredan `= iota` y valen 1 y 2.", "After `Calmo = iota`, just list `Crecido` and `Desbordado`: they inherit `= iota` and are 1 and 2."),
        P("Dos `if` en cascada: `< 30` → Calmo, `< 70` → Crecido, y el resto Desbordado.", "Two cascading `if`s: `< 30` → Calmo, `< 70` → Crecido, and the rest Desbordado."),
      ],
      test_cases: [
        { input: "estado(10)", expected: 0, description: P("Caudal bajo: Calmo (0)", "Low flow: Calmo (0)"), raw: true },
        { input: "estado(50)", expected: 1, description: P("Caudal medio: Crecido (1)", "Medium flow: Crecido (1)"), raw: true },
        { input: "estado(200)", expected: 2, description: P("El río contra los Nueve: Desbordado (2)", "The river against the Nine: Desbordado (2)"), raw: true },
        { input: "Desbordado", expected: 2, description: P("iota lo numeró en 2", "iota numbered it 2"), raw: true },
      ],
    },
  },
};

/** Preguntas de combate reutilizables sobre structs y métodos. */
const Q_STRUCT = {
  question: P(
    "¿Qué es un `struct` en Go?",
    "What is a `struct` in Go?",
  ),
  options: [
    P("Un tipo que agrupa campos con nombre y tipo", "A type that groups named, typed fields"),
    P("Una clase con herencia", "A class with inheritance"),
    P("Una función con estado", "A function with state"),
    P("Un tipo de map", "A kind of map"),
  ],
  correct: 0,
  explanation: P(
    "Un `struct` agrupa datos relacionados: `type Provision struct { Nombre string; Peso int }`. Se crea con `Provision{Nombre: \"x\", Peso: 1}` y se accede a los campos con el punto. Go no tiene clases: structs + métodos hacen su papel.",
    "A `struct` groups related data: `type Provision struct { Nombre string; Peso int }`. Create it with `Provision{Nombre: \"x\", Peso: 1}` and access fields with a dot. Go has no classes: structs + methods do the job.",
  ),
};
const Q_METHOD_RECV = {
  question: P(
    "¿Qué es el `(r Resistencia)` en `func (r Resistencia) Calor() int`?",
    "What is the `(r Resistencia)` in `func (r Resistencia) Calor() int`?",
  ),
  options: [
    P("El RECEPTOR: liga el método al tipo Resistencia", "The RECEIVER: it binds the method to the Resistencia type"),
    P("Un parámetro normal más", "Just another normal parameter"),
    P("El valor de retorno", "The return value"),
    P("Una anotación opcional", "An optional annotation"),
  ],
  correct: 0,
  explanation: P(
    "El receptor va ANTES del nombre del método y liga la función al tipo: se llama `r.Calor()`. Dentro, `r` es el valor sobre el que se invocó. Es como `this`/`self`, pero explícito y con nombre a tu elección.",
    "The receiver goes BEFORE the method name and binds the function to the type: you call `r.Calor()`. Inside, `r` is the value it was invoked on. It's like `this`/`self`, but explicit and named as you like.",
  ),
};
const Q_PTR_RECV = {
  question: P(
    "¿Cuándo usas un receptor por PUNTERO, `func (r *R) M()`, en vez de por valor?",
    "When do you use a POINTER receiver, `func (r *R) M()`, instead of a value receiver?",
  ),
  options: [
    P("Cuando el método debe MODIFICAR el struct (o para evitar copiarlo)", "When the method must MODIFY the struct (or to avoid copying it)"),
    P("Nunca: siempre por valor", "Never: always by value"),
    P("Sólo para structs vacíos", "Only for empty structs"),
    P("Sólo en funciones main", "Only in main functions"),
  ],
  correct: 0,
  explanation: P(
    "Un receptor por valor recibe una COPIA: los cambios no se ven fuera. Con `*R` el método opera sobre el original y puede mutarlo. Regla práctica: si mutas o el struct es grande, usa puntero; si sólo lees algo pequeño, por valor.",
    "A value receiver gets a COPY: changes aren't visible outside. With `*R` the method works on the original and can mutate it. Rule of thumb: if you mutate or the struct is large, use a pointer; to just read something small, by value.",
  ),
};
const Q_CONSTRUCTOR = {
  question: P(
    "Go no tiene constructores. ¿Cómo se crea un struct ya inicializado idiomáticamente?",
    "Go has no constructors. How do you idiomatically create an initialized struct?",
  ),
  options: [
    P("Con una función `NuevaX(...) X` que devuelve el struct listo", "With a function `NuevaX(...) X` that returns the ready struct"),
    P("Con `new X()`", "With `new X()`"),
    P("Con un método `__init__`", "With an `__init__` method"),
    P("No se puede inicializar", "You can't initialize it"),
  ],
  correct: 0,
  explanation: P(
    "El patrón es una función «constructora» por convención: `func NuevaResistencia() Resistencia { return Resistencia{calor: 100} }`. Devuelve el struct con sus invariantes ya establecidas. `new(T)` existe, pero devuelve un puntero a un T con ceros.",
    "The pattern is a \"constructor\" function by convention: `func NuevaResistencia() Resistencia { return Resistencia{calor: 100} }`. It returns the struct with its invariants set. `new(T)` exists, but returns a pointer to a zeroed T.",
  ),
};

/** Capítulo 5 · Structs y métodos (receptores, encapsulación). */
export const SYL_GO_COMMUNITY_5: Syllabus = {
  c5_crebain: { kind: "battle", questions: [Q_STRUCT, Q_METHOD_RECV, Q_EXPORTED] },
  c5_lobo_nieve: { kind: "battle", questions: [Q_PTR_RECV, Q_CONSTRUCTOR, Q_STRUCT] },
  c5_jefe_caradhras: { kind: "battle", questions: [Q_METHOD_RECV, Q_PTR_RECV, Q_EXPORTED, Q_CONSTRUCTOR] },
  c5_trasgo_montanes: { kind: "battle", questions: [Q_EXPORTED, Q_STRUCT, Q_METHOD_RECV] },
  pergamino_hielo: {
    kind: "scroll",
    title: P("El Pergamino del Hielo", "The Scroll of Ice"),
    lore_intro: P(
      "Gandalf resguarda un pergamino. «Un objeto es datos con nombre (struct) y verbos que operan sobre ellos (métodos). Lo que no debe tocarse, escríbelo en minúscula.»",
      "Gandalf shelters a scroll. \"An object is named data (a struct) and verbs that act on it (methods). What must not be touched, write it lowercase.\"",
    ),
    scroll: {
      topic: P("Structs y métodos (receptores, encapsulación)", "Structs and methods (receivers, encapsulation)"),
      sections: [
        {
          heading: P("Structs y constructores", "Structs and constructors"),
          body: P(
            "Un `struct` agrupa campos. Go no tiene constructores: por convención se usa una función `NuevaX(...) X` que devuelve el struct ya inicializado.",
            "A `struct` groups fields. Go has no constructors: by convention you use a function `NuevaX(...) X` that returns the initialized struct.",
          ),
          code: "type Provision struct {\n\tNombre string\n\tPeso   int\n}\n\nfunc nuevaProvision(n string, p int) Provision {\n\treturn Provision{Nombre: n, Peso: p}\n}",
        },
        {
          heading: P("Métodos y receptores", "Methods and receivers"),
          body: P(
            "Un método liga una función a un tipo mediante el RECEPTOR, antes del nombre. Por valor recibe una copia; por puntero (`*R`) opera sobre el original y puede mutarlo.",
            "A method binds a function to a type via the RECEIVER, before the name. By value it gets a copy; by pointer (`*R`) it works on the original and can mutate it.",
          ),
          code: "type Resistencia struct{ calor int }\n\nfunc (r Resistencia) Calor() int { return r.calor } // lee (copia)\nfunc (r *Resistencia) Enfriar(g int) { r.calor -= g } // muta (original)",
        },
        {
          heading: P("Encapsulación por inicial", "Encapsulation by initial letter"),
          body: P(
            "La visibilidad la marca la primera letra: `Nombre` (mayúscula) se exporta; `calor` (minúscula) es privado del paquete. Expón métodos, esconde el estado en minúscula.",
            "Visibility is set by the first letter: `Nombre` (uppercase) is exported; `calor` (lowercase) is package-private. Expose methods, hide state in lowercase.",
          ),
          code: "type Temperatura struct{ grados int } // grados: privado\n\nfunc (t Temperatura) ConMas(g int) Temperatura {\n\treturn Temperatura{grados: t.grados + g} // copia nueva: inmutable\n}",
        },
      ],
      keyTakeaway: P(
        "structs agrupan datos; los métodos los operan con un receptor (por valor copia, por puntero muta); la inicial mayúscula/minúscula marca lo público/privado; y `NuevaX(...)` hace de constructor.",
        "structs group data; methods act on them via a receiver (by value copies, by pointer mutates); the uppercase/lowercase initial marks public/private; and `NuevaX(...)` acts as a constructor.",
      ),
    },
  },
  carga_de_bill: {
    kind: "challenge",
    title: P("La Carga de Bill el Poney", "Bill the Pony's Load"),
    lore_intro: P(
      "Una provisión es su nombre y su peso, juntos. Modela ese dato con un struct y una función que lo cree.",
      "A provision is its name and its weight, together. Model that data with a struct and a function that creates it.",
    ),
    challenge: {
      topic: P("Structs y constructores", "Structs and constructors"),
      instructions: P(
        "Declara el struct `Provision` con dos campos EXPORTADOS: `Nombre` (string) y `Peso` (int). Después escribe `nuevaProvision(nombre string, peso int) Provision` que lo cree con esos valores.\n\nEjemplo: `nuevaProvision(\"lembas\", 5).Peso` → `5`.",
        "Declare the struct `Provision` with two EXPORTED fields: `Nombre` (string) and `Peso` (int). Then write `nuevaProvision(nombre string, peso int) Provision` creating it with those values.\n\nExample: `nuevaProvision(\"lembas\", 5).Peso` → `5`.",
      ),
      starter_code:
        "package main\n\ntype Provision struct {\n\t// Nombre y Peso (exportados: en mayúscula)\n}\n\nfunc nuevaProvision(nombre string, peso int) Provision {\n\t// devuelve el struct con esos valores\n}\n",
      hints: [
        P("Campos exportados van en mayúscula: `Nombre string` y `Peso int`.", "Exported fields go uppercase: `Nombre string` and `Peso int`."),
        P("Crea el struct con nombres de campo: `return Provision{Nombre: nombre, Peso: peso}`.", "Create the struct with field names: `return Provision{Nombre: nombre, Peso: peso}`."),
      ],
      test_cases: [
        { input: 'nuevaProvision("lembas", 5).Peso', expected: 5, description: P("El peso", "The weight"), raw: true },
        { input: 'nuevaProvision("lembas", 5).Nombre', expected: "lembas", description: P("El nombre", "The name"), raw: true },
        { input: 'nuevaProvision("cuerda", 2).Peso', expected: 2, description: P("Con otros valores", "With other values"), raw: true },
      ],
    },
  },
  resistencia_comunidad: {
    kind: "challenge",
    title: P("La Resistencia de la Comunidad", "The Fellowship's Endurance"),
    lore_intro: P(
      "El calor de la Comunidad es un estado protegido. Escóndelo en minúscula y expón métodos que lo lean, sin bajar nunca de 0.",
      "The Fellowship's warmth is a protected state. Hide it lowercase and expose methods that read it, never dropping below 0.",
    ),
    challenge: {
      topic: P("Métodos, receptores y encapsulación", "Methods, receivers and encapsulation"),
      instructions: P(
        "Declara `Resistencia` con un campo PRIVADO `calor int`. Añade:\n• `NuevaResistencia() Resistencia` que lo cree con `calor` a 100,\n• el método `Calor() int` que lo devuelva,\n• el método `TrasEnfriar(grados int) int` que devuelva el calor tras restar `grados`, SIN bajar de 0.",
        "Declare `Resistencia` with a PRIVATE field `calor int`. Add:\n• `NuevaResistencia() Resistencia` creating it with `calor` at 100,\n• the method `Calor() int` returning it,\n• the method `TrasEnfriar(grados int) int` returning the warmth after subtracting `grados`, never below 0.",
      ),
      starter_code:
        "package main\n\ntype Resistencia struct {\n\tcalor int\n}\n\nfunc NuevaResistencia() Resistencia {\n\t// calor a 100\n}\n\nfunc (r Resistencia) Calor() int {\n\t// devuelve calor\n}\n\nfunc (r Resistencia) TrasEnfriar(grados int) int {\n\t// resta sin bajar de 0\n}\n",
      hints: [
        P("El constructor: `return Resistencia{calor: 100}`.", "The constructor: `return Resistencia{calor: 100}`."),
        P("En `TrasEnfriar`: `c := r.calor - grados; if c < 0 { return 0 }; return c`.", "In `TrasEnfriar`: `c := r.calor - grados; if c < 0 { return 0 }; return c`."),
      ],
      test_cases: [
        { input: "NuevaResistencia().Calor()", expected: 100, description: P("Parte con el calor intacto", "Starts with warmth intact"), raw: true },
        { input: "NuevaResistencia().TrasEnfriar(50)", expected: 50, description: P("La ventisca muerde", "The blizzard bites"), raw: true },
        { input: "NuevaResistencia().TrasEnfriar(200)", expected: 0, description: P("Nunca baja de 0", "Never below 0"), raw: true },
      ],
    },
  },
  temperatura_montana: {
    kind: "challenge",
    title: P("El Umbral de la Nieve", "The Snow Threshold"),
    lore_intro: P(
      "Una medida no se altera: si el frío cambia, tienes OTRA medida. Un método por valor devuelve una copia nueva: inmutabilidad.",
      "A measurement isn't altered: if the cold changes, you have ANOTHER measurement. A value-receiver method returns a fresh copy: immutability.",
    ),
    challenge: {
      topic: P("Value objects inmutables", "Immutable value objects"),
      instructions: P(
        "Declara `Temperatura` con un campo privado `grados int`. Añade:\n• `NuevaTemperatura(grados int) Temperatura`,\n• el método `Grados() int`,\n• el método `ConMas(g int) Temperatura` que devuelva una Temperatura NUEVA con los grados sumados (sin mutar la original: receptor por valor).",
        "Declare `Temperatura` with a private field `grados int`. Add:\n• `NuevaTemperatura(grados int) Temperatura`,\n• the method `Grados() int`,\n• the method `ConMas(g int) Temperatura` returning a NEW Temperatura with the degrees added (without mutating the original: value receiver).",
      ),
      starter_code:
        "package main\n\ntype Temperatura struct {\n\tgrados int\n}\n\nfunc NuevaTemperatura(grados int) Temperatura {\n\t//\n}\n\nfunc (t Temperatura) Grados() int {\n\t//\n}\n\nfunc (t Temperatura) ConMas(g int) Temperatura {\n\t// devuelve OTRA Temperatura con los grados sumados\n}\n",
      hints: [
        P("`ConMas` no muta: `return Temperatura{grados: t.grados + g}`.", "`ConMas` doesn't mutate: `return Temperatura{grados: t.grados + g}`."),
        P("Como el receptor es por VALOR, `t` es una copia: la original nunca cambia.", "Since the receiver is by VALUE, `t` is a copy: the original never changes."),
      ],
      test_cases: [
        { input: "NuevaTemperatura(-10).Grados()", expected: -10, description: P("La temperatura de partida", "The starting temperature"), raw: true },
        { input: "NuevaTemperatura(-10).ConMas(-5).Grados()", expected: -15, description: P("ConMas devuelve una más fría", "ConMas returns a colder one"), raw: true },
        { input: "NuevaTemperatura(-10).ConMas(-5).ConMas(-5).Grados()", expected: -20, description: P("Se puede encadenar", "It can be chained"), raw: true },
      ],
    },
  },
};

/** Preguntas de combate reutilizables sobre interfaces. */
const Q_INTERFACE = {
  question: P(
    "¿Qué es una `interface` en Go?",
    "What is an `interface` in Go?",
  ),
  options: [
    P("Un conjunto de firmas de método: un contrato de comportamiento", "A set of method signatures: a behavior contract"),
    P("Una clase base con código", "A base class with code"),
    P("Un struct con campos públicos", "A struct with public fields"),
    P("Una función anónima", "An anonymous function"),
  ],
  correct: 0,
  explanation: P(
    "Una interfaz declara QUÉ métodos debe tener un tipo, sin decir cómo: `type Enemigo interface { Atacar() int }`. Cualquier tipo con ese método la cumple. Es un contrato de comportamiento, no de datos.",
    "An interface declares WHAT methods a type must have, without saying how: `type Enemigo interface { Atacar() int }`. Any type with that method satisfies it. It's a behavior contract, not a data one.",
  ),
};
const Q_IMPLICIT = {
  question: P(
    "¿Cómo declara un tipo de Go que implementa una interfaz?",
    "How does a Go type declare that it implements an interface?",
  ),
  options: [
    P("No lo declara: basta con tener sus métodos (implementación implícita)", "It doesn't: just having its methods is enough (implicit implementation)"),
    P("Con `implements Enemigo`", "With `implements Enemigo`"),
    P("Con `extends Enemigo`", "With `extends Enemigo`"),
    P("Registrándolo en la interfaz", "By registering it in the interface"),
  ],
  correct: 0,
  explanation: P(
    "Go usa «duck typing» estático: si un tipo tiene los métodos de una interfaz, la cumple automáticamente, sin declararlo. Esto desacopla: puedes crear tipos que satisfagan interfaces de librerías que no controlas.",
    "Go uses static \"duck typing\": if a type has an interface's methods, it satisfies it automatically, without declaring it. This decouples: you can build types that satisfy interfaces from libraries you don't control.",
  ),
};
const Q_POLY_GO = {
  question: P(
    "Tienes `func total(es []Enemigo) int`. ¿Qué puedes meter en ese slice?",
    "You have `func total(es []Enemigo) int`. What can you put in that slice?",
  ),
  options: [
    P("Cualquier tipo que tenga los métodos de Enemigo (Trasgo, Troll…)", "Any type that has Enemigo's methods (Trasgo, Troll…)"),
    P("Sólo structs llamados Enemigo", "Only structs named Enemigo"),
    P("Sólo un tipo, no mezclas", "Only one type, no mixing"),
    P("Cualquier cosa: la interfaz no filtra", "Anything: the interface doesn't filter"),
  ],
  correct: 0,
  explanation: P(
    "Un `[]Enemigo` acepta valores de CUALQUIER tipo que cumpla `Enemigo`, mezclados. El código que los recorre llama `e.Atacar()` sin saber cuál es cada uno: eso es polimorfismo. Añadir un tipo nuevo no obliga a tocar `total`.",
    "A `[]Enemigo` accepts values of ANY type satisfying `Enemigo`, mixed. The code iterating them calls `e.Atacar()` without knowing which is which: that's polymorphism. Adding a new type doesn't force touching `total`.",
  ),
};
const Q_EMPTY_IFACE = {
  question: P(
    "¿Qué significa el tipo `interface{}` (o `any`)?",
    "What does the type `interface{}` (or `any`) mean?",
  ),
  options: [
    P("Cualquier valor: no exige ningún método", "Any value: it requires no methods"),
    P("Ningún valor", "No value"),
    P("Sólo structs", "Only structs"),
    P("Sólo punteros", "Only pointers"),
  ],
  correct: 0,
  explanation: P(
    "La interfaz vacía no pide métodos, así que TODO la cumple: `interface{}` (o su alias `any`) acepta cualquier valor. Para volver a usar el tipo concreto, haces una aserción `v.(int)` o un `switch v.(type)`.",
    "The empty interface requires no methods, so EVERYTHING satisfies it: `interface{}` (or its alias `any`) accepts any value. To get the concrete type back, you do an assertion `v.(int)` or a `switch v.(type)`.",
  ),
};
const Q_TYPESWITCH = {
  question: P(
    "¿Para qué sirve `switch v.(type) { case int: ...; case string: ... }`?",
    "What is `switch v.(type) { case int: ...; case string: ... }` for?",
  ),
  options: [
    P("Para ramificar según el TIPO concreto de un valor de interfaz", "To branch on the concrete TYPE of an interface value"),
    P("Para convertir un int en string", "To convert an int to a string"),
    P("Para recorrer un slice", "To iterate a slice"),
    P("Para declarar una interfaz", "To declare an interface"),
  ],
  correct: 0,
  explanation: P(
    "El «type switch» inspecciona el tipo dinámico de un valor `interface{}` y ejecuta la rama que corresponda. Es la forma segura de recuperar el tipo concreto tras haberlo guardado como `any`.",
    "The \"type switch\" inspects the dynamic type of an `interface{}` value and runs the matching branch. It's the safe way to recover the concrete type after storing it as `any`.",
  ),
};

/** Capítulo 6 · Interfaces (implícitas, polimorfismo). */
export const SYL_GO_COMMUNITY_6: Syllabus = {
  c6_trasgo_explorador: { kind: "battle", questions: [Q_INTERFACE, Q_IMPLICIT, Q_POLY_GO] },
  c6_trol_cavernas: { kind: "battle", questions: [Q_EMPTY_IFACE, Q_TYPESWITCH, Q_INTERFACE] },
  c6_capitan_trasgo: { kind: "battle", questions: [Q_IMPLICIT, Q_POLY_GO, Q_INTERFACE] },
  c6_jefe_balrog: { kind: "battle", questions: [Q_POLY_GO, Q_IMPLICIT, Q_TYPESWITCH, Q_EMPTY_IFACE] },
  pergamino_contratos: {
    kind: "scroll",
    title: P("El Pergamino de los Contratos", "The Scroll of Contracts"),
    lore_intro: P(
      "Gandalf despliega un pergamino de runas. «No preguntes de qué está hecha una cosa. Pregunta qué métodos tiene. En Go, eso basta.»",
      "Gandalf unrolls a scroll of runes. \"Don't ask what a thing is made of. Ask what methods it has. In Go, that's enough.\"",
    ),
    scroll: {
      topic: P("Interfaces implícitas y polimorfismo", "Implicit interfaces and polymorphism"),
      sections: [
        {
          heading: P("Una interfaz es un contrato de métodos", "An interface is a method contract"),
          body: P(
            "Declara QUÉ métodos hacen falta, sin implementación. Un tipo la cumple SÓLO por tener esos métodos: no se declara nada (implementación implícita).",
            "It declares WHICH methods are needed, with no implementation. A type satisfies it JUST by having those methods: nothing is declared (implicit implementation).",
          ),
          code: "type Enemigo interface {\n\tAtacar() int\n}\n\ntype Trasgo struct{}\nfunc (t Trasgo) Atacar() int { return 5 } // ya es un Enemigo",
        },
        {
          heading: P("Polimorfismo", "Polymorphism"),
          body: P(
            "Un `[]Enemigo` mezcla cualquier tipo que cumpla el contrato. El código que lo recorre no sabe ni le importa qué son: llama al método y ya.",
            "A `[]Enemigo` mixes any type that satisfies the contract. The code iterating it doesn't know or care what they are: it calls the method and that's it.",
          ),
          code: "func danioTotal(horda []Enemigo) int {\n\ttotal := 0\n\tfor _, e := range horda {\n\t\ttotal += e.Atacar()\n\t}\n\treturn total\n}",
        },
        {
          heading: P("interface{} y type switch", "interface{} and type switch"),
          body: P(
            "`interface{}` (alias `any`) acepta cualquier valor. Para recuperar el tipo concreto, un `switch v.(type)` ramifica según lo que sea.",
            "`interface{}` (alias `any`) accepts any value. To recover the concrete type, a `switch v.(type)` branches on what it is.",
          ),
          code: "func describir(v interface{}) string {\n\tswitch v.(type) {\n\tcase int:\n\t\treturn \"numero\"\n\tcase string:\n\t\treturn \"texto\"\n\tdefault:\n\t\treturn \"otro\"\n\t}\n}",
        },
      ],
      keyTakeaway: P(
        "Programa contra interfaces: contratos de métodos que los tipos cumplen implícitamente. Un slice de interfaz da polimorfismo; `interface{}` acepta todo y el type switch recupera el tipo concreto.",
        "Program against interfaces: method contracts that types satisfy implicitly. A slice of interface gives polymorphism; `interface{}` accepts anything and the type switch recovers the concrete type.",
      ),
    },
  },
  puertas_de_durin: {
    kind: "challenge",
    title: P("Las Puertas de Durin", "The Doors of Durin"),
    lore_intro: P(
      "«Habla, amigo, y entra.» La interfaz Descifrable ya existe; la puerta sólo debe tener su método para cumplirla — sin declararlo.",
      "\"Speak, friend, and enter.\" The Descifrable interface already exists; the door just needs its method to satisfy it — without declaring so.",
    ),
    challenge: {
      topic: P("Implementar una interfaz (implícito)", "Implementing an interface (implicit)"),
      instructions: P(
        "Ya existen la interfaz `Descifrable` (con `SusurrarPalabra(palabra string) bool`) y la función `abre(d Descifrable, palabra string) bool`. Crea el tipo `PuertaDurin` con el método `SusurrarPalabra` que devuelva `true` SÓLO con la palabra `\"mellon\"`.",
        "The interface `Descifrable` (with `SusurrarPalabra(palabra string) bool`) and the function `abre(d Descifrable, palabra string) bool` already exist. Create the type `PuertaDurin` with the method `SusurrarPalabra` returning `true` ONLY for the word `\"mellon\"`.",
      ),
      support_code:
        'package main\n\ntype Descifrable interface {\n\tSusurrarPalabra(palabra string) bool\n}\n\nfunc abre(d Descifrable, palabra string) bool {\n\treturn d.SusurrarPalabra(palabra)\n}',
      starter_code:
        "// Descifrable (interfaz) y abre(...) ya existen.\n\ntype PuertaDurin struct{}\n\nfunc (p PuertaDurin) SusurrarPalabra(palabra string) bool {\n\t// true sólo con \"mellon\"\n}\n",
      hints: [
        P("El método debe tener la MISMA firma que la interfaz para cumplirla.", "The method must have the SAME signature as the interface to satisfy it."),
        P("`return palabra == \"mellon\"`.", "`return palabra == \"mellon\"`."),
      ],
      test_cases: [
        { input: 'abre(PuertaDurin{}, "mellon")', expected: true, description: P("La palabra élfica abre", "The Elvish word opens it"), raw: true },
        { input: 'abre(PuertaDurin{}, "amigo")', expected: false, description: P("En castellano no", "Not in Spanish"), raw: true },
        { input: 'PuertaDurin{}.SusurrarPalabra("mellon")', expected: true, description: P("El método directo también", "The direct method too"), raw: true },
      ],
    },
  },
  camara_mazarbul: {
    kind: "challenge",
    title: P("La Cámara de Mazarbul", "The Chamber of Mazarbul"),
    lore_intro: P(
      "Trasgos y un troll irrumpen a la vez: criaturas distintas, un mismo contrato. La función que suma su daño no sabe qué son.",
      "Goblins and a troll burst in at once: different creatures, one contract. The function summing their damage doesn't know what they are.",
    ),
    challenge: {
      topic: P("Polimorfismo con interfaces", "Polymorphism with interfaces"),
      instructions: P(
        "Ya existen la interfaz `Enemigo` (con `Atacar() int`) y `DanioTotal(horda []Enemigo) int`. Crea DOS tipos que cumplan `Enemigo`: `Trasgo` (ataca con 5) y `Troll` (ataca con 20).",
        "The interface `Enemigo` (with `Atacar() int`) and `DanioTotal(horda []Enemigo) int` already exist. Create TWO types satisfying `Enemigo`: `Trasgo` (attacks with 5) and `Troll` (attacks with 20).",
      ),
      support_code:
        "package main\n\ntype Enemigo interface {\n\tAtacar() int\n}\n\nfunc DanioTotal(horda []Enemigo) int {\n\ttotal := 0\n\tfor _, e := range horda {\n\t\ttotal += e.Atacar()\n\t}\n\treturn total\n}",
      starter_code:
        "// Enemigo (interfaz) y DanioTotal(...) ya existen.\n\ntype Trasgo struct{}\n\nfunc (t Trasgo) Atacar() int {\n\t//\n}\n\ntype Troll struct{}\n\nfunc (t Troll) Atacar() int {\n\t//\n}\n",
      hints: [
        P("Cada tipo cumple `Enemigo` sólo por tener `Atacar() int`.", "Each type satisfies `Enemigo` just by having `Atacar() int`."),
        P("`DanioTotal` los trata a todos como `Enemigo`: eso es polimorfismo.", "`DanioTotal` treats them all as `Enemigo`: that's polymorphism."),
      ],
      test_cases: [
        { input: "Trasgo{}.Atacar()", expected: 5, description: P("El trasgo golpea flojo", "The goblin hits soft"), raw: true },
        { input: "Troll{}.Atacar()", expected: 20, description: P("El troll golpea fuerte", "The troll hits hard"), raw: true },
        { input: "DanioTotal([]Enemigo{Trasgo{}, Trasgo{}, Troll{}})", expected: 30, description: P("Suma la horda mezclada", "Sums the mixed horde"), raw: true },
      ],
    },
  },
  puente_khazad_dum: {
    kind: "challenge",
    title: P("El Puente de Khazad-dûm", "The Bridge of Khazad-dûm"),
    lore_intro: P(
      "«¡No puedes pasar!» Un hechizo es cualquier cosa que sepa lanzarse. Quien lo conjura no necesita saber cuál es.",
      "\"You cannot pass!\" A spell is anything that knows how to be cast. Whoever conjures it needn't know which one it is.",
    ),
    challenge: {
      topic: P("Interfaces como parámetro", "Interfaces as a parameter"),
      instructions: P(
        "Ya existen la interfaz `Hechizo` (con `Lanzar() string`), la función `conjurar(h Hechizo) string` y un tipo `Chispa`. Crea el tipo `PalabraDeMando` cuyo `Lanzar()` devuelva exactamente `\"¡No puedes pasar!\"`.",
        "The interface `Hechizo` (with `Lanzar() string`), the function `conjurar(h Hechizo) string` and a type `Chispa` already exist. Create the type `PalabraDeMando` whose `Lanzar()` returns exactly `\"¡No puedes pasar!\"`.",
      ),
      support_code:
        'package main\n\ntype Hechizo interface {\n\tLanzar() string\n}\n\nfunc conjurar(h Hechizo) string {\n\treturn h.Lanzar()\n}\n\ntype Chispa struct{}\n\nfunc (c Chispa) Lanzar() string { return "chispas" }',
      starter_code:
        "// Hechizo (interfaz), conjurar(...) y Chispa ya existen.\n\ntype PalabraDeMando struct{}\n\nfunc (p PalabraDeMando) Lanzar() string {\n\t//\n}\n",
      hints: [
        P("`conjurar` acepta cualquier `Hechizo`: tu tipo lo será por tener `Lanzar()`.", "`conjurar` accepts any `Hechizo`: your type will be one by having `Lanzar()`."),
        P('`return "¡No puedes pasar!"` (con los signos de apertura y cierre).', '`return "¡No puedes pasar!"` (with the opening and closing marks).'),
      ],
      test_cases: [
        { input: "conjurar(PalabraDeMando{})", expected: "¡No puedes pasar!", description: P("Gandalf conjura tu hechizo", "Gandalf casts your spell"), raw: true },
        { input: "conjurar(Chispa{})", expected: "chispas", description: P("La misma función con otro Hechizo", "The same function with another Hechizo"), raw: true },
        { input: "PalabraDeMando{}.Lanzar()", expected: "¡No puedes pasar!", description: P("El método directo", "The direct method"), raw: true },
      ],
    },
  },
  c6_galeria_de_mazarbul: {
    kind: "challenge",
    title: P("La galería sin fin", "The endless gallery"),
    lore_intro: P(
      "En la oscuridad, cada runa es de una clase distinta. Identifica qué es cada valor con un type switch sobre la interfaz vacía.",
      "In the dark, each rune is of a different kind. Identify what each value is with a type switch over the empty interface.",
    ),
    challenge: {
      topic: P("interface{} y type switch", "interface{} and type switch"),
      instructions: P(
        "Escribe `describir(v interface{}) string` que devuelva:\n• `\"numero\"` si `v` es un `int`,\n• `\"texto\"` si es un `string`,\n• `\"otro\"` en cualquier otro caso.\n\nUsa un `switch v.(type)`.",
        "Write `describir(v interface{}) string` returning:\n• `\"numero\"` if `v` is an `int`,\n• `\"texto\"` if it's a `string`,\n• `\"otro\"` otherwise.\n\nUse a `switch v.(type)`.",
      ),
      starter_code:
        'package main\n\nfunc describir(v interface{}) string {\n\tswitch v.(type) {\n\t// case int: ...  case string: ...  default: ...\n\t}\n}\n',
      hints: [
        P("`case int:` devuelve `\"numero\"`; `case string:` devuelve `\"texto\"`.", "`case int:` returns `\"numero\"`; `case string:` returns `\"texto\"`."),
        P("`default:` recoge todo lo demás con `\"otro\"`.", "`default:` catches everything else with `\"otro\"`."),
      ],
      test_cases: [
        { input: "describir(5)", expected: "numero", description: P("Un entero", "An integer"), raw: true },
        { input: 'describir("mellon")', expected: "texto", description: P("Un texto", "A string"), raw: true },
        { input: "describir(true)", expected: "otro", description: P("Un bool: otro", "A bool: other"), raw: true },
      ],
    },
  },
};
