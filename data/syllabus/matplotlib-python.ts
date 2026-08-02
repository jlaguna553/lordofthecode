import type { Syllabus } from "@/lib/game/narrative";

/**
 * Temario de VISUALIZACIÓN DE DATOS con Matplotlib. Reviste la narrativa
 * compartida de la Comunidad. Los retos se ejecutan con Pyodide cargando el
 * paquete `matplotlib` (campo `packages`).
 *
 * Enfoque de evaluación: como un gráfico es una imagen (no comparable como
 * texto), el jugador escribe una función `dibujar(ax, ...)` que CONFIGURA un
 * Axes, y los tests INSPECCIONAN el Axes resultante (título, datos de la línea,
 * etiquetas, alturas de las barras…) mediante helpers de `support_code`.
 *
 * Regla de floats: matplotlib guarda los datos como float; el helper `_norm`
 * convierte los enteros exactos a int para que la comparación con JS cuadre.
 */

const P = (es: string, en: string) => ({ es, en });

/** Helpers de inspección de Axes, inyectados como support_code en cada reto. */
const MPL_SUP =
  "import matplotlib\n" +
  "matplotlib.use('Agg')\n" +
  "import matplotlib.pyplot as plt\n" +
  "\n" +
  "def _norm(xs):\n" +
  "    return [int(v) if float(v).is_integer() else round(float(v), 2) for v in xs]\n" +
  "def _titulo(fn, *a):\n" +
  "    fig, ax = plt.subplots(); fn(ax, *a); r = ax.get_title(); plt.close(fig); return r\n" +
  "def _ydata(fn, *a):\n" +
  "    fig, ax = plt.subplots(); fn(ax, *a); r = _norm(ax.lines[0].get_ydata()); plt.close(fig); return r\n" +
  "def _xlabel(fn, *a):\n" +
  "    fig, ax = plt.subplots(); fn(ax, *a); r = ax.get_xlabel(); plt.close(fig); return r\n" +
  "def _ylabel(fn, *a):\n" +
  "    fig, ax = plt.subplots(); fn(ax, *a); r = ax.get_ylabel(); plt.close(fig); return r\n" +
  "def _nlineas(fn, *a):\n" +
  "    fig, ax = plt.subplots(); fn(ax, *a); r = len(ax.lines); plt.close(fig); return r\n";

/* ===================================================================== *
 * Capítulo 1 · La figura, los ejes y la primera línea
 * ===================================================================== */

const Q_MPL_IMPORT = {
  question: P(
    "¿Cómo se importa Matplotlib por convención?",
    "How is Matplotlib imported by convention?",
  ),
  options: [
    P("import matplotlib.pyplot as plt", "import matplotlib.pyplot as plt"),
    P("import matplotlib as plt", "import matplotlib as plt"),
    P("from matplotlib import plot", "from matplotlib import plot"),
    P("import pyplot", "import pyplot"),
  ],
  correct: 0,
  explanation: P(
    "El alias estándar es `plt`: `import matplotlib.pyplot as plt`. `pyplot` es la interfaz de trazado; el resto del ecosistema la reconoce al instante.",
    "The standard alias is `plt`: `import matplotlib.pyplot as plt`. `pyplot` is the plotting interface; the whole ecosystem recognizes it instantly.",
  ),
};
const Q_MPL_SUBPLOTS = {
  question: P(
    "¿Qué devuelve `plt.subplots()`?",
    "What does `plt.subplots()` return?",
  ),
  options: [
    P("Una tupla `(fig, ax)`: la figura y los ejes", "A tuple `(fig, ax)`: the figure and the axes"),
    P("Sólo la figura", "Only the figure"),
    P("Una lista de líneas", "A list of lines"),
    P("Nada", "Nothing"),
  ],
  correct: 0,
  explanation: P(
    "`fig, ax = plt.subplots()` crea una figura (el lienzo) y unos ejes (el área donde se dibuja). Casi todo se hace sobre `ax` con la interfaz orientada a objetos.",
    "`fig, ax = plt.subplots()` creates a figure (the canvas) and axes (the area you draw on). Almost everything is done on `ax` with the object-oriented interface.",
  ),
};
const Q_MPL_PLOT = {
  question: P(
    "¿Qué dibuja `ax.plot([3, 5, 2])`?",
    "What does `ax.plot([3, 5, 2])` draw?",
  ),
  options: [
    P("Una línea con esos valores en Y (X = 0, 1, 2)", "A line with those values on Y (X = 0, 1, 2)"),
    P("Tres puntos sueltos", "Three separate points"),
    P("Un gráfico de barras", "A bar chart"),
    P("Nada visible", "Nothing visible"),
  ],
  correct: 0,
  explanation: P(
    "Con un solo array, `plot` lo usa como valores de Y y genera los X automáticamente (0, 1, 2…). Con dos, `ax.plot(x, y)`, tú das ambos ejes.",
    "With a single array, `plot` uses it as the Y values and generates X automatically (0, 1, 2…). With two, `ax.plot(x, y)`, you provide both axes.",
  ),
};
const Q_MPL_TITLE = {
  question: P(
    "¿Cómo pones el título de un gráfico sobre `ax`?",
    "How do you set a chart's title on `ax`?",
  ),
  options: [
    P("ax.set_title('Ventas')", "ax.set_title('Ventas')"),
    P("ax.title = 'Ventas'", "ax.title = 'Ventas'"),
    P("ax.title('Ventas')", "ax.title('Ventas')"),
    P("plt.name('Ventas')", "plt.name('Ventas')"),
  ],
  correct: 0,
  explanation: P(
    "En la interfaz OO, los ajustes van con métodos `set_...`: `ax.set_title(...)`, `ax.set_xlabel(...)`. `ax.title` existe pero es un objeto, no una cadena.",
    "In the OO interface, settings use `set_...` methods: `ax.set_title(...)`, `ax.set_xlabel(...)`. `ax.title` exists but is an object, not a string.",
  ),
};
const Q_MPL_LABELS = {
  question: P(
    "¿Cómo etiquetas los ejes X e Y?",
    "How do you label the X and Y axes?",
  ),
  options: [
    P("ax.set_xlabel(...) y ax.set_ylabel(...)", "ax.set_xlabel(...) and ax.set_ylabel(...)"),
    P("ax.xlabel(...) y ax.ylabel(...)", "ax.xlabel(...) and ax.ylabel(...)"),
    P("ax.labels(x, y)", "ax.labels(x, y)"),
    P("ax.set_axes(x, y)", "ax.set_axes(x, y)"),
  ],
  correct: 0,
  explanation: P(
    "`ax.set_xlabel('mes')` y `ax.set_ylabel('ventas')`. Etiquetar los ejes es lo mínimo para que un gráfico se entienda sin explicación.",
    "`ax.set_xlabel('mes')` and `ax.set_ylabel('ventas')`. Labeling the axes is the minimum for a chart to be understood without explanation.",
  ),
};
const Q_MPL_FIG_VS_AX = {
  question: P(
    "¿Qué diferencia hay entre la `figura` y los `ejes` (axes)?",
    "What's the difference between the `figure` and the `axes`?",
  ),
  options: [
    P("La figura es el lienzo entero; los ejes, cada área de trazado dentro", "The figure is the whole canvas; the axes, each plotting area inside"),
    P("Son lo mismo", "They're the same"),
    P("Los ejes contienen a la figura", "The axes contain the figure"),
    P("La figura es una línea", "The figure is a line"),
  ],
  correct: 0,
  explanation: P(
    "Una `Figure` puede contener varios `Axes` (varios gráficos). Cada `Axes` tiene su título, sus ejes X/Y y sus líneas. Casi siempre trabajas sobre un `ax`.",
    "A `Figure` can contain several `Axes` (several charts). Each `Axes` has its own title, X/Y axes and lines. You almost always work on an `ax`.",
  ),
};
const Q_MPL_PLOT_XY = {
  question: P(
    "¿Qué hace `ax.plot(x, y)` con dos argumentos?",
    "What does `ax.plot(x, y)` do with two arguments?",
  ),
  options: [
    P("Dibuja una línea usando `x` para el eje X e `y` para el eje Y", "Draws a line using `x` for the X axis and `y` for the Y axis"),
    P("Dibuja dos líneas", "Draws two lines"),
    P("Suma x e y", "Adds x and y"),
    P("Da error", "Errors"),
  ],
  correct: 0,
  explanation: P(
    "Con dos arrays, el primero son las posiciones X y el segundo los valores Y. Deben tener la misma longitud. Con uno solo, X se genera automáticamente.",
    "With two arrays, the first is the X positions and the second the Y values. They must be the same length. With one, X is generated automatically.",
  ),
};
const Q_MPL_OO = {
  question: P(
    "¿Por qué se prefiere la interfaz `ax.set_...` frente a `plt.title(...)`?",
    "Why is the `ax.set_...` interface preferred over `plt.title(...)`?",
  ),
  options: [
    P("Es explícita: dice sobre QUÉ ejes actúa (clave con varios gráficos)", "It's explicit: it says WHICH axes it acts on (key with several charts)"),
    P("Es más corta", "It's shorter"),
    P("Es la única que existe", "It's the only one that exists"),
    P("Dibuja más rápido", "It draws faster"),
  ],
  correct: 0,
  explanation: P(
    "`plt.title` actúa sobre el gráfico 'activo', ambiguo cuando hay varios. La interfaz OO (`ax.set_title`) deja claro sobre qué `Axes` operas. Es la forma recomendada.",
    "`plt.title` acts on the 'current' chart, ambiguous with several. The OO interface (`ax.set_title`) makes clear which `Axes` you operate on. It's the recommended way.",
  ),
};
const Q_MPL_SHOW = {
  question: P(
    "¿Para qué sirve `plt.show()`?",
    "What is `plt.show()` for?",
  ),
  options: [
    P("Mostrar la figura en pantalla al terminar de configurarla", "Display the figure on screen once you've finished configuring it"),
    P("Borrar el gráfico", "Delete the chart"),
    P("Guardar en disco", "Save to disk"),
    P("Crear los ejes", "Create the axes"),
  ],
  correct: 0,
  explanation: P(
    "`plt.show()` abre la ventana con el resultado. Para guardar en fichero se usa `fig.savefig('grafico.png')`. En un notebook, la figura suele mostrarse sola.",
    "`plt.show()` opens the window with the result. To save to a file use `fig.savefig('chart.png')`. In a notebook, the figure usually shows on its own.",
  ),
};

export const SYL_MPL_1: Syllabus = {
  c1_espia: { kind: "battle", questions: [Q_MPL_IMPORT, Q_MPL_SUBPLOTS, Q_MPL_PLOT] },
  c1_jinete_rastreador: { kind: "battle", questions: [Q_MPL_TITLE, Q_MPL_LABELS, Q_MPL_FIG_VS_AX] },
  c1_perro_negro: { kind: "battle", questions: [Q_MPL_PLOT_XY, Q_MPL_OO, Q_MPL_SHOW] },
  c1_jefe_nazgul: {
    kind: "challenge",
    title: P("El Jinete Negro", "The Black Rider"),
    lore_intro: P(
      "Mide tu voluntad frente al Nazgûl en un gráfico: traza la línea, ponle título y etiqueta el eje de la resistencia.",
      "Measure your will against the Nazgûl in a chart: draw the line, give it a title and label the resistance axis.",
    ),
    challenge: {
      packages: ["matplotlib"],
      support_code: MPL_SUP,
      topic: P("Línea, título y etiqueta", "Line, title and label"),
      instructions: P(
        "Escribe `grafico(ax, valores)` que, sobre el `ax` recibido:\n1. dibuje una línea con `ax.plot(valores)`,\n2. ponga el título `\"Voluntad\"` con `ax.set_title`,\n3. etiquete el eje Y como `\"resistencia\"` con `ax.set_ylabel`.\n\nLos tests inspeccionan el Axes resultante.",
        "Write `grafico(ax, valores)` that, on the given `ax`:\n1. draws a line with `ax.plot(valores)`,\n2. sets the title `\"Voluntad\"` with `ax.set_title`,\n3. labels the Y axis `\"resistencia\"` with `ax.set_ylabel`.\n\nThe tests inspect the resulting Axes.",
      ),
      starter_code: "def grafico(ax, valores):\n    pass\n",
      blocks: [
        "def grafico(ax, valores):",
        "    ax.plot(valores)",
        '    ax.set_title("Voluntad")',
        '    ax.set_ylabel("resistencia")',
        '    ax.title("Voluntad")',
        '    ax.set_xlabel("resistencia")',
      ],
      hints: [
        P("`ax.plot(valores)` dibuja la línea.", "`ax.plot(valores)` draws the line."),
        P("Título y etiqueta: `ax.set_title(...)` y `ax.set_ylabel(...)`.", "Title and label: `ax.set_title(...)` and `ax.set_ylabel(...)`."),
      ],
      test_cases: [
        { input: '_titulo(grafico, [10, 20, 30])', expected: "Voluntad", description: P("El título", "The title"), raw: true },
        { input: '_ylabel(grafico, [10, 20, 30])', expected: "resistencia", description: P("La etiqueta Y", "The Y label"), raw: true },
        { input: '_ydata(grafico, [10, 20, 30])', expected: [10, 20, 30], description: P("Los datos de la línea", "The line's data"), raw: true },
        { input: '_nlineas(grafico, [1, 2])', expected: 1, description: P("Una sola línea", "A single line"), raw: true },
      ],
    },
  },
  pergamino_clases: {
    kind: "scroll",
    title: P("El Pergamino del Lienzo", "The Scroll of the Canvas"),
    lore_intro: P(
      "Un pergamino ilustrado enseña a plasmar números en imágenes: la figura, los ejes y la primera línea.",
      "An illustrated scroll teaches how to turn numbers into images: the figure, the axes and the first line.",
    ),
    scroll: {
      topic: P("Matplotlib: figura, ejes y línea", "Matplotlib: figure, axes and line"),
      sections: [
        {
          heading: P("La figura y los ejes", "The figure and the axes"),
          body: P(
            "`import matplotlib.pyplot as plt`. `fig, ax = plt.subplots()` crea el lienzo (`fig`) y el área de trazado (`ax`). Trabaja sobre `ax`.",
            "`import matplotlib.pyplot as plt`. `fig, ax = plt.subplots()` creates the canvas (`fig`) and the plotting area (`ax`). Work on `ax`.",
          ),
          code: "import matplotlib.pyplot as plt\nfig, ax = plt.subplots()\nax.plot([3, 5, 2])",
        },
        {
          heading: P("Título y etiquetas", "Title and labels"),
          body: P(
            "Con la interfaz OO, se configura con métodos `set_...`: `ax.set_title(...)`, `ax.set_xlabel(...)`, `ax.set_ylabel(...)`.",
            "With the OO interface, you configure with `set_...` methods: `ax.set_title(...)`, `ax.set_xlabel(...)`, `ax.set_ylabel(...)`.",
          ),
          code: "ax.set_title('Voluntad')\nax.set_xlabel('turno')\nax.set_ylabel('resistencia')",
        },
        {
          heading: P("Mostrar o guardar", "Show or save"),
          body: P(
            "`plt.show()` abre la ventana; `fig.savefig('g.png')` guarda a fichero. Un solo array en `plot` son los valores Y; con dos, `plot(x, y)`.",
            "`plt.show()` opens the window; `fig.savefig('g.png')` saves to a file. A single array in `plot` is the Y values; with two, `plot(x, y)`.",
          ),
          code: "ax.plot([1, 2, 3], [3, 5, 2])  # x, y\nplt.show()",
        },
      ],
      keyTakeaway: P(
        "plt.subplots() da (fig, ax); ax.plot dibuja; ax.set_title/set_xlabel/set_ylabel etiquetan. Un array = valores Y; dos = plot(x, y). Prefiere la interfaz ax.set_...",
        "plt.subplots() gives (fig, ax); ax.plot draws; ax.set_title/set_xlabel/set_ylabel label. One array = Y values; two = plot(x, y). Prefer the ax.set_... interface.",
      ),
    },
  },
  sendero_comarca: {
    kind: "challenge",
    title: P("Trazar el Sendero", "Plotting the Path"),
    lore_intro: P(
      "Dibuja la altura del terreno a lo largo del sendero de la Comarca. Tu primera línea.",
      "Draw the terrain height along the Shire's path. Your first line.",
    ),
    challenge: {
      packages: ["matplotlib"],
      support_code: MPL_SUP,
      topic: P("Dibujar una línea con título", "Draw a line with a title"),
      instructions: P(
        "Escribe `trazar(ax, valores)` que dibuje una línea con `ax.plot(valores)` y ponga el título `\"Sendero de la Comarca\"`.\n\nLos tests inspeccionan el título y los datos de la línea.",
        "Write `trazar(ax, valores)` that draws a line with `ax.plot(valores)` and sets the title `\"Sendero de la Comarca\"`.\n\nThe tests inspect the title and the line's data.",
      ),
      starter_code: "def trazar(ax, valores):\n    pass\n",
      blocks: [
        "def trazar(ax, valores):",
        "    ax.plot(valores)",
        '    ax.set_title("Sendero de la Comarca")',
        '    ax.plot()',
        '    ax.set_title = "Sendero de la Comarca"',
      ],
      hints: [
        P("`ax.plot(valores)` dibuja la línea.", "`ax.plot(valores)` draws the line."),
        P("`ax.set_title(\"...\")` pone el título.", "`ax.set_title(\"...\")` sets the title."),
      ],
      test_cases: [
        { input: '_titulo(trazar, [3, 5, 2])', expected: "Sendero de la Comarca", description: P("El título", "The title"), raw: true },
        { input: '_ydata(trazar, [3, 5, 2])', expected: [3, 5, 2], description: P("Los datos de la línea", "The line's data"), raw: true },
      ],
    },
  },
  halito_negro: {
    kind: "challenge",
    title: P("El Hálito Negro", "The Black Breath"),
    lore_intro: P(
      "Un gráfico sin ejes etiquetados no dice nada. Rotula los ejes del sigilo día a día.",
      "A chart with unlabeled axes says nothing. Label the stealth axes day by day.",
    ),
    challenge: {
      packages: ["matplotlib"],
      support_code: MPL_SUP,
      topic: P("Etiquetar los ejes", "Labeling the axes"),
      instructions: P(
        "Escribe `rotular(ax)` que etiquete el eje X como `\"dia\"` (con `ax.set_xlabel`) y el eje Y como `\"sigilo\"` (con `ax.set_ylabel`).\n\nLos tests inspeccionan ambas etiquetas.",
        "Write `rotular(ax)` that labels the X axis `\"dia\"` (with `ax.set_xlabel`) and the Y axis `\"sigilo\"` (with `ax.set_ylabel`).\n\nThe tests inspect both labels.",
      ),
      starter_code: "def rotular(ax):\n    pass\n",
      blocks: [
        "def rotular(ax):",
        '    ax.set_xlabel("dia")',
        '    ax.set_ylabel("sigilo")',
        '    ax.set_ylabel("dia")',
        '    ax.set_label("sigilo")',
      ],
      hints: [
        P("Eje X: `ax.set_xlabel(\"dia\")`.", "X axis: `ax.set_xlabel(\"dia\")`."),
        P("Eje Y: `ax.set_ylabel(\"sigilo\")`.", "Y axis: `ax.set_ylabel(\"sigilo\")`."),
      ],
      test_cases: [
        { input: '_xlabel(rotular)', expected: "dia", description: P("Etiqueta X", "X label"), raw: true },
        { input: '_ylabel(rotular)', expected: "sigilo", description: P("Etiqueta Y", "Y label"), raw: true },
      ],
    },
  },
};
