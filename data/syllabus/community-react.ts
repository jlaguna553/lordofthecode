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

/** Preguntas de combate reutilizables sobre listas, children y composición. */
const Q_LIST = {
  question: P(
    "¿Cómo se renderiza una lista de elementos desde un array en JSX?",
    "How do you render a list of elements from an array in JSX?",
  ),
  options: [
    P("Con `.map`: `{items.map(x => <li>{x}</li>)}`", "With `.map`: `{items.map(x => <li>{x}</li>)}`"),
    P("Con un bucle `for` dentro del JSX", "With a `for` loop inside the JSX"),
    P("Con `items.forEach(...)`", "With `items.forEach(...)`"),
    P("No se puede renderizar un array", "You can't render an array"),
  ],
  correct: 0,
  explanation: P(
    "`map` transforma cada dato en un elemento y devuelve un array de JSX, que React sabe renderizar. `forEach` no sirve (no devuelve nada) y un `for` es una sentencia, no una expresión.",
    "`map` turns each item into an element and returns an array of JSX, which React knows how to render. `forEach` won't work (returns nothing) and a `for` is a statement, not an expression.",
  ),
};
const Q_KEY = {
  question: P(
    "¿Para qué sirve la prop `key` en los elementos de una lista?",
    "What is the `key` prop for on list items?",
  ),
  options: [
    P(
      "Para que React identifique cada elemento entre renders (rendimiento y estado correcto)",
      "So React can identify each element across renders (performance and correct state)",
    ),
    P("Para ordenar la lista", "To sort the list"),
    P("Para darle estilo", "To style it"),
    P("Es obligatoria en el HTML final", "It's required in the final HTML"),
  ],
  correct: 0,
  explanation: P(
    "`key` le da a React una identidad estable a cada elemento de una lista para saber cuál cambió, se añadió o se borró. Debe ser única entre hermanos. No aparece en el HTML final: es sólo para React.",
    "`key` gives React a stable identity for each list item so it knows which one changed, was added or removed. It must be unique among siblings. It doesn't appear in the final HTML: it's only for React.",
  ),
};
const Q_CHILDREN = {
  question: P(
    "¿Qué es la prop especial `children` de un componente?",
    "What is a component's special `children` prop?",
  ),
  options: [
    P(
      "Lo que se escribe ENTRE las etiquetas: `<Marco>esto</Marco>`",
      "Whatever is written BETWEEN the tags: `<Marco>this</Marco>`",
    ),
    P("Sus componentes hijos declarados en el fichero", "Its child components declared in the file"),
    P("Una lista de sus props", "A list of its props"),
    P("El componente padre", "The parent component"),
  ],
  correct: 0,
  explanation: P(
    "`children` es lo que pones entre las etiquetas de apertura y cierre: en `<Marco>hola</Marco>`, `children` es `'hola'`. El componente lo coloca donde quiera con `{children}`. Así se hacen envoltorios reutilizables.",
    "`children` is whatever you put between the opening and closing tags: in `<Marco>hola</Marco>`, `children` is `'hola'`. The component places it wherever it wants with `{children}`. That's how you build reusable wrappers.",
  ),
};
const Q_COMPOSE = {
  question: P(
    "¿Cómo usa un componente a OTRO componente dentro de su JSX?",
    "How does one component use ANOTHER component inside its JSX?",
  ),
  options: [
    P("Como una etiqueta: `<Verso texto={v} />`", "As a tag: `<Verso texto={v} />`"),
    P("Llamándolo como función: `Verso(v)`", "Calling it as a function: `Verso(v)`"),
    P("Con `import` dentro del return", "With `import` inside the return"),
    P("No se pueden anidar componentes", "You can't nest components"),
  ],
  correct: 0,
  explanation: P(
    "La composición es el corazón de React: un componente usa a otro como si fuera una etiqueta, pasándole props. `<Canto>` puede renderizar muchos `<Verso />`. Se construyen interfaces complejas combinando piezas simples.",
    "Composition is the heart of React: a component uses another like a tag, passing it props. `<Canto>` can render many `<Verso />`. You build complex interfaces by combining simple pieces.",
  ),
};
const Q_CLASSNAME = {
  question: P(
    "En JSX, ¿cómo se pone una clase CSS a un elemento?",
    "In JSX, how do you put a CSS class on an element?",
  ),
  options: [
    P("Con `className`: `<div className=\"caja\">`", "With `className`: `<div className=\"caja\">`"),
    P("Con `class`: `<div class=\"caja\">`", "With `class`: `<div class=\"caja\">`"),
    P("Con `css`: `<div css=\"caja\">`", "With `css`: `<div css=\"caja\">`"),
    P("Con `style`: `<div style=\"caja\">`", "With `style`: `<div style=\"caja\">`"),
  ],
  correct: 0,
  explanation: P(
    "En JSX es `className`, no `class` (porque `class` es palabra reservada de JavaScript). React lo traduce al atributo `class` del HTML final. Igual pasa con `htmlFor` en vez de `for`.",
    "In JSX it's `className`, not `class` (because `class` is a reserved JavaScript word). React translates it to the `class` attribute in the final HTML. The same goes for `htmlFor` instead of `for`.",
  ),
};

/** Capítulo 2 · Listas, children y composición. */
export const SYL_REACT_COMMUNITY_2: Syllabus = {
  c2_raiz: { kind: "battle", questions: [Q_LIST, Q_KEY, Q_CLASSNAME] },
  c2_niebla: { kind: "battle", questions: [Q_CHILDREN, Q_COMPOSE, Q_LIST] },
  c2_sauce: { kind: "battle", questions: [Q_KEY, Q_CLASSNAME, Q_CHILDREN] },
  c2_jefe_tumulario: { kind: "battle", questions: [Q_LIST, Q_KEY, Q_COMPOSE, Q_CHILDREN] },
  pergamino_ciclo_vida: {
    kind: "scroll",
    title: P("El Pergamino de las Muchas Formas", "The Scroll of Many Shapes"),
    lore_intro: P(
      "En el Bosque Viejo, un pergamino enseña a dibujar MUCHAS cosas (listas con map), a envolver contenido (children) y a combinar componentes (composición).",
      "In the Old Forest, a scroll teaches how to draw MANY things (lists with map), wrap content (children) and combine components (composition).",
    ),
    scroll: {
      topic: P("Listas, children y composición", "Lists, children and composition"),
      sections: [
        {
          heading: P("Listas con map (y key)", "Lists with map (and key)"),
          body: P(
            "Para renderizar un array, transfórmalo con `.map` en elementos. Dale a cada uno una `key` única: React la usa para seguir cada elemento (no aparece en el HTML).",
            "To render an array, transform it with `.map` into elements. Give each a unique `key`: React uses it to track each item (it doesn't appear in the HTML).",
          ),
          code: "function Lista({ nombres }) {\n  return (\n    <ul>\n      {nombres.map((n) => (\n        <li key={n}>{n}</li>\n      ))}\n    </ul>\n  );\n}",
        },
        {
          heading: P("children: envolver contenido", "children: wrapping content"),
          body: P(
            "Lo que pones ENTRE las etiquetas llega como la prop `children`. El componente lo coloca con `{children}`. Ideal para envoltorios. Ojo: la clase CSS es `className`, no `class`.",
            "Whatever you put BETWEEN the tags arrives as the `children` prop. The component places it with `{children}`. Great for wrappers. Note: the CSS class is `className`, not `class`.",
          ),
          code: "function Marco({ children }) {\n  return <div className=\"marco\">{children}</div>;\n}\n// <Marco>hola</Marco>  →  <div class=\"marco\">hola</div>",
        },
        {
          heading: P("Composición: componentes dentro de componentes", "Composition: components within components"),
          body: P(
            "Un componente usa a otro como una etiqueta, pasándole props. Combinando piezas simples se arman interfaces complejas.",
            "A component uses another like a tag, passing it props. Combining simple pieces builds complex interfaces.",
          ),
          code: "function Verso({ texto }) {\n  return <li>{texto}</li>;\n}\nfunction Canto({ versos }) {\n  return <ul>{versos.map((v) => <Verso key={v} texto={v} />)}</ul>;\n}",
        },
      ],
      keyTakeaway: P(
        "`.map` renderiza listas (con `key` única por elemento); `children` es el contenido entre etiquetas; y la composición combina componentes como etiquetas. La clase CSS se escribe `className`.",
        "`.map` renders lists (with a unique `key` per item); `children` is the content between tags; and composition combines components as tags. The CSS class is written `className`.",
      ),
    },
  },
  viejo_hombre_sauce: {
    kind: "challenge",
    title: P("El Viejo Hombre Sauce", "Old Man Willow"),
    lore_intro: P(
      "El Sauce atrapa a los hobbits uno a uno. Muéstralos a todos en una lista con map.",
      "The Willow snares the hobbits one by one. Show them all in a list with map.",
    ),
    challenge: {
      topic: P("Listas con map y key", "Lists with map and key"),
      instructions: P(
        "Escribe el componente `Lista` que reciba la prop `nombres` (array de strings) y devuelva un `<ul>` con un `<li>` por cada nombre. Dale a cada `<li>` una `key` (usa el propio nombre).\n\n`render(<Lista nombres={[\"Merry\", \"Pippin\"]} />)` → `\"<ul><li>Merry</li><li>Pippin</li></ul>\"`.",
        "Write the component `Lista` that takes the prop `nombres` (array of strings) and returns a `<ul>` with one `<li>` per name. Give each `<li>` a `key` (use the name itself).\n\n`render(<Lista nombres={[\"Merry\", \"Pippin\"]} />)` → `\"<ul><li>Merry</li><li>Pippin</li></ul>\"`.",
      ),
      starter_code:
        "function Lista({ nombres }) {\n  // <ul>{nombres.map(n => <li key={n}>{n}</li>)}</ul>\n}\n",
      hints: [
        P("Envuelve el map en un `<ul>`: `<ul>{nombres.map(...)}</ul>`.", "Wrap the map in a `<ul>`: `<ul>{nombres.map(...)}</ul>`."),
        P("Cada elemento lleva su key: `<li key={n}>{n}</li>`.", "Each element carries its key: `<li key={n}>{n}</li>`."),
      ],
      test_cases: [
        { input: 'render(<Lista nombres={["Merry", "Pippin"]} />)', expected: "<ul><li>Merry</li><li>Pippin</li></ul>", description: P("Cada nombre, su <li>", "Each name, its own <li>"), raw: true },
        { input: "render(<Lista nombres={[]} />)", expected: "<ul></ul>", description: P("Lista vacía", "Empty list"), raw: true },
        { input: 'render(<Lista nombres={["Frodo"]} />)', expected: "<ul><li>Frodo</li></ul>", description: P("Uno solo", "Just one"), raw: true },
      ],
    },
  },
  tumulo_espectro: {
    kind: "challenge",
    title: P("El Túmulo del Espectro", "The Wight's Barrow"),
    lore_intro: P(
      "El Tumulario encierra a sus víctimas. Crea un envoltorio que rodee lo que sea que le pongas dentro: eso es children.",
      "The Barrow-wight locks its victims away. Build a wrapper that surrounds whatever you place inside it: that's children.",
    ),
    challenge: {
      topic: P("La prop children (y className)", "The children prop (and className)"),
      instructions: P(
        "Escribe el componente `Tumba` que envuelva su contenido (`children`) en un `<div>` con la clase CSS `tumba`.\n\nRecuerda: en JSX la clase se escribe `className`. `render(<Tumba>Frodo</Tumba>)` → `\"<div class=\\\"tumba\\\">Frodo</div>\"`.",
        "Write the component `Tumba` that wraps its content (`children`) in a `<div>` with the CSS class `tumba`.\n\nRemember: in JSX the class is written `className`. `render(<Tumba>Frodo</Tumba>)` → `\"<div class=\\\"tumba\\\">Frodo</div>\"`.",
      ),
      starter_code:
        'function Tumba({ children }) {\n  // <div className="tumba">{children}</div>\n}\n',
      hints: [
        P("Desestructura `children` y colócalo dentro: `{children}`.", "Destructure `children` and place it inside: `{children}`."),
        P('La clase va con `className`, que React vuelca a `class`: `<div className="tumba">`.', 'The class goes with `className`, which React turns into `class`: `<div className="tumba">`.'),
      ],
      test_cases: [
        { input: "render(<Tumba>Frodo</Tumba>)", expected: '<div class="tumba">Frodo</div>', description: P("Envuelve el contenido", "Wraps the content"), raw: true },
        { input: 'render(<Tumba>{"Sam"}</Tumba>)', expected: '<div class="tumba">Sam</div>', description: P("Con otro contenido", "With other content"), raw: true },
      ],
    },
  },
  canto_bombadil: {
    kind: "challenge",
    title: P("El Canto de Tom Bombadil", "Tom Bombadil's Song"),
    lore_intro: P(
      "El canto de Tom es muchos versos, cada uno su propio componente. Compón el canto a partir de piezas pequeñas.",
      "Tom's song is many verses, each its own component. Compose the song out of small pieces.",
    ),
    challenge: {
      topic: P("Composición de componentes", "Component composition"),
      instructions: P(
        "Escribe DOS componentes:\n• `Verso` que reciba `texto` y devuelva `<li>{texto}</li>`,\n• `Canto` que reciba `versos` (array) y devuelva un `<ul>` renderizando un `<Verso />` por cada verso (con `key`).\n\n`render(<Canto versos={[\"ho\", \"hey\"]} />)` → `\"<ul><li>ho</li><li>hey</li></ul>\"`.",
        "Write TWO components:\n• `Verso` taking `texto` and returning `<li>{texto}</li>`,\n• `Canto` taking `versos` (array) and returning a `<ul>` rendering one `<Verso />` per verse (with `key`).\n\n`render(<Canto versos={[\"ho\", \"hey\"]} />)` → `\"<ul><li>ho</li><li>hey</li></ul>\"`.",
      ),
      starter_code:
        "function Verso({ texto }) {\n  // <li>{texto}</li>\n}\n\nfunction Canto({ versos }) {\n  // <ul>{versos.map(v => <Verso key={v} texto={v} />)}</ul>\n}\n",
      hints: [
        P("`Canto` usa a `Verso` como una etiqueta: `<Verso key={v} texto={v} />`.", "`Canto` uses `Verso` as a tag: `<Verso key={v} texto={v} />`."),
        P("`Verso` sólo devuelve `<li>{texto}</li>`.", "`Verso` just returns `<li>{texto}</li>`."),
      ],
      test_cases: [
        { input: 'render(<Canto versos={["ho", "hey"]} />)', expected: "<ul><li>ho</li><li>hey</li></ul>", description: P("Canto compuesto de versos", "A song composed of verses"), raw: true },
        { input: "render(<Canto versos={[]} />)", expected: "<ul></ul>", description: P("Sin versos", "No verses"), raw: true },
      ],
    },
  },
};

/** Preguntas de combate reutilizables sobre estado con useState. */
const Q_USESTATE = {
  question: P(
    "¿Qué devuelve `useState(0)`?",
    "What does `useState(0)` return?",
  ),
  options: [
    P(
      "Un par `[valor, setValor]`: el estado actual y una función para cambiarlo",
      "A pair `[value, setValue]`: the current state and a function to change it",
    ),
    P("Sólo el valor 0", "Just the value 0"),
    P("Una promesa", "A promise"),
    P("El componente", "The component"),
  ],
  correct: 0,
  explanation: P(
    "`const [n, setN] = useState(0)` te da el valor actual (`n`, empieza en 0) y su actualizador (`setN`). Llamar a `setN(...)` re-renderiza el componente con el nuevo valor. El argumento es sólo el valor INICIAL.",
    "`const [n, setN] = useState(0)` gives you the current value (`n`, starts at 0) and its updater (`setN`). Calling `setN(...)` re-renders the component with the new value. The argument is only the INITIAL value.",
  ),
};
const Q_RERENDER = {
  question: P(
    "¿Qué pasa cuando llamas al actualizador de estado, como `setN(5)`?",
    "What happens when you call the state updater, like `setN(5)`?",
  ),
  options: [
    P(
      "React vuelve a renderizar el componente con el nuevo estado",
      "React re-renders the component with the new state",
    ),
    P("Cambia la variable pero no se ve hasta recargar", "It changes the variable but you won't see it until reload"),
    P("Modifica el DOM directamente a mano", "It edits the DOM directly by hand"),
    P("No hace nada hasta el próximo click", "It does nothing until the next click"),
  ],
  correct: 0,
  explanation: P(
    "Cambiar el estado con el actualizador le dice a React que el componente debe re-renderizarse: React vuelve a llamar a tu función y pinta el resultado. NO modifiques el estado a mano (`n = 5`): no se enteraría.",
    "Changing state with the updater tells React the component must re-render: React calls your function again and paints the result. Do NOT mutate state by hand (`n = 5`): React wouldn't notice.",
  ),
};
const Q_UPDATER_FN = {
  question: P(
    "¿Por qué a veces se usa `setN(prev => prev + 1)` en vez de `setN(n + 1)`?",
    "Why is `setN(prev => prev + 1)` sometimes used instead of `setN(n + 1)`?",
  ),
  options: [
    P(
      "El actualizador funcional recibe el valor MÁS RECIENTE: seguro si hay varias actualizaciones",
      "The functional updater receives the MOST RECENT value: safe when there are several updates",
    ),
    P("Es más corto de escribir", "It's shorter to write"),
    P("Sólo funciona con números", "It only works with numbers"),
    P("No hay diferencia", "There's no difference"),
  ],
  correct: 0,
  explanation: P(
    "`setN(prev => prev + 1)` calcula el nuevo estado a partir del anterior GARANTIZADO. Si haces varias actualizaciones seguidas (o dentro de callbacks), `setN(n + 1)` puede usar un `n` desfasado; la forma funcional no.",
    "`setN(prev => prev + 1)` computes the new state from the GUARANTEED previous one. If you do several updates in a row (or inside callbacks), `setN(n + 1)` may use a stale `n`; the functional form doesn't.",
  ),
};
const Q_ONCLICK = {
  question: P(
    "¿Cómo se maneja un click en un botón en React?",
    "How do you handle a button click in React?",
  ),
  options: [
    P("Con la prop `onClick={() => ...}`", "With the prop `onClick={() => ...}`"),
    P('Con `onclick="..."` como en HTML', 'With `onclick="..."` as in HTML'),
    P("Con `addEventListener` en el JSX", "With `addEventListener` in the JSX"),
    P("Con `on:click`", "With `on:click`"),
  ],
  correct: 0,
  explanation: P(
    "En JSX los eventos van en camelCase y reciben una FUNCIÓN, no una cadena: `onClick={() => setN(n + 1)}`. Pasa la función, no la llames (`onClick={setN(...)}` la ejecutaría en el render).",
    "In JSX events are camelCase and take a FUNCTION, not a string: `onClick={() => setN(n + 1)}`. Pass the function, don't call it (`onClick={setN(...)}` would run it during render).",
  ),
};
const Q_STATE_LOCAL = {
  question: P(
    "¿A quién pertenece el estado creado con `useState` dentro de un componente?",
    "Who owns the state created with `useState` inside a component?",
  ),
  options: [
    P(
      "A esa instancia del componente: cada una tiene su propio estado",
      "To that component instance: each one has its own state",
    ),
    P("Es global, compartido por todos", "It's global, shared by all"),
    P("Al componente padre", "To the parent component"),
    P("Al navegador", "To the browser"),
  ],
  correct: 0,
  explanation: P(
    "El estado es LOCAL y privado de cada instancia: dos `<Contador />` en pantalla cuentan por separado. Para compartir estado, se «sube» al componente padre común y se baja por props (lifting state up).",
    "State is LOCAL and private to each instance: two `<Contador />` on screen count separately. To share state, you \"lift it up\" to a common parent and pass it down via props (lifting state up).",
  ),
};

/** Capítulo 3 · Estado con useState. */
export const SYL_REACT_COMMUNITY_3: Syllabus = {
  c3_ferny: { kind: "battle", questions: [Q_USESTATE, Q_RERENDER, Q_ONCLICK] },
  c3_espia_nazgul: { kind: "battle", questions: [Q_UPDATER_FN, Q_STATE_LOCAL, Q_USESTATE] },
  c3_montaraz_falso: { kind: "battle", questions: [Q_ONCLICK, Q_RERENDER, Q_UPDATER_FN] },
  c3_jefe_reybrujo: { kind: "battle", questions: [Q_USESTATE, Q_UPDATER_FN, Q_ONCLICK, Q_STATE_LOCAL] },
  pergamino_herencia: {
    kind: "scroll",
    title: P("El Pergamino del Estado", "The Scroll of State"),
    lore_intro: P(
      "En el Póney Pisador, un pergamino enseña a que un componente RECUERDE y CAMBIE: el hook useState, y cómo un evento lo actualiza.",
      "At the Prancing Pony, a scroll teaches a component to REMEMBER and CHANGE: the useState hook, and how an event updates it.",
    ),
    scroll: {
      topic: P("Estado con useState", "State with useState"),
      sections: [
        {
          heading: P("useState: recordar entre renders", "useState: remembering across renders"),
          body: P(
            "`useState(inicial)` devuelve `[valor, setValor]`. El componente pinta el `valor`; llamar a `setValor(...)` lo actualiza y hace que React re-renderice. El estado es local a cada instancia.",
            "`useState(initial)` returns `[value, setValue]`. The component paints the `value`; calling `setValue(...)` updates it and makes React re-render. State is local to each instance.",
          ),
          code: "function Contador() {\n  const [n, setN] = useState(0);\n  return <button onClick={() => setN(n + 1)}>{n}</button>;\n}",
        },
        {
          heading: P("Eventos: onClick", "Events: onClick"),
          body: P(
            "Los eventos van en camelCase y reciben una FUNCIÓN: `onClick={() => setN(n + 1)}`. Pásala, no la llames. Nunca cambies el estado a mano (`n = 5`): usa siempre el actualizador.",
            "Events are camelCase and take a FUNCTION: `onClick={() => setN(n + 1)}`. Pass it, don't call it. Never mutate state by hand (`n = 5`): always use the updater.",
          ),
          code: "<button onClick={() => setOn(!on)}>\n  {on ? 'encendido' : 'apagado'}\n</button>",
        },
        {
          heading: P("Actualizador funcional", "Functional updater"),
          body: P(
            "Cuando el nuevo estado depende del anterior, usa la forma funcional `setN(prev => prev + 1)`: recibe el valor más reciente, sin riesgo de usar uno desfasado.",
            "When the new state depends on the previous one, use the functional form `setN(prev => prev + 1)`: it receives the most recent value, with no risk of using a stale one.",
          ),
          code: "setVida((v) => Math.max(0, v - 40)); // resta 40 sin bajar de 0",
        },
      ],
      keyTakeaway: P(
        "useState(inicial) da [valor, setValor]; setValor re-renderiza (nunca mutes el estado a mano). Los eventos son funciones en camelCase (onClick), y para actualizar a partir del valor previo, usa setValor(prev => ...).",
        "useState(initial) gives [value, setValue]; setValue re-renders (never mutate state by hand). Events are camelCase functions (onClick), and to update from the previous value, use setValue(prev => ...).",
      ),
    },
  },
  poney_pisador: {
    kind: "challenge",
    title: P("Trancos, el Montaraz", "Strider the Ranger"),
    lore_intro: P(
      "Trancos lleva la cuenta de los pasos del camino. Un componente que recuerda y suma: eso es useState.",
      "Strider keeps count of the steps on the road. A component that remembers and adds: that's useState.",
    ),
    challenge: {
      topic: P("useState básico", "Basic useState"),
      instructions: P(
        "Escribe el componente `Contador` (sin props) que use `useState(0)` y devuelva un `<button>` que MUESTRE el número y, al hacer click, lo INCREMENTE en 1.\n\nEn los tests, `mount(el)` renderiza el componente; `.click()` pulsa el botón y `.text()` lee su texto. Así, `mount(<Contador />).click().text()` → `\"1\"`.",
        "Write the component `Contador` (no props) that uses `useState(0)` and returns a `<button>` that SHOWS the number and, on click, INCREMENTS it by 1.\n\nIn the tests, `mount(el)` renders the component; `.click()` presses the button and `.text()` reads its text. So `mount(<Contador />).click().text()` → `\"1\"`.",
      ),
      starter_code:
        "function Contador() {\n  const [n, setN] = useState(0);\n  // <button onClick={() => setN(n + 1)}>{n}</button>\n}\n",
      hints: [
        P("Lee y actualiza: `const [n, setN] = useState(0)`.", "Read and update: `const [n, setN] = useState(0)`."),
        P("El botón muestra `{n}` y al click hace `setN(n + 1)`.", "The button shows `{n}` and on click does `setN(n + 1)`."),
      ],
      test_cases: [
        { input: "mount(<Contador />).text()", expected: "0", description: P("Empieza en 0", "Starts at 0"), raw: true },
        { input: "mount(<Contador />).click().text()", expected: "1", description: P("Un click: 1", "One click: 1"), raw: true },
        { input: "mount(<Contador />).click().click().click().text()", expected: "3", description: P("Tres clicks: 3", "Three clicks: 3"), raw: true },
      ],
    },
  },
  hojas_de_tumulo: {
    kind: "challenge",
    title: P("Las Hojas de los Túmulos", "The Barrow-blades"),
    lore_intro: P(
      "La hoja encantada se enciende y se apaga. Un estado booleano que alterna con cada toque.",
      "The enchanted blade lights up and goes dark. A boolean state that toggles with each touch.",
    ),
    challenge: {
      topic: P("useState con prop inicial y toggle", "useState with an initial prop and toggle"),
      instructions: P(
        "Escribe `Interruptor` que reciba la prop `inicial` (booleano) y use `useState(inicial)`. Devuelve un `<button>` que muestre `\"encendido\"` si el estado es true o `\"apagado\"` si es false, y que al hacer click ALTERNE el valor.\n\n`mount(<Interruptor inicial={false} />).click().text()` → `\"encendido\"`.",
        "Write `Interruptor` that takes the prop `inicial` (boolean) and uses `useState(inicial)`. Return a `<button>` showing `\"encendido\"` if the state is true or `\"apagado\"` if false, and that TOGGLES on click.\n\n`mount(<Interruptor inicial={false} />).click().text()` → `\"encendido\"`.",
      ),
      starter_code:
        'function Interruptor({ inicial }) {\n  const [on, setOn] = useState(inicial);\n  // <button onClick={() => setOn(!on)}>{on ? "encendido" : "apagado"}</button>\n}\n',
      hints: [
        P("Alterna con la negación: `onClick={() => setOn(!on)}`.", "Toggle with negation: `onClick={() => setOn(!on)}`."),
        P('Muestra según el estado: `{on ? "encendido" : "apagado"}`.', 'Show based on state: `{on ? "encendido" : "apagado"}`.'),
      ],
      test_cases: [
        { input: "mount(<Interruptor inicial={false} />).text()", expected: "apagado", description: P("Empieza apagado", "Starts off"), raw: true },
        { input: "mount(<Interruptor inicial={false} />).click().text()", expected: "encendido", description: P("Un click lo enciende", "One click turns it on"), raw: true },
        { input: "mount(<Interruptor inicial={true} />).click().text()", expected: "apagado", description: P("Desde encendido, se apaga", "From on, it turns off"), raw: true },
      ],
    },
  },
  cima_de_los_vientos: {
    kind: "challenge",
    title: P("La Cima de los Vientos", "Weathertop"),
    lore_intro: P(
      "Cada golpe del Rey Brujo drena tu vida. Usa el actualizador funcional para restar sin bajar de 0.",
      "Each blow from the Witch-king drains your life. Use the functional updater to subtract without going below 0.",
    ),
    challenge: {
      topic: P("Actualizador funcional y clamp", "Functional updater and clamp"),
      instructions: P(
        "Escribe `Vida` (sin props) con `useState(100)`. Devuelve un `<button>` que muestre la vida y, al hacer click, le RESTE 40 sin bajar nunca de 0. Usa el actualizador funcional: `setVida(v => Math.max(0, v - 40))`.\n\n`mount(<Vida />).click().text()` → `\"60\"`.",
        "Write `Vida` (no props) with `useState(100)`. Return a `<button>` showing the life and, on click, SUBTRACTING 40 without ever going below 0. Use the functional updater: `setVida(v => Math.max(0, v - 40))`.\n\n`mount(<Vida />).click().text()` → `\"60\"`.",
      ),
      starter_code:
        "function Vida() {\n  const [vida, setVida] = useState(100);\n  // <button onClick={() => setVida(v => Math.max(0, v - 40))}>{vida}</button>\n}\n",
      hints: [
        P("El actualizador funcional recibe el valor previo: `setVida(v => ...)`.", "The functional updater receives the previous value: `setVida(v => ...)`."),
        P("Resta sin bajar de 0: `Math.max(0, v - 40)`.", "Subtract without going below 0: `Math.max(0, v - 40)`."),
      ],
      test_cases: [
        { input: "mount(<Vida />).text()", expected: "100", description: P("Vida llena", "Full life"), raw: true },
        { input: "mount(<Vida />).click().text()", expected: "60", description: P("Un golpe: 60", "One blow: 60"), raw: true },
        { input: "mount(<Vida />).click().click().click().text()", expected: "0", description: P("100→60→20→0: nunca negativo", "100→60→20→0: never negative"), raw: true },
      ],
    },
  },
};

/** Preguntas de combate reutilizables sobre inputs controlados y estado. */
const Q_CONTROLLED = {
  question: P(
    "¿Qué es un input CONTROLADO en React?",
    "What is a CONTROLLED input in React?",
  ),
  options: [
    P(
      "Uno cuyo valor viene del estado (`value={x}`) y se actualiza con `onChange`",
      "One whose value comes from state (`value={x}`) and updates with `onChange`",
    ),
    P("Uno que React no toca nunca", "One React never touches"),
    P("Un input de sólo lectura", "A read-only input"),
    P("Un input dentro de un formulario", "An input inside a form"),
  ],
  correct: 0,
  explanation: P(
    "En un input controlado, el estado es la ÚNICA fuente de verdad: `value={texto}` lo pinta y `onChange={e => setTexto(e.target.value)}` lo actualiza. El estado y lo que se ve nunca se desincronizan.",
    "In a controlled input, state is the SINGLE source of truth: `value={texto}` paints it and `onChange={e => setTexto(e.target.value)}` updates it. State and what's shown never drift apart.",
  ),
};
const Q_ONCHANGE = {
  question: P(
    "En `onChange={e => ...}`, ¿cómo se lee lo que el usuario escribió?",
    "In `onChange={e => ...}`, how do you read what the user typed?",
  ),
  options: [
    P("`e.target.value`", "`e.target.value`"),
    P("`e.value`", "`e.value`"),
    P("`e.text`", "`e.text`"),
    P("`this.value`", "`this.value`"),
  ],
  correct: 0,
  explanation: P(
    "El evento trae el elemento en `e.target`, y su contenido en `.value`: `e.target.value`. Para un checkbox se usa `e.target.checked` (booleano) en su lugar.",
    "The event carries the element in `e.target`, and its content in `.value`: `e.target.value`. For a checkbox you use `e.target.checked` (boolean) instead.",
  ),
};
const Q_DERIVED = {
  question: P(
    "Si un valor se puede CALCULAR a partir del estado en cada render, ¿deberías guardarlo en otro useState?",
    "If a value can be COMPUTED from state on each render, should you store it in another useState?",
  ),
  options: [
    P(
      "No: calcúlalo en el render (estado derivado); guardar duplica y se desincroniza",
      "No: compute it in the render (derived state); storing it duplicates and drifts",
    ),
    P("Sí, siempre en su propio useState", "Yes, always in its own useState"),
    P("Sólo si es un número", "Only if it's a number"),
    P("Da igual", "It doesn't matter"),
  ],
  correct: 0,
  explanation: P(
    "El estado derivado se calcula durante el render a partir del estado real: `const total = a + b`. Guardarlo en otro `useState` crea una copia que hay que mantener sincronizada a mano — fuente de bugs. Menos estado, mejor.",
    "Derived state is computed during render from the real state: `const total = a + b`. Storing it in another `useState` creates a copy you must keep in sync by hand — a bug source. Less state is better.",
  ),
};
const Q_MULTI_STATE = {
  question: P(
    "¿Puede un componente tener VARIOS `useState`?",
    "Can a component have SEVERAL `useState` hooks?",
  ),
  options: [
    P(
      "Sí: uno por cada porción de estado independiente",
      "Yes: one per independent piece of state",
    ),
    P("No: sólo uno por componente", "No: only one per component"),
    P("Sólo dos como máximo", "Only two at most"),
    P("Sólo si son del mismo tipo", "Only if they're the same type"),
  ],
  correct: 0,
  explanation: P(
    "Puedes llamar a `useState` tantas veces como necesites: `const [nombre, setNombre] = useState('')` y `const [edad, setEdad] = useState(0)`. React los distingue por el ORDEN de llamada, por eso los hooks no van dentro de condicionales.",
    "You can call `useState` as many times as you need: `const [nombre, setNombre] = useState('')` and `const [edad, setEdad] = useState(0)`. React tells them apart by CALL ORDER, which is why hooks don't go inside conditionals.",
  ),
};
const Q_CHECKBOX = {
  question: P(
    "En un checkbox controlado, ¿qué prop refleja su estado y qué se lee en onChange?",
    "For a controlled checkbox, which prop reflects its state and what do you read in onChange?",
  ),
  options: [
    P("`checked={ok}` y `e.target.checked`", "`checked={ok}` and `e.target.checked`"),
    P("`value={ok}` y `e.target.value`", "`value={ok}` and `e.target.value`"),
    P("`checked={ok}` y `e.target.value`", "`checked={ok}` and `e.target.value`"),
    P("`on={ok}` y `e.on`", "`on={ok}` and `e.on`"),
  ],
  correct: 0,
  explanation: P(
    "Un checkbox se controla con `checked={ok}` (booleano), y en `onChange` se lee `e.target.checked`. Es el paralelo de `value`/`e.target.value` de los inputs de texto.",
    "A checkbox is controlled with `checked={ok}` (boolean), and in `onChange` you read `e.target.checked`. It's the parallel of `value`/`e.target.value` for text inputs.",
  ),
};

/** Capítulo 4 · Inputs controlados y estado múltiple/derivado. */
export const SYL_REACT_COMMUNITY_4: Syllabus = {
  c4_jinete_rezagado: { kind: "battle", questions: [Q_CONTROLLED, Q_ONCHANGE, Q_MULTI_STATE] },
  c4_lobo: { kind: "battle", questions: [Q_DERIVED, Q_CHECKBOX, Q_CONTROLLED] },
  c4_jefe_nueve: { kind: "battle", questions: [Q_CONTROLLED, Q_ONCHANGE, Q_DERIVED, Q_MULTI_STATE] },
  c4_trasgo_montaraz: { kind: "battle", questions: [Q_MULTI_STATE, Q_CHECKBOX, Q_ONCHANGE] },
  pergamino_estatico: {
    kind: "scroll",
    title: P("El Pergamino de la Voz", "The Scroll of the Voice"),
    lore_intro: P(
      "Antes del Vado, un pergamino enseña a ESCUCHAR al usuario: inputs controlados (value + onChange), varios estados y valores derivados.",
      "Before the Ford, a scroll teaches how to LISTEN to the user: controlled inputs (value + onChange), several states and derived values.",
    ),
    scroll: {
      topic: P("Inputs controlados y estado", "Controlled inputs and state"),
      sections: [
        {
          heading: P("Input controlado", "Controlled input"),
          body: P(
            "El estado es la fuente de verdad: `value={texto}` lo pinta, `onChange` lo actualiza leyendo `e.target.value`. Para un checkbox, `checked={ok}` y `e.target.checked`.",
            "State is the source of truth: `value={texto}` paints it, `onChange` updates it reading `e.target.value`. For a checkbox, `checked={ok}` and `e.target.checked`.",
          ),
          code: "function Eco() {\n  const [texto, setTexto] = useState(\"\");\n  return (\n    <div>\n      <input value={texto} onChange={(e) => setTexto(e.target.value)} />\n      <p>{texto}</p>\n    </div>\n  );\n}",
        },
        {
          heading: P("Varios estados", "Several states"),
          body: P(
            "Llama a `useState` una vez por cada porción de estado independiente. React los distingue por el ORDEN de llamada: nunca metas hooks dentro de `if`.",
            "Call `useState` once per independent piece of state. React tells them apart by CALL ORDER: never put hooks inside an `if`.",
          ),
          code: "const [nombre, setNombre] = useState(\"\");\nconst [edad, setEdad] = useState(0);",
        },
        {
          heading: P("Estado derivado: no lo guardes, calcúlalo", "Derived state: don't store it, compute it"),
          body: P(
            "Si un valor se puede calcular del estado en cada render, NO lo metas en otro useState: calcúlalo. Guardarlo duplica y se desincroniza.",
            "If a value can be computed from state each render, DON'T put it in another useState: compute it. Storing it duplicates and drifts out of sync.",
          ),
          code: "const [caudal, setCaudal] = useState(0);\nconst estado = caudal < 3 ? \"calmo\" : caudal < 6 ? \"crecido\" : \"desbordado\";",
        },
      ],
      keyTakeaway: P(
        "Input controlado = value/checked desde el estado + onChange que lo actualiza (e.target.value / .checked). Usa un useState por porción independiente, y CALCULA lo derivado en el render en vez de guardarlo.",
        "Controlled input = value/checked from state + onChange that updates it (e.target.value / .checked). Use one useState per independent piece, and COMPUTE derived values in the render instead of storing them.",
      ),
    },
  },
  montura_asfaloth: {
    kind: "challenge",
    title: P("Asfaloth, el Corcel Élfico", "Asfaloth, the Elven Steed"),
    lore_intro: P(
      "El corcel repite la orden que le das. Un input controlado: el estado manda lo que se ve.",
      "The steed echoes the command you give it. A controlled input: state drives what's shown.",
    ),
    challenge: {
      topic: P("Input de texto controlado", "Controlled text input"),
      instructions: P(
        "Escribe `Eco` (sin props) con `useState(\"\")`. Devuelve un `<div>` con:\n• un `<input value={texto} onChange={e => setTexto(e.target.value)} />`,\n• un `<p>{texto}</p>` que muestre lo escrito.\n\nEn los tests, `.fill(sel, valor)` escribe en el input. `mount(<Eco />).fill(\"input\", \"hola\").text(\"p\")` → `\"hola\"`.",
        "Write `Eco` (no props) with `useState(\"\")`. Return a `<div>` with:\n• an `<input value={texto} onChange={e => setTexto(e.target.value)} />`,\n• a `<p>{texto}</p>` showing what was typed.\n\nIn the tests, `.fill(sel, value)` types into the input. `mount(<Eco />).fill(\"input\", \"hola\").text(\"p\")` → `\"hola\"`.",
      ),
      starter_code:
        'function Eco() {\n  const [texto, setTexto] = useState("");\n  return (\n    <div>\n      <input value={texto} onChange={(e) => setTexto(e.target.value)} />\n      <p>{texto}</p>\n    </div>\n  );\n}\n',
      hints: [
        P("El input controlado ata `value` al estado y lo actualiza en `onChange`.", "The controlled input ties `value` to state and updates it in `onChange`."),
        P("Lee lo escrito con `e.target.value`.", "Read what's typed with `e.target.value`."),
      ],
      test_cases: [
        { input: 'mount(<Eco />).text("p")', expected: "", description: P("Empieza vacío", "Starts empty"), raw: true },
        { input: 'mount(<Eco />).fill("input", "hola").text("p")', expected: "hola", description: P("Refleja lo escrito", "Reflects what's typed"), raw: true },
        { input: 'mount(<Eco />).fill("input", "Noro lim").text("p")', expected: "Noro lim", description: P("Con otro texto", "With other text"), raw: true },
      ],
    },
  },
  recuento_de_los_nueve: {
    kind: "challenge",
    title: P("El Recuento de los Nueve", "The Reckoning of the Nine"),
    lore_intro: P(
      "Sube y baja la cuenta de los jinetes con dos botones, sin bajar de 0.",
      "Raise and lower the count of riders with two buttons, without going below 0.",
    ),
    challenge: {
      topic: P("Varios manejadores y clamp", "Multiple handlers and clamp"),
      instructions: P(
        "Escribe `Recuento` (sin props) con `useState(0)`. Devuelve un `<div>` con:\n• un `<button className=\"menos\">` que RESTE 1 sin bajar de 0,\n• un `<span>{n}</span>`,\n• un `<button className=\"mas\">` que SUME 1.\n\n`mount(<Recuento />).click(\".mas\").click(\".mas\").text(\"span\")` → `\"2\"`.",
        "Write `Recuento` (no props) with `useState(0)`. Return a `<div>` with:\n• a `<button className=\"menos\">` that SUBTRACTS 1 without going below 0,\n• a `<span>{n}</span>`,\n• a `<button className=\"mas\">` that ADDS 1.\n\n`mount(<Recuento />).click(\".mas\").click(\".mas\").text(\"span\")` → `\"2\"`.",
      ),
      starter_code:
        'function Recuento() {\n  const [n, setN] = useState(0);\n  return (\n    <div>\n      <button className="menos" onClick={() => setN((m) => Math.max(0, m - 1))}>-</button>\n      <span>{n}</span>\n      <button className="mas" onClick={() => setN((m) => m + 1)}>+</button>\n    </div>\n  );\n}\n',
      hints: [
        P("Cada botón lleva su `className` y su `onClick`.", "Each button has its `className` and its `onClick`."),
        P("El de restar usa clamp: `setN(m => Math.max(0, m - 1))`.", "The subtract one uses clamp: `setN(m => Math.max(0, m - 1))`."),
      ],
      test_cases: [
        { input: 'mount(<Recuento />).click(".mas").click(".mas").text("span")', expected: "2", description: P("Dos veces más", "Twice up"), raw: true },
        { input: 'mount(<Recuento />).click(".menos").text("span")', expected: "0", description: P("No baja de 0", "Doesn't go below 0"), raw: true },
        { input: 'mount(<Recuento />).click(".mas").click(".mas").click(".mas").click(".menos").text("span")', expected: "2", description: P("+3 y −1 = 2", "+3 and −1 = 2"), raw: true },
      ],
    },
  },
  vado_de_bruinen: {
    kind: "challenge",
    title: P("El Vado de Bruinen", "The Ford of Bruinen"),
    lore_intro: P(
      "¿Se puede cruzar el vado? Una casilla controlada decide, con checked y e.target.checked.",
      "Can the ford be crossed? A controlled checkbox decides, with checked and e.target.checked.",
    ),
    challenge: {
      topic: P("Checkbox controlado", "Controlled checkbox"),
      instructions: P(
        "Escribe `Vadeable` (sin props) con `useState(false)`. Devuelve un `<div>` con:\n• un `<input type=\"checkbox\" checked={ok} onChange={e => setOk(e.target.checked)} />`,\n• un `<span>` que muestre `\"puede cruzar\"` si el estado es true, o `\"no puede\"` si es false.\n\nAl hacer click en la casilla se marca. `mount(<Vadeable />).click(\"input\").text(\"span\")` → `\"puede cruzar\"`.",
        "Write `Vadeable` (no props) with `useState(false)`. Return a `<div>` with:\n• an `<input type=\"checkbox\" checked={ok} onChange={e => setOk(e.target.checked)} />`,\n• a `<span>` showing `\"puede cruzar\"` if the state is true, or `\"no puede\"` if false.\n\nClicking the checkbox checks it. `mount(<Vadeable />).click(\"input\").text(\"span\")` → `\"puede cruzar\"`.",
      ),
      starter_code:
        'function Vadeable() {\n  const [ok, setOk] = useState(false);\n  return (\n    <div>\n      <input type="checkbox" checked={ok} onChange={(e) => setOk(e.target.checked)} />\n      <span>{ok ? "puede cruzar" : "no puede"}</span>\n    </div>\n  );\n}\n',
      hints: [
        P("El checkbox se controla con `checked={ok}` y se lee con `e.target.checked`.", "The checkbox is controlled with `checked={ok}` and read with `e.target.checked`."),
        P('El span muestra según el estado: `{ok ? "puede cruzar" : "no puede"}`.', 'The span shows based on state: `{ok ? "puede cruzar" : "no puede"}`.'),
      ],
      test_cases: [
        { input: 'mount(<Vadeable />).text("span")', expected: "no puede", description: P("Al principio, no", "At first, no"), raw: true },
        { input: 'mount(<Vadeable />).click("input").text("span")', expected: "puede cruzar", description: P("Marcada: puede", "Checked: can"), raw: true },
        { input: 'mount(<Vadeable />).click("input").click("input").text("span")', expected: "no puede", description: P("Desmarcar vuelve a no", "Unchecking returns to no"), raw: true },
      ],
    },
  },
  c4_runas_del_vado: {
    kind: "challenge",
    title: P("Las runas del Vado", "The runes of the Ford"),
    lore_intro: P(
      "El caudal sube con cada runa. El estado del agua se CALCULA del caudal: eso es estado derivado.",
      "The flow rises with each rune. The water's state is COMPUTED from the flow: that's derived state.",
    ),
    challenge: {
      topic: P("Estado derivado", "Derived state"),
      instructions: P(
        "Escribe `Runas` (sin props) con `useState(0)` para el caudal. NO guardes el estado del agua en otro useState: CALCÚLALO en el render:\n• `\"calmo\"` si el caudal es menor que 3,\n• `\"crecido\"` si es menor que 6,\n• `\"desbordado\"` si es 6 o más.\n\nDevuelve un `<div>` con un `<button>` que suba el caudal en 1 y un `<span>` con el estado.\n\n`mount(<Runas />).click().click().click().text(\"span\")` → `\"crecido\"`.",
        "Write `Runas` (no props) with `useState(0)` for the flow. DON'T store the water's state in another useState: COMPUTE it in the render:\n• `\"calmo\"` if the flow is under 3,\n• `\"crecido\"` if under 6,\n• `\"desbordado\"` if 6 or more.\n\nReturn a `<div>` with a `<button>` that raises the flow by 1 and a `<span>` with the state.\n\n`mount(<Runas />).click().click().click().text(\"span\")` → `\"crecido\"`.",
      ),
      starter_code:
        'function Runas() {\n  const [caudal, setCaudal] = useState(0);\n  const estado = caudal < 3 ? "calmo" : caudal < 6 ? "crecido" : "desbordado";\n  return (\n    <div>\n      <button onClick={() => setCaudal((c) => c + 1)}>subir</button>\n      <span>{estado}</span>\n    </div>\n  );\n}\n',
      hints: [
        P("`estado` se calcula del caudal con un ternario encadenado, sin otro useState.", "`estado` is computed from the flow with a chained ternary, without another useState."),
        P("El botón sólo sube el caudal: `setCaudal(c => c + 1)`.", "The button only raises the flow: `setCaudal(c => c + 1)`."),
      ],
      test_cases: [
        { input: 'mount(<Runas />).text("span")', expected: "calmo", description: P("Caudal 0: calmo", "Flow 0: calm"), raw: true },
        { input: 'mount(<Runas />).click().click().click().text("span")', expected: "crecido", description: P("Caudal 3: crecido", "Flow 3: risen"), raw: true },
        { input: 'mount(<Runas />).click().click().click().click().click().click().text("span")', expected: "desbordado", description: P("Caudal 6: desbordado", "Flow 6: overflowing"), raw: true },
      ],
    },
  },
};
