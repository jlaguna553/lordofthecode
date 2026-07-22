import type { Chapter } from "@/lib/game/types";

/**
 * Campaña "La Sintaxis Ancestral". Vertical slice: Capítulo 1.
 * Cada nodo es un acertijo de POO en PHP validado con test_cases (php-wasm).
 */

export const CHAPTER_1: Chapter = {
  chapter: 1,
  title: "Sombras en la Comarca",
  lore: "Frodo debe abandonar Bolsón Cerrado y cruzar la Comarca hacia Los Gamos, evadiendo a los Jinetes Negros que buscan el Anillo.",
  mapSize: { cols: 22, rows: 14 },
  spawn: { x: 2, y: 9 },
  scenery: {
    pathRows: [9],
    pond: { x: 16, y: 10, w: 5, h: 3 },
    npcs: [
      { spriteId: "merry", x: 6, y: 12, label: "Merry" },
      { spriteId: "pippin", x: 8, y: 12, label: "Pippin" },
    ],
    dialogues: [
      { x: 5, y: 9, speaker: "sam", name: "Sam",
        text: "Si doy un paso más, será el punto más lejos de casa en que haya estado." },
      { x: 13, y: 9, speaker: "sam", name: "Sam",
        text: "Señor Frodo… ese jinete no huele a nada bueno." },
    ],
    decor: [
      { type: "house", x: 2, y: 7, label: "Bolsón Cerrado" },
      { type: "tree", x: 6, y: 2 },
      { type: "tree", x: 9, y: 3 },
      { type: "tree", x: 12, y: 2 },
      { type: "tree", x: 18, y: 3 },
      { type: "tree", x: 20, y: 6 },
      { type: "tree", x: 5, y: 13 },
      { type: "tree", x: 8, y: 13 },
      { type: "tree", x: 13, y: 12 },
      { type: "rock", x: 5, y: 6 },
      { type: "rock", x: 11, y: 7 },
      { type: "rock", x: 8, y: 11 },
      { type: "rock", x: 15, y: 8 },
    ],
  },
  companions: ["sam"],
  nodes: [
    {
      node_id: "pergamino_clases",
      kind: "scroll",
      title: "El Pergamino de Bilbo",
      lore_intro:
        "Entre los papeles del viejo Bilbo hay un pergamino con su letra apretada: «Antes de contar una historia, di quién la protagoniza. Un molde primero; los personajes, después.»",
      position: { x: 6, y: 6 },
      scroll: {
        topic: "Clases, propiedades y visibilidad",
        sections: [
          {
            heading: "La clase es el molde; el objeto, la pieza",
            body: "Una CLASE describe qué datos tiene algo y qué sabe hacer. Un OBJETO es una copia concreta hecha con ese molde: cada uno con sus propios valores.\n\nCon `new` fabricas un objeto a partir de la clase.",
            code: `class Hobbit {
    public function __construct(private string $nombre) {}

    public function presentarse(): string {
        return "Soy {$this->nombre} de la Comarca";
    }
}

$frodo = new Hobbit('Frodo');   // un objeto
$sam   = new Hobbit('Sam');     // otro, independiente`,
          },
          {
            heading: "El constructor y la promoción de propiedades",
            body: "`__construct()` se ejecuta al crear el objeto y sirve para dejarlo en un estado válido desde el primer instante.\n\nEn PHP 8 puedes DECLARAR y ASIGNAR la propiedad en la propia firma del constructor: se llama promoción y ahorra media clase de código repetido.",
            code: `// Antiguo
class Hobbit {
    private string $nombre;
    public function __construct(string $nombre) {
        $this->nombre = $nombre;
    }
}

// PHP 8: lo mismo en una línea
class Hobbit {
    public function __construct(private string $nombre) {}
}`,
          },
          {
            heading: "public, private y protected",
            body: "`public` → lo toca cualquiera, desde fuera.\n`private` → sólo la propia clase.\n`protected` → la clase y sus hijas.\n\nPor defecto empieza en `private` y abre sólo lo que haga falta. Si todo es público, cualquier parte del programa puede dejar tu objeto en un estado imposible.",
            code: `class Hobbit {
    private int $nivelSigilo = 0;   // nadie lo toca desde fuera

    public function getNivelSigilo(): int {  // acceso controlado
        return $this->nivelSigilo;
    }
}`,
          },
        ],
        keyTakeaway:
          "Empieza todo en private y expón sólo lo necesario. El objeto debe proteger sus propios datos: eso es encapsulamiento.",
      },
    },
    {
      node_id: "sendero_comarca",
      title: "Preparar la Huida",
      lore_intro:
        "Antes de partir debes saber quién eres. Todo héroe empieza por definirse: crea la clase que representa a un hobbit de la Comarca.",
      position: { x: 9, y: 9 },
      poo_challenge: {
        topic: "Clases, propiedades y constructores",
        instructions:
          "Crea la clase Hobbit con un constructor que reciba $nombre (string) y guárdelo en una propiedad. Añade el método presentarse(): string que devuelva exactamente 'Soy {nombre} de la Comarca'.",
        sut: "new Hobbit('Frodo')",
        starter_code:
          "<?php\n\nclass Hobbit {\n    // 1) Declara la propiedad y el constructor con $nombre\n\n    // 2) Implementa presentarse(): string\n}\n",
        hints: [
          "En PHP 8 puedes declarar y asignar la propiedad en el propio constructor: __construct(private string $nombre) {}",
          'Dentro de comillas dobles se interpola así: return "Soy {$this->nombre} de la Comarca";',
        ],
        test_cases: [
          {
            input: "presentarse()",
            expected: "Soy Frodo de la Comarca",
            description: "presentarse() se presenta con el nombre recibido",
          },
        ],
      },
    },
    {
      node_id: "halito_negro",
      title: "El Hálito Negro",
      lore_intro:
        "Un Jinete Negro olfatea el aire cerca del camino. Para pasar inadvertido debes controlar tu Sigilo — un estado privado que nadie puede manipular directamente desde fuera.",
      position: { x: 15, y: 5 },
      spriteId: "nazgul",
      poo_challenge: {
        topic: "Encapsulamiento (private) + getters/setters",
        instructions:
          "En la clase Hobbit protege la propiedad $nivelSigilo (private, empieza en 0). Añade: getNivelSigilo(): int; ocultarse(int $n): void que SUME sigilo sin pasar de 100; y esVisiblePara(Nazgul $n): bool que devuelva true solo si tu sigilo es MENOR que la percepción del Nazgûl.",
        sut: "new Hobbit()",
        support_code:
          "class Nazgul {\n    public function __construct(private int $percepcion = 50) {}\n    public function getPercepcion(): int { return $this->percepcion; }\n}",
        starter_code:
          "<?php\n\nclass Hobbit {\n    // Protege $nivelSigilo (private) e implementa los tres métodos\n\n}\n",
        hints: [
          "Declara la propiedad como private int $nivelSigilo = 0; para que nadie pueda tocarla desde fuera.",
          "ocultarse() debe SUMAR al sigilo actual, no reemplazarlo: min(100, $this->nivelSigilo + $n)",
          "esVisiblePara() compara tu sigilo con la percepción del Nazgûl: $this->nivelSigilo < $n->getPercepcion()",
        ],
        test_cases: [
          {
            input: "getNivelSigilo()",
            expected: 0,
            description: "El sigilo empieza en 0",
          },
          {
            input: "ocultarse(70)",
            expected: null,
            description: "ocultarse() no devuelve nada (void)",
          },
          {
            input: "getNivelSigilo()",
            expected: 70,
            description: "Tras ocultarse(70) el sigilo es 70",
          },
          {
            input: "ocultarse(50)",
            expected: null,
            description: "Sumar más sigilo…",
          },
          {
            input: "getNivelSigilo()",
            expected: 100,
            description: "…pero nunca supera 100 (70+50 → 100)",
          },
          {
            input: "esVisiblePara(new Nazgul(50))",
            expected: false,
            description: "Con sigilo 100 y percepción 50, NO te ve",
          },
          {
            input: "esVisiblePara(new Nazgul(120))",
            expected: true,
            description: "Un Nazgûl muy perceptivo (120) sí te ve",
          },
        ],
      },
    },
  ],
};

export const CHAPTER_2: Chapter = {
  chapter: 2,
  title: "El Bosque Viejo y los Túmulos",
  lore: "Más allá de la Cerca, los árboles del Bosque Viejo tienen voluntad propia y las nieblas de los Túmulos guardan a los muertos. Sólo el canto de Tom Bombadil deshace sus hechizos.",
  mapSize: { cols: 22, rows: 14 },
  spawn: { x: 2, y: 7 },
  scenery: {
    ground: "grassDark", // el Bosque Viejo es sombrío
    pathRows: [7],
    pond: { x: 3, y: 11, w: 6, h: 3 }, // el río Tornasauce
    decor: [
      // Coníferas densas al norte
      { type: "pine", x: 4, y: 3 },
      { type: "pine", x: 7, y: 2 },
      { type: "pine", x: 10, y: 4 },
      { type: "pine", x: 13, y: 2 },
      { type: "pine", x: 16, y: 3 },
      { type: "pine", x: 19, y: 2 },
      { type: "pine", x: 21, y: 5 },
      // El sauce: un frondoso entre coníferas, para que destaque
      { type: "tree", x: 9, y: 6, label: "Viejo Hombre Sauce" },
      // Bosque al sur
      { type: "pine", x: 12, y: 13 },
      { type: "pine", x: 16, y: 12 },
      { type: "pine", x: 20, y: 13 },
      // Piedras de los Túmulos
      { type: "rock", x: 14, y: 5 },
      { type: "rock", x: 16, y: 6 },
      { type: "rock", x: 13, y: 3 },
      { type: "rock", x: 6, y: 10 },
    ],
  },
  companions: ["sam", "merry", "pippin"],
  nodes: [
    {
      node_id: "pergamino_ciclo_vida",
      kind: "scroll",
      title: "El Pergamino del Camino",
      lore_intro:
        "Clavado en un poste junto a la Cerca, medio comido por la humedad, alguien dejó un aviso para los que entran al Bosque: «Todo lo que nace aquí, aquí termina. Y al terminar, deshace lo que ató.»",
      position: { x: 4, y: 10 },
      scroll: {
        topic: "Ciclo de vida: constructores y destructores",
        sections: [
          {
            heading: "Nacer: __construct()",
            body: "Se ejecuta UNA vez, al crear el objeto. Su trabajo es dejarlo listo para usarse: recibir lo imprescindible y validarlo.\n\nSi un objeto puede existir en estado inválido, el constructor no está haciendo su trabajo.",
            code: `class HombreSauce {
    public function __construct(private int $fuerza) {}
}`,
          },
          {
            heading: "Morir: __destruct()",
            body: "PHP lo llama SOLO, sin que tú lo invoques, cuando ya nadie apunta al objeto: al salir de la función donde vive, al reasignar la variable o con `unset()`.\n\nSirve para deshacer lo que el objeto ató: cerrar un fichero, soltar una conexión… o romper un hechizo.",
            code: `class EfectoHechizo {
    public function __construct(private Personaje $objetivo) {}

    public function __destruct() {
        $this->objetivo->paralizado = false;  // se libera solo
    }
}`,
          },
          {
            heading: "El detalle que decide todo: el ámbito",
            body: "Una variable LOCAL muere al terminar el método → su destructor se dispara ahí mismo.\nSi guardas el objeto en una PROPIEDAD, sigue vivo mientras viva el dueño → el destructor NO se ejecuta.\n\nEsa diferencia es justo lo que hace que el canto de Tom funcione… o no.",
            code: `public function cantarConjuro(Personaje $p): void {
    $efecto = new EfectoHechizo($p);   // ✅ local: muere aquí y libera
    // $this->efecto = new EfectoHechizo($p);  // ❌ sobrevive: no libera
}`,
          },
        ],
        keyTakeaway:
          "El constructor deja el objeto válido; el destructor deshace lo que ató. Y quién guarda la referencia decide CUÁNDO muere.",
      },
    },
    {
      node_id: "viejo_hombre_sauce",
      title: "El Viejo Hombre Sauce",
      lore_intro:
        "Un sauce inmenso adormece a los hobbits y atrapa a Merry entre sus raíces. Para enfrentarlo primero hay que darle forma: todo objeto nace con un constructor.",
      position: { x: 7, y: 7 },
      poo_challenge: {
        topic: "Constructores y métodos",
        instructions:
          "Crea la clase HombreSauce con un constructor que reciba $fuerza (int) y la guarde. Añade getFuerza(): int y atrapar(string $nombre): string, que devuelva exactamente '{nombre} queda atrapado entre las raíces'.",
        sut: "new HombreSauce(80)",
        starter_code:
          "<?php\n\nclass HombreSauce {\n    // 1) Constructor que reciba $fuerza\n\n    // 2) getFuerza(): int\n\n    // 3) atrapar(string $nombre): string\n}\n",
        hints: [
          "__construct(private int $fuerza) {} declara la propiedad y la asigna de una vez.",
          'El texto debe coincidir exactamente: return "$nombre queda atrapado entre las raíces";',
        ],
        test_cases: [
          {
            input: "getFuerza()",
            expected: 80,
            description: "El constructor guarda la fuerza recibida",
          },
          {
            input: "atrapar('Merry')",
            expected: "Merry queda atrapado entre las raíces",
            description: "atrapar() usa el nombre recibido",
          },
        ],
      },
    },
    {
      node_id: "tumulo_espectro",
      title: "El Túmulo del Espectro",
      lore_intro:
        "Entre las piedras erguidas, un Tumulario susurra en la niebla. Su frío drena la vida de quien se acerque… pero nunca por debajo de cero.",
      position: { x: 15, y: 4 },
      spriteId: "tumulario",
      poo_challenge: {
        topic: "Métodos y lógica de estado",
        instructions:
          "Crea la clase Tumulario con un constructor que reciba $frio (int). Añade getFrio(): int y drenar(int $vida): int, que reste el frío a la vida devuelta, sin bajar nunca de 0.",
        sut: "new Tumulario(30)",
        starter_code:
          "<?php\n\nclass Tumulario {\n    // Constructor con $frio, getFrio() y drenar(int $vida): int\n}\n",
        hints: [
          "Guarda el frío con __construct(private int $frio) {}",
          "Para que nunca baje de cero: return max(0, $vida - $this->frio);",
        ],
        test_cases: [
          { input: "getFrio()", expected: 30, description: "El frío del espectro" },
          {
            input: "drenar(100)",
            expected: 70,
            description: "Drena 30 puntos de vida",
          },
          {
            input: "drenar(20)",
            expected: 0,
            description: "La vida nunca baja de 0",
          },
        ],
      },
    },
    {
      node_id: "canto_bombadil",
      title: "El Canto de Tom Bombadil",
      lore_intro:
        "«¡Eh, vamos alegre dol!» Tom canta y el hechizo se deshace. En PHP, lo que se deshace al terminar su vida es un objeto: su DESTRUCTOR es el que libera a los prisioneros.",
      position: { x: 18, y: 10 },
      spriteId: "bombadil",
      poo_challenge: {
        topic: "Destructores (__destruct)",
        instructions:
          "Crea EfectoHechizo: su constructor recibe un Personaje y lo guarda; su destructor __destruct() debe liberarlo poniendo $paralizado = false. Luego, en TomBombadil añade cantarConjuro(Personaje $p): void que cree un EfectoHechizo en una variable LOCAL — al terminar el método el objeto se destruye y el canto libera al personaje.",
        sut: "new TomBombadil()",
        support_code:
          "class Personaje {\n    public bool $paralizado = true;\n    public function estaParalizado(): bool { return $this->paralizado; }\n}\n\nclass Prueba {\n    public static ?Personaje $victima = null;\n    public static function nueva(): Personaje {\n        self::$victima = new Personaje();\n        return self::$victima;\n    }\n}",
        starter_code:
          "<?php\n\nclass EfectoHechizo {\n    // Constructor que reciba Personaje $objetivo\n\n    // __destruct(): pon $paralizado = false en el objetivo\n}\n\nclass TomBombadil {\n    // cantarConjuro(Personaje $p): void  — crea un EfectoHechizo LOCAL\n}\n",
        hints: [
          "El constructor solo guarda la referencia: __construct(private Personaje $objetivo) {}",
          "El destructor se llama solo al morir el objeto: public function __destruct() { $this->objetivo->paralizado = false; }",
          "Clave: en cantarConjuro() guarda el efecto en una variable LOCAL ($efecto = new EfectoHechizo($p);). Si lo guardas como propiedad, el objeto no se destruye al salir del método y el hechizo no se rompe.",
        ],
        test_cases: [
          {
            input: "Prueba::nueva()->estaParalizado()",
            raw: true,
            expected: true,
            description: "El personaje empieza paralizado por el hechizo",
          },
          {
            input: "$sut->cantarConjuro(Prueba::$victima)",
            raw: true,
            expected: null,
            description: "Tom canta (el método no devuelve nada)",
          },
          {
            input: "Prueba::$victima->estaParalizado()",
            raw: true,
            expected: false,
            description:
              "Al acabar el método, el destructor liberó al personaje",
          },
        ],
      },
    },
  ],
};

export const CHAPTER_3: Chapter = {
  chapter: 3,
  title: "Bree y la Cima de los Vientos",
  lore: "En El Póney Pisador aguarda un montaraz encapuchado al que llaman Trancos. Tras él, el camino asciende hasta Amon Sûl, donde cinco Jinetes Negros esperan bajo las ruinas.",
  mapSize: { cols: 24, rows: 14 },
  spawn: { x: 2, y: 9 },
  scenery: {
    ground: "dry", // tierras pardas del camino del Este
    pathRows: [9],
    pathGround: "stone", // la Gran Carretera del Este, empedrada
    npcs: [
      { spriteId: "aldeano", x: 4, y: 12, label: "Vecino de Bree" },
      { spriteId: "aldeana", x: 10, y: 12 },
      { spriteId: "aldeano", x: 14, y: 13 },
    ],
    dialogues: [
      { x: 4, y: 9, speaker: "merry", name: "Merry",
        text: "En Bree hay más ojos que ventanas. No digáis vuestro nombre." },
      { x: 16, y: 9, speaker: "aragorn", name: "Trancos",
        text: "Amon Sûl está ahí arriba. Al descubierto, y los Nueve lo saben." },
    ],
    decor: [
      // Bree: el pueblo
      { type: "house", x: 4, y: 7, label: "El Póney Pisador" },
      { type: "house", x: 9, y: 7 },
      { type: "tree", x: 10, y: 12 },
      { type: "tree", x: 12, y: 12 },
      { type: "tree", x: 2, y: 4 },
      { type: "tree", x: 13, y: 4 },
      // El camino hacia el este
      { type: "tree", x: 16, y: 12 },
      { type: "rock", x: 15, y: 7 },
      // Amon Sûl: las ruinas de la Cima de los Vientos
      { type: "rock", x: 18, y: 4 },
      { type: "rock", x: 20, y: 3 },
      { type: "rock", x: 22, y: 4 },
      { type: "rock", x: 18, y: 7 },
      { type: "rock", x: 22, y: 7 },
      { type: "rock", x: 21, y: 6 },
      { type: "tree", x: 23, y: 12 },
    ],
  },
  companions: ["sam", "merry", "pippin", "aragorn"],
  nodes: [
    {
      node_id: "pergamino_herencia",
      kind: "scroll",
      title: "El Pergamino de los Montaraces",
      lore_intro:
        "En un rincón del Póney Pisador, bajo una jarra, un pergamino con el emblema de la Estrella: «Un montaraz es un viajero. No repitas lo que ya sabe tu estirpe: hereda.»",
      position: { x: 3, y: 12 },
      scroll: {
        topic: "Herencia y sobrescritura",
        sections: [
          {
            heading: "extends: heredar es «ES UN»",
            body: "Una subclase recibe TODAS las propiedades y métodos del padre sin reescribirlos, y añade lo suyo.\n\nUsa herencia sólo cuando la frase «una X ES UNA Y» es cierta de verdad. Si sólo quieres reutilizar código suelto, lo que buscas es composición o un trait.",
            code: `class Viajero {
    public function viajar(string $destino): string { /* … */ }
}

class Montaraz extends Viajero {
    public function rastrear(string $rastro): string { /* … */ }
}
// Montaraz ya sabe viajar(): no hay que reescribirlo.`,
          },
          {
            heading: "protected: la puerta de la familia",
            body: "`private` esconde el dato incluso de las hijas. Si quieres que la subclase pueda usarlo, decláralo `protected`: visible para la clase y su descendencia, cerrado para el resto del mundo.",
            code: `class Viajero {
    public function __construct(protected string $nombre) {}
}

class Montaraz extends Viajero {
    public function rastrear(string $rastro): string {
        return "{$this->nombre} sigue el rastro";  // ✅ protected sí se ve
    }
}`,
          },
          {
            heading: "Sobrescribir sin tirar lo que había: parent::",
            body: "Redefinir un método en la hija SUSTITUYE al del padre. Si sólo quieres AMPLIARLO, llama al original con `parent::metodo()` y añade lo tuyo.\n\nAsí no duplicas la lógica del padre: si mañana cambia, tu hija hereda el cambio gratis.",
            code: `class HojaDeTumulo extends Arma {
    public function atacar(): int {
        return parent::atacar() * 2;   // reutiliza y amplía
        // return $this->danio * 2;    // ❌ duplica la lógica del padre
    }
}`,
          },
        ],
        keyTakeaway:
          "Hereda cuando hay parentesco real. Y al sobrescribir, pregúntate si debes reemplazar el método del padre o ampliarlo con parent::.",
      },
    },
    {
      node_id: "poney_pisador",
      title: "Trancos, el Montaraz",
      lore_intro:
        "Un hombre curtido observa desde el rincón más oscuro de la posada. Es un Montaraz: un viajero como cualquier otro… pero con habilidades que los demás no tienen. En POO, eso es HEREDAR.",
      position: { x: 6, y: 9 },
      spriteId: "aragorn",
      poo_challenge: {
        topic: "Herencia (extends)",
        instructions:
          "Crea la clase Montaraz que HEREDE de Viajero usando extends. NO redefinas viajar(): debe heredarse tal cual. Sólo añade el método rastrear(string $rastro): string que devuelva '{nombre} sigue el rastro de {rastro}'.",
        sut: "new Montaraz('Trancos')",
        support_code:
          "class Viajero {\n    public function __construct(protected string $nombre) {}\n    public function viajar(string $destino): string {\n        return \"{$this->nombre} viaja hacia {$destino}\";\n    }\n}",
        starter_code:
          "<?php\n\n// Viajero ya existe: tiene $nombre (protected) y viajar(string $destino)\n\nclass Montaraz {\n    // 1) Haz que herede de Viajero\n\n    // 2) Añade rastrear(string $rastro): string\n}\n",
        hints: [
          "Para heredar: class Montaraz extends Viajero { … }",
          "$nombre es protected, así que la subclase puede usar $this->nombre directamente.",
          'rastrear() devuelve: return "{$this->nombre} sigue el rastro de {$rastro}";',
        ],
        test_cases: [
          {
            input: "viajar('Rivendel')",
            expected: "Trancos viaja hacia Rivendel",
            description: "viajar() se HEREDA de Viajero sin reescribirlo",
          },
          {
            input: "rastrear('los Nazgûl')",
            expected: "Trancos sigue el rastro de los Nazgûl",
            description: "rastrear() es el método propio del Montaraz",
          },
        ],
      },
    },
    {
      node_id: "hojas_de_tumulo",
      title: "Las Hojas de los Túmulos",
      lore_intro:
        "Tom Bombadil entregó a los hobbits dagas forjadas contra el Rey Brujo. Son armas normales… mejoradas. Sobrescribir un método no significa tirar el del padre: puedes reutilizarlo con parent::.",
      position: { x: 13, y: 6 },
      poo_challenge: {
        topic: "Sobrescritura y parent::",
        instructions:
          "Crea HojaDeTumulo que extienda Arma y SOBRESCRIBA atacar() para devolver el DOBLE del daño base. Debes reutilizar el cálculo del padre llamando a parent::atacar() en vez de leer $danio directamente.",
        sut: "new HojaDeTumulo(15)",
        support_code:
          "class Arma {\n    public static int $llamadasAlPadre = 0;\n    public function __construct(protected int $danio) {}\n    public function atacar(): int {\n        self::$llamadasAlPadre++;\n        return $this->danio;\n    }\n}",
        starter_code:
          "<?php\n\n// Arma ya existe: constructor con $danio (protected) y atacar(): int\n\nclass HojaDeTumulo {\n    // Hereda de Arma y sobrescribe atacar() usando parent::atacar()\n}\n",
        hints: [
          "class HojaDeTumulo extends Arma { … }",
          "Dentro de atacar(), llama al padre así: return parent::atacar() * 2;",
          "Si lees $this->danio directamente en vez de usar parent::atacar(), la última prueba fallará.",
        ],
        test_cases: [
          {
            input: "atacar()",
            expected: 30,
            description: "La hoja duplica el daño base (15 → 30)",
          },
          {
            input: "(new HojaDeTumulo(7))->atacar()",
            raw: true,
            expected: 14,
            description: "Funciona con cualquier daño (7 → 14)",
          },
          {
            input: "Arma::$llamadasAlPadre > 0",
            raw: true,
            expected: true,
            description: "atacar() reutiliza el método del padre con parent::",
          },
        ],
      },
    },
    {
      node_id: "cima_de_los_vientos",
      title: "La Cima de los Vientos",
      lore_intro:
        "Cinco Jinetes Negros ascienden entre las ruinas de Amon Sûl. El acero común los atraviesa sin daño: son espectros. Sólo una hoja encantada puede herir lo que es invisible.",
      position: { x: 20, y: 5 },
      spriteId: "nazgul",
      poo_challenge: {
        topic: "Sobrescritura de comportamiento",
        instructions:
          "Un arma común no puede herir a un Espectro invisible (devuelve 0). Crea HojaEncantada que extienda Arma y sobrescriba golpear(Espectro $e): int para que devuelva SIEMPRE el daño completo, incluso si el espectro es invisible.",
        sut: "new HojaEncantada(20)",
        support_code:
          "class Espectro {\n    public bool $esInvisible = true;\n}\n\nclass Arma {\n    public function __construct(protected int $danio) {}\n    public function golpear(Espectro $e): int {\n        return $e->esInvisible ? 0 : $this->danio;\n    }\n}",
        starter_code:
          "<?php\n\n// Arma::golpear() devuelve 0 si el espectro es invisible\n\nclass HojaEncantada {\n    // Hereda de Arma y sobrescribe golpear(Espectro $e): int\n}\n",
        hints: [
          "class HojaEncantada extends Arma { … }",
          "$danio es protected: puedes devolverlo directamente con return $this->danio;",
          "Aquí NO conviene llamar a parent::golpear(): el padre devolvería 0 ante un espectro invisible.",
        ],
        test_cases: [
          {
            input: "golpear(new Espectro())",
            expected: 20,
            description: "La hoja encantada SÍ hiere al espectro invisible",
          },
          {
            input: "(new Arma(20))->golpear(new Espectro())",
            raw: true,
            expected: 0,
            description: "Un arma común sigue sin poder herirlo (padre intacto)",
          },
        ],
      },
    },
  ],
};

export const CHAPTER_4: Chapter = {
  chapter: 4,
  title: "Huida al Vado de Bruinen",
  lore: "Frodo, herido por la hoja de Morgul, huye a lomos de Asfaloth. Los Nueve galopan tras él hasta las aguas del Bruinen, donde el poder de Elrond aguarda para desbordar el río.",
  mapSize: { cols: 24, rows: 14 },
  spawn: { x: 2, y: 7 },
  scenery: {
    ground: "grass",
    pathRows: [7],
    pond: { x: 18, y: 0, w: 4, h: 14 }, // el río Bruinen, de norte a sur
    decor: [
      { type: "pine", x: 5, y: 3 },
      { type: "pine", x: 9, y: 2 },
      { type: "pine", x: 13, y: 3 },
      { type: "pine", x: 4, y: 12 },
      { type: "pine", x: 8, y: 13 },
      { type: "pine", x: 14, y: 12 },
      { type: "pine", x: 23, y: 4 },
      { type: "pine", x: 23, y: 11 },
      { type: "rock", x: 7, y: 9 },
      { type: "rock", x: 11, y: 5 },
      { type: "rock", x: 16, y: 10 },
      { type: "rock", x: 16, y: 4 },
    ],
  },
  companions: ["aragorn", "sam"],
  nodes: [
    {
      node_id: "pergamino_estatico",
      kind: "scroll",
      title: "El Poder Compartido",
      lore_intro:
        "Antes de partir, Elrond te entrega un pergamino: «No siempre hace falta crear una cosa para usar su poder. Algunos poderes pertenecen a la estirpe entera, no a un solo individuo.»",
      position: { x: 5, y: 7 },
      scroll: {
        topic: "static, self:: y constantes de clase",
        sections: [
          {
            heading: "Lo que pertenece a la CLASE, no al objeto",
            body: "Una propiedad o método `static` pertenece a la clase entera, no a cada instancia. Se llama con `Clase::metodo()` — sin necesidad de hacer `new`.\n\nÚsalo para utilidades sin estado propio, contadores globales y fábricas.",
            code: `class RioBruinen {
    public static function desbordar(): string {
        return 'las aguas se alzan';
    }
}

// No hace falta instanciar un río:
echo RioBruinen::desbordar();`,
          },
          {
            heading: "Constantes de clase",
            body: "Un valor que nunca cambia y pertenece al concepto, no a un objeto. Se declara con `const` y se lee con `Clase::NOMBRE` o, desde dentro, con `self::NOMBRE`.",
            code: `class Montura {
    public const VELOCIDAD_MAXIMA = 120;

    public function galopar(int $deseada): int {
        return min(self::VELOCIDAD_MAXIMA, $deseada);
    }
}`,
          },
          {
            heading: "self:: frente a $this->",
            body: "`$this->` accede al objeto actual; `self::` accede a la clase. Dentro de un método estático NO existe `$this`, así que sólo puedes usar `self::` (o `static::`, que respeta la subclase — se llama late static binding).",
          },
        ],
        keyTakeaway:
          "Si el método no usa ningún dato del objeto, probablemente debería ser static. Ojo: el estado estático es global y complica los tests — úsalo con cabeza.",
      },
    },
    {
      node_id: "montura_asfaloth",
      title: "Asfaloth, el Corcel Élfico",
      lore_intro:
        "Glorfindel pone a Frodo sobre su caballo blanco. «¡Noro lim, Asfaloth!» Ningún corcel, por élfico que sea, supera su límite: eso es una constante.",
      position: { x: 9, y: 5 },
      spriteId: "legolas",
      poo_challenge: {
        topic: "Constantes de clase (const, self::)",
        instructions:
          "Crea la clase Asfaloth con una constante pública VELOCIDAD_MAXIMA = 120 y el método galopar(int $deseada): int, que devuelva la velocidad deseada SIN superar nunca la constante. Léela desde dentro con self::.",
        sut: "new Asfaloth()",
        starter_code:
          "<?php\n\nclass Asfaloth {\n    // 1) Constante pública VELOCIDAD_MAXIMA = 120\n\n    // 2) galopar(int $deseada): int  — nunca por encima de la constante\n}\n",
        hints: [
          "Una constante de clase se declara así: public const VELOCIDAD_MAXIMA = 120;",
          "Desde dentro de la clase se lee con self::VELOCIDAD_MAXIMA (nunca con $this->).",
          "Para no pasarte del límite: return min(self::VELOCIDAD_MAXIMA, $deseada);",
        ],
        test_cases: [
          {
            input: "galopar(90)",
            expected: 90,
            description: "Por debajo del límite, galopa a lo pedido",
          },
          {
            input: "galopar(200)",
            expected: 120,
            description: "Nunca supera VELOCIDAD_MAXIMA",
          },
          {
            input: "Asfaloth::VELOCIDAD_MAXIMA",
            raw: true,
            expected: 120,
            description: "La constante es pública y se lee sin instanciar",
          },
        ],
      },
    },
    {
      node_id: "recuento_de_los_nueve",
      title: "El Recuento de los Nueve",
      lore_intro:
        "Los Jinetes Negros son nueve, y el recuento no pertenece a ninguno en particular: pertenece a la Sombra entera. Un contador que viven todas las instancias a la vez es estado estático.",
      position: { x: 12, y: 10 },
      spriteId: "nazgul",
      poo_challenge: {
        topic: "Propiedades estáticas (self::$prop)",
        instructions:
          "Crea la clase Cacería con una propiedad estática privada $jinetes que empiece en 0, y dos métodos ESTÁTICOS: sumar(int $n): void, que la incremente, y total(): int, que la devuelva. Todo se llama con Cacería::… sin instanciar.",
        starter_code:
          "<?php\n\nclass Caceria {\n    // 1) private static int $jinetes = 0;\n\n    // 2) public static function sumar(int $n): void\n\n    // 3) public static function total(): int\n}\n",
        hints: [
          "Declara el estado compartido: private static int $jinetes = 0;",
          "Dentro de un método estático no hay $this: usa self::$jinetes += $n;",
          "Los métodos también deben ser static para poder llamarlos con Caceria::sumar(5).",
        ],
        test_cases: [
          {
            input: "Caceria::total()",
            expected: 0,
            description: "La cacería empieza sin jinetes contados",
          },
          {
            input: "Caceria::sumar(5)",
            expected: null,
            description: "Cinco jinetes en la Cima de los Vientos…",
          },
          {
            input: "Caceria::sumar(4)",
            expected: null,
            description: "…y los cuatro restantes se unen",
          },
          {
            input: "Caceria::total()",
            expected: 9,
            description: "El estado es compartido: son los Nueve",
          },
        ],
      },
    },
    {
      node_id: "vado_de_bruinen",
      title: "El Vado de Bruinen",
      lore_intro:
        "«¡Volved a la tierra de Mordor y no me sigáis!» Las aguas se alzan en caballos de espuma. No hace falta crear un río nuevo para desatar su furia: el poder es de la clase, no del objeto.",
      position: { x: 15, y: 7 },
      poo_challenge: {
        topic: "Métodos estáticos (Clase::metodo)",
        instructions:
          "Crea la clase RioBruinen con la constante FUERZA_CRECIDA = 50 y el método ESTÁTICO desbordar(array $jinetes): int. Recibe un array con la fuerza de cada jinete y devuelve cuántos son arrastrados: los que tengan fuerza MENOR que la crecida. No debe hacer falta instanciar la clase.",
        starter_code:
          "<?php\n\nclass RioBruinen {\n    // 1) const FUERZA_CRECIDA = 50\n\n    // 2) public static function desbordar(array $jinetes): int\n}\n",
        hints: [
          "El método debe ser estático: public static function desbordar(array $jinetes): int",
          "Dentro usa self::FUERZA_CRECIDA para comparar.",
          "Cuenta los que no resisten: return count(array_filter($jinetes, fn(int $f) => $f < self::FUERZA_CRECIDA));",
        ],
        test_cases: [
          {
            input: "RioBruinen::FUERZA_CRECIDA",
            expected: 50,
            description: "La fuerza de la crecida es una constante de clase",
          },
          {
            input: "RioBruinen::desbordar([10, 20, 80])",
            expected: 2,
            description: "Dos jinetes débiles son arrastrados; el fuerte resiste",
          },
          {
            input: "RioBruinen::desbordar([60, 70])",
            expected: 0,
            description: "Ninguno cede ante la crecida",
          },
          {
            input: "RioBruinen::desbordar([5, 5, 5, 5, 5, 5, 5, 5, 5])",
            expected: 9,
            description: "Los Nueve caballos son barridos por las aguas",
          },
        ],
      },
    },
  ],
};

export const CHAPTER_5: Chapter = {
  chapter: 5,
  title: "El Paso de Caradhras",
  lore: "La Montaña Cruel no quiere que la crucen. La nieve se amontona, el frío muerde y la voluntad de la Comunidad se agrieta. Hay estados que no deben poder alterarse desde fuera… y otros que no deben cambiar jamás.",
  mapSize: { cols: 24, rows: 14 },
  spawn: { x: 2, y: 11 },
  scenery: {
    ground: "snow",
    pathRows: [11],
    pathGround: "ice", // el sendero helado que asciende
    pond: { x: 9, y: 2, w: 6, h: 3 }, // un lago congelado en la cornisa
    pondGround: "ice",
    decor: [
      // la línea de árboles se queda abajo; arriba sólo roca desnuda
      { type: "pine", x: 10, y: 13 },
      { type: "pine", x: 17, y: 13 },
      { type: "pine", x: 22, y: 13 },
      { type: "rock", x: 5, y: 8 },
      { type: "rock", x: 8, y: 6 },
      { type: "rock", x: 12, y: 8 },
      { type: "rock", x: 15, y: 5 },
      { type: "rock", x: 17, y: 9 },
      { type: "rock", x: 20, y: 6 },
      { type: "rock", x: 22, y: 3 },
      { type: "rock", x: 6, y: 3 },
      { type: "rock", x: 19, y: 2 },
    ],
  },
  companions: ["gandalf", "aragorn", "boromir", "gimli", "legolas", "sam"],
  nodes: [
    {
      node_id: "pergamino_hielo",
      kind: "scroll",
      title: "El Pergamino del Hielo",
      lore_intro:
        "Gandalf resguarda un pergamino bajo su capa antes de que la ventisca lo arranque. «Lo que no debe cambiar, protégelo. Lo que cambia, vigílalo en la puerta.»",
      position: { x: 5, y: 11 },
      scroll: {
        topic: "Encapsulamiento avanzado e inmutabilidad",
        sections: [
          {
            heading: "El setter es la puerta, no un buzón",
            body: "Encapsular no es «poner la propiedad private y añadir un get/set para todo». Un setter existe para PROTEGER una invariante: si un valor no puede ser negativo, el setter lo rechaza.\n\nSi tu setter sólo asigna sin validar, la propiedad podría ser pública y daría igual.",
            code: `class Resistencia {
    private int $calor = 100;

    public function enfriar(int $grados): void {
        if ($grados < 0) {
            throw new InvalidArgumentException('El frío no puede ser negativo');
        }
        $this->calor = max(0, $this->calor - $grados);
    }
}`,
          },
          {
            heading: "readonly: lo que nace y no cambia (PHP 8.1)",
            body: "Una propiedad `readonly` sólo puede escribirse una vez, dentro del constructor. Después, cualquier intento de modificarla lanza un `Error`.\n\nEs la forma más limpia de crear objetos de valor seguros.",
            code: `class Provision {
    public function __construct(
        public readonly string $nombre,
        public readonly int $peso,
    ) {}
}

$p = new Provision('lembas', 5);
$p->peso = 99; // ❌ Error: Cannot modify readonly property`,
          },
          {
            heading: "Objetos inmutables: cambiar = crear otro",
            body: "Si un objeto no puede mutar, un «cambio» devuelve una instancia NUEVA y deja intacta la original. Es el patrón `with…()` y evita errores por estado compartido.",
            code: `public function conMas(int $grados): Temperatura {
    return new Temperatura($this->grados + $grados); // otra instancia
}`,
          },
        ],
        keyTakeaway:
          "Valida en la puerta (setters con invariantes) y usa readonly para lo que nunca debe cambiar. Un objeto que no puede quedar en estado inválido no necesita defensas por todas partes.",
      },
    },
    {
      node_id: "carga_de_bill",
      title: "La Carga de Bill el Poney",
      lore_intro:
        "Sam repasa los fardos que carga Bill. Una provisión es lo que es: su nombre y su peso no cambian a mitad del camino. Eso, en PHP, se llama readonly.",
      position: { x: 9, y: 8 },
      poo_challenge: {
        topic: "Propiedades readonly",
        instructions:
          "Crea la clase Provision con dos propiedades públicas de sólo lectura: $nombre (string) y $peso (int), asignadas en el constructor. Una vez creada, nadie debe poder modificarlas.",
        sut: "new Provision('lembas', 5)",
        starter_code:
          "<?php\n\nclass Provision {\n    // Constructor con $nombre (string) y $peso (int), ambos readonly\n}\n",
        hints: [
          "Puedes promover y marcar de sólo lectura a la vez: public readonly string $nombre",
          "El constructor completo: __construct(public readonly string $nombre, public readonly int $peso) {}",
          "Una propiedad readonly sólo se escribe dentro del constructor; después lanza un Error.",
        ],
        test_cases: [
          {
            input: "nombre",
            expected: "lembas",
            description: "El nombre se lee sin problema",
          },
          {
            input: "peso",
            expected: 5,
            description: "El peso se lee sin problema",
          },
          {
            input:
              "(function() { $p = new Provision('cuerda', 2); try { $p->peso = 99; return false; } catch (\\Throwable $e) { return true; } })()",
            raw: true,
            expected: true,
            description: "Modificarla después lanza un Error: es readonly",
          },
        ],
      },
    },
    {
      node_id: "resistencia_comunidad",
      title: "La Resistencia de la Comunidad",
      lore_intro:
        "El viento arrecia. Boromir abre paso entre la nieve, pero las fuerzas menguan. Vigila el calor de la Comunidad: que nadie pueda alterarlo desde fuera y que nunca caiga por debajo de cero.",
      position: { x: 14, y: 11 },
      poo_challenge: {
        topic: "Setters con validación e invariantes",
        instructions:
          "Crea ResistenciaComunidad con la constante UMBRAL = 20 y la propiedad PRIVADA $calor iniciada en 100. Añade: getCalor(): int; enfriar(int $grados): void, que reste sin bajar nunca de 0 y lance InvalidArgumentException si le pasan un número negativo; y estaCongelada(): bool, true cuando el calor sea menor o igual al UMBRAL.",
        sut: "new ResistenciaComunidad()",
        starter_code:
          "<?php\n\nclass ResistenciaComunidad {\n    public const UMBRAL = 20;\n    // 1) private int $calor = 100;\n\n    // 2) getCalor(): int\n\n    // 3) enfriar(int $grados): void  — valida y nunca baja de 0\n\n    // 4) estaCongelada(): bool\n}\n",
        hints: [
          "Guard clause al principio: if ($grados < 0) throw new InvalidArgumentException('...');",
          "Para no bajar de cero: $this->calor = max(0, $this->calor - $grados);",
          "estaCongelada() compara con la constante: return $this->calor <= self::UMBRAL;",
        ],
        test_cases: [
          {
            input: "getCalor()",
            expected: 100,
            description: "La Comunidad parte con el calor intacto",
          },
          {
            input: "estaCongelada()",
            expected: false,
            description: "Al principio nadie está congelado",
          },
          { input: "enfriar(50)", expected: null, description: "La ventisca muerde…" },
          { input: "getCalor()", expected: 50, description: "…y el calor baja a 50" },
          { input: "enfriar(40)", expected: null, description: "Sigue nevando…" },
          {
            input: "estaCongelada()",
            expected: true,
            description: "Con 10 de calor (≤ 20) la Comunidad se congela",
          },
          {
            input:
              "(function() { $r = new ResistenciaComunidad(); $r->enfriar(500); return $r->getCalor(); })()",
            raw: true,
            expected: 0,
            description: "El calor nunca baja de 0",
          },
          {
            input:
              "(function() { $r = new ResistenciaComunidad(); try { $r->enfriar(-5); return false; } catch (\\InvalidArgumentException $e) { return true; } })()",
            raw: true,
            expected: true,
            description: "Un frío negativo es inválido: el setter lo rechaza",
          },
        ],
      },
    },
    {
      node_id: "temperatura_montana",
      title: "El Umbral de la Nieve",
      lore_intro:
        "«La montaña no negocia», murmura Aragorn mirando el termómetro de escarcha. Una medida no se altera: si el frío cambia, lo que tienes es OTRA medida.",
      position: { x: 20, y: 8 },
      poo_challenge: {
        topic: "Objetos de valor inmutables",
        instructions:
          "Crea la clase Temperatura con $grados readonly. El constructor debe lanzar InvalidArgumentException si los grados están fuera del rango -40..40. Añade conMas(int $g): Temperatura, que devuelva una INSTANCIA NUEVA con los grados sumados, dejando la original intacta.",
        sut: "new Temperatura(-10)",
        starter_code:
          "<?php\n\nclass Temperatura {\n    // 1) Constructor con public readonly int $grados y validación -40..40\n\n    // 2) conMas(int $g): Temperatura  — devuelve OTRA instancia\n}\n",
        hints: [
          "Valida dentro del constructor antes de nada: if ($grados < -40 || $grados > 40) throw new InvalidArgumentException('...');",
          "Como es readonly, conMas() no puede modificar: return new Temperatura($this->grados + $g);",
          "Ese patrón (devolver una instancia nueva) es lo que hace inmutable al objeto.",
        ],
        test_cases: [
          {
            input: "grados",
            expected: -10,
            description: "La temperatura de partida",
          },
          {
            input: "(new Temperatura(-10))->conMas(-5)->grados",
            raw: true,
            expected: -15,
            description: "conMas() devuelve una temperatura más fría",
          },
          {
            input:
              "(function() { $t = new Temperatura(-10); $t->conMas(-5); return $t->grados; })()",
            raw: true,
            expected: -10,
            description: "La ORIGINAL no cambia: eso es inmutabilidad",
          },
          {
            input:
              "(function() { try { new Temperatura(-100); return false; } catch (\\InvalidArgumentException $e) { return true; } })()",
            raw: true,
            expected: true,
            description: "El constructor rechaza valores fuera de rango",
          },
        ],
      },
    },
  ],
};

export const CHAPTER_6: Chapter = {
  chapter: 6,
  title: "Las Minas de Moria",
  lore: "Khazad-dûm, el reino subterráneo de los Enanos, hoy tomado por los trasgos. Bajo la montaña sólo importa una cosa: qué CONTRATO cumple cada cosa, no de qué está hecha. Y en el puente aguarda el Daño de Durin.",
  mapSize: { cols: 24, rows: 14 },
  spawn: { x: 2, y: 7 },
  scenery: {
    ground: "darkstone", // las profundidades
    pathRows: [7],
    pathGround: "stone", // la calzada enana
    pond: { x: 17, y: 9, w: 6, h: 5 }, // el fuego del abismo
    pondGround: "lava",
    npcs: [
      { spriteId: "gollum", x: 12, y: 12, label: "¿…mi tesoro?" },
      { spriteId: "esqueleto", x: 6, y: 3, label: "Enano caído" },
      { spriteId: "esqueleto", x: 16, y: 11 },
      { spriteId: "esqueleto", x: 21, y: 3 },
    ],
    dialogues: [
      { x: 7, y: 7, speaker: "gimli", name: "Gimli",
        text: "¡Esto no es una mina… es una tumba!" },
      { x: 14, y: 7, speaker: "gandalf", name: "Gandalf",
        text: "Los tambores. Vienen de lo profundo." },
      { x: 18, y: 7, speaker: "gandalf", name: "Gandalf",
        text: "Un Balrog. Este enemigo os supera a todos. ¡Corred!" },
    ],
    decor: [
      { type: "rock", x: 4, y: 4 },
      { type: "rock", x: 7, y: 10 },
      { type: "rock", x: 10, y: 3 },
      { type: "rock", x: 11, y: 11 },
      { type: "rock", x: 15, y: 4 },
      { type: "rock", x: 15, y: 11 },
      { type: "rock", x: 20, y: 4 },
      { type: "rock", x: 22, y: 8 },
      { type: "rock", x: 6, y: 12 },
      { type: "rock", x: 13, y: 9 },
    ],
  },
  companions: ["gandalf", "aragorn", "boromir", "gimli", "legolas", "sam"],
  nodes: [
    {
      node_id: "pergamino_contratos",
      kind: "scroll",
      title: "El Pergamino de los Contratos",
      lore_intro:
        "Ante las puertas cerradas, Gandalf despliega un pergamino cubierto de runas. «No preguntes de qué está hecha una cosa. Pregunta qué promete hacer.»",
      position: { x: 5, y: 10 },
      scroll: {
        topic: "Interfaces y polimorfismo",
        sections: [
          {
            heading: "Una interfaz es un CONTRATO",
            body: "Una interfaz declara QUÉ métodos debe tener una clase, sin decir cómo. Quien la implementa se compromete a cumplirlos.\n\nA diferencia de la herencia, una clase puede implementar VARIAS interfaces — no está atada a un único padre.",
            code: `interface Descifrable {
    public function susurrarPalabra(string $palabra): bool;
}

class PuertaDurin implements Descifrable {
    public function susurrarPalabra(string $palabra): bool {
        return strtolower($palabra) === 'mellon';
    }
}`,
          },
          {
            heading: "Polimorfismo: el mismo mensaje, distintas respuestas",
            body: "Si varias clases cumplen el mismo contrato, tu código puede tratarlas por igual sin saber cuál es cuál. Añadir un tipo nuevo NO obliga a tocar el código que las usa — es Open/Closed en acción.",
            code: `function danioTotal(array $enemigos): int {
    $suma = 0;
    foreach ($enemigos as $e) {
        $suma += $e->atacar(); // no importa si es Orco o Troll
    }
    return $suma;
}`,
          },
          {
            heading: "Interfaz o clase abstracta",
            body: "Interfaz = contrato puro, sin implementación ni estado; una clase puede implementar muchas.\nAbstracta = puede traer código y propiedades compartidas, pero sólo se hereda UNA.\n\nRegla práctica: usa interfaz para el «qué», abstracta para compartir el «cómo».",
          },
        ],
        keyTakeaway:
          "Programa contra la interfaz, no contra la implementación. Es la base del polimorfismo y de la inyección de dependencias.",
      },
    },
    {
      node_id: "puertas_de_durin",
      title: "Las Puertas de Durin",
      lore_intro:
        "Las runas de ithildin brillan bajo la luz de la luna: «Habla, amigo, y entra.» Gandalf lucha con hechizos de apertura… hasta que Merry hace la pregunta correcta. La puerta sólo promete una cosa: reconocer la palabra.",
      position: { x: 9, y: 7 },
      poo_challenge: {
        topic: "Interfaces (implements)",
        instructions:
          "Implementa la interfaz Descifrable en la clase PuertaDurin. El método susurrarPalabra(string $palabra): bool debe devolver true SOLO con la palabra élfica 'mellon' (amigo), sin distinguir mayúsculas.",
        sut: "new PuertaDurin()",
        support_code:
          "interface Descifrable {\n    public function susurrarPalabra(string $palabra): bool;\n}",
        starter_code:
          "<?php\n\n// La interfaz Descifrable ya existe.\n\nclass PuertaDurin {\n    // Implementa el contrato: susurrarPalabra(string $palabra): bool\n}\n",
        hints: [
          "Declara que cumples el contrato: class PuertaDurin implements Descifrable",
          "Para ignorar mayúsculas: strtolower($palabra) === 'mellon'",
          "Si el nombre o la firma del método no coinciden con la interfaz, PHP lanzará un error fatal.",
        ],
        test_cases: [
          {
            input: "susurrarPalabra('Mellon')",
            expected: true,
            description: "La palabra élfica abre la puerta",
          },
          {
            input: "susurrarPalabra('mellon')",
            expected: true,
            description: "No distingue mayúsculas",
          },
          {
            input: "susurrarPalabra('Amigo')",
            expected: false,
            description: "En castellano no funciona: hay que decirlo en élfico",
          },
          {
            input: "(new PuertaDurin()) instanceof Descifrable",
            raw: true,
            expected: true,
            description: "La clase debe IMPLEMENTAR el contrato Descifrable",
          },
        ],
      },
    },
    {
      node_id: "camara_mazarbul",
      title: "La Cámara de Mazarbul",
      lore_intro:
        "«Han tomado el puente y la segunda sala.» Tambores en lo profundo. Trasgos y un troll de las cavernas irrumpen a la vez: distintas criaturas, un mismo contrato — todas atacan.",
      position: { x: 13, y: 4 },
      spriteId: "troll",
      poo_challenge: {
        topic: "Polimorfismo",
        instructions:
          "Existe la interfaz Enemigo (nombre(): string y atacar(): int) y la clase Camara con el método estático danioTotal(). Crea DOS clases que implementen Enemigo: Trasgo, que se llame 'Trasgo' y ataque con 5, y Troll, que se llame 'Troll' y ataque con 20.",
        support_code:
          "interface Enemigo {\n    public function nombre(): string;\n    public function atacar(): int;\n}\n\nclass Camara {\n    /** @param Enemigo[] $horda */\n    public static function danioTotal(array $horda): int {\n        return array_sum(array_map(fn(Enemigo $e) => $e->atacar(), $horda));\n    }\n}",
        starter_code:
          "<?php\n\n// Enemigo (interfaz) y Camara::danioTotal() ya existen.\n\nclass Trasgo {\n    //\n}\n\nclass Troll {\n    //\n}\n",
        hints: [
          "Ambas deben declarar el contrato: class Trasgo implements Enemigo",
          "Cada una implementa los DOS métodos de la interfaz: nombre() y atacar().",
          "Fíjate en que Camara::danioTotal() no sabe si le pasas trasgos o trolls: eso es polimorfismo.",
        ],
        test_cases: [
          {
            input: "(new Trasgo())->nombre()",
            raw: true,
            expected: "Trasgo",
            description: "El trasgo se identifica",
          },
          {
            input: "(new Trasgo())->atacar()",
            raw: true,
            expected: 5,
            description: "El trasgo golpea flojo",
          },
          {
            input: "(new Troll())->atacar()",
            raw: true,
            expected: 20,
            description: "El troll golpea fuerte",
          },
          {
            input: "Camara::danioTotal([new Trasgo(), new Trasgo(), new Troll()])",
            raw: true,
            expected: 30,
            description:
              "La MISMA función suma la horda mezclada sin saber qué es cada uno",
          },
          {
            input: "(new Troll()) instanceof Enemigo",
            raw: true,
            expected: true,
            description: "Ambas cumplen el contrato Enemigo",
          },
        ],
      },
    },
    {
      node_id: "puente_khazad_dum",
      title: "El Puente de Khazad-dûm",
      lore_intro:
        "Una sombra con alas de oscuridad y una espada de llama. «¡Huid, insensatos!» Gandalf alza a Glamdring sobre el puente estrecho. Un comando mágico es un objeto: quien lo ejecuta no necesita saber qué hechizo es.",
      position: { x: 19, y: 7 },
      spriteId: "balrog",
      poo_challenge: {
        topic: "Interfaces · patrón Command",
        instructions:
          "Existen la interfaz ComandoMagico (lanzar(Puente $p): string), la clase Puente (con $roto) y Gandalf, que ejecuta cualquier comando. Crea PalabraDeMando, que implemente ComandoMagico: al lanzarse debe ROMPER el puente ($p->roto = true) y devolver exactamente '¡No puedes pasar!'.",
        sut: "new Gandalf()",
        support_code:
          "class Puente {\n    public bool $roto = false;\n}\n\ninterface ComandoMagico {\n    public function lanzar(Puente $p): string;\n}\n\nclass Gandalf {\n    public function ejecutar(ComandoMagico $hechizo, Puente $p): string {\n        return $hechizo->lanzar($p);\n    }\n}",
        starter_code:
          "<?php\n\n// ComandoMagico (interfaz), Puente y Gandalf ya existen.\n\nclass PalabraDeMando {\n    // Implementa ComandoMagico: rompe el puente y devuelve el grito\n}\n",
        hints: [
          "class PalabraDeMando implements ComandoMagico { … }",
          "Dentro de lanzar() modifica el puente recibido: $p->roto = true;",
          "Devuelve el texto EXACTO, con signos de apertura y cierre: return '¡No puedes pasar!';",
        ],
        test_cases: [
          {
            input: "ejecutar(new PalabraDeMando(), new Puente())",
            expected: "¡No puedes pasar!",
            description: "Gandalf ejecuta el comando sin saber cuál es",
          },
          {
            input:
              "(function() { $p = new Puente(); (new Gandalf())->ejecutar(new PalabraDeMando(), $p); return $p->roto; })()",
            raw: true,
            expected: true,
            description: "El puente se quiebra bajo el Balrog",
          },
          {
            input: "(new PalabraDeMando()) instanceof ComandoMagico",
            raw: true,
            expected: true,
            description: "El hechizo cumple el contrato ComandoMagico",
          },
        ],
      },
    },
  ],
};

export const CHAPTER_7: Chapter = {
  chapter: 7,
  title: "El Espejo de Lothlórien",
  lore: "Bajo los mallorn dorados de Caras Galadhon, Galadriel muestra lo que fue, lo que es y lo que aún podría ser. Al partir entrega dones: distintos objetos que comparten un mismo poder élfico sin pertenecer a la misma estirpe.",
  mapSize: { cols: 24, rows: 14 },
  spawn: { x: 2, y: 8 },
  scenery: {
    ground: "gold",
    pathRows: [8],
    pathGround: "path",
    pond: { x: 10, y: 2, w: 5, h: 3 }, // la fuente del Espejo
    dialogues: [
      { x: 7, y: 8, speaker: "legolas", name: "Legolas",
        text: "Cantan lamentos por Gandalf. No tengo fuerzas para traducirlos." },
      { x: 16, y: 8, speaker: "gimli", name: "Gimli",
        text: "Pedí un cabello de oro de la Dama. Me dio tres." },
    ],
    decor: [
      { type: "mallorn", x: 4, y: 5 },
      { type: "mallorn", x: 8, y: 6 },
      { type: "mallorn", x: 17, y: 5 },
      { type: "mallorn", x: 21, y: 6 },
      { type: "mallorn", x: 6, y: 13 },
      { type: "mallorn", x: 12, y: 13 },
      { type: "mallorn", x: 19, y: 13 },
      { type: "mallorn", x: 23, y: 10 },
      { type: "rock", x: 8, y: 3 },
      { type: "rock", x: 16, y: 3 },
      { type: "rock", x: 14, y: 10 },
    ],
  },
  companions: ["aragorn", "boromir", "gimli", "legolas", "sam"],
  nodes: [
    {
      node_id: "pergamino_dones",
      kind: "scroll",
      title: "El Pergamino de Galadriel",
      lore_intro:
        "«Te doy la luz de Eärendil», dice la Dama. Y con ella, un pergamino: «Hay parentesco y hay don. No los confundas: uno se hereda, el otro se comparte.»",
      position: { x: 3, y: 11 },
      scroll: {
        topic: "Clases abstractas y traits",
        sections: [
          {
            heading: "Clase abstracta: un padre incompleto",
            body: "No se puede instanciar: existe para ser heredada. Puede traer código y estado COMPARTIDOS, y obligar a las hijas a implementar ciertos métodos con `abstract`.\n\nSólo se hereda UNA. Úsala cuando las hijas son realmente de la misma familia y comparten implementación.",
            code: `abstract class ObjetoMagico {
    public function __construct(protected string $nombre) {}

    abstract public function usar(): string;   // cada hija lo resuelve

    public function describir(): string {      // código compartido
        return "Don de Galadriel: {$this->nombre}";
    }
}

new ObjetoMagico('x'); // ❌ Error: no se puede instanciar`,
          },
          {
            heading: "Trait: reuso HORIZONTAL",
            body: "Un trait es un bloque de métodos que puedes «pegar» en clases que NO tienen parentesco entre sí. Resuelve el reuso donde la herencia no llega, porque una clase puede usar muchos traits.",
            code: `trait CamuflajeElfico {
    public function ocultar(): string {
        return 'te fundes con el bosque';
    }
}

class CapaDeHobbit { use CamuflajeElfico; }
class Barca        { use CamuflajeElfico; }  // sin parentesco alguno`,
          },
          {
            heading: "¿Cuál elijo?",
            body: "Interfaz → el CONTRATO («qué promete»).\nAbstracta → la FAMILIA («qué comparte por parentesco»).\nTrait → la CAPACIDAD («qué sabe hacer, venga de donde venga»).\n\nOjo: abusar de traits suele ser señal de que faltaba composición.",
          },
        ],
        keyTakeaway:
          "Herencia para «es un», trait para «sabe hacer», interfaz para «promete que». Si dudas entre trait y herencia, pregúntate si de verdad hay parentesco.",
      },
    },
    {
      node_id: "frasco_de_galadriel",
      title: "El Frasco de Galadriel",
      lore_intro:
        "«Que sea para ti una luz en los lugares oscuros, cuando todas las demás se apaguen.» Todo don comparte una forma; sólo cambia cómo se usa.",
      position: { x: 9, y: 8 },
      poo_challenge: {
        topic: "Clases abstractas (abstract)",
        instructions:
          "La clase abstracta ObjetoMagico ya existe: guarda $nombre, comparte describir() y obliga a implementar usar(): string. Crea FrascoDeGaladriel, que la extienda y devuelva en usar() exactamente 'una luz en los lugares oscuros'.",
        sut: "new FrascoDeGaladriel('Frasco')",
        support_code:
          "abstract class ObjetoMagico {\n    public function __construct(protected string $nombre) {}\n    abstract public function usar(): string;\n    public function describir(): string {\n        return \"Don de Galadriel: {$this->nombre}\";\n    }\n}",
        starter_code:
          "<?php\n\n// ObjetoMagico es abstracta: tiene $nombre, describir() y exige usar().\n\nclass FrascoDeGaladriel {\n    // Extiéndela e implementa usar(): string\n}\n",
        hints: [
          "class FrascoDeGaladriel extends ObjetoMagico { … }",
          "Sólo tienes que implementar usar(): describir() se hereda ya resuelto.",
          "Devuelve el texto exacto: return 'una luz en los lugares oscuros';",
        ],
        test_cases: [
          {
            input: "usar()",
            expected: "una luz en los lugares oscuros",
            description: "Cada don se usa a su manera",
          },
          {
            input: "describir()",
            expected: "Don de Galadriel: Frasco",
            description:
              "describir() se HEREDA: una abstracta sí puede traer código compartido",
          },
          {
            input:
              "(function() { try { new ObjetoMagico('x'); return false; } catch (\\Throwable $e) { return true; } })()",
            raw: true,
            expected: true,
            description: "Una clase abstracta no se puede instanciar",
          },
        ],
      },
    },
    {
      node_id: "capas_elficas",
      title: "Las Capas Élficas",
      lore_intro:
        "Las capas de Lórien no son de la misma familia que las barcas… pero ambas saben esconderse a la vista de ojos enemigos. Eso no se hereda: se comparte.",
      position: { x: 14, y: 5 },
      poo_challenge: {
        topic: "Traits (reuso horizontal)",
        instructions:
          "Crea el trait CamuflajeElfico con el método ocultar(): string, que devuelva 'te fundes con el bosque'. Después crea DOS clases sin parentesco entre sí, CapaElfica y Barca, que USEN ese trait.",
        starter_code:
          "<?php\n\ntrait CamuflajeElfico {\n    // ocultar(): string\n}\n\nclass CapaElfica {\n    // usa el trait\n}\n\nclass Barca {\n    // usa el trait\n}\n",
        hints: [
          "Dentro de una clase, incorporas el trait con: use CamuflajeElfico;",
          "El trait declara el método una sola vez y las dos clases lo obtienen.",
          "No copies el método en cada clase: la última prueba comprueba que realmente usaste un trait.",
        ],
        test_cases: [
          {
            input: "(new CapaElfica())->ocultar()",
            expected: "te fundes con el bosque",
            description: "La capa esconde a quien la lleva",
          },
          {
            input: "(new Barca())->ocultar()",
            expected: "te fundes con el bosque",
            description: "La barca también, sin heredar de la capa",
          },
          {
            input: "in_array('CamuflajeElfico', class_uses('CapaElfica'))",
            expected: true,
            description: "La capacidad viene de un TRAIT, no de copiar y pegar",
          },
          {
            input: "in_array('CamuflajeElfico', class_uses('Barca'))",
            expected: true,
            description: "El mismo trait, reutilizado horizontalmente",
          },
        ],
      },
    },
    {
      node_id: "dones_de_lorien",
      title: "Los Dones de la Dama",
      lore_intro:
        "Al alba, la Comunidad recibe sus regalos. Cada don es distinto, pero todos llevan la bendición de Lórien. Aquí se juntan las dos ideas: la familia que comparte forma, y el don que se pega a cualquiera.",
      position: { x: 20, y: 8 },
      poo_challenge: {
        topic: "Abstractas + traits combinados",
        instructions:
          "Existen la abstracta Don (exige poder(): int), el trait Bendecido (aporta bendicion(): int = 10) y Cofre::poderTotal(). Crea Frasco y Capa: ambas EXTIENDEN Don y USAN Bendecido. poder() debe devolver su base más la bendición: 5 para el Frasco (total 15) y 2 para la Capa (total 12).",
        support_code:
          "abstract class Don {\n    abstract public function poder(): int;\n}\n\ntrait Bendecido {\n    public function bendicion(): int { return 10; }\n}\n\nclass Cofre {\n    /** @param Don[] $dones */\n    public static function poderTotal(array $dones): int {\n        return array_sum(array_map(fn(Don $d) => $d->poder(), $dones));\n    }\n}",
        starter_code:
          "<?php\n\n// Don (abstracta), Bendecido (trait) y Cofre ya existen.\n\nclass Frasco {\n    // extiende Don y usa Bendecido; poder() = 5 + bendicion()\n}\n\nclass Capa {\n    // extiende Don y usa Bendecido; poder() = 2 + bendicion()\n}\n",
        hints: [
          "Se combinan así: class Frasco extends Don { use Bendecido; … }",
          "Dentro de poder() puedes llamar al método que aporta el trait: return 5 + $this->bendicion();",
          "Cofre::poderTotal() las trata a las dos como Don: eso es polimorfismo sobre una abstracta.",
        ],
        test_cases: [
          {
            input: "(new Frasco())->poder()",
            expected: 15,
            description: "5 propios + 10 de bendición",
          },
          {
            input: "(new Capa())->poder()",
            expected: 12,
            description: "2 propios + 10 de bendición",
          },
          {
            input: "Cofre::poderTotal([new Frasco(), new Capa()])",
            expected: 27,
            description: "El cofre las suma a ambas como Don",
          },
          {
            input:
              "(new Frasco()) instanceof Don && in_array('Bendecido', class_uses('Frasco'))",
            expected: true,
            description: "Hereda de Don Y usa el trait Bendecido",
          },
        ],
      },
    },
  ],
};

export const CHAPTER_8: Chapter = {
  chapter: 8,
  title: "La Disolución en Amon Hen",
  lore: "En Parth Galen, junto al Anduin, la Comunidad se quiebra. Boromir sucumbe al Anillo, los Uruk-hai bajan de Isengard y Frodo debe elegir. Cuando algo puede salir mal, dilo con una excepción; cuando algo hay que fabricar en serie, usa una fábrica.",
  mapSize: { cols: 24, rows: 14 },
  spawn: { x: 2, y: 8 },
  scenery: {
    ground: "grass",
    pathRows: [4],
    pathGround: "stone", // la calzada arruinada que sube al Solio
    pond: { x: 0, y: 11, w: 24, h: 3 }, // el Anduin
    npcs: [{ spriteId: "gollum", x: 3, y: 3, label: "¿…nos sigue?" }],
    dialogues: [
      { x: 8, y: 8, speaker: "aragorn", name: "Aragorn",
        text: "La Compañía se rompe. Ya ha empezado." },
      { x: 17, y: 8, speaker: "sam", name: "Sam",
        text: "Se lo prometí a Gandalf. «No lo pierdas de vista» — y no pienso hacerlo." },
    ],
    decor: [
      { type: "pine", x: 5, y: 2 },
      { type: "pine", x: 10, y: 2 },
      { type: "pine", x: 16, y: 2 },
      { type: "pine", x: 22, y: 2 },
      { type: "pine", x: 4, y: 10 },
      { type: "pine", x: 12, y: 10 },
      { type: "pine", x: 21, y: 10 },
      { type: "rock", x: 8, y: 6 },
      { type: "rock", x: 11, y: 5 },
      { type: "rock", x: 15, y: 6 },
      { type: "rock", x: 18, y: 5 },
      { type: "rock", x: 6, y: 6 },
    ],
  },
  companions: ["aragorn", "gimli", "legolas", "sam"],
  nodes: [
    {
      node_id: "pergamino_fallos",
      kind: "scroll",
      title: "El Pergamino de lo que Puede Fallar",
      lore_intro:
        "Aragorn deja caer un pergamino junto al fuego apagado. «Ninguna compañía sobrevive fingiendo que nada saldrá mal. Nómbralo, y podrás responder.»",
      position: { x: 4, y: 6 },
      scroll: {
        topic: "Excepciones y patrón Factory",
        sections: [
          {
            heading: "Una excepción NO es un valor de retorno",
            body: "Devolver `false` o `null` cuando algo falla obliga a quien llama a adivinar qué pasó. Una excepción nombra el error y lo propaga hasta quien sepa manejarlo.\n\nCrea excepciones propias extendiendo `Exception`: el tipo ya comunica el problema.",
            code: `class CorruptionException extends Exception {}

public function resistir(int $tentacion): string {
    if ($tentacion > 80) {
        throw new CorruptionException('El Anillo lo reclama');
    }
    return 'resiste';
}`,
          },
          {
            heading: "try / catch / finally",
            body: "Captura sólo lo que sabes manejar. `finally` se ejecuta pase lo que pase — ideal para liberar recursos.\n\nRegla de oro: NO te tragues las excepciones con un catch vacío. Un error silenciado es un error que aparecerá más tarde y peor.",
            code: `try {
    return $solio->mirar($conAnillo);
} catch (VisionException $e) {
    return 'te quitas el Anillo: ' . $e->getMessage();
} finally {
    $solio->cerrar(); // siempre
}`,
          },
          {
            heading: "Factory: crear sin acoplarse al new",
            body: "Una fábrica centraliza la creación de objetos. Quien la usa pide «un uruk» y recibe algo que cumple el contrato, sin conocer la clase concreta.\n\nSi mañana cambia la implementación, sólo se toca la fábrica — Open/Closed otra vez.",
            code: `class FabricaDeHuestes {
    public static function crear(string $tipo): Guerrero {
        return match ($tipo) {
            'orco' => new Orco(),
            'uruk' => new UrukHai(),
            default => throw new InvalidArgumentException("Tipo desconocido: $tipo"),
        };
    }
}`,
          },
        ],
        keyTakeaway:
          "Lanza excepciones específicas y captúralas donde puedas hacer algo útil. Y cuando el `new` se repite por todas partes, es hora de una fábrica.",
      },
    },
    {
      node_id: "tentacion_de_boromir",
      title: "La Tentación de Boromir",
      lore_intro:
        "«Podríamos usarlo… ¡Dámelo!» El Anillo susurra al orgullo de Gondor. Cuando la voluntad no basta, hay que declarar el fallo por su nombre.",
      position: { x: 9, y: 8 },
      spriteId: "boromir",
      poo_challenge: {
        topic: "Excepciones propias (throw)",
        instructions:
          "Crea la excepción CorruptionException, que extienda Exception. Después crea Boromir con resistir(int $tentacion): string, que devuelva 'resiste' si la tentación es 80 o menos, y LANCE una CorruptionException con el mensaje 'El Anillo lo reclama' si es mayor que 80.",
        sut: "new Boromir()",
        starter_code:
          "<?php\n\nclass CorruptionException extends Exception {\n}\n\nclass Boromir {\n    // resistir(int $tentacion): string\n}\n",
        hints: [
          "Guard clause: if ($tentacion > 80) { throw new CorruptionException('El Anillo lo reclama'); }",
          "El mensaje se pasa al constructor de la excepción y se lee con getMessage().",
          "Si no lo lanzas, la prueba que espera la excepción fallará.",
        ],
        test_cases: [
          {
            input: "resistir(50)",
            expected: "resiste",
            description: "Con poca tentación, Boromir aguanta",
          },
          {
            input:
              "(function() { try { (new Boromir())->resistir(95); return false; } catch (CorruptionException $e) { return true; } })()",
            raw: true,
            expected: true,
            description: "Con tentación 95 sucumbe: lanza CorruptionException",
          },
          {
            input:
              "(function() { try { (new Boromir())->resistir(95); return ''; } catch (CorruptionException $e) { return $e->getMessage(); } })()",
            raw: true,
            expected: "El Anillo lo reclama",
            description: "La excepción lleva su mensaje",
          },
          {
            input: "(new CorruptionException('x')) instanceof Exception",
            raw: true,
            expected: true,
            description: "Debe EXTENDER Exception",
          },
        ],
      },
    },
    {
      node_id: "solio_de_la_vision",
      title: "El Solio de la Visión",
      lore_intro:
        "Frodo sube a Amon Hen y se pone el Anillo. Desde el Solio ve reinos… y también el Ojo se vuelve hacia él. Ver de más tiene un precio: hay que saber recogerlo.",
      position: { x: 14, y: 4 },
      poo_challenge: {
        topic: "try / catch",
        instructions:
          "El Solio ya existe: mirar(bool $conAnillo) devuelve la visión, pero LANZA VisionException si miras con el Anillo puesto. Crea la función observar(Solio $s, bool $conAnillo): string, que capture esa excepción y devuelva 'te quitas el Anillo: ' seguido del mensaje de la excepción.",
        support_code:
          "class VisionException extends Exception {}\n\nclass Solio {\n    public function mirar(bool $conAnillo): string {\n        if ($conAnillo) {\n            throw new VisionException('El Ojo te ve');\n        }\n        return 'ves las tierras de Rohan';\n    }\n}",
        starter_code:
          "<?php\n\n// Solio::mirar() lanza VisionException si vas con el Anillo puesto.\n\nfunction observar(Solio $s, bool $conAnillo): string {\n    // Captura la excepción y devuelve el mensaje compuesto\n}\n",
        hints: [
          "Envuelve la llamada: try { return $s->mirar($conAnillo); } catch (VisionException $e) { … }",
          "Dentro del catch, compón el texto: return 'te quitas el Anillo: ' . $e->getMessage();",
          "Captura VisionException en concreto, no un Throwable genérico: captura sólo lo que sabes manejar.",
        ],
        test_cases: [
          {
            input: "observar(new Solio(), false)",
            expected: "ves las tierras de Rohan",
            description: "Sin el Anillo, la visión es segura",
          },
          {
            input: "observar(new Solio(), true)",
            expected: "te quitas el Anillo: El Ojo te ve",
            description: "Con el Anillo, capturas la excepción y reaccionas",
          },
        ],
      },
    },
    {
      node_id: "hueste_de_isengard",
      title: "La Hueste de Isengard",
      lore_intro:
        "Bajan por centenares. Los orcos comunes temen el sol; los Uruk-hai de Saruman marchan bajo él sin pestañear. No los crees uno a uno: monta una fábrica.",
      position: { x: 19, y: 8 },
      spriteId: "uruk",
      poo_challenge: {
        topic: "Patrón Factory",
        instructions:
          "Existen la interfaz Guerrero y las clases Orco (resistencia al sol 0) y UrukHai (100). Crea FabricaDeHuestes con el método ESTÁTICO crear(string $tipo): Guerrero, que devuelva un Orco para 'orco', un UrukHai para 'uruk', y lance InvalidArgumentException con cualquier otro tipo.",
        support_code:
          "interface Guerrero {\n    public function resistenciaSol(): int;\n}\n\nclass Orco implements Guerrero {\n    public function resistenciaSol(): int { return 0; }\n}\n\nclass UrukHai implements Guerrero {\n    public function resistenciaSol(): int { return 100; }\n}",
        starter_code:
          "<?php\n\n// Guerrero (interfaz), Orco y UrukHai ya existen.\n\nclass FabricaDeHuestes {\n    // public static function crear(string $tipo): Guerrero\n}\n",
        hints: [
          "En PHP 8 queda muy limpio con match: return match ($tipo) { 'orco' => new Orco(), … };",
          "El caso por defecto lanza: default => throw new InvalidArgumentException(\"Tipo desconocido: $tipo\"),",
          "Devuelve el tipo de la INTERFAZ (Guerrero): quien llama no necesita saber la clase concreta.",
        ],
        test_cases: [
          {
            input: "FabricaDeHuestes::crear('orco')->resistenciaSol()",
            expected: 0,
            description: "El orco común se abrasa al sol",
          },
          {
            input: "FabricaDeHuestes::crear('uruk')->resistenciaSol()",
            expected: 100,
            description: "El Uruk-hai marcha a plena luz del día",
          },
          {
            input: "FabricaDeHuestes::crear('uruk') instanceof Guerrero",
            expected: true,
            description: "La fábrica devuelve algo que cumple el contrato",
          },
          {
            input:
              "(function() { try { FabricaDeHuestes::crear('elfo'); return false; } catch (\\InvalidArgumentException $e) { return true; } })()",
            raw: true,
            expected: true,
            description: "Un tipo desconocido no se inventa: se rechaza",
          },
        ],
      },
    },
  ],
};

/**
 * LIBRO II · El Camino del Arquitecto.
 * Capítulo avanzado: los cinco principios SOLID, enseñados con Pergaminos
 * antes de cada prueba. Pensado también como repaso de entrevista técnica.
 */
export const CHAPTER_SOLID: Chapter = {
  chapter: 9,
  title: "La Biblioteca de Rivendel",
  lore: "Elrond abre los archivos de Imladris. Entre pergaminos élficos se guardan los cinco principios que sostienen todo código que perdura: SOLID. Estúdialos antes de enfrentarte a las pruebas.",
  mapSize: { cols: 24, rows: 16 },
  spawn: { x: 2, y: 12 },
  scenery: {
    ground: "stone", // las terrazas de piedra de Imladris
    pathRows: [12],
    pathGround: "dry",
    pond: { x: 18, y: 13, w: 5, h: 3 }, // las cascadas del Bruinen
    decor: [
      { type: "tree", x: 4, y: 9 },
      { type: "tree", x: 9, y: 9 },
      { type: "tree", x: 14, y: 9 },
      { type: "tree", x: 19, y: 9 },
      { type: "tree", x: 2, y: 15 },
      { type: "tree", x: 11, y: 15 },
      { type: "house", x: 21, y: 6, label: "Casa de Elrond" },
      { type: "rock", x: 7, y: 6 },
      { type: "rock", x: 16, y: 6 },
    ],
  },
  nodes: [
    // ---------- Los cinco pergaminos ----------
    {
      node_id: "solid_s",
      kind: "scroll",
      title: "Responsabilidad Única",
      lore_intro:
        "El primer pergamino está escrito con letra menuda y ordenada, como si su autor odiara mezclar asuntos.",
      position: { x: 3, y: 12 },
      scroll: {
        topic: "S — Single Responsibility",
        sections: [
          {
            heading: "Una clase, una razón para cambiar",
            body: "Cada clase debe tener una sola responsabilidad. Si puedes describir lo que hace usando la palabra «y», probablemente hace demasiado.\n\nSepara la lógica de negocio, la persistencia y la presentación.",
          },
          {
            heading: "En la práctica",
            body: "Una factura no debería saber guardarse a sí misma NI enviarse por correo. Eso son tres razones para cambiar en una sola clase.",
            code: `// ❌ Hace demasiado
class Factura {
    public function calcularTotal(): int { /* … */ }
    public function guardar(): void { /* SQL */ }
    public function enviarPorEmail(): void { /* SMTP */ }
}

// ✅ Una responsabilidad cada una
class Factura { public function calcularTotal(): int { /* … */ } }
class FacturaRepository { public function guardar(Factura $f): void {} }
class FacturaMailer { public function enviar(Factura $f): void {} }`,
          },
        ],
        keyTakeaway:
          "Si tu clase cambia por motivos distintos (negocio, base de datos, formato), divídela.",
      },
    },
    {
      node_id: "solid_o",
      kind: "scroll",
      title: "Abierto/Cerrado",
      lore_intro:
        "El segundo pergamino tiene los bordes gastados: muchas manos lo consultaron antes de tocar código que ya funcionaba.",
      position: { x: 7, y: 14 },
      scroll: {
        topic: "O — Open/Closed",
        sections: [
          {
            heading: "Abierto a extensión, cerrado a modificación",
            body: "Deberías poder añadir comportamiento nuevo SIN editar el código existente. Cada vez que añades un `if` más a un `switch` gigante, estás violando este principio.\n\nLa herramienta habitual es una interfaz + una clase nueva por cada variante.",
          },
          {
            heading: "En la práctica",
            body: "Añadir un descuento nuevo debe ser crear una clase, no tocar el carrito.",
            code: `interface Descuento {
    public function aplicar(int $total): int;
}

class ViernesNegro implements Descuento {
    public function aplicar(int $total): int { return (int)($total * 0.7); }
}

// Añadir otro descuento = otra clase. El carrito NO se toca.`,
          },
        ],
        keyTakeaway:
          "Extiende con clases nuevas, no editando las que ya funcionan y están probadas.",
      },
    },
    {
      node_id: "solid_l",
      kind: "scroll",
      title: "Sustitución de Liskov",
      lore_intro:
        "El tercer pergamino advierte sobre herencias engañosas: no todo lo que se parece puede ocupar el mismo lugar.",
      position: { x: 11, y: 12 },
      scroll: {
        topic: "L — Liskov Substitution",
        sections: [
          {
            heading: "Una subclase debe poder sustituir a su base",
            body: "Si tu código espera un `Ave` y le das un `Pinguino`, no debe romperse. Cuando una subclase no puede cumplir el contrato del padre, el modelo está mal — no la subclase.",
          },
          {
            heading: "El error clásico",
            body: "Si `Ave` obliga a `volar()`, el pingüino te obliga a lanzar una excepción o devolver algo falso. La solución no es un parche: es corregir la abstracción.",
            code: `// ❌ El pingüino no puede cumplir el contrato
abstract class Ave { abstract public function volar(): string; }

// ✅ Abstrae lo que TODAS comparten
abstract class Ave { abstract public function moverse(): string; }
class Aguila  extends Ave { public function moverse(): string { return 'vuela'; } }
class Pinguino extends Ave { public function moverse(): string { return 'nada'; } }`,
          },
        ],
        keyTakeaway:
          "Si necesitas comprobar el tipo concreto antes de usar un objeto, tu jerarquía viola Liskov.",
      },
    },
    {
      node_id: "solid_i",
      kind: "scroll",
      title: "Segregación de Interfaces",
      lore_intro:
        "El cuarto pergamino es en realidad varios pergaminos pequeños, atados juntos. El mensaje es el propio formato.",
      position: { x: 15, y: 14 },
      scroll: {
        topic: "I — Interface Segregation",
        sections: [
          {
            heading: "Muchas interfaces pequeñas > una gorda",
            body: "Ningún cliente debería verse obligado a implementar métodos que no usa. Una interfaz enorme obliga a llenar clases de métodos vacíos o que lanzan excepciones.",
          },
          {
            heading: "En la práctica",
            body: "Divide por capacidad, no por entidad.",
            code: `// ❌ Interfaz gorda: un lector se ve obligado a implementar escribir()
interface Almacen {
    public function leer(string $id): string;
    public function escribir(string $id, string $v): void;
    public function borrar(string $id): void;
}

// ✅ Segregada por capacidad
interface Lector   { public function leer(string $id): string; }
interface Escritor { public function escribir(string $id, string $v): void; }`,
          },
        ],
        keyTakeaway:
          "Si al implementar una interfaz dejas métodos vacíos, esa interfaz debería ser varias.",
      },
    },
    {
      node_id: "solid_d",
      kind: "scroll",
      title: "Inversión de Dependencias",
      lore_intro:
        "El último pergamino lleva el sello de los arquitectos. Es el que más veces citan en las entrevistas… y el corazón de Symfony.",
      position: { x: 19, y: 12 },
      scroll: {
        topic: "D — Dependency Inversion",
        sections: [
          {
            heading: "Depende de abstracciones, no de implementaciones",
            body: "Una clase no debe crear sus dependencias con `new`: debe recibirlas desde fuera, tipadas como INTERFAZ. Eso reduce el acoplamiento y — lo más importante — hace el código testeable, porque puedes inyectar un mock.",
          },
          {
            heading: "En la práctica",
            body: "Inyección por constructor: la base del contenedor de servicios de Symfony.",
            code: `// ❌ Acoplado a Stripe para siempre
class ServicioPedido {
    public function __construct() { $this->gateway = new StripeGateway(); }
}

// ✅ Recibe la abstracción
class ServicioPedido {
    public function __construct(private PasarelaPago $gateway) {}
}`,
          },
        ],
        keyTakeaway:
          "«Para hacerlo testeable, inyecto la dependencia en vez de instanciarla.» — dilo así en la entrevista.",
      },
    },

    // ---------- Las tres pruebas ----------
    {
      node_id: "prueba_open_closed",
      title: "La Prueba del Herrero",
      lore_intro:
        "«Los enanos de Erebor no reforjan la espada cada vez que inventan una gema», dice Elrond. «Le añaden un engarce nuevo.» Extiende sin modificar.",
      position: { x: 6, y: 5 },
      poo_challenge: {
        topic: "SOLID · Open/Closed",
        instructions:
          "Ya existen la interfaz Descuento y la clase Carrito (que NO debes tocar). Crea DescuentoElfico, que implemente Descuento y aplique un 30% de rebaja: devuelve el 70% del total, redondeado a entero con (int).",
        sut: "new Carrito()",
        support_code:
          "interface Descuento {\n    public function aplicar(int $total): int;\n}\n\nclass Carrito {\n    public function total(int $base, Descuento $d): int {\n        return $d->aplicar($base);\n    }\n}",
        starter_code:
          "<?php\n\n// Descuento (interfaz) y Carrito ya existen y NO se tocan.\n\nclass DescuentoElfico {\n    // Implementa la interfaz Descuento con un 30% de rebaja\n}\n",
        hints: [
          "Para implementar un contrato: class DescuentoElfico implements Descuento { … }",
          "El método debe llamarse igual que en la interfaz: aplicar(int $total): int",
          "70% del total, redondeado: return (int)($total * 0.7);",
        ],
        test_cases: [
          {
            input: "total(100, new DescuentoElfico())",
            expected: 70,
            description: "El carrito usa el descuento sin conocerlo",
          },
          {
            input: "total(250, new DescuentoElfico())",
            expected: 175,
            description: "Funciona con cualquier importe",
          },
          {
            input: "(new DescuentoElfico()) instanceof Descuento",
            raw: true,
            expected: true,
            description: "Debe IMPLEMENTAR la interfaz Descuento",
          },
        ],
      },
    },
    {
      node_id: "prueba_liskov",
      title: "El Aviario de Elrond",
      lore_intro:
        "En las jaulas hay un águila y un pingüino traído del lejano Sur. Ambos son aves… pero sólo uno vuela. Corrige la abstracción.",
      position: { x: 12, y: 5 },
      poo_challenge: {
        topic: "SOLID · Liskov Substitution",
        instructions:
          "La clase abstracta Ave exige moverse(): string (no volar(), que el pingüino no podría cumplir). Crea Aguila y Pinguino que hereden de Ave: el águila devuelve 'vuela' y el pingüino 'nada'. Así ambos son sustituibles donde se espera un Ave.",
        support_code:
          "abstract class Ave {\n    abstract public function moverse(): string;\n}",
        starter_code:
          "<?php\n\n// Ave es abstracta y exige moverse(): string\n\nclass Aguila {\n    //\n}\n\nclass Pinguino {\n    //\n}\n",
        hints: [
          "Ambas deben heredar: class Aguila extends Ave { … }",
          "Implementa moverse() en cada una devolviendo 'vuela' y 'nada'.",
          "La clave de Liskov: las dos cumplen el MISMO contrato, así que el código que recibe un Ave funciona con cualquiera.",
        ],
        test_cases: [
          {
            input: "(new Aguila())->moverse()",
            raw: true,
            expected: "vuela",
            description: "El águila vuela",
          },
          {
            input: "(new Pinguino())->moverse()",
            raw: true,
            expected: "nada",
            description: "El pingüino nada (y no rompe nada)",
          },
          {
            input:
              "array_map(fn(Ave $a) => $a->moverse(), [new Aguila(), new Pinguino()])",
            raw: true,
            expected: ["vuela", "nada"],
            description:
              "Ambas son sustituibles donde se espera un Ave — eso es Liskov",
          },
        ],
      },
    },
    {
      node_id: "prueba_inversion",
      title: "El Contrato del Concilio",
      lore_intro:
        "«No jures lealtad a un hombre», advierte Gandalf, «sino a la causa.» No dependas de una implementación concreta: depende del contrato.",
      position: { x: 18, y: 5 },
      poo_challenge: {
        topic: "SOLID · Dependency Inversion",
        instructions:
          "Existen la interfaz Pasarela y una implementación PasarelaOro. Crea ServicioPedido que RECIBA una Pasarela por constructor (tipada como la interfaz, nunca con new dentro) y cuyo método pagar(int $monto): string delegue en ella.",
        sut: "new ServicioPedido(new PasarelaOro())",
        support_code:
          "interface Pasarela {\n    public function cobrar(int $monto): string;\n}\n\nclass PasarelaOro implements Pasarela {\n    public function cobrar(int $monto): string {\n        return \"cobrado {$monto} en oro\";\n    }\n}\n\nclass PasarelaPlata implements Pasarela {\n    public function cobrar(int $monto): string {\n        return \"cobrado {$monto} en plata\";\n    }\n}",
        starter_code:
          "<?php\n\n// Pasarela (interfaz), PasarelaOro y PasarelaPlata ya existen.\n\nclass ServicioPedido {\n    // 1) Constructor que reciba una Pasarela\n\n    // 2) pagar(int $monto): string que delegue en ella\n}\n",
        hints: [
          "Inyección por constructor: public function __construct(private Pasarela $pasarela) {}",
          "Tipa el parámetro con la INTERFAZ (Pasarela), no con PasarelaOro.",
          "pagar() sólo delega: return $this->pasarela->cobrar($monto);",
        ],
        test_cases: [
          {
            input: "pagar(50)",
            expected: "cobrado 50 en oro",
            description: "Delega en la pasarela recibida",
          },
          {
            input: "(new ServicioPedido(new PasarelaPlata()))->pagar(20)",
            raw: true,
            expected: "cobrado 20 en plata",
            description:
              "La misma clase funciona con OTRA implementación: eso es invertir la dependencia",
          },
        ],
      },
    },
  ],
};

/**
 * LIBRO III · Los Acertijos Antiguos.
 * Práctica cronometrada de algoritmos clásicos en PHP (estilo test técnico).
 * Cada reto es una FUNCIÓN suelta: no hay objeto, se llama directamente.
 */
export const CHAPTER_ALGOS: Chapter = {
  chapter: 10,
  title: "La Cámara de los Enigmas",
  lore: "Bajo las raíces del mundo, los Enanos labraron una sala donde cada puerta guarda un acertijo distinto. Aquí no valen los conjuros: sólo el algoritmo correcto, y el reloj corre.",
  mapSize: { cols: 24, rows: 14 },
  spawn: { x: 2, y: 7 },
  scenery: {
    ground: "stone",
    pathRows: [7],
    pathGround: "darkstone",
    pond: { x: 20, y: 10, w: 4, h: 4 },
    pondGround: "lava",
    decor: [
      { type: "rock", x: 5, y: 4 },
      { type: "rock", x: 9, y: 4 },
      { type: "rock", x: 13, y: 4 },
      { type: "rock", x: 17, y: 4 },
      { type: "rock", x: 5, y: 11 },
      { type: "rock", x: 9, y: 11 },
      { type: "rock", x: 13, y: 11 },
      { type: "rock", x: 17, y: 11 },
    ],
  },
  nodes: [
    {
      node_id: "pergamino_bigo",
      kind: "scroll",
      title: "El Pergamino de los Órdenes",
      lore_intro:
        "Una losa grabada en la entrada de la cámara. No dice cómo resolver los acertijos: dice cómo RECONOCERLOS.",
      position: { x: 4, y: 10 },
      scroll: {
        topic: "Big-O y los patrones de algoritmos",
        sections: [
          {
            heading: "Complejidad: cómo crece el coste",
            body: "O(1) constante — acceso por índice, lookup en hash.\nO(log n) — búsqueda binaria sobre datos ordenados.\nO(n) — recorrer una vez.\nO(n log n) — ordenaciones eficientes.\nO(n²) — doble bucle anidado (evítalo si puedes).\nO(2ⁿ) — fuerza bruta recursiva.\n\nDi siempre la complejidad de TIEMPO y de ESPACIO al terminar.",
          },
          {
            heading: "Los 7 patrones que resuelven casi todo",
            body: "Hash map → «¿visto antes / cuántas veces / duplicados?»\nDos punteros → array ordenado, trabajar desde los extremos.\nVentana deslizante → el mejor subarray/substring.\nBúsqueda binaria → ordenado, «encuentra el límite».\nRecursión / backtracking → combinaciones, permutaciones.\nBFS / DFS → grafo, árbol, grilla.\nProgramación dinámica → «mínimo/máximo/cuántas formas» con subproblemas.",
          },
          {
            heading: "Cómo narrarlo (cuenta tanto como el código)",
            body: "1. Reformula el enunciado y confirma los casos borde (vacío, negativos, duplicados).\n2. Di la fuerza bruta y su Big-O.\n3. Optimiza — casi siempre un hash map o dos punteros bajan de O(n²) a O(n).\n4. Codifica hablando.\n5. Prueba con un ejemplo pequeño.\n6. Cierra diciendo la complejidad final.",
          },
        ],
        keyTakeaway:
          "Una solución correcta lenta vale más que una óptima sin terminar. Fuerza bruta primero si te bloqueas; optimiza después si queda tiempo.",
      },
    },
    {
      node_id: "algo_two_sum",
      title: "El Acertijo de los Dos Anillos",
      lore_intro:
        "Dos gemas de la colección suman exactamente el peso grabado en la puerta. Encuéntralas — pero sólo puedes recorrer el cofre una vez.",
      position: { x: 7, y: 7 },
      poo_challenge: {
        topic: "Hash map · O(n)",
        timeLimitSec: 600,
        instructions:
          "Given an array of integers and a target, return the indices of the two numbers that add up to the target. Exactly one solution; you can't use the same element twice.\n\n(ES) Implementa twoSum(array $nums, int $target): array, que devuelva los ÍNDICES de los dos números que suman el objetivo.",
        starter_code:
          "<?php\n\nfunction twoSum(array $nums, int $target): array {\n    // Recorre una sola vez guardando lo ya visto\n}\n",
        hints: [
          "Guarda cada valor visto en un hash map valor => índice.",
          "Para cada número busca su complemento: $need = $target - $n; si ya lo viste, ahí está la pareja.",
          "isset($seen[$need]) es O(1): por eso el total queda en O(n) tiempo y O(n) espacio.",
        ],
        test_cases: [
          { input: "twoSum([2, 7, 11, 15], 9)", expected: [0, 1], description: "2 + 7 = 9" },
          { input: "twoSum([3, 2, 4], 6)", expected: [1, 2], description: "2 + 4 = 6" },
          { input: "twoSum([3, 3], 6)", expected: [0, 1], description: "Valores repetidos, índices distintos" },
        ],
      },
    },
    {
      node_id: "algo_palindromo",
      title: "La Runa que se Lee al Revés",
      lore_intro:
        "La inscripción dice lo mismo empezando por cualquiera de sus extremos… si ignoras los adornos y no distingues el tamaño de las letras.",
      position: { x: 11, y: 7 },
      poo_challenge: {
        topic: "Dos punteros · O(n)",
        timeLimitSec: 600,
        instructions:
          "Return true if a string is a palindrome, considering only alphanumeric characters and ignoring case.\n\n(ES) Implementa isPalindrome(string $s): bool. Sólo cuentan los caracteres alfanuméricos y no se distinguen mayúsculas.",
        starter_code:
          "<?php\n\nfunction isPalindrome(string $s): bool {\n    // Normaliza y compara con su reverso\n}\n",
        hints: [
          "Normaliza primero: pásalo a minúsculas con strtolower().",
          "Quita todo lo que no sea alfanumérico: preg_replace('/[^a-z0-9]/', '', $s)",
          "Y compara con su reverso: return $s === strrev($s);",
        ],
        test_cases: [
          {
            input: "isPalindrome('A man, a plan, a canal: Panama')",
            expected: true,
            description: "Ignorando comas, espacios y mayúsculas, sí lo es",
          },
          { input: "isPalindrome('race a car')", expected: false, description: "No lo es" },
          { input: "isPalindrome('')", expected: true, description: "La cadena vacía es palíndromo" },
        ],
      },
    },
    {
      node_id: "algo_parentesis",
      title: "Las Puertas Anidadas",
      lore_intro:
        "Un pasillo de arcos que se abren y se cierran. Cada arco debe cerrarse con su pareja, y en el orden correcto: el último en abrirse es el primero en cerrarse.",
      position: { x: 15, y: 7 },
      poo_challenge: {
        topic: "Pila (LIFO) · O(n)",
        timeLimitSec: 900,
        instructions:
          "Given a string of ()[]{} , return true if every bracket is correctly opened and closed in order.\n\n(ES) Implementa isValidParens(string $s): bool. Los símbolos deben estar bien balanceados Y bien anidados.",
        starter_code:
          "<?php\n\nfunction isValidParens(string $s): bool {\n    // Una pila: apila las aperturas, desapila al cerrar\n}\n",
        hints: [
          "Usa un array como pila: $stack[] = $c para apilar, array_pop($stack) para sacar.",
          "Ten un mapa de cierres a aperturas: [')' => '(', ']' => '[', '}' => '{']",
          "Al cerrar, la cima debe ser la pareja correcta; y al final la pila debe quedar VACÍA.",
        ],
        test_cases: [
          { input: "isValidParens('()[]{}')", expected: true, description: "Todos cierran bien" },
          { input: "isValidParens('(]')", expected: false, description: "Pareja incorrecta" },
          { input: "isValidParens('([{}])')", expected: true, description: "Bien anidados" },
          { input: "isValidParens('(')", expected: false, description: "Queda uno sin cerrar" },
        ],
      },
    },
    {
      node_id: "algo_binaria",
      title: "El Índice de Mazarbul",
      lore_intro:
        "El libro está ordenado. Buscar página por página sería una locura: abre por la mitad y descarta media biblioteca en cada paso.",
      position: { x: 19, y: 7 },
      poo_challenge: {
        topic: "Búsqueda binaria · O(log n)",
        timeLimitSec: 600,
        instructions:
          "Given a sorted array and a target, return its index or -1 if not present.\n\n(ES) Implementa binarySearch(array $a, int $t): int sobre un array YA ordenado. Devuelve el índice, o -1 si no está.",
        starter_code:
          "<?php\n\nfunction binarySearch(array $a, int $t): int {\n    // Dos límites y descarta la mitad en cada vuelta\n}\n",
        hints: [
          "Empieza con $lo = 0 y $hi = count($a) - 1; el bucle va mientras $lo <= $hi.",
          "El medio con división entera: $mid = intdiv($lo + $hi, 2);",
          "Si $a[$mid] < $t mueve $lo = $mid + 1; si no, $hi = $mid - 1. Cuidado con el <= del bucle.",
        ],
        test_cases: [
          { input: "binarySearch([1, 3, 5, 7, 9], 7)", expected: 3, description: "Está en el índice 3" },
          { input: "binarySearch([1, 3, 5, 7, 9], 4)", expected: -1, description: "No está" },
          { input: "binarySearch([], 1)", expected: -1, description: "Array vacío: caso borde" },
          { input: "binarySearch([5], 5)", expected: 0, description: "Un solo elemento" },
        ],
      },
    },
    {
      node_id: "algo_monedas",
      title: "El Tesoro de Thrór",
      lore_intro:
        "Debes pagar una cifra exacta con las monedas enanas disponibles, usando las MENOS posibles. Cada monto se apoya en montos ya resueltos: no recalcules lo que ya sabes.",
      position: { x: 12, y: 11 },
      poo_challenge: {
        topic: "Programación dinámica · O(monto × monedas)",
        timeLimitSec: 1500,
        instructions:
          "Given coin denominations and an amount, return the fewest coins needed to make that amount, or -1 if impossible.\n\n(ES) Implementa coinChange(array $coins, int $amount): int — el mínimo número de monedas para formar el monto, o -1 si no se puede.",
        starter_code:
          "<?php\n\nfunction coinChange(array $coins, int $amount): int {\n    // dp[a] = mínimo de monedas para el monto a\n}\n",
        hints: [
          "Crea el array dp de tamaño $amount + 1 lleno de un valor 'infinito' ($amount + 1), y dp[0] = 0.",
          "Para cada monto $a, prueba cada moneda $c que quepa: $dp[$a] = min($dp[$a], $dp[$a - $c] + 1);",
          "Al final, si dp[$amount] sigue siendo mayor que $amount es que no se podía: devuelve -1.",
        ],
        test_cases: [
          { input: "coinChange([1, 2, 5], 11)", expected: 3, description: "5 + 5 + 1 = 11" },
          { input: "coinChange([2], 3)", expected: -1, description: "Imposible con monedas de 2" },
          { input: "coinChange([1], 0)", expected: 0, description: "Monto 0: cero monedas" },
          { input: "coinChange([1, 3, 4], 6)", expected: 2, description: "3 + 3, no 4 + 1 + 1" },
        ],
      },
    },
  ],
};

/**
 * LIBRO III (continuación) · El Laberinto de los Ecos.
 * Segundo bloque de algoritmos: ventana deslizante, memoización, listas
 * enlazadas y recorrido en grilla — los patrones que faltaban.
 */
export const CHAPTER_ALGOS_2: Chapter = {
  chapter: 11,
  title: "El Laberinto de los Ecos",
  lore: "Más hondo aún, un dédalo de galerías donde cada eco repite un problema distinto. Los Enanos grabaron el camino en oro: quien reconoce el patrón, sale; quien improvisa, se pierde.",
  mapSize: { cols: 24, rows: 14 },
  spawn: { x: 2, y: 7 },
  scenery: {
    ground: "darkstone",
    pathRows: [7],
    pathGround: "gold", // el camino de runas doradas
    pond: { x: 20, y: 11, w: 4, h: 3 },
    decor: [
      { type: "rock", x: 6, y: 4 },
      { type: "rock", x: 9, y: 11 },
      { type: "rock", x: 14, y: 4 },
      { type: "rock", x: 15, y: 12 },
      { type: "rock", x: 18, y: 6 },
      { type: "rock", x: 22, y: 4 },
      { type: "rock", x: 4, y: 12 },
    ],
  },
  nodes: [
    {
      node_id: "pergamino_estructuras",
      kind: "scroll",
      title: "El Pergamino de las Estructuras",
      lore_intro:
        "Una placa de bronce clavada a la roca. Es un índice: qué herramienta coger según lo que pida el eco.",
      position: { x: 4, y: 10 },
      scroll: {
        topic: "Estructuras de datos y cuándo usarlas",
        sections: [
          {
            heading: "El array de PHP es dos cosas a la vez",
            body: "En PHP, `array` es lista Y tabla hash. Buscar por clave con `isset($a[$k])` es O(1) — por eso es el caballo de batalla.\n\nSi ves «¿existe / cuántas veces / visto antes?», la respuesta casi siempre es un hash map.",
          },
          {
            heading: "Pila, cola y punteros",
            body: "Pila (LIFO): `$s[] = $x` para apilar, `array_pop($s)` para sacar. Sirve para anidamiento y para deshacer.\nCola (FIFO): `array_shift()` saca por delante — es la base de BFS.\nListas enlazadas: no hay índices, sólo referencias. Se recorren con tres punteros: anterior, actual y siguiente.",
            code: `// Invertir una lista enlazada: guarda, apunta atrás, avanza
$prev = null;
while ($head) {
    $next = $head->next;
    $head->next = $prev;
    $prev = $head;
    $head = $next;
}
return $prev;`,
          },
          {
            heading: "Árboles y grillas: el mismo recorrido",
            body: "Un árbol y una grilla se recorren igual: visitas, marcas y sigues a los vecinos.\n\nDFS (en profundidad) se escribe solo con recursión. BFS (en anchura) necesita una cola y te da el camino más corto en grafos sin pesos.\n\nTruco clásico en grillas: al visitar una celda, **márcala** (por ejemplo poniéndola a '0') para no volver a contarla.",
          },
          {
            heading: "Memoización: no repitas trabajo",
            body: "Si una recursión recalcula los mismos subproblemas, guarda el resultado en un array y reutilízalo. Eso convierte O(2ⁿ) en O(n).\n\nEs la puerta de entrada a la programación dinámica.",
            code: `function fib(int $n, array &$memo = []): int {
    if ($n < 2) return $n;
    return $memo[$n] ??= fib($n-1, $memo) + fib($n-2, $memo);
}`,
          },
        ],
        keyTakeaway:
          "Reconoce el patrón antes de escribir: conteo → hash; ordenado → dos punteros o binaria; mejor subarray → ventana; grafo/grilla → DFS/BFS; subproblemas repetidos → memoización.",
      },
    },
    {
      node_id: "algo_anagramas",
      title: "Los Ecos Gemelos",
      lore_intro:
        "Varias inscripciones distintas resuenan igual: usan exactamente las mismas runas, sólo que en otro orden. Agrúpalas.",
      position: { x: 7, y: 7 },
      poo_challenge: {
        topic: "Hash map · O(n·k log k)",
        timeLimitSec: 1200,
        instructions:
          "Given an array of strings, group the anagrams together. Return a list of groups (order doesn't matter).\n\n(ES) Implementa groupAnagrams(array $strs): array, que agrupe las palabras que son anagramas entre sí.",
        starter_code:
          "<?php\n\nfunction groupAnagrams(array $strs): array {\n    // ¿Qué tienen en común dos anagramas?\n}\n",
        hints: [
          "Dos anagramas comparten las MISMAS letras ordenadas: esa es la clave del grupo.",
          "Para construirla: $key = str_split($s); sort($key); $key = implode('', $key);",
          "Acumula en $map[$key][] = $s; y al final devuelve array_values($map).",
        ],
        test_cases: [
          {
            input:
              "count(groupAnagrams(['eat','tea','tan','ate','nat','bat']))",
            expected: 3,
            description: "Salen tres grupos",
          },
          {
            input:
              "(function() { $r = groupAnagrams(['eat','tea','tan','ate','nat','bat']); foreach ($r as &$g) { sort($g); } unset($g); usort($r, fn($a, $b) => $a[0] <=> $b[0]); return $r; })()",
            expected: [["ate", "eat", "tea"], ["bat"], ["nat", "tan"]],
            description: "Los grupos correctos (normalizados para comparar)",
          },
          {
            input: "groupAnagrams([])",
            expected: [],
            description: "Lista vacía: caso borde",
          },
        ],
      },
    },
    {
      node_id: "algo_ceros",
      title: "Las Losas Huecas",
      lore_intro:
        "En el suelo hay losas macizas y losas huecas. Empuja las huecas al fondo sin alterar el orden de las macizas — y hazlo sobre la marcha.",
      position: { x: 11, y: 4 },
      poo_challenge: {
        topic: "Dos punteros · O(n)",
        timeLimitSec: 600,
        instructions:
          "Move all zeroes to the end of the array while keeping the relative order of the non-zero elements.\n\n(ES) Implementa moveZeroes(array $nums): array — los ceros al final, conservando el orden del resto.",
        starter_code:
          "<?php\n\nfunction moveZeroes(array $nums): array {\n    // Un puntero de escritura basta\n}\n",
        hints: [
          "Lleva un puntero de escritura $pos que empieza en 0.",
          "Recorre y copia hacia adelante sólo los distintos de cero: if ($n !== 0) $nums[$pos++] = $n;",
          "Al terminar, rellena de $pos hasta el final con ceros.",
        ],
        test_cases: [
          {
            input: "moveZeroes([0, 1, 0, 3, 12])",
            expected: [1, 3, 12, 0, 0],
            description: "Se conserva el orden de los no-cero",
          },
          {
            input: "moveZeroes([0, 0, 0])",
            expected: [0, 0, 0],
            description: "Todos ceros",
          },
          {
            input: "moveZeroes([1, 2, 3])",
            expected: [1, 2, 3],
            description: "Ningún cero: no cambia nada",
          },
        ],
      },
    },
    {
      node_id: "algo_ventana",
      title: "La Galería sin Repeticiones",
      lore_intro:
        "El pasillo más largo que puedes recorrer sin pisar dos veces la misma runa. Cuando te topes con una repetida, no vuelvas al principio: adelanta el inicio justo lo necesario.",
      position: { x: 12, y: 10 },
      poo_challenge: {
        topic: "Ventana deslizante · O(n)",
        timeLimitSec: 1500,
        instructions:
          "Return the length of the longest substring without repeating characters.\n\n(ES) Implementa lengthOfLongestSubstring(string $s): int — la longitud del substring más largo sin caracteres repetidos.",
        starter_code:
          "<?php\n\nfunction lengthOfLongestSubstring(string $s): int {\n    // Ventana [inicio..i] que se encoge al encontrar repetidos\n}\n",
        hints: [
          "Guarda en un hash el ÚLTIMO índice visto de cada carácter.",
          "Si el carácter ya se vio dentro de la ventana actual, mueve el inicio: $start = $seen[$c] + 1;",
          "En cada paso, el mejor es max($best, $i - $start + 1).",
        ],
        test_cases: [
          {
            input: "lengthOfLongestSubstring('abcabcbb')",
            expected: 3,
            description: "'abc' mide 3",
          },
          {
            input: "lengthOfLongestSubstring('bbbbb')",
            expected: 1,
            description: "Todos iguales: 1",
          },
          {
            input: "lengthOfLongestSubstring('pwwkew')",
            expected: 3,
            description: "'wke' mide 3 (no 'pwke', que no es contiguo)",
          },
          {
            input: "lengthOfLongestSubstring('')",
            expected: 0,
            description: "Cadena vacía: caso borde",
          },
        ],
      },
    },
    {
      node_id: "algo_fibonacci",
      title: "La Espiral de Durin",
      lore_intro:
        "Una espiral tallada donde cada arco mide como los dos anteriores juntos. Calcularla desde cero cada vez es perderse: apunta lo que ya resolviste.",
      position: { x: 16, y: 7 },
      poo_challenge: {
        topic: "Recursión + memoización · O(n)",
        timeLimitSec: 600,
        instructions:
          "Return the nth Fibonacci number efficiently.\n\n(ES) Implementa fib(int $n, array &$memo = []): int — el n-ésimo Fibonacci, SIN recursión exponencial.",
        starter_code:
          "<?php\n\nfunction fib(int $n, array &$memo = []): int {\n    // Casos base y memoización\n}\n",
        hints: [
          "Casos base: si $n < 2, devuelve $n.",
          "El operador ??= guarda y devuelve en una línea: return $memo[$n] ??= fib($n-1, $memo) + fib($n-2, $memo);",
          "Sin memoizar sería O(2ⁿ): fib(30) haría más de un millón de llamadas repetidas.",
        ],
        test_cases: [
          { input: "fib(0)", expected: 0, description: "Caso base" },
          { input: "fib(1)", expected: 1, description: "Caso base" },
          { input: "fib(10)", expected: 55, description: "Décimo Fibonacci" },
          {
            input: "fib(30)",
            expected: 832040,
            description: "Con memo es instantáneo; sin memo, un millón de llamadas",
          },
        ],
      },
    },
    {
      node_id: "algo_lista",
      title: "La Cadena de Anillos",
      lore_intro:
        "Una cadena de eslabones donde cada uno sólo conoce al siguiente. Debes invertirla sin romperla: guarda el siguiente ANTES de cambiar el enlace, o perderás la cadena entera.",
      position: { x: 19, y: 4 },
      poo_challenge: {
        topic: "Listas enlazadas · O(n), O(1) espacio",
        timeLimitSec: 900,
        instructions:
          "Reverse a singly linked list and return the new head.\n\n(ES) Implementa reverseList(?ListNode $head): ?ListNode. La clase ListNode ya existe (tiene $val y $next), junto a dos ayudantes para construir y volcar listas.",
        support_code:
          "class ListNode {\n    public ?ListNode $next = null;\n    public function __construct(public int $val) {}\n}\n\nfunction listaDesde(array $vals): ?ListNode {\n    $head = null;\n    foreach (array_reverse($vals) as $v) {\n        $n = new ListNode($v);\n        $n->next = $head;\n        $head = $n;\n    }\n    return $head;\n}\n\nfunction listaAArray(?ListNode $h): array {\n    $out = [];\n    while ($h) { $out[] = $h->val; $h = $h->next; }\n    return $out;\n}",
        starter_code:
          "<?php\n\n// ListNode, listaDesde() y listaAArray() ya existen.\n\nfunction reverseList(?ListNode $head): ?ListNode {\n    // Tres punteros: prev, head y next\n}\n",
        hints: [
          "Empieza con $prev = null; y recorre mientras $head no sea null.",
          "El orden importa: $next = $head->next; luego $head->next = $prev; luego avanza $prev = $head; $head = $next;",
          "Al final, la nueva cabeza es $prev (cuando $head llegó a null).",
        ],
        test_cases: [
          {
            input: "listaAArray(reverseList(listaDesde([1, 2, 3, 4, 5])))",
            expected: [5, 4, 3, 2, 1],
            description: "La cadena queda del revés",
          },
          {
            input: "listaAArray(reverseList(listaDesde([1])))",
            expected: [1],
            description: "Un solo eslabón",
          },
          {
            input: "listaAArray(reverseList(null))",
            expected: [],
            description: "Lista vacía: caso borde",
          },
        ],
      },
    },
    {
      node_id: "algo_islas",
      title: "Las Salas Aisladas",
      lore_intro:
        "El plano del laberinto marca roca ('1') y vacío ('0'). Cuenta cuántas salas independientes hay: dos trozos de roca son la misma sala si se tocan en horizontal o vertical.",
      position: { x: 21, y: 10 },
      poo_challenge: {
        topic: "DFS en grilla · O(filas·columnas)",
        timeLimitSec: 1500,
        instructions:
          "Given a grid of '1' (land) and '0' (water), count the islands (land cells connected horizontally/vertically).\n\n(ES) Implementa numIslands(array $grid): int — cuenta las islas conectadas en 4 direcciones.",
        starter_code:
          "<?php\n\nfunction numIslands(array $grid): int {\n    // Al hallar un '1': cuenta +1 y hunde toda su isla\n}\n",
        hints: [
          "Recorre la grilla; cuando encuentres un '1', suma 1 al contador y lanza un DFS desde ahí.",
          "El DFS marca la celda como '0' (visitada) y se llama a sí mismo en las 4 direcciones. Así no la recuentas.",
          "Con una closure recursiva necesitas capturar por referencia: function($r,$c) use (&$dfs, &$grid, $rows, $cols) { … }",
        ],
        test_cases: [
          {
            input:
              "numIslands([['1','1','0','0'],['1','1','0','0'],['0','0','1','0'],['0','0','0','1']])",
            expected: 3,
            description: "Un bloque grande y dos celdas sueltas",
          },
          {
            input: "numIslands([['1','1','1'],['1','1','1']])",
            expected: 1,
            description: "Todo conectado: una sola isla",
          },
          {
            input: "numIslands([['0','0'],['0','0']])",
            expected: 0,
            description: "Sin tierra",
          },
          {
            input: "numIslands([])",
            expected: 0,
            description: "Grilla vacía: caso borde",
          },
        ],
      },
    },
  ],
};

/**
 * LIBRO IV · La Sala de los Espejos Helados.
 * Acertijos de lógica y razonamiento (el test de IQ también es cronometrado).
 * Nodos de tipo `quiz`: opción múltiple con explicación.
 */
export const CHAPTER_LOGICA: Chapter = {
  chapter: 12,
  title: "La Sala de los Espejos Helados",
  lore: "Una cámara de hielo pulido donde los reflejos hacen preguntas. Aquí no se escribe código: se piensa. Y como en toda prueba de verdad, el reloj también cuenta.",
  mapSize: { cols: 22, rows: 14 },
  spawn: { x: 2, y: 7 },
  scenery: {
    ground: "ice",
    pathRows: [7],
    pathGround: "stone",
    pond: { x: 17, y: 10, w: 4, h: 3 },
    decor: [
      { type: "rock", x: 5, y: 4 },
      { type: "rock", x: 10, y: 4 },
      { type: "rock", x: 15, y: 4 },
      { type: "rock", x: 20, y: 5 },
      { type: "rock", x: 6, y: 11 },
      { type: "rock", x: 13, y: 12 },
      { type: "rock", x: 3, y: 12 },
    ],
  },
  nodes: [
    {
      node_id: "pergamino_logica",
      kind: "scroll",
      title: "El Pergamino del Reflejo",
      lore_intro:
        "Grabado en el marco del primer espejo: no da respuestas, da método.",
      position: { x: 4, y: 10 },
      scroll: {
        topic: "Cómo afrontar un test de lógica cronometrado",
        sections: [
          {
            heading: "La respuesta intuitiva suele ser la trampa",
            body: "Estos tests están diseñados para que la primera respuesta que se te ocurra sea la equivocada. Antes de contestar, comprueba tu intuición con un caso pequeño y concreto.\n\nSi una pregunta parece demasiado fácil, casi siempre hay un matiz escondido.",
          },
          {
            heading: "Secuencias: mira las DIFERENCIAS",
            body: "Ante una serie numérica, calcula la diferencia entre términos consecutivos. Si las diferencias forman a su vez un patrón, ya lo tienes.\n\nSi no, prueba con productos (n × algo), cuadrados, o una regla que describa el término anterior en palabras.",
          },
          {
            heading: "Proporciones: busca la unidad",
            body: "«Si 5 máquinas hacen 5 productos en 5 minutos…» — no escales a ciegas. Reduce primero a UNA unidad: ¿cuánto tarda UNA máquina en hacer UN producto?\n\nCon esa cifra, el resto sale solo.",
          },
          {
            heading: "Probabilidad condicionada: reduce el espacio",
            body: "Cuando te dan información («sabiendo que al menos una…»), el conjunto de casos posibles ENCOGE. Enumera los casos que quedan y cuenta cuántos cumplen. Con 2 o 3 elementos, escribirlos todos es más rápido y seguro que aplicar una fórmula de memoria.",
          },
        ],
        keyTakeaway:
          "Gestiona el reloj: si un enigma te atasca, márcalo y sigue; vuelve al final. Una respuesta reflexionada vale más que tres apresuradas.",
      },
    },
    {
      node_id: "logica_secuencias",
      kind: "quiz",
      title: "Las Runas Numéricas",
      lore_intro:
        "El primer espejo muestra una hilera de cifras que se repiten sin descanso. Falta la última.",
      position: { x: 7, y: 7 },
      quiz: {
        topic: "Secuencias y patrones",
        timeLimitSec: 300,
        questions: [
          {
            question: "2, 6, 12, 20, 30, ?  — ¿qué número sigue?",
            options: ["36", "40", "42", "44"],
            correct: 2,
            explanation:
              "Son n(n+1): 1·2=2, 2·3=6, 3·4=12, 4·5=20, 5·6=30 y 6·7=42. También se ve en las diferencias, que suben de dos en dos: 4, 6, 8, 10, 12.",
          },
          {
            question: "1, 11, 21, 1211, 111221, ?  — ¿qué sigue?",
            options: ["112213", "312211", "122112", "111222"],
            correct: 1,
            explanation:
              "Cada término DESCRIBE en voz alta el anterior. 111221 se lee «tres unos, dos doses, un uno» → 312211. Se llama secuencia look-and-say; no es aritmética, es descriptiva.",
          },
          {
            question: "3, 6, 11, 18, 27, ?  — ¿qué sigue?",
            options: ["36", "38", "40", "42"],
            correct: 1,
            explanation:
              "Las diferencias son 3, 5, 7, 9 (impares consecutivos), así que la siguiente es 11: 27 + 11 = 38. Truco general: cuando el patrón no salta a la vista, calcula siempre las diferencias.",
          },
        ],
      },
    },
    {
      node_id: "logica_proporciones",
      kind: "quiz",
      title: "La Fragua de los Enanos",
      lore_intro:
        "El segundo espejo refleja una forja llena de yunques trabajando a la vez. Las cifras engañan si no reduces a la unidad.",
      position: { x: 12, y: 10 },
      quiz: {
        topic: "Proporciones y razonamiento",
        timeLimitSec: 300,
        questions: [
          {
            question:
              "Si 5 máquinas hacen 5 productos en 5 minutos, ¿cuánto tardan 100 máquinas en hacer 100 productos?",
            options: ["5 minutos", "20 minutos", "100 minutos", "1 minuto"],
            correct: 0,
            explanation:
              "Reduce a la unidad: cada máquina hace 1 producto en 5 minutos. Entonces 100 máquinas trabajando EN PARALELO hacen 100 productos también en 5 minutos. La trampa es escalar el tiempo junto con las cantidades.",
          },
          {
            question:
              "Un bate y una pelota cuestan 1,10 € en total. El bate cuesta 1,00 € MÁS que la pelota. ¿Cuánto cuesta la pelota?",
            options: ["0,10 €", "0,05 €", "0,15 €", "1,00 €"],
            correct: 1,
            explanation:
              "La respuesta intuitiva (0,10 €) falla: entonces el bate valdría 1,10 € y el total sería 1,20 €. Si la pelota vale x, el bate vale x+1, así que 2x+1 = 1,10 → x = 0,05 €. El bate cuesta 1,05 €.",
          },
          {
            question:
              "En un estanque, los nenúfares duplican su superficie cada día y cubren el estanque entero el día 48. ¿Qué día cubrían la mitad?",
            options: ["Día 24", "Día 47", "Día 32", "Día 46"],
            correct: 1,
            explanation:
              "Si se duplican cada día, el día anterior a cubrirlo todo estaba justo a la mitad: día 47. Dividir 48 entre 2 sería tratar un crecimiento exponencial como si fuera lineal.",
          },
        ],
      },
    },
    {
      node_id: "logica_balanza",
      kind: "quiz",
      title: "La Balanza de Mithril",
      lore_intro:
        "El último espejo muestra una balanza de platillos y unas monedas girando en el aire. Probabilidad y peso: los dos sitios donde más falla la intuición.",
      position: { x: 17, y: 7 },
      quiz: {
        topic: "Probabilidad y estrategia",
        timeLimitSec: 420,
        questions: [
          {
            question:
              "Lanzas dos monedas justas. Sabiendo que al menos una salió cara, ¿cuál es la probabilidad de que AMBAS sean cara?",
            options: ["1/2", "1/3", "1/4", "2/3"],
            correct: 1,
            explanation:
              "Los cuatro casos posibles son CC, CX, XC, XX. La condición «al menos una cara» elimina XX y deja tres: CC, CX, XC. Sólo uno cumple que ambas sean cara → 1/3, no 1/2. La información recibida encoge el espacio de casos.",
          },
          {
            question:
              "Tienes 9 bolas idénticas; una pesa un poco más. Con una balanza de platillos, ¿en cuántas pesadas GARANTIZAS encontrar la más pesada?",
            options: ["2", "3", "4", "8"],
            correct: 0,
            explanation:
              "Dos. Divide en tres grupos de 3 y pesa dos grupos: si uno baja, la bola está ahí; si quedan iguales, está en el tercero. Segunda pesada: de esas 3, pesa dos. Cada pesada tiene TRES resultados posibles, así que descarta dos tercios de golpe.",
          },
          {
            question:
              "Una familia tiene dos hijos. Sabes que al menos uno es niño. ¿Probabilidad de que AMBOS sean niños?",
            options: ["1/2", "1/3", "1/4", "3/4"],
            correct: 1,
            explanation:
              "El mismo razonamiento que el de las monedas: los casos son NN, NÑ, ÑN, ÑÑ. «Al menos un niño» descarta ÑÑ y quedan tres, de los cuales sólo NN cumple → 1/3. Reconocer que es el MISMO problema con otro disfraz es justo lo que evalúan.",
          },
        ],
      },
    },
  ],
};

/**
 * LIBRO III (cierre) · El Árbol de Piedra.
 * Tercer bloque: árboles, combinaciones/backtracking, criba y DP con O(1).
 */
export const CHAPTER_ALGOS_3: Chapter = {
  chapter: 13,
  title: "El Árbol de Piedra",
  lore: "En la última cámara crece un árbol tallado en roca viva, con ramas que se bifurcan hasta perderse. Los Enanos dejaron aquí sus enigmas más finos: los que se resuelven pensando en ramas, en combinaciones y en no repetir trabajo.",
  mapSize: { cols: 22, rows: 14 },
  spawn: { x: 2, y: 7 },
  scenery: {
    ground: "stone",
    pathRows: [7],
    pathGround: "gold",
    pond: { x: 17, y: 11, w: 4, h: 3 },
    pondGround: "ice",
    decor: [
      { type: "rock", x: 5, y: 4 },
      { type: "rock", x: 9, y: 11 },
      { type: "rock", x: 14, y: 4 },
      { type: "rock", x: 15, y: 11 },
      { type: "rock", x: 21, y: 6 },
      { type: "rock", x: 3, y: 12 },
      { type: "rock", x: 8, y: 3 },
    ],
  },
  nodes: [
    {
      node_id: "pergamino_narrar",
      kind: "scroll",
      title: "El Pergamino de la Lengua Común",
      lore_intro:
        "Grabado bajo el árbol: «No basta con resolverlo. En los concilios de los Hombres del Oeste, hay que saber CONTAR cómo lo resolviste — y hacerlo en su lengua.»",
      position: { x: 4, y: 10 },
      scroll: {
        topic: "Cómo narrar la solución (y en inglés)",
        sections: [
          {
            heading: "Los seis pasos",
            body: "1. Reformula el enunciado y confirma los casos borde (vacío, negativos, duplicados).\n2. Di la fuerza bruta y su Big-O.\n3. Optimiza — casi siempre un hash map o dos punteros bajan de O(n²) a O(n).\n4. Codifica hablando.\n5. Prueba con un ejemplo pequeño.\n6. Cierra diciendo la complejidad final de tiempo Y espacio.\n\nUna solución correcta y lenta, bien explicada, puntúa más que una óptima a medias y en silencio.",
          },
          {
            heading: "Frases que resuelven la entrevista técnica",
            body: "«Let me restate the problem to make sure I understand it.»\n«The brute force would be O(n²) — let me see if I can do better.»\n«The trade-off here is between time and space, so I'd choose… because…»\n«Let me walk you through my approach step by step.»\n«Let me trace through a small example to verify.»\n«This runs in O(n) time and O(n) space.»",
          },
          {
            heading: "Si te pierdes",
            body: "«Could you rephrase that?» — pedir aclaración no resta, suma.\n«I'd start simple and only add complexity when a real constraint requires it.»\n\nHablar despacio y claro puntúa más que hablar rápido con errores. Y si un problema te atasca: márcalo, sigue, y vuelve al final.",
          },
        ],
        keyTakeaway:
          "Piensa en voz alta desde el primer segundo. El silencio se interpreta como no saber, aunque estés resolviéndolo en tu cabeza.",
      },
    },
    {
      node_id: "algo_arbol",
      title: "Las Ramas de Piedra",
      lore_intro:
        "El árbol se bifurca en dos por cada nudo. ¿Cuántos nudos hay en la rama más larga, desde la raíz hasta la punta?",
      position: { x: 7, y: 7 },
      poo_challenge: {
        topic: "Árboles · DFS recursivo · O(n)",
        timeLimitSec: 720,
        instructions:
          "Return the maximum depth (number of nodes along the longest root-to-leaf path) of a binary tree.\n\n(ES) Implementa maxDepth(?TreeNode $root): int. La clase TreeNode ya existe (con $val, $left y $right), junto a arbolDesde() para construir árboles por niveles.",
        support_code:
          "class TreeNode {\n    public ?TreeNode $left = null;\n    public ?TreeNode $right = null;\n    public function __construct(public int $val) {}\n}\n\n/** Construye un árbol desde un array por niveles (null = hueco). */\nfunction arbolDesde(array $vals): ?TreeNode {\n    if (empty($vals) || $vals[0] === null) return null;\n    $root = new TreeNode($vals[0]);\n    $cola = [$root];\n    $i = 1;\n    while ($i < count($vals) && $cola) {\n        $n = array_shift($cola);\n        if ($i < count($vals)) { $v = $vals[$i++]; if ($v !== null) { $n->left = new TreeNode($v); $cola[] = $n->left; } }\n        if ($i < count($vals)) { $v = $vals[$i++]; if ($v !== null) { $n->right = new TreeNode($v); $cola[] = $n->right; } }\n    }\n    return $root;\n}",
        starter_code:
          "<?php\n\n// TreeNode y arbolDesde() ya existen.\n\nfunction maxDepth(?TreeNode $root): int {\n    // Caso base + la profundidad de cada rama\n}\n",
        hints: [
          "Caso base: un nodo nulo tiene profundidad 0.",
          "La profundidad de un nodo es 1 más la MAYOR de sus dos ramas.",
          "En una línea: return 1 + max(maxDepth($root->left), maxDepth($root->right));",
        ],
        test_cases: [
          {
            input: "maxDepth(arbolDesde([3, 9, 20, null, null, 15, 7]))",
            expected: 3,
            description: "Árbol equilibrado de 3 niveles",
          },
          { input: "maxDepth(arbolDesde([1]))", expected: 1, description: "Sólo la raíz" },
          { input: "maxDepth(null)", expected: 0, description: "Árbol vacío: caso borde" },
          {
            input: "maxDepth(arbolDesde([1, 2, null, 3, null, 4]))",
            expected: 4,
            description: "Rama izquierda encadenada: 4 niveles",
          },
        ],
      },
    },
    {
      node_id: "algo_subconjuntos",
      title: "Todas las Combinaciones",
      lore_intro:
        "Ante ti, un puñado de gemas distintas. ¿De cuántas formas puedes llevarte un subconjunto cualquiera — incluida la de no llevarte ninguna?",
      position: { x: 11, y: 4 },
      poo_challenge: {
        topic: "Recursión / combinaciones · O(n·2ⁿ)",
        timeLimitSec: 1200,
        instructions:
          "Return all possible subsets of an array of distinct integers (the power set).\n\n(ES) Implementa subsets(array $nums): array — todos los subconjuntos posibles. El orden no importa.",
        starter_code:
          "<?php\n\nfunction subsets(array $nums): array {\n    // Empieza con el conjunto vacío y ve duplicando\n}\n",
        hints: [
          "Arranca con $res = [[]] — el conjunto vacío también es un subconjunto.",
          "Por cada número, DUPLICA cada subconjunto que ya tienes añadiéndole ese número.",
          "foreach ($nums as $n) { foreach ($res as $sub) $res[] = [...$sub, $n]; }",
        ],
        test_cases: [
          {
            input: "count(subsets([1, 2, 3]))",
            expected: 8,
            description: "Con 3 elementos hay 2³ = 8 subconjuntos",
          },
          {
            input:
              "(function() { $r = subsets([1, 2, 3]); foreach ($r as &$s) { sort($s); } unset($s); usort($r, fn($a, $b) => [count($a), $a] <=> [count($b), $b]); return $r; })()",
            expected: [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]],
            description: "Los 8 subconjuntos (normalizados para comparar)",
          },
          {
            input: "count(subsets([]))",
            expected: 1,
            description: "Del conjunto vacío sale un solo subconjunto: el vacío",
          },
        ],
      },
    },
    {
      node_id: "algo_agua",
      title: "El Aljibe de Khazad",
      lore_intro:
        "Una hilera de columnas de distinta altura. Eliges dos para formar un aljibe: el agua que retiene la limita SIEMPRE la más baja de las dos.",
      position: { x: 12, y: 10 },
      poo_challenge: {
        topic: "Dos punteros · O(n)",
        timeLimitSec: 1200,
        instructions:
          "Given heights, pick two lines that with the x-axis form a container holding the most water. Return the max area.\n\n(ES) Implementa maxArea(array $h): int — el área máxima entre dos columnas.",
        starter_code:
          "<?php\n\nfunction maxArea(array $h): int {\n    // Dos punteros en los extremos, hacia dentro\n}\n",
        hints: [
          "Empieza con un puntero en cada extremo: $l = 0 y $r = count($h) - 1.",
          "El área es min($h[$l], $h[$r]) * ($r - $l) — la limita la columna más baja.",
          "Mueve SIEMPRE el puntero de la columna más baja: mover el alto sólo puede empeorar el resultado.",
        ],
        test_cases: [
          {
            input: "maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])",
            expected: 49,
            description: "Las columnas de altura 8 y 7, separadas 7 posiciones",
          },
          { input: "maxArea([1, 1])", expected: 1, description: "Dos columnas mínimas" },
          {
            input: "maxArea([4, 3, 2, 1, 4])",
            expected: 16,
            description: "Los dos extremos, altura 4 y distancia 4",
          },
        ],
      },
    },
    {
      node_id: "algo_topk",
      title: "Los Ecos más Repetidos",
      lore_intro:
        "De todos los sonidos de la cámara, ¿cuáles son los k que más veces resuenan?",
      position: { x: 16, y: 7 },
      poo_challenge: {
        topic: "Hash map + orden · O(n log n)",
        timeLimitSec: 1200,
        instructions:
          "Return the k most frequent elements of an array.\n\n(ES) Implementa topKFrequent(array $nums, int $k): array — los k elementos que más se repiten, del más frecuente al menos.",
        starter_code:
          "<?php\n\nfunction topKFrequent(array $nums, int $k): array {\n    // Cuenta, ordena por conteo y corta\n}\n",
        hints: [
          "array_count_values($nums) te da directamente valor => conteo.",
          "arsort($c) ordena por conteo descendente CONSERVANDO las claves.",
          "Los valores son las claves: return array_slice(array_keys($c), 0, $k);",
        ],
        test_cases: [
          {
            input: "topKFrequent([1, 1, 1, 2, 2, 3], 2)",
            expected: [1, 2],
            description: "El 1 aparece 3 veces y el 2 dos veces",
          },
          {
            input: "topKFrequent([4, 4, 4, 4, 5, 5, 6], 1)",
            expected: [4],
            description: "Sólo el más frecuente",
          },
          { input: "topKFrequent([7], 1)", expected: [7], description: "Un único elemento" },
        ],
      },
    },
    {
      node_id: "algo_primos",
      title: "La Criba de los Herreros",
      lore_intro:
        "Los herreros marcaban los números que NO servían, tachando de golpe todos los múltiplos de cada uno. Lo que quedaba sin tachar era puro.",
      position: { x: 19, y: 4 },
      poo_challenge: {
        topic: "Criba de Eratóstenes · O(n log log n)",
        timeLimitSec: 1200,
        instructions:
          "Count the prime numbers strictly less than n.\n\n(ES) Implementa countPrimes(int $n): int — cuántos primos hay MENORES que n.",
        starter_code:
          "<?php\n\nfunction countPrimes(int $n): int {\n    // Criba: marca los múltiplos en vez de comprobar uno a uno\n}\n",
        hints: [
          "Si $n < 3 no hay primos menores que n: devuelve 0.",
          "Crea un array de booleanos con array_fill(0, $n, true) y marca 0 y 1 como false.",
          "Para cada $i con $i*$i < $n, si sigue siendo primo, tacha sus múltiplos EMPEZANDO EN $i*$i (los menores ya los tachó otro).",
        ],
        test_cases: [
          { input: "countPrimes(10)", expected: 4, description: "2, 3, 5 y 7" },
          { input: "countPrimes(2)", expected: 0, description: "Ninguno menor que 2" },
          { input: "countPrimes(0)", expected: 0, description: "Caso borde" },
          { input: "countPrimes(100)", expected: 25, description: "25 primos por debajo de 100" },
        ],
      },
    },
    {
      node_id: "algo_escaleras",
      title: "La Escalinata Infinita",
      lore_intro:
        "Los peldaños suben en la penumbra. Puedes avanzar de uno en uno o de dos en dos. ¿De cuántas formas distintas llegas arriba?",
      position: { x: 20, y: 10 },
      poo_challenge: {
        topic: "Programación dinámica · O(n) tiempo, O(1) espacio",
        timeLimitSec: 720,
        instructions:
          "You can climb 1 or 2 steps at a time. In how many distinct ways can you climb n steps?\n\n(ES) Implementa climbStairs(int $n): int. Pista: es Fibonacci disfrazado.",
        starter_code:
          "<?php\n\nfunction climbStairs(int $n): int {\n    // Dos variables bastan: no hace falta un array\n}\n",
        hints: [
          "Para llegar al peldaño n vienes del n-1 (paso de 1) o del n-2 (paso de 2): formas(n) = formas(n-1) + formas(n-2).",
          "No necesitas guardar todo el array: con dos variables basta y el espacio queda en O(1).",
          "$a = 1; $b = 1; y en cada vuelta: [$a, $b] = [$b, $a + $b];",
        ],
        test_cases: [
          { input: "climbStairs(1)", expected: 1, description: "Un peldaño, una forma" },
          { input: "climbStairs(2)", expected: 2, description: "1+1 o 2" },
          { input: "climbStairs(3)", expected: 3, description: "1+1+1, 1+2 o 2+1" },
          { input: "climbStairs(5)", expected: 8, description: "Fibonacci disfrazado" },
        ],
      },
    },
  ],
};

/**
 * LIBRO V · La Antecámara de los Novicios.
 * Calentamiento: los clásicos fáciles. Pensado para empezar aquí cuando vas
 * frío, o para repasar rápido antes de una prueba.
 */
export const CHAPTER_CALENTAMIENTO: Chapter = {
  chapter: 14,
  title: "La Antecámara de los Novicios",
  lore: "Antes de las galerías profundas hay una sala luminosa donde los aprendices afilaban la mano. Problemas cortos, de los que se resuelven en diez minutos — pero que separan a quien lee el enunciado de quien lo supone.",
  mapSize: { cols: 22, rows: 14 },
  spawn: { x: 2, y: 7 },
  scenery: {
    ground: "dry",
    pathRows: [7],
    pathGround: "gold",
    pond: { x: 17, y: 11, w: 4, h: 3 },
    decor: [
      { type: "rock", x: 5, y: 4 },
      { type: "rock", x: 9, y: 11 },
      { type: "rock", x: 14, y: 4 },
      { type: "rock", x: 15, y: 11 },
      { type: "rock", x: 21, y: 6 },
      { type: "rock", x: 3, y: 12 },
      { type: "tree", x: 8, y: 3 },
      { type: "tree", x: 18, y: 3 },
    ],
  },
  nodes: [
    {
      node_id: "pergamino_aprendiz",
      kind: "scroll",
      title: "El Pergamino del Aprendiz",
      lore_intro:
        "Colgado junto a la entrada, con la letra de un maestro paciente: no enseña a resolver, enseña a entrenar.",
      position: { x: 4, y: 10 },
      scroll: {
        topic: "Cómo practicar de verdad",
        sections: [
          {
            heading: "Tápate la solución y ponte el reloj",
            body: "Leer soluciones da sensación de aprender, pero no entrena. Lee sólo el enunciado, arranca el cronómetro y escribe TU versión antes de mirar nada.\n\nLa prueba real es cronometrada: practicar sin reloj entrena algo distinto de lo que te van a medir.",
          },
          {
            heading: "Objetivo realista",
            body: "Un problema fácil, resuelto y correcto, en 10–15 minutos.\nUno medio, en 20–30.\n\nSi te pasas mucho del tiempo, no es fracaso: es información sobre qué patrón repasar.",
          },
          {
            heading: "Los casos borde son la mitad del examen",
            body: "Antes de escribir la primera línea, pregúntate: ¿qué pasa con la entrada vacía? ¿Con un solo elemento? ¿Con negativos? ¿Con duplicados? ¿Con desbordamiento?\n\nUn error de lectura cuesta más caro que treinta segundos pensando.",
          },
          {
            heading: "Narra en voz alta, y en inglés",
            body: "Di tu razonamiento mientras resuelves. Entrenas a la vez las dos cosas que evalúan: el algoritmo y el idioma.\n\nRepite a los dos días los que fallaste — la repetición espaciada es lo que fija el patrón.",
          },
        ],
        keyTakeaway:
          "Cronómetro, solución tapada y en voz alta. Repite a los dos días los que fallaste.",
      },
    },
    {
      node_id: "warm_fizzbuzz",
      title: "El Cántico de los Enanos",
      lore_intro:
        "Los enanos cuentan sus pasos, pero cada tres gritan «¡Fizz!», cada cinco «¡Buzz!»… y cuando toca ambos, gritan las dos cosas. El orden de las comprobaciones lo es todo.",
      position: { x: 7, y: 7 },
      poo_challenge: {
        topic: "Condicionales · el clásico",
        timeLimitSec: 480,
        instructions:
          "For 1..n: 'Fizz' if divisible by 3, 'Buzz' if by 5, 'FizzBuzz' if by both, else the number (as a string).\n\n(ES) Implementa fizzBuzz(int $n): array. Devuelve TODOS los valores como cadenas.",
        starter_code:
          "<?php\n\nfunction fizzBuzz(int $n): array {\n    // Ojo con el orden de las comprobaciones\n}\n",
        hints: [
          "Comprueba PRIMERO el múltiplo de 15; si no, «FizzBuzz» nunca saldría.",
          "El número también va como cadena: (string)$i",
          "Estructura: if (%15) … elseif (%3) … elseif (%5) … else …",
        ],
        test_cases: [
          {
            input: "fizzBuzz(5)",
            expected: ["1", "2", "Fizz", "4", "Buzz"],
            description: "Los cinco primeros",
          },
          {
            input: "fizzBuzz(15)[14]",
            expected: "FizzBuzz",
            description: "El 15 es múltiplo de 3 Y de 5",
          },
          {
            input: "count(fizzBuzz(100))",
            expected: 100,
            description: "Devuelve exactamente n elementos",
          },
        ],
      },
    },
    {
      node_id: "warm_anagrama",
      title: "Las Mismas Runas",
      lore_intro:
        "Dos inscripciones parecen distintas, pero están grabadas con exactamente las mismas runas. ¿Lo son?",
      position: { x: 11, y: 4 },
      poo_challenge: {
        topic: "Hash map · O(n)",
        timeLimitSec: 600,
        instructions:
          "Return true if string t is an anagram of string s.\n\n(ES) Implementa isAnagram(string $s, string $t): bool.",
        starter_code:
          "<?php\n\nfunction isAnagram(string $s, string $t): bool {\n    // Cuenta letras y réstalas\n}\n",
        hints: [
          "Atajo inmediato: si las longitudes difieren, ya es false.",
          "Cuenta las letras de $s con array_count_values(str_split($s)).",
          "Recorre $t restando; si una letra no existe o baja de 0, devuelve false.",
        ],
        test_cases: [
          { input: "isAnagram('anagram', 'nagaram')", expected: true, description: "Mismas letras" },
          { input: "isAnagram('rat', 'car')", expected: false, description: "Letras distintas" },
          { input: "isAnagram('a', 'ab')", expected: false, description: "Longitudes distintas" },
          { input: "isAnagram('', '')", expected: true, description: "Dos vacías: caso borde" },
        ],
      },
    },
    {
      node_id: "warm_unico",
      title: "La Runa Solitaria",
      lore_intro:
        "En la hilera hay una única runa que no se repite en toda la inscripción. Encuentra su posición — la primera que cumpla.",
      position: { x: 12, y: 10 },
      poo_challenge: {
        topic: "Hash map · dos pasadas",
        timeLimitSec: 600,
        instructions:
          "Return the index of the first non-repeating character in a string, or -1 if none exists.\n\n(ES) Implementa firstUniqChar(string $s): int — el índice del primer carácter que no se repite; -1 si no hay.",
        starter_code:
          "<?php\n\nfunction firstUniqChar(string $s): int {\n    // Dos pasadas: contar y luego buscar\n}\n",
        hints: [
          "Primera pasada: cuenta cuántas veces aparece cada carácter.",
          "Segunda pasada: recorre EN ORDEN y devuelve el primer índice cuyo conteo sea 1.",
          "Hacen falta las dos pasadas: en una sola no sabes aún si algo se repetirá más adelante.",
        ],
        test_cases: [
          { input: "firstUniqChar('leetcode')", expected: 0, description: "La 'l' es única" },
          {
            input: "firstUniqChar('loveleetcode')",
            expected: 2,
            description: "La 'v' en el índice 2",
          },
          { input: "firstUniqChar('aabb')", expected: -1, description: "Todas se repiten" },
          { input: "firstUniqChar('')", expected: -1, description: "Cadena vacía: caso borde" },
        ],
      },
    },
    {
      node_id: "warm_insertar",
      title: "El Hueco en la Fila",
      lore_intro:
        "Las piedras están ordenadas por tamaño. Si traes una nueva, ¿en qué posición hay que encajarla para no romper el orden?",
      position: { x: 16, y: 7 },
      poo_challenge: {
        topic: "Búsqueda binaria (límite inferior) · O(log n)",
        timeLimitSec: 720,
        instructions:
          "Given a sorted array and a target, return the index where it is, or where it would be inserted to keep it sorted.\n\n(ES) Implementa searchInsert(array $a, int $t): int.",
        starter_code:
          "<?php\n\nfunction searchInsert(array $a, int $t): int {\n    // Búsqueda binaria de límite inferior\n}\n",
        hints: [
          "Es una binaria distinta: $hi empieza en count($a), NO en count($a)-1.",
          "El bucle va mientras $lo < $hi (no <=), y al final $lo == $hi es la respuesta.",
          "$a[$mid] < $t ? $lo = $mid + 1 : $hi = $mid;  — fíjate en que $hi NO resta 1.",
        ],
        test_cases: [
          { input: "searchInsert([1, 3, 5, 6], 5)", expected: 2, description: "Ya está: índice 2" },
          { input: "searchInsert([1, 3, 5, 6], 2)", expected: 1, description: "Iría entre 1 y 3" },
          { input: "searchInsert([1, 3, 5, 6], 7)", expected: 4, description: "Iría al final" },
          { input: "searchInsert([], 5)", expected: 0, description: "Array vacío: caso borde" },
        ],
      },
    },
    {
      node_id: "warm_ventana_fija",
      title: "La Veta más Rica",
      lore_intro:
        "Debes escoger k galerías CONTIGUAS y quedarte con las de mayor rendimiento total. No vuelvas a sumar lo que ya sumaste: desliza.",
      position: { x: 19, y: 4 },
      poo_challenge: {
        topic: "Ventana deslizante fija · O(n)",
        timeLimitSec: 900,
        instructions:
          "Given an array and a number k, find the maximum sum of any contiguous subarray of size k.\n\n(ES) Implementa maxSumSubarray(array $nums, int $k): int.",
        starter_code:
          "<?php\n\nfunction maxSumSubarray(array $nums, int $k): int {\n    // Calcula la primera suma y luego desliza\n}\n",
        hints: [
          "Calcula la suma de los k primeros: array_sum(array_slice($nums, 0, $k)).",
          "Al desplazar la ventana, suma el que entra y resta el que sale — no recalcules toda la ventana.",
          "$sum += $nums[$i] - $nums[$i - $k];  y guarda el máximo en cada paso.",
        ],
        test_cases: [
          {
            input: "maxSumSubarray([2, 1, 5, 1, 3, 2], 3)",
            expected: 9,
            description: "5 + 1 + 3 = 9",
          },
          {
            input: "maxSumSubarray([1, 2, 3], 3)",
            expected: 6,
            description: "La ventana ocupa todo el array",
          },
          { input: "maxSumSubarray([5], 1)", expected: 5, description: "Un solo elemento" },
          {
            input: "maxSumSubarray([-1, -2, -3, -4], 2)",
            expected: -3,
            description: "Con negativos también: -1 + -2",
          },
        ],
      },
    },
    {
      node_id: "warm_invertir",
      title: "El Espejo de los Números",
      lore_intro:
        "El espejo devuelve las cifras del revés. Pero si el reflejo no cabe en la piedra rúnica de 32 bits, se desvanece en nada.",
      position: { x: 20, y: 10 },
      poo_challenge: {
        topic: "Matemáticas + desbordamiento",
        timeLimitSec: 900,
        instructions:
          "Reverse the digits of a 32-bit signed integer. Return 0 if the result overflows the 32-bit range.\n\n(ES) Implementa reverseInt(int $x): int — invierte los dígitos; devuelve 0 si se sale del rango de 32 bits.\n\nAVISO: este PHP es de 32 bits (PHP_INT_MAX = 2147483647). Comprueba el desbordamiento ANTES de convertir a int.",
        starter_code:
          "<?php\n\nfunction reverseInt(int $x): int {\n    // Signo aparte, invierte, y valida el rango ANTES de castear a int\n}\n",
        hints: [
          "Guarda el signo primero y trabaja con abs($x); al final multiplicas.",
          "Invertir es más fácil como texto: strrev((string)abs($x))",
          "Cuidado: (int)'9646324351' se SATURA a PHP_INT_MAX en 32 bits y el desbordamiento pasaría desapercibido. Conviértelo antes a float, que es exacto hasta 2^53: $rev = (float)strrev((string)abs($x));",
          "Y sólo entonces valida: if ($rev > 2**31 - 1) return 0; return (int)$rev * $sign;",
        ],
        test_cases: [
          { input: "reverseInt(123)", expected: 321, description: "Positivo" },
          { input: "reverseInt(-123)", expected: -321, description: "El signo se conserva" },
          { input: "reverseInt(120)", expected: 21, description: "Los ceros finales desaparecen" },
          {
            input: "reverseInt(1534236469)",
            expected: 0,
            description: "Al invertirlo se desborda: devuelve 0",
          },
          { input: "reverseInt(0)", expected: 0, description: "Caso borde" },
        ],
      },
    },
  ],
};

/** Capítulos jugables (con mapa y nodos). */
// ---- Libro VI · Las Dos Torres (enums y máquinas de estado) ----

/**
 * Capítulo 15 · El Sendero de Sméagol.
 * Emyn Muil y la Ciénaga de los Muertos. Gollum tiene DOS estados y sólo dos:
 * es el ejemplo perfecto de un enum de PHP 8.1 y de una máquina de estados.
 */
export const CHAPTER_GOLLUM: Chapter = {
  chapter: 15,
  title: "El Sendero de Sméagol",
  lore:
    "Tras la disolución, Frodo y Sam se pierden en el Emyn Muil y atrapan a la criatura que los sigue. " +
    "Sméagol jura por el Tesoro; Gollum susurra traición. Un mismo cuerpo, dos estados, y ninguno más: " +
    "eso, en PHP, se llama enum.",
  mapSize: { cols: 24, rows: 14 },
  spawn: { x: 2, y: 7 },
  companions: ["sam"],
  scenery: {
    ground: "grassDark",
    pathRows: [7],
    pathGround: "path",
    pond: { x: 9, y: 9, w: 8, h: 4 }, // la Ciénaga de los Muertos
    npcs: [{ spriteId: "gollum", x: 4, y: 10, label: "…nos sigue" }],
    dialogues: [
      {
        x: 7,
        y: 8,
        speaker: "sam",
        name: "Sam",
        text: "No me fío de él. Un lado promete y el otro muerde.",
      },
      {
        x: 18,
        y: 8,
        speaker: "sam",
        name: "Sam",
        text: "Hay caras en el agua… no las mire, señor Frodo.",
      },
    ],
    decor: [
      { type: "rock", x: 3, y: 3 },
      { type: "rock", x: 7, y: 2 },
      { type: "rock", x: 11, y: 3 },
      { type: "rock", x: 16, y: 2 },
      { type: "rock", x: 20, y: 3 },
      { type: "rock", x: 22, y: 11 },
      { type: "pine", x: 1, y: 12 },
      { type: "pine", x: 6, y: 12 },
      { type: "pine", x: 23, y: 6 },
    ],
  },
  nodes: [
    {
      node_id: "gollum_pergamino_estados",
      kind: "scroll",
      title: "El Pergamino de los Estados",
      lore_intro:
        "Grabado en una losa del Emyn Muil, bajo la lluvia. Quien lo lee entiende por qué la criatura discute consigo misma.",
      position: { x: 5, y: 5 },
      scroll: {
        topic: "Enums (PHP 8.1): tipos con un número cerrado de valores",
        sections: [
          {
            heading: "El problema que resuelven",
            body:
              "Antes de PHP 8.1 un estado se guardaba como string o int: $animo = 'gollum'. Nada impedía escribir " +
              "'Gollum', 'golum' o 'banana'. El error no aparecía al escribirlo, sino tres capas más abajo. " +
              "Un enum convierte ese conjunto de valores válidos en un TIPO: si no es un caso declarado, PHP lo rechaza.",
            code:
              "// Frágil: cualquier string cuela\nfunction hablar(string $animo) { /* ... */ }\nhablar('gulom'); // pasa, y falla luego\n\n// Seguro: sólo existen dos valores en todo el universo\nenum Animo { case Smeagol; case Gollum; }\nfunction hablar(Animo $animo) { /* ... */ }\nhablar(Animo::Gollum); // TypeError si le pasas otra cosa",
          },
          {
            heading: "Enum puro vs. enum respaldado (backed)",
            body:
              "Un enum PURO sólo tiene casos con nombre: sirve para estados internos. Un enum RESPALDADO asocia a cada " +
              "caso un string o int: sirve cuando el valor viaja fuera del programa (base de datos, JSON, URL). " +
              "El respaldado añade ->value, ::from() y ::tryFrom().",
            code:
              "enum Animo { case Smeagol; case Gollum; }          // puro\nenum Puerta: string {                              // respaldado\n    case Morannon    = 'morannon';\n    case CirithUngol = 'cirith_ungol';\n}\n\nPuerta::CirithUngol->name;   // 'CirithUngol' (los dos lo tienen)\nPuerta::CirithUngol->value;  // 'cirith_ungol' (sólo el respaldado)",
          },
          {
            heading: "from() lanza, tryFrom() devuelve null",
            body:
              "::from('x') lanza ValueError si el valor no existe: úsalo cuando un valor inválido es un fallo del programa. " +
              "::tryFrom('x') devuelve null: úsalo con datos de fuera (formularios, APIs) y decide tú el valor por defecto. " +
              "::cases() te da todos los casos en orden de declaración — útil para pintar un <select>.",
            code:
              "Puerta::from('morannon');       // Puerta::Morannon\nPuerta::from('escalera');       // ValueError\nPuerta::tryFrom('escalera');    // null\n\n// Patrón habitual con entrada del usuario\n$puerta = Puerta::tryFrom($_GET['p'] ?? '') ?? Puerta::Morannon;\n\narray_map(fn($c) => $c->value, Puerta::cases());",
          },
          {
            heading: "Un enum es una clase: puede tener métodos",
            body:
              "Los enums admiten métodos, constantes e incluso implementar interfaces. Dentro, $this es el caso actual. " +
              "Combinado con match() esto sustituye a cadenas enteras de if/else, y match es EXHAUSTIVO: si mañana añades " +
              "un tercer caso y olvidas cubrirlo, PHP lanza UnhandledMatchError en vez de devolver algo silenciosamente mal.",
            code:
              "enum Animo {\n    case Smeagol;\n    case Gollum;\n\n    public function voz(): string {\n        return match ($this) {\n            Animo::Smeagol => 'Amo... Sméagol te sirve.',\n            Animo::Gollum  => '¡Nos lo robó! ¡Ladrón!',\n        };\n    }\n}\n\nAnimo::Gollum->voz();",
          },
          {
            heading: "Máquina de estados",
            body:
              "Un enum describe los estados posibles; una clase guarda el estado ACTUAL y define qué transiciones son legales. " +
              "La regla de oro: el estado es privado y sólo cambia dentro de la clase, tras validar. Así ningún punto del " +
              "programa puede dejar el objeto en un estado imposible.",
            code:
              "final class Smeagol {\n    private Animo $estado = Animo::Smeagol;\n\n    public function estado(): Animo { return $this->estado; }\n\n    public function escuchar(string $palabra): Animo {\n        $this->estado = match ($palabra) {\n            'amo', 'pez'      => Animo::Smeagol,\n            'tesoro', 'anillo' => Animo::Gollum,\n            default => throw new InvalidArgumentException($palabra),\n        };\n        return $this->estado;\n    }\n}",
          },
        ],
        keyTakeaway:
          "Enum = conjunto CERRADO de valores convertido en tipo. Puro para estados internos, respaldado (from/tryFrom) para datos que cruzan la frontera del programa. Con match() dentro, el compilador te obliga a cubrir todos los casos.",
      },
    },
    {
      node_id: "gollum_enum_animo",
      title: "Las dos voces",
      lore_intro:
        "La criatura discute consigo misma sobre una roca. «Sméagol lo prometió» — «¡Nos lo robó!». Sólo hay dos voces, nunca una tercera.",
      position: { x: 9, y: 6 },
      spriteId: "gollum",
      poo_challenge: {
        topic: "Enum puro con métodos y match",
        instructions:
          "Declara el enum `Animo` con exactamente dos casos: `Smeagol` y `Gollum`.\n\n" +
          "Añádele dos métodos:\n" +
          "• `voz(): string` — devuelve `'Amo... Sméagol te sirve.'` para Smeagol y `'¡Nos lo robó! ¡Ladrón!'` para Gollum. Usa `match ($this)`.\n" +
          "• `opuesto(): self` — devuelve el otro caso.\n\n" +
          "No añadas un tercer caso: el enum debe quedar cerrado en dos.",
        starter_code:
          "<?php\n\nenum Animo\n{\n    // 1) Declara aquí los dos casos\n\n    public function voz(): string\n    {\n        // 2) match ($this) => ...\n    }\n\n    public function opuesto(): self\n    {\n        // 3) devuelve el otro caso\n    }\n}\n",
        hints: [
          "Los casos de un enum puro se declaran sin valor: `case Smeagol;`",
          "Dentro de un método del enum, `$this` ES el caso actual, así que `match ($this) { Animo::Smeagol => ..., Animo::Gollum => ... }`.",
          "Para `opuesto()` te basta una comparación de identidad: `return $this === Animo::Smeagol ? Animo::Gollum : Animo::Smeagol;`",
        ],
        test_cases: [
          {
            input: "Animo::Smeagol->voz()",
            expected: "Amo... Sméagol te sirve.",
            description: "La voz mansa de Sméagol",
            raw: true,
          },
          {
            input: "Animo::Gollum->voz()",
            expected: "¡Nos lo robó! ¡Ladrón!",
            description: "La voz de Gollum",
            raw: true,
          },
          {
            input: "Animo::Smeagol->opuesto()->name",
            expected: "Gollum",
            description: "El opuesto de Sméagol es Gollum",
            raw: true,
          },
          {
            input: "Animo::Gollum->opuesto()->opuesto()->name",
            expected: "Gollum",
            description: "Dos veces el opuesto vuelve al origen",
            raw: true,
          },
          {
            input: "count(Animo::cases())",
            expected: 2,
            description: "El enum está cerrado: sólo dos casos",
            raw: true,
          },
          {
            input: "Animo::Smeagol instanceof UnitEnum",
            expected: true,
            description: "Es un enum de verdad, no una clase con constantes",
            raw: true,
          },
        ],
      },
    },
    {
      node_id: "gollum_enum_puerta",
      title: "Las puertas de Mordor",
      lore_intro:
        "«Hay otro camino. Más secreto. Una escalera oscura.» Sméagol conoce los nombres de las puertas; sólo tres son reales, y el resto son trampas de la Ciénaga.",
      position: { x: 14, y: 5 },
      spriteId: "gollum",
      poo_challenge: {
        topic: "Enum respaldado: from, tryFrom y cases",
        instructions:
          "Declara el enum `Puerta` respaldado por `string` con estos tres casos y valores exactos:\n" +
          "• `Morannon` = `'morannon'`\n" +
          "• `CirithUngol` = `'cirith_ungol'`\n" +
          "• `Rauros` = `'rauros'`\n\n" +
          "Añade:\n" +
          "• `public static function desdeSusurro(?string $s): self` — devuelve la puerta cuyo valor coincida; si el susurro es nulo o no corresponde a ninguna, devuelve `Puerta::Morannon`. Usa `tryFrom`, no un `if` por cada caso.\n" +
          "• `public function esSecreta(): bool` — sólo Cirith Ungol es secreta.",
        starter_code:
          "<?php\n\nenum Puerta: string\n{\n    // 1) los tres casos con su valor\n\n    public static function desdeSusurro(?string $s): self\n    {\n        // 2) tryFrom + valor por defecto\n    }\n\n    public function esSecreta(): bool\n    {\n        // 3)\n    }\n}\n",
        hints: [
          "Un enum respaldado declara el tipo tras el nombre: `enum Puerta: string` y cada caso lleva valor: `case Rauros = 'rauros';`",
          "`self::tryFrom($x)` devuelve el caso o `null`. El operador `??` encadena el valor por defecto en una línea.",
          "Ojo con el `?string`: `tryFrom(null)` es un TypeError. Convierte antes: `self::tryFrom((string) $s) ?? self::Morannon;`",
        ],
        test_cases: [
          {
            input: "Puerta::from('cirith_ungol')->name",
            expected: "CirithUngol",
            description: "from() encuentra el caso por su valor",
            raw: true,
          },
          {
            input: "Puerta::CirithUngol->value",
            expected: "cirith_ungol",
            description: "El valor respaldado",
            raw: true,
          },
          {
            input: "Puerta::desdeSusurro('rauros')->name",
            expected: "Rauros",
            description: "Un susurro válido",
            raw: true,
          },
          {
            input: "Puerta::desdeSusurro('escalera')->name",
            expected: "Morannon",
            description: "Un susurro falso cae al valor por defecto",
            raw: true,
          },
          {
            input: "Puerta::desdeSusurro(null)->name",
            expected: "Morannon",
            description: "El silencio también cae al valor por defecto",
            raw: true,
          },
          {
            input: "Puerta::CirithUngol->esSecreta()",
            expected: true,
            description: "La escalera oscura es secreta",
            raw: true,
          },
          {
            input: "Puerta::Morannon->esSecreta()",
            expected: false,
            description: "La Puerta Negra no tiene nada de secreta",
            raw: true,
          },
          {
            input: "array_map(fn($c) => $c->value, Puerta::cases())",
            expected: ["morannon", "cirith_ungol", "rauros"],
            description: "cases() devuelve los tres, en orden de declaración",
            raw: true,
          },
        ],
      },
    },
    {
      node_id: "gollum_maquina_estados",
      title: "La máquina de dos voces",
      lore_intro:
        "Cada palabra que oye lo empuja a un lado o al otro. «Amo» lo devuelve a Sméagol; «tesoro» despierta a Gollum. Y hay palabras que no entiende en absoluto.",
      position: { x: 19, y: 6 },
      spriteId: "gollum",
      poo_challenge: {
        topic: "Máquina de estados con enum + estado privado",
        instructions:
          "El enum `Animo` (Smeagol/Gollum) ya existe: no lo redeclares.\n\n" +
          "Escribe la clase `Smeagol` con el estado GUARDADO EN PRIVADO, empezando en `Animo::Smeagol`:\n" +
          "• `estado(): Animo` — devuelve el estado actual.\n" +
          "• `escuchar(string $palabra): Animo` — cambia de estado y devuelve el nuevo:\n" +
          "  · `'amo'`, `'pez'`, `'bondad'` → `Animo::Smeagol`\n" +
          "  · `'tesoro'`, `'anillo'`, `'ladron'` → `Animo::Gollum`\n" +
          "  · cualquier otra → lanza `InvalidArgumentException` y NO cambia el estado.\n" +
          "• `historial(): array` — nombres de los estados por los que ha pasado, empezando por `'Smeagol'`. " +
          "Sólo se anota cuando hay CAMBIO real: oír 'tesoro' dos veces seguidas anota una sola vez.",
        starter_code:
          "<?php\n\n// `enum Animo { case Smeagol; case Gollum; }` ya está declarado.\n\nfinal class Smeagol\n{\n    private Animo $estado = Animo::Smeagol;\n    private array $historial = ['Smeagol'];\n\n    public function estado(): Animo\n    {\n        //\n    }\n\n    public function escuchar(string $palabra): Animo\n    {\n        // match con default => throw ...\n    }\n\n    public function historial(): array\n    {\n        //\n    }\n}\n",
        support_code:
          "enum Animo {\n    case Smeagol;\n    case Gollum;\n}",
        hints: [
          "`match` admite varias opciones por rama separadas por coma: `'amo', 'pez', 'bondad' => Animo::Smeagol,`",
          "Desde PHP 8.0 `throw` es una expresión, así que cabe dentro del match: `default => throw new InvalidArgumentException($palabra),`",
          "Calcula primero el estado nuevo en una variable. Sólo si `$nuevo !== $this->estado` lo asignas y añades `$nuevo->name` al historial.",
        ],
        test_cases: [
          {
            input:
              "(new Smeagol())->estado()->name",
            expected: "Smeagol",
            description: "Empieza siendo Sméagol",
            raw: true,
          },
          {
            input: "(new Smeagol())->escuchar('tesoro')->name",
            expected: "Gollum",
            description: "«tesoro» despierta a Gollum",
            raw: true,
          },
          {
            input: "(new Smeagol())->escuchar('pez')->name",
            expected: "Smeagol",
            description: "«pez» lo mantiene manso",
            raw: true,
          },
          {
            input:
              "(function () { $s = new Smeagol(); $s->escuchar('anillo'); return $s->estado()->name; })()",
            expected: "Gollum",
            description: "El estado persiste entre llamadas",
            raw: true,
          },
          {
            input:
              "(function () { $s = new Smeagol(); $s->escuchar('tesoro'); $s->escuchar('anillo'); $s->escuchar('amo'); return $s->historial(); })()",
            expected: ["Smeagol", "Gollum", "Smeagol"],
            description: "Dos palabras oscuras seguidas anotan un solo cambio",
            raw: true,
          },
          {
            input:
              "(function () { $s = new Smeagol(); try { $s->escuchar('mordor'); return 'sin excepcion'; } catch (InvalidArgumentException $e) { return 'rechazada'; } })()",
            expected: "rechazada",
            description: "Una palabra desconocida se rechaza",
            raw: true,
          },
          {
            input:
              "(function () { $s = new Smeagol(); $s->escuchar('tesoro'); try { $s->escuchar('mordor'); } catch (InvalidArgumentException $e) {} return $s->estado()->name; })()",
            expected: "Gollum",
            description: "Tras la excepción el estado queda intacto",
            raw: true,
          },
          {
            input:
              "(new ReflectionProperty('Smeagol', 'estado'))->isPrivate()",
            expected: true,
            description: "El estado no se toca desde fuera: es privado",
            raw: true,
          },
        ],
      },
    },
    {
      node_id: "gollum_acertijos",
      kind: "quiz",
      title: "El juego de los acertijos",
      lore_intro:
        "«¿Juega con nosotros? Si gana, le enseñamos la salida. Si perdemos… nos lo comemos.» Bajo la montaña este juego ya se jugó una vez.",
      position: { x: 20, y: 11 },
      spriteId: "gollum",
      quiz: {
        topic: "Enums en la práctica",
        timeLimitSec: 240,
        questions: [
          {
            question:
              "Los datos vienen de un formulario: `$_POST['estado']`. ¿Qué usas para convertirlo a tu enum?",
            options: [
              "tryFrom(), y decides el valor por defecto si devuelve null",
              "from(), y dejas que lance ValueError",
              "Un match con todos los strings posibles",
              "constant('Estado::' . $_POST['estado'])",
            ],
            correct: 0,
            explanation:
              "Los datos de fuera son hostiles por definición: un valor inválido es NORMAL, no un fallo del programa. tryFrom() devuelve null y tú decides qué hacer. from() reserva su ValueError para valores que ya deberían ser válidos (los que salen de tu propia base de datos, por ejemplo). La cuarta opción es directamente un agujero de seguridad.",
          },
          {
            question:
              "Tienes `enum Estado { case A; case B; }` y un `match ($this)` que cubre ambos. Mañana añades `case C` y olvidas tocar el match. ¿Qué pasa?",
            options: [
              "UnhandledMatchError en tiempo de ejecución, en cuanto llega un C",
              "Devuelve null silenciosamente",
              "Error fatal al declarar el enum",
              "Devuelve el primer caso del match",
            ],
            correct: 0,
            explanation:
              "match es estricto y exhaustivo: si ningún brazo coincide y no hay default, lanza UnhandledMatchError. Es exactamente lo que quieres — un fallo ruidoso en vez de un null que se propaga en silencio. Por eso, en un match sobre un enum, añadir `default` suele ser un error: te quita justo esa red de seguridad.",
          },
          {
            question: "¿Cuál de estas cosas NO puede hacer un enum en PHP?",
            options: [
              "Tener propiedades de estado (`public int $veces;`)",
              "Implementar una interfaz",
              "Declarar constantes",
              "Definir métodos estáticos",
            ],
            correct: 0,
            explanation:
              "Un enum es inmutable por diseño: sus casos son singletons compartidos por todo el programa, así que no admite propiedades de estado. Sí admite métodos (de instancia y estáticos), constantes, interfaces y traits. Si necesitas guardar algo que cambia, ese algo va en una clase que TIENE un enum, no dentro del enum.",
          },
          {
            question:
              "`Animo::Gollum === Animo::Gollum` y `Animo::Gollum == Animo::Gollum`. ¿Qué devuelven?",
            options: [
              "true las dos: cada caso es una única instancia en todo el programa",
              "false la primera, true la segunda",
              "true la primera, false la segunda",
              "Error: los enums no se comparan",
            ],
            correct: 0,
            explanation:
              "Cada caso de un enum es un singleton: sólo existe un Animo::Gollum en toda la ejecución. Por eso === funciona y es la comparación idiomática (más rápida y más estricta que ==). Es también lo que hace seguro usar los casos como brazos de un match.",
          },
        ],
      },
    },
  ],
};

/**
 * Capítulo 16 · El Abismo de Helm.
 * Diez mil Uruk-hai contra la Muralla. Materializar esa hueste en un array te
 * revienta la memoria; recorrerla de uno en uno, no. Eso son los generadores.
 */
export const CHAPTER_HELM: Chapter = {
  chapter: 16,
  title: "El Abismo de Helm",
  lore:
    "Cae la noche sobre el Sagrario y una hueste sin fin avanza bajo la lluvia. Nadie puede contarla entera, " +
    "pero sí enfrentarla de uno en uno. En PHP eso se llama generador: no construyes la lista, la rindes " +
    "elemento a elemento, y sólo cuando hace falta.",
  mapSize: { cols: 24, rows: 14 },
  spawn: { x: 2, y: 7 },
  companions: ["aragorn", "legolas", "gimli"],
  scenery: {
    ground: "stone",
    pathRows: [7],
    pathGround: "darkstone",
    npcs: [
      { spriteId: "uruk", x: 20, y: 2, label: "La hueste" },
      { spriteId: "uruk", x: 22, y: 4 },
      { spriteId: "uruk", x: 21, y: 12 },
      { spriteId: "uruk", x: 23, y: 10 },
    ],
    dialogues: [
      {
        x: 6,
        y: 8,
        speaker: "gimli",
        name: "Gimli",
        text: "Podría abrirme paso a hachazos, pero prefiero contarlos de uno en uno.",
      },
      {
        x: 12,
        y: 8,
        speaker: "legolas",
        name: "Legolas",
        text: "Son demasiados para verlos a la vez. Toma sólo los que necesites.",
      },
      {
        x: 18,
        y: 8,
        speaker: "aragorn",
        name: "Aragorn",
        text: "La muralla aguanta mientras no intentes cargarla entera de golpe.",
      },
    ],
    decor: [
      { type: "house", x: 4, y: 6, label: "El Baluarte" },
      { type: "rock", x: 9, y: 2 },
      { type: "rock", x: 13, y: 3 },
      { type: "rock", x: 17, y: 2 },
      { type: "rock", x: 8, y: 12 },
      { type: "rock", x: 13, y: 11 },
      { type: "rock", x: 3, y: 11 },
    ],
  },
  nodes: [
    {
      node_id: "helm_pergamino_generadores",
      kind: "scroll",
      title: "El Pergamino de la Hueste Innumerable",
      lore_intro:
        "Colgado en el muro del Baluarte, junto a las troneras. Lo escribió alguien que tuvo que contar un ejército sin poder verlo entero.",
      position: { x: 10, y: 3 },
      scroll: {
        topic: "Generadores e iteradores: recorrer sin materializar",
        sections: [
          {
            heading: "El problema: la memoria",
            body:
              "Una función que devuelve un array lo construye ENTERO antes de que leas el primer elemento. " +
              "Con diez mil filas te sobra memoria; con diez millones, el proceso muere. Un generador no devuelve " +
              "la lista: devuelve una receta para producirla, y sólo avanza cuando le pides el siguiente elemento.",
            code:
              "// Reserva memoria para 10.000.000 de enteros ANTES de devolver nada\nfunction rango(int $n): array {\n    $r = [];\n    for ($i = 1; $i <= $n; $i++) { $r[] = $i; }\n    return $r;            // ~400 MB\n}\n\n// Memoria constante: produce uno, lo entregas, lo olvidas\nfunction rango(int $n): Generator {\n    for ($i = 1; $i <= $n; $i++) { yield $i; }\n}\n\nforeach (rango(10_000_000) as $i) { /* ... */ }  // unos pocos KB",
          },
          {
            heading: "yield: la función que se pausa",
            body:
              "Basta un `yield` en el cuerpo para que la función deje de ser una función normal: llamarla NO ejecuta " +
              "nada, sólo devuelve un objeto Generator. El código empieza a correr en la primera iteración y se " +
              "CONGELA en cada yield, con sus variables locales intactas, hasta que le pidas el siguiente valor.",
            code:
              "function guardia(): Generator {\n    echo 'abro la puerta';   // no se imprime al llamar\n    yield 'Aragorn';         // pausa aquí\n    echo 'la cierro';\n    yield 'Gimli';\n}\n\n$g = guardia();     // todavía no se ha impreso nada\nforeach ($g as $d) { echo $d; }\n\n// yield también rinde clave => valor\nyield 'muralla' => 'Aragorn';",
          },
          {
            heading: "yield from y return dentro del generador",
            body:
              "`yield from` delega en otro iterable (array, generador u objeto Traversable) y rinde todos sus " +
              "elementos como si fueran propios: es la forma limpia de componer generadores. Y sí, un generador " +
              "puede hacer `return`: ese valor no se rinde en el bucle, se recoge después con `->getReturn()` " +
              "(sólo cuando el generador ya ha terminado).",
            code:
              "function defensores(): Generator {\n    yield from ['Aragorn', 'Legolas'];\n    yield 'Gimli';\n}\n\nfunction contar(array $xs): Generator {\n    $n = 0;\n    foreach ($xs as $x) { $n++; yield $x; }\n    return $n;          // no sale en el foreach\n}\n\n$g = contar(['a', 'b']);\nforeach ($g as $x) {}\n$g->getReturn();        // 2",
          },
          {
            heading: "Iterator vs. IteratorAggregate",
            body:
              "Para que un objeto tuyo se pueda recorrer con foreach debe implementar Traversable, y eso se hace " +
              "por una de dos vías. `Iterator` te obliga a escribir cinco métodos a mano (current, key, next, rewind, " +
              "valid): control total, mucho ruido. `IteratorAggregate` sólo pide `getIterator()`, y como los " +
              "generadores YA son iteradores, la implementación cabe en una línea. Usa IteratorAggregate salvo que " +
              "tengas una razón concreta para no hacerlo.",
            code:
              "final class Muralla implements IteratorAggregate, Countable\n{\n    private array $defensores = [];\n\n    public function alistar(string $n): static {\n        $this->defensores[] = $n;\n        return $this;                 // interfaz fluida\n    }\n\n    public function getIterator(): Generator {\n        yield from $this->defensores;\n    }\n\n    public function count(): int {\n        return count($this->defensores);\n    }\n}\n\nforeach (new Muralla() as $d) { /* ... */ }",
          },
          {
            heading: "Tuberías perezosas",
            body:
              "Como cada generador sólo avanza cuando le tiran del hilo, se pueden encadenar: filtrar(mapear(leer())) " +
              "no recorre la fuente tres veces ni crea tres arrays intermedios — recorre UNA vez, elemento a elemento. " +
              "Es el patrón para leer un CSV de 2 GB o una consulta enorme sin tocar la memoria. Ojo: un generador " +
              "es de un solo uso; si necesitas recorrerlo dos veces, vuelve a llamar a la función.",
            code:
              "function tomar(iterable $flujo, int $n): Generator {\n    $i = 0;\n    foreach ($flujo as $v) {\n        yield $v;\n        if (++$i >= $n) return;   // corta la fuente aquí mismo\n    }\n}\n\n// La fuente es infinita y aun así esto termina\nfunction naturales(): Generator {\n    for ($i = 1; ; $i++) { yield $i; }\n}\n\niterator_to_array(tomar(naturales(), 5), false); // [1,2,3,4,5]",
          },
        ],
        keyTakeaway:
          "Devuelve array cuando el resultado es pequeño y lo vas a recorrer varias veces; devuelve Generator cuando es grande, infinito o caro de producir. Para tus objetos: IteratorAggregate + `yield from`, una línea.",
      },
    },
    {
      node_id: "helm_contar_flechas",
      title: "El carcaj de Legolas",
      lore_intro:
        "«¿Cuántas te quedan?» — «Las que haga falta.» Legolas no cuenta las flechas antes de disparar: las cuenta mientras dispara.",
      position: { x: 9, y: 6 },
      spriteId: "legolas",
      poo_challenge: {
        topic: "yield y getReturn()",
        instructions:
          "Escribe la función `contarFlechas(int $desde, int $hasta): Generator`:\n\n" +
          "• Rinde (`yield`) todos los enteros de `$desde` a `$hasta`, ambos incluidos, en orden ascendente.\n" +
          "• Al terminar, `return` la SUMA de todo lo rendido, para que se pueda recoger con `->getReturn()`.\n\n" +
          "Nada de construir un array intermedio: debe funcionar igual de rápido con `contarFlechas(1, 100000000)`, " +
          "porque llamarla no ejecuta nada.",
        starter_code:
          "<?php\n\nfunction contarFlechas(int $desde, int $hasta): Generator\n{\n    // 1) acumula la suma mientras recorres\n    // 2) yield en cada vuelta\n    // 3) return la suma al final\n}\n",
        hints: [
          "Un `for` normal con `yield $i;` dentro del cuerpo. Con que aparezca un solo `yield`, PHP convierte la función en generador.",
          "Lleva un acumulador: `$suma += $i;` justo antes o después del yield.",
          "`return $suma;` dentro de un generador es legal desde PHP 7 y no rinde nada: ese valor sólo se lee con `->getReturn()`, y sólo después de agotar el generador.",
        ],
        test_cases: [
          {
            input: "iterator_to_array(contarFlechas(1, 5), false)",
            expected: [1, 2, 3, 4, 5],
            description: "Rinde el rango completo",
            raw: true,
          },
          {
            input: "iterator_to_array(contarFlechas(7, 7), false)",
            expected: [7],
            description: "Un rango de un solo elemento",
            raw: true,
          },
          {
            input: "iterator_to_array(contarFlechas(5, 1), false)",
            expected: [],
            description: "Rango vacío: no rinde nada",
            raw: true,
          },
          {
            input: "contarFlechas(1, 3) instanceof Generator",
            expected: true,
            description: "Devuelve un Generator, no un array",
            raw: true,
          },
          {
            input:
              "(function () { $g = contarFlechas(1, 10); foreach ($g as $_) {} return $g->getReturn(); })()",
            expected: 55,
            description: "getReturn() recoge la suma",
            raw: true,
          },
          {
            input:
              "(function () { $g = contarFlechas(3, 6); foreach ($g as $_) {} return $g->getReturn(); })()",
            expected: 18,
            description: "La suma de 3+4+5+6",
            raw: true,
          },
          {
            input: "contarFlechas(1, 100000000) instanceof Generator",
            expected: true,
            description: "Cien millones de flechas y ni un byte gastado: es perezoso",
            raw: true,
          },
        ],
      },
    },
    {
      node_id: "helm_muralla",
      title: "La Muralla Profunda",
      lore_intro:
        "Los defensores suben al adarve de uno en uno. Quien mande la muralla debe poder recorrerla con un simple foreach, sin repartir la lista entera a nadie.",
      position: { x: 14, y: 5 },
      spriteId: "aragorn",
      poo_challenge: {
        topic: "IteratorAggregate, Countable e interfaz fluida",
        instructions:
          "Escribe la clase `Muralla` que implemente `IteratorAggregate` y `Countable`, con los defensores en una " +
          "propiedad PRIVADA:\n\n" +
          "• `alistar(string $nombre): static` — añade un defensor y devuelve `$this`, para poder encadenar llamadas.\n" +
          "• `getIterator(): Generator` — rinde los defensores en el orden en que se alistaron. Una línea con `yield from`.\n" +
          "• `count(): int` — cuántos defensores hay, para que `count($muralla)` funcione.",
        starter_code:
          "<?php\n\nfinal class Muralla implements IteratorAggregate, Countable\n{\n    private array $defensores = [];\n\n    public function alistar(string $nombre): static\n    {\n        // añade y devuelve $this\n    }\n\n    public function getIterator(): Generator\n    {\n        // yield from ...\n    }\n\n    public function count(): int\n    {\n        //\n    }\n}\n",
        hints: [
          "La interfaz fluida es sólo `return $this;` al final del método que modifica. Eso permite `$m->alistar('a')->alistar('b')`.",
          "`getIterator()` puede ser un generador: `yield from $this->defensores;` y ya está. PHP acepta Generator donde la interfaz declara Traversable.",
          "`Countable` hace que la función global `count($objeto)` llame a tu método `count()`. Devuelve `count($this->defensores)`.",
        ],
        test_cases: [
          {
            input:
              "iterator_to_array((new Muralla())->alistar('Aragorn')->alistar('Legolas')->alistar('Gimli'), false)",
            expected: ["Aragorn", "Legolas", "Gimli"],
            description: "Se recorre en orden de alistamiento",
            raw: true,
          },
          {
            input:
              "count((new Muralla())->alistar('Aragorn')->alistar('Legolas'))",
            expected: 2,
            description: "count() sobre el objeto funciona",
            raw: true,
          },
          {
            input: "count(new Muralla())",
            expected: 0,
            description: "Una muralla recién levantada está vacía",
            raw: true,
          },
          {
            input:
              "(function () { $m = new Muralla(); $r = []; foreach ($m->alistar('Éomer') as $d) { $r[] = $d; } return $r; })()",
            expected: ["Éomer"],
            description: "foreach directo sobre el objeto",
            raw: true,
          },
          {
            input: "(new Muralla()) instanceof Traversable",
            expected: true,
            description: "Es recorrible de verdad",
            raw: true,
          },
          {
            input: "(new Muralla())->alistar('Gamling') instanceof Muralla",
            expected: true,
            description: "alistar() devuelve la propia muralla (interfaz fluida)",
            raw: true,
          },
          {
            input:
              "(new ReflectionProperty('Muralla', 'defensores'))->isPrivate()",
            expected: true,
            description: "La lista no se expone: es privada",
            raw: true,
          },
          {
            input:
              "(new ReflectionMethod('Muralla', 'getIterator'))->isGenerator()",
            expected: true,
            description: "getIterator() es un generador, no devuelve un array",
            raw: true,
          },
        ],
      },
    },
    {
      node_id: "helm_tuberia_perezosa",
      title: "Contad los que caigan",
      lore_intro:
        "Gimli lleva la cuenta a gritos. No necesita ver el ejército entero: le basta con los que le llegan al hacha, de uno en uno.",
      position: { x: 19, y: 6 },
      spriteId: "gimli",
      poo_challenge: {
        topic: "Tuberías perezosas: tomar y filtrar sin materializar",
        instructions:
          "El generador `hueste()` ya existe. Rinde Uruk-hai numerados… pero el Abismo sólo aguanta 5: al pedir el " +
          "sexto lanza `RuntimeException`. Tus funciones deben ser PEREZOSAS y no tirar del hilo más de lo necesario.\n\n" +
          "• `tomar(iterable $flujo, int $n): Generator` — rinde como mucho los `$n` primeros elementos y para. " +
          "Con `$n <= 0` no rinde nada y NO debe tocar la fuente.\n" +
          "• `filtrar(iterable $flujo, callable $ok): Generator` — rinde sólo los elementos para los que `$ok($v)` " +
          "sea cierto.\n\n" +
          "Si materializas el flujo con `iterator_to_array` dentro de tus funciones, el carcaj se agota y los tests " +
          "estallan: ése es justamente el error que se está comprobando.",
        starter_code:
          "<?php\n\n// `hueste()` ya está declarada: rinde 1, 2, 3, 4, 5 y luego revienta.\n\nfunction tomar(iterable $flujo, int $n): Generator\n{\n    // 1) si $n <= 0, return; ANTES de tocar la fuente\n    // 2) recorre y rinde, contando\n    // 3) al llegar a $n, return;\n}\n\nfunction filtrar(iterable $flujo, callable $ok): Generator\n{\n    // rinde sólo los que pasen $ok\n}\n",
        support_code:
          "/** Rinde Uruk-hai de uno en uno; el Abismo sólo aguanta 5. */\n" +
          "function hueste(): Generator {\n" +
          "    for ($i = 1; ; $i++) {\n" +
          "        if ($i > 5) throw new RuntimeException('¡La muralla ha caído!');\n" +
          "        yield $i;\n" +
          "    }\n" +
          "}",
        hints: [
          "`tomar` lleva un contador: rinde el valor y, si ya has rendido `$n`, sal con un `return` desnudo (dentro de un generador, `return;` termina la iteración).",
          "El orden importa: incrementa DESPUÉS de rendir (`yield $v; if (++$i >= $n) return;`). Si compruebas antes de rendir, pedirás un elemento de más a la fuente.",
          "Para `$n <= 0` haz `return;` ANTES del foreach: si entras en el bucle ya has pedido el primer elemento a la hueste.",
        ],
        test_cases: [
          {
            input: "iterator_to_array(tomar(hueste(), 3), false)",
            expected: [1, 2, 3],
            description: "Toma tres y deja en paz al resto",
            raw: true,
          },
          {
            input: "iterator_to_array(tomar(hueste(), 5), false)",
            expected: [1, 2, 3, 4, 5],
            description: "Justo los cinco que aguanta la muralla",
            raw: true,
          },
          {
            input: "iterator_to_array(tomar(hueste(), 0), false)",
            expected: [],
            description: "Con n=0 ni se asoma a la fuente",
            raw: true,
          },
          {
            input: "iterator_to_array(tomar([10, 20, 30], 10), false)",
            expected: [10, 20, 30],
            description: "Si pides más de lo que hay, devuelve lo que hay",
            raw: true,
          },
          {
            input: "tomar([1, 2, 3], 2) instanceof Generator",
            expected: true,
            description: "tomar() es un generador",
            raw: true,
          },
          {
            input:
              "iterator_to_array(filtrar([1, 2, 3, 4, 5, 6], fn($x) => $x % 2 === 0), false)",
            expected: [2, 4, 6],
            description: "filtrar() se queda con los pares",
            raw: true,
          },
          {
            input:
              "iterator_to_array(tomar(filtrar(hueste(), fn($x) => $x % 2 === 1), 2), false)",
            expected: [1, 3],
            description: "Tubería encadenada sobre la hueste, sin agotarla",
            raw: true,
          },
          {
            input: "filtrar([1, 2], fn($x) => true) instanceof Generator",
            expected: true,
            description: "filtrar() también es perezoso",
            raw: true,
          },
        ],
      },
    },
    {
      node_id: "helm_acertijos_generadores",
      kind: "quiz",
      title: "El cuerno de Helm",
      lore_intro:
        "Antes del alba, Aragorn repasa contigo lo aprendido. Son las preguntas que separan a quien ha leído sobre generadores de quien los ha usado.",
      position: { x: 16, y: 11 },
      spriteId: "aragorn",
      quiz: {
        topic: "Generadores en la práctica",
        timeLimitSec: 300,
        questions: [
          {
            question:
              "`function f(): Generator { echo 'hola'; yield 1; }` y luego `$g = f();`. ¿Qué se ha impreso?",
            options: [
              "Nada: el cuerpo no corre hasta la primera iteración",
              "'hola', al llamar a f()",
              "'hola', dos veces",
              "Error: un generador no puede hacer echo",
            ],
            correct: 0,
            explanation:
              "Llamar a una función generadora sólo construye el objeto Generator; ni una línea del cuerpo se ejecuta. El código arranca cuando pides el primer valor (foreach, ->current(), ->rewind()...). Es la causa habitual de que una validación colocada al principio de un generador «no salte»: si nadie itera, nunca se ejecuta. Si necesitas validar los argumentos de inmediato, sepáralo en una función normal que devuelva el generador.",
          },
          {
            question:
              "Recorres un generador con foreach y luego vuelves a hacer foreach sobre la MISMA variable. ¿Qué pasa?",
            options: [
              "Exception: no se puede rebobinar un generador ya consumido",
              "Se repite la iteración desde el principio",
              "Itera pero no rinde nada, en silencio",
              "Continúa donde lo dejó",
            ],
            correct: 0,
            explanation:
              "Los generadores son de un solo uso: rebobinar uno que ya ha avanzado lanza «Cannot rewind a generator that was already run». Si necesitas varias pasadas, llama otra vez a la función (barato: se reconstruye la receta) o materializa con iterator_to_array cuando de verdad quepa en memoria. Este es el motivo por el que una API pública suele devolver array o un IteratorAggregate — recorrible tantas veces como quieras — en vez de un Generator suelto.",
          },
          {
            question:
              "¿Cuándo es MEJOR devolver un array que un generador?",
            options: [
              "Cuando el resultado es pequeño y quien lo recibe lo va a recorrer o indexar varias veces",
              "Siempre: los arrays son más rápidos",
              "Cuando el resultado viene de la base de datos",
              "Nunca: un generador siempre es preferible",
            ],
            correct: 0,
            explanation:
              "Un generador no es gratis: no se puede contar sin recorrerlo, no admite acceso por índice y sólo sirve una vez. Para veinte elementos que el que llama va a usar de varias formas, el array es más simple y más rápido. El generador gana cuando el conjunto es grande, infinito, o cada elemento cuesta de producir (I/O, red) y puede que ni llegues a necesitarlos todos.",
          },
          {
            question:
              "¿Qué diferencia real hay entre `yield from $otroGenerador;` y `foreach ($otroGenerador as $v) { yield $v; }`?",
            options: [
              "yield from conserva las claves originales y propaga el getReturn() del delegado",
              "Ninguna: son exactamente equivalentes",
              "yield from es más lento porque copia el generador",
              "foreach es la única forma válida dentro de un generador",
            ],
            correct: 0,
            explanation:
              "yield from delega de verdad: preserva las claves del iterable interno (el foreach manual las descarta y renumera) y su valor de expresión es el getReturn() del generador delegado, lo que permite componer generadores que devuelven un resultado final. Cuidado con las claves duplicadas al delegar en varios arrays: si luego haces iterator_to_array sin pasar `false` como segundo argumento, unos elementos pisan a otros.",
          },
        ],
      },
    },
  ],
};

export const CHAPTERS: Chapter[] = [
  CHAPTER_1,
  CHAPTER_2,
  CHAPTER_3,
  CHAPTER_4,
  CHAPTER_5,
  CHAPTER_6,
  CHAPTER_7,
  CHAPTER_8,
  CHAPTER_SOLID,
  CHAPTER_ALGOS,
  CHAPTER_ALGOS_2,
  CHAPTER_ALGOS_3,
  CHAPTER_LOGICA,
  CHAPTER_CALENTAMIENTO,
  CHAPTER_GOLLUM,
  CHAPTER_HELM,
];

export function getChapter(n: number): Chapter | undefined {
  return CHAPTERS.find((c) => c.chapter === n);
}

/** Resumen de la campaña completa, para la pantalla de selección. */
export interface ChapterInfo {
  chapter: number;
  title: string;
  /** Concepto de POO que enseña el capítulo. */
  topic: string;
  lore: string;
}

export const CAMPAIGN: ChapterInfo[] = [
  {
    chapter: 1,
    title: "Sombras en la Comarca",
    topic: "Clases, propiedades y visibilidad",
    lore: "Frodo huye de la Comarca evadiendo a los Nazgûl y su Hálito Negro.",
  },
  {
    chapter: 2,
    title: "El Bosque Viejo y los Túmulos",
    topic: "Constructores, métodos y destructores",
    lore: "El Viejo Hombre Sauce y los Tumularios; el canto de Tom Bombadil rompe la parálisis.",
  },
  {
    chapter: 3,
    title: "Bree y la Cima de los Vientos",
    topic: "Herencia y sobrescritura (parent::)",
    lore: "Trancos guía a los hobbits; cinco Nazgûl atacan y las Hojas de los Túmulos responden.",
  },
  {
    chapter: 4,
    title: "Huida al Vado de Bruinen",
    topic: "Métodos estáticos y constantes de clase",
    lore: "Persecución de los Nueve hasta que el río se desborda y los arrasa.",
  },
  {
    chapter: 5,
    title: "El Paso de Caradhras",
    topic: "Encapsulamiento avanzado (readonly, validación)",
    lore: "Una tormenta sobrenatural castiga la montaña: hay que gestionar frío y fatiga.",
  },
  {
    chapter: 6,
    title: "Las Minas de Moria",
    topic: "Interfaces y polimorfismo",
    lore: "Las Puertas de Durin, la Cámara de Mazarbul y el Daño de Durin en el puente.",
  },
  {
    chapter: 7,
    title: "El Espejo de Lothlórien",
    topic: "Clases abstractas y traits",
    lore: "Galadriel muestra visiones y entrega dones élficos cargados de poder.",
  },
  {
    chapter: 8,
    title: "La Disolución en Amon Hen",
    topic: "Excepciones y patrón Factory",
    lore: "Boromir sucumbe al Anillo y los Uruk-hai caen sobre la Comunidad.",
  },
  // ---- Libro II · El Camino del Arquitecto (avanzado) ----
  {
    chapter: 9,
    title: "La Biblioteca de Rivendel",
    topic: "SOLID: los cinco principios",
    lore: "Los pergaminos de Imladris guardan los principios que sostienen todo código que perdura.",
  },
  // ---- Libro III · Los Acertijos Antiguos (algoritmos cronometrados) ----
  {
    chapter: 10,
    title: "La Cámara de los Enigmas",
    topic: "Algoritmos clásicos (Big-O y patrones)",
    lore: "Práctica cronometrada: hash maps, dos punteros, pilas, búsqueda binaria y programación dinámica.",
  },
  {
    chapter: 11,
    title: "El Laberinto de los Ecos",
    topic: "Ventana, memoización, listas y DFS",
    lore: "Segundo bloque: anagramas, ventana deslizante, Fibonacci memoizado, listas enlazadas e islas.",
  },
  {
    chapter: 13,
    title: "El Árbol de Piedra",
    topic: "Árboles, combinaciones, criba y DP",
    lore: "Tercer bloque: profundidad de árboles, conjunto potencia, dos punteros avanzado y criba de Eratóstenes.",
  },
  // ---- Libro IV · Acertijos de lógica (test de razonamiento) ----
  {
    chapter: 12,
    title: "La Sala de los Espejos Helados",
    topic: "Lógica y razonamiento (test IQ)",
    lore: "Secuencias, proporciones y probabilidad condicionada: donde más falla la intuición.",
  },
  // ---- Libro V · Calentamiento (empieza aquí si vas frío) ----
  {
    chapter: 14,
    title: "La Antecámara de los Novicios",
    topic: "Calentamiento: los clásicos fáciles",
    lore: "FizzBuzz, anagramas, primer carácter único, inserción binaria, ventana fija y desbordamiento.",
  },
  // ---- Libro VI · Las Dos Torres ----
  {
    chapter: 15,
    title: "El Sendero de Sméagol",
    topic: "Enums (PHP 8.1) y máquinas de estado",
    lore: "Sméagol y Gollum: un cuerpo con dos estados y ninguno más. Enums puros, respaldados y transiciones validadas.",
  },
  {
    chapter: 16,
    title: "El Abismo de Helm",
    topic: "Generadores e iteradores (yield, IteratorAggregate)",
    lore: "Diez mil Uruk-hai que no caben en memoria: se recorren de uno en uno, perezosamente.",
  },
];
