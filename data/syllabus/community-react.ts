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
