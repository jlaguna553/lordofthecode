import type { Syllabus } from "@/lib/game/narrative";

/**
 * Temario de React para el Libro I. Reviste la MISMA narrativa compartida de la
 * Comunidad con los fundamentos de React: componentes, props y JSX. El código
 * del jugador se TRANSPILA (JSX → React.createElement) y se RENDERIZA a HTML con
 * renderToStaticMarkup; el test compara ese HTML. En los tests, `render(el)`
 * devuelve el HTML estático de un elemento. Bilingüe ES/EN.
 */

const P = (es: string, en: string) => ({ es, en });

/** Preguntas de combate reutilizables sobre fundamentos de React. */
const Q_COMPONENT = {
  question: P(
    "¿Qué es un componente en React?",
    "What is a component in React?",
  ),
  options: [
    P(
      "Una función que devuelve JSX (lo que se ve en pantalla)",
      "A function that returns JSX (what appears on screen)",
    ),
    P("Una etiqueta HTML nueva", "A new HTML tag"),
    P("Un fichero .css", "A .css file"),
    P("Una variable global", "A global variable"),
  ],
  correct: 0,
  explanation: P(
    "Un componente es una función que recibe `props` y devuelve JSX describiendo la interfaz. Su nombre va en MAYÚSCULA inicial (`Hobbit`), y se usa como una etiqueta: `<Hobbit />`.",
    "A component is a function that takes `props` and returns JSX describing the UI. Its name starts with a CAPITAL letter (`Hobbit`), and it's used like a tag: `<Hobbit />`.",
  ),
};
const Q_JSX = {
  question: P(
    "¿Qué es JSX, como `<h1>Hola</h1>` dentro de JavaScript?",
    "What is JSX, like `<h1>Hola</h1>` inside JavaScript?",
  ),
  options: [
    P(
      "Azúcar sintáctico que se transpila a `React.createElement(...)`",
      "Syntactic sugar that transpiles to `React.createElement(...)`",
    ),
    P("HTML de verdad ejecutándose", "Real HTML running directly"),
    P("Una plantilla de texto", "A text template"),
    P("Un tipo de comentario", "A kind of comment"),
  ],
  correct: 0,
  explanation: P(
    "JSX no es HTML: es azúcar para `React.createElement('h1', null, 'Hola')`. El navegador no lo entiende directamente; un transpilador (Babel o TypeScript) lo convierte antes de ejecutarlo.",
    "JSX isn't HTML: it's sugar for `React.createElement('h1', null, 'Hola')`. The browser doesn't understand it directly; a transpiler (Babel or TypeScript) converts it before running.",
  ),
};
const Q_PROPS = {
  question: P(
    "¿Qué son las `props` de un componente?",
    "What are a component's `props`?",
  ),
  options: [
    P(
      "Los datos que recibe desde fuera, como los atributos de una etiqueta",
      "The data it receives from outside, like a tag's attributes",
    ),
    P("Su estado interno", "Its internal state"),
    P("Sus estilos CSS", "Its CSS styles"),
    P("Las funciones del navegador", "The browser functions"),
  ],
  correct: 0,
  explanation: P(
    "Las props son la entrada del componente: `<Hobbit nombre=\"Frodo\" />` le pasa `{ nombre: 'Frodo' }`. Dentro se leen desde el objeto `props` (o desestructurando: `function Hobbit({ nombre })`). Son de sólo lectura.",
    "Props are the component's input: `<Hobbit nombre=\"Frodo\" />` passes it `{ nombre: 'Frodo' }`. Inside you read them from the `props` object (or by destructuring: `function Hobbit({ nombre })`). They're read-only.",
  ),
};
const Q_EXPR = {
  question: P(
    "Dentro de JSX, ¿cómo se incrusta un valor de JavaScript, como una variable?",
    "Inside JSX, how do you embed a JavaScript value, like a variable?",
  ),
  options: [
    P("Con llaves: `<h1>Hola, {nombre}</h1>`", "With braces: `<h1>Hola, {nombre}</h1>`"),
    P("Con `${nombre}`", "With `${nombre}`"),
    P("Con comillas: `<h1>Hola, \"nombre\"</h1>`", "With quotes: `<h1>Hola, \"nombre\"</h1>`"),
    P("No se puede", "You can't"),
  ],
  correct: 0,
  explanation: P(
    "Las `{ }` abren una expresión de JavaScript dentro del JSX: `{nombre}`, `{1 + 2}`, `{esVisible ? 'sí' : 'no'}`. El `${}` es de las template strings, no de JSX.",
    "The `{ }` open a JavaScript expression inside JSX: `{nombre}`, `{1 + 2}`, `{esVisible ? 'sí' : 'no'}`. The `${}` is for template strings, not JSX.",
  ),
};
const Q_CAPITAL = {
  question: P(
    "¿Por qué el nombre de un componente debe empezar en MAYÚSCULA?",
    "Why must a component's name start with a CAPITAL letter?",
  ),
  options: [
    P(
      "React trata las etiquetas en minúscula como HTML y las Mayúsculas como componentes",
      "React treats lowercase tags as HTML and Capitalized ones as components",
    ),
    P("Por convención de estilo, sin efecto real", "Just a style convention, no real effect"),
    P("Para que ocupe menos memoria", "To use less memory"),
    P("Porque el CSS lo exige", "Because CSS requires it"),
  ],
  correct: 0,
  explanation: P(
    "`<hobbit />` (minúscula) lo interpreta React como una etiqueta HTML desconocida; `<Hobbit />` (mayúscula) lo trata como tu componente. La inicial decide si es HTML o tuyo.",
    "`<hobbit />` (lowercase) is read by React as an unknown HTML tag; `<Hobbit />` (capital) is treated as your component. The initial letter decides HTML vs yours.",
  ),
};
const Q_CONDITIONAL = {
  question: P(
    "¿Cómo se muestra una cosa u otra en JSX según una condición?",
    "How do you show one thing or another in JSX based on a condition?",
  ),
  options: [
    P("Con el operador ternario: `{cond ? <A/> : <B/>}`", "With the ternary operator: `{cond ? <A/> : <B/>}`"),
    P("Con `if` dentro del JSX directamente", "With `if` directly inside the JSX"),
    P("Con un bucle for", "With a for loop"),
    P("No se puede condicionar", "You can't do conditionals"),
  ],
  correct: 0,
  explanation: P(
    "Dentro del JSX van EXPRESIONES, no sentencias, así que el condicional idiomático es el ternario `{cond ? <A/> : <B/>}` (o `{cond && <A/>}` para «mostrar o nada»). Un `if` va fuera del `return`.",
    "Inside JSX you place EXPRESSIONS, not statements, so the idiomatic conditional is the ternary `{cond ? <A/> : <B/>}` (or `{cond && <A/>}` for \"show or nothing\"). An `if` goes outside the `return`.",
  ),
};

/** Capítulo 1 · Componentes, props y JSX. */
export const SYL_REACT_COMMUNITY_1: Syllabus = {
  c1_espia: { kind: "battle", questions: [Q_COMPONENT, Q_JSX, Q_PROPS] },
  c1_jinete_rastreador: { kind: "battle", questions: [Q_EXPR, Q_CAPITAL, Q_COMPONENT] },
  c1_perro_negro: { kind: "battle", questions: [Q_PROPS, Q_JSX, Q_CONDITIONAL] },
  c1_jefe_nazgul: { kind: "battle", questions: [Q_JSX, Q_EXPR, Q_PROPS, Q_COMPONENT] },
  pergamino_clases: {
    kind: "scroll",
    title: P("El Pergamino de las Formas", "The Scroll of Shapes"),
    lore_intro: P(
      "Antes de partir, un pergamino enseña a dibujar lo que se ve con funciones: componentes que reciben datos (props) y devuelven JSX.",
      "Before leaving, a scroll teaches how to draw what's seen with functions: components that take data (props) and return JSX.",
    ),
    scroll: {
      topic: P("Componentes, props y JSX", "Components, props and JSX"),
      sections: [
        {
          heading: P("Un componente es una función", "A component is a function"),
          body: P(
            "Devuelve JSX describiendo la interfaz. Su nombre va en MAYÚSCULA inicial y se usa como una etiqueta.",
            "It returns JSX describing the UI. Its name starts with a CAPITAL letter and is used like a tag.",
          ),
          code: "function Hobbit() {\n  return <h1>Soy un hobbit</h1>;\n}\n// se usa así:  <Hobbit />",
        },
        {
          heading: P("props: la entrada del componente", "props: the component's input"),
          body: P(
            "Los atributos que le pasas llegan como `props`. Desestructúralas en la firma y léelas en el JSX con llaves `{ }`.",
            "The attributes you pass arrive as `props`. Destructure them in the signature and read them in the JSX with braces `{ }`.",
          ),
          code: "function Hobbit({ nombre }) {\n  return <h1>Soy {nombre} de la Comarca</h1>;\n}\n// <Hobbit nombre=\"Frodo\" />  →  <h1>Soy Frodo de la Comarca</h1>",
        },
        {
          heading: P("JSX = React.createElement", "JSX = React.createElement"),
          body: P(
            "JSX no es HTML: se transpila a `React.createElement(...)`. Dentro, `{ }` abre una expresión de JS — ideal para condicionales con el ternario.",
            "JSX isn't HTML: it transpiles to `React.createElement(...)`. Inside, `{ }` opens a JS expression — perfect for conditionals with the ternary.",
          ),
          code: "function Sigilo({ nivel }) {\n  return nivel >= 50 ? <span>oculto</span> : <span>visible</span>;\n}",
        },
      ],
      keyTakeaway: P(
        "Un componente es una función con inicial Mayúscula que recibe props y devuelve JSX; dentro del JSX, `{ }` incrusta expresiones de JavaScript. JSX se transpila a React.createElement.",
        "A component is a Capitalized function that takes props and returns JSX; inside JSX, `{ }` embeds JavaScript expressions. JSX transpiles to React.createElement.",
      ),
    },
  },
  sendero_comarca: {
    kind: "challenge",
    title: P("Preparar la Huida", "Preparing the Flight"),
    lore_intro: P(
      "Todo héroe empieza por presentarse. Escribe el componente que muestra quién eres.",
      "Every hero starts by introducing themselves. Write the component that shows who you are.",
    ),
    challenge: {
      topic: P("Componentes y props", "Components and props"),
      instructions: P(
        "Escribe el componente `Hobbit` que reciba la prop `nombre` y devuelva `<h1>Soy {nombre} de la Comarca</h1>`.\n\nEn los tests, `render(<Hobbit nombre=\"Frodo\" />)` devuelve el HTML `\"<h1>Soy Frodo de la Comarca</h1>\"`.",
        "Write the component `Hobbit` that takes the prop `nombre` and returns `<h1>Soy {nombre} de la Comarca</h1>`.\n\nIn the tests, `render(<Hobbit nombre=\"Frodo\" />)` returns the HTML `\"<h1>Soy Frodo de la Comarca</h1>\"`.",
      ),
      starter_code:
        "function Hobbit({ nombre }) {\n  // devuelve <h1>Soy {nombre} de la Comarca</h1>\n}\n",
      hints: [
        P("Desestructura la prop en la firma: `function Hobbit({ nombre })`.", "Destructure the prop in the signature: `function Hobbit({ nombre })`."),
        P("Incrusta la variable con llaves: `<h1>Soy {nombre} de la Comarca</h1>`.", "Embed the variable with braces: `<h1>Soy {nombre} de la Comarca</h1>`."),
      ],
      test_cases: [
        { input: 'render(<Hobbit nombre="Frodo" />)', expected: "<h1>Soy Frodo de la Comarca</h1>", description: P("Se presenta con su nombre", "Introduces itself with its name"), raw: true },
        { input: 'render(<Hobbit nombre="Sam" />)', expected: "<h1>Soy Sam de la Comarca</h1>", description: P("Con otro nombre", "With another name"), raw: true },
      ],
    },
  },
  halito_negro: {
    kind: "challenge",
    title: P("El Hálito Negro", "The Black Breath"),
    lore_intro: P(
      "Un Jinete Negro husmea el aire. Muestra si estás oculto o a la vista según tu sigilo, con un ternario en el JSX.",
      "A Black Rider sniffs the air. Show whether you're hidden or visible based on your stealth, with a ternary in the JSX.",
    ),
    challenge: {
      topic: P("Renderizado condicional (ternario)", "Conditional rendering (ternary)"),
      instructions: P(
        "Escribe el componente `Sigilo` que reciba la prop `nivel` (número) y devuelva:\n• `<span>oculto</span>` si `nivel` es 50 o más,\n• `<span>visible</span>` si es menor.\n\nUsa el operador ternario.",
        "Write the component `Sigilo` that takes the prop `nivel` (number) and returns:\n• `<span>oculto</span>` if `nivel` is 50 or more,\n• `<span>visible</span>` if less.\n\nUse the ternary operator.",
      ),
      starter_code:
        "function Sigilo({ nivel }) {\n  // return nivel >= 50 ? ... : ...\n}\n",
      hints: [
        P("El ternario devuelve uno u otro JSX: `return nivel >= 50 ? <span>oculto</span> : <span>visible</span>;`.", "The ternary returns one JSX or the other: `return nivel >= 50 ? <span>oculto</span> : <span>visible</span>;`."),
        P("Las props numéricas se pasan con llaves: `<Sigilo nivel={90} />`.", "Numeric props are passed with braces: `<Sigilo nivel={90} />`."),
      ],
      test_cases: [
        { input: "render(<Sigilo nivel={90} />)", expected: "<span>oculto</span>", description: P("Sigilo alto: oculto", "High stealth: hidden"), raw: true },
        { input: "render(<Sigilo nivel={10} />)", expected: "<span>visible</span>", description: P("Sigilo bajo: visible", "Low stealth: visible"), raw: true },
        { input: "render(<Sigilo nivel={50} />)", expected: "<span>oculto</span>", description: P("Justo en 50: oculto", "Exactly 50: hidden"), raw: true },
      ],
    },
  },
};
