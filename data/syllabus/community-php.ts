import type { Syllabus } from "@/lib/game/narrative";

/**
 * Temario de PHP para el Libro I. Reviste la narrativa compartida de la
 * Comunidad con programación orientada a objetos. (Los textos siguen en español;
 * se traducen a EN en una fase posterior.)
 */

/** Capítulo 1 · POO: clases, propiedades y visibilidad. */
export const SYL_PHP_COMMUNITY_1: Syllabus = {
  c1_espia: {
    kind: "battle",
    questions: [
      {
        question:
          "«Dime, mediano: para guardar el nombre de tu amo dentro de una clase, ¿qué escribes?»",
        options: [
          "private string $nombre;",
          "private $nombre: string;",
          "var string nombre;",
          "let $nombre = '';",
        ],
        correct: 0,
        explanation:
          "En PHP la propiedad se declara como «visibilidad tipo $nombre;». El tipo va ANTES del $, al revés que en TypeScript. `var` existe pero está obsoleto desde PHP 7 (equivale a public) y `let` no es de PHP.",
      },
      {
        question:
          "Dentro de un método, ¿cómo lees una propiedad del propio objeto?",
        options: ["$this->nombre", "$this.nombre", "self::$nombre", "$nombre"],
        correct: 0,
        explanation:
          "`$this->propiedad`, con flecha y SIN el signo dólar en el nombre. El punto es concatenación en PHP, no acceso a miembro. `self::$nombre` es para propiedades estáticas.",
      },
      {
        question: "Tienes `private $anillo;`. ¿Desde dónde se puede leer?",
        options: [
          "Sólo desde dentro de la propia clase",
          "Desde la clase y sus hijas",
          "Desde cualquier parte del programa",
          "Sólo desde fuera de la clase",
        ],
        correct: 0,
        explanation:
          "`private` es el cerrojo más estricto: ni siquiera las clases hijas lo ven. Si quieres que las hijas sí puedan, usa `protected`. Empieza siempre por private y abre sólo lo que haga falta.",
      },
    ],
  },
  c1_jinete_rastreador: {
    kind: "battle",
    questions: [
      {
        question: "¿Qué hace exactamente la palabra `new`?",
        options: [
          "Crea un objeto nuevo a partir de la clase y ejecuta su constructor",
          "Declara una clase",
          "Copia un objeto que ya existe",
          "Reserva memoria sin ejecutar nada",
        ],
        correct: 0,
        explanation:
          "La clase es el molde; `new` fabrica una pieza con ese molde y llama a `__construct()`. Para copiar un objeto existente se usa `clone`.",
      },
      {
        question: "¿Cuál de estas cosas NO puede hacer un método `private`?",
        options: [
          "Ser llamado desde otra clase, aunque sea hija",
          "Ser llamado desde otro método de su clase",
          "Devolver un valor",
          "Recibir parámetros",
        ],
        correct: 0,
        explanation:
          "La visibilidad no limita lo que el método hace, sólo desde DÓNDE se le puede llamar. Un private es invisible fuera de su propia clase — incluidas las hijas.",
      },
      {
        question:
          "¿Por qué se considera mala práctica dejar todas las propiedades en `public`?",
        options: [
          "Cualquiera puede dejar el objeto en un estado imposible sin pasar por tus validaciones",
          "Porque es más lento",
          "Porque PHP lanza un aviso",
          "Porque consume más memoria",
        ],
        correct: 0,
        explanation:
          "El coste no es de rendimiento, es de control: con la propiedad pública nadie garantiza que valga algo válido. Si el único camino para cambiarla es un método tuyo, ahí validas. Eso es encapsulamiento.",
      },
    ],
  },
  c1_perro_negro: {
    kind: "battle",
    questions: [
      {
        question:
          "¿Qué visibilidad usarías para una propiedad que sólo debe tocar la propia clase?",
        options: ["private", "public", "protected", "final"],
        correct: 0,
        explanation:
          "`private` es el cerrojo más estricto: ni las clases hijas la ven. Es el punto de partida recomendado.",
      },
      {
        question:
          "Declaras `public function __construct(public string $nombre) {}`. ¿Qué visibilidad tendrá `$nombre`?",
        options: ["public", "private", "protected", "ninguna: es sólo un parámetro"],
        correct: 0,
        explanation:
          "La promoción de propiedades usa la visibilidad que pongas ANTES del parámetro. Aquí `public`, así que `$obj->nombre` se lee desde fuera.",
      },
      {
        question: "¿Qué es una instancia?",
        options: [
          "Un objeto concreto creado a partir de una clase",
          "El nombre técnico de una clase",
          "Un método que devuelve un objeto",
          "Una propiedad estática",
        ],
        correct: 0,
        explanation:
          "La clase es el molde; la instancia es cada objeto fabricado con ese molde por `new`. Dos instancias tienen las mismas propiedades pero valores independientes.",
      },
    ],
  },
  c1_jefe_nazgul: {
    kind: "battle",
    questions: [
      {
        question:
          "Una clase declara `private string $palabra = 'Mellon';` y un método `public function decir(): string { return $this->palabra; }`. ¿Qué imprime `echo (new Puerta())->decir();`?",
        options: [
          "Mellon",
          "Error: $palabra es privada",
          "Nada, cadena vacía",
          "El nombre de la propiedad",
        ],
        correct: 0,
        explanation:
          "`decir()` es público y vive DENTRO de la clase, así que ve la propiedad privada sin problema. Ése es el patrón: el dato se cierra y se expone una puerta controlada.",
      },
      {
        question: "¿Cuál es la diferencia entre `protected` y `private`?",
        options: [
          "protected lo heredan las clases hijas; private no",
          "protected es visible desde fuera; private no",
          "Son sinónimos",
          "private sólo aplica a métodos y protected sólo a propiedades",
        ],
        correct: 0,
        explanation:
          "Los dos cierran el acceso desde fuera. La diferencia está en la herencia: una hija usa los `protected` del padre, pero no los `private`.",
      },
      {
        question:
          "¿Qué devuelve `$a === $b` si `$a = new Hobbit(); $b = new Hobbit();`?",
        options: [
          "false: son dos objetos distintos aunque sean de la misma clase",
          "true: tienen los mismos valores",
          "Error: los objetos no se comparan con ===",
          "true: son de la misma clase",
        ],
        correct: 0,
        explanation:
          "Con objetos, `===` pregunta si son LA MISMA instancia. `==` sí compara clase y valores. Dos objetos con idénticos datos son `==` pero nunca `===`.",
      },
      {
        question: "¿Para qué sirve el constructor `__construct()`?",
        options: [
          "Para dejar el objeto en un estado válido en el momento de nacer",
          "Para destruir el objeto al terminar",
          "Para declarar las propiedades",
          "Es opcional y no hace nada especial",
        ],
        correct: 0,
        explanation:
          "Se ejecuta solo al hacer `new` y es tu única oportunidad de exigir lo imprescindible. Si un Hobbit no puede existir sin nombre, pídelo en el constructor.",
      },
    ],
  },
  pergamino_clases: {
    kind: "scroll",
    title: "El Pergamino de Bilbo",
    lore_intro:
      "Entre los papeles del viejo Bilbo hay un pergamino con su letra apretada: «Antes de contar una historia, di quién la protagoniza. Un molde primero; los personajes, después.»",
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
          body: "`public` → lo toca cualquiera, desde fuera.\n`private` → sólo la propia clase.\n`protected` → la clase y sus hijas.\n\nPor defecto empieza en `private` y abre sólo lo que haga falta.",
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
  sendero_comarca: {
    kind: "challenge",
    title: "Preparar la Huida",
    lore_intro:
      "Antes de partir debes saber quién eres. Todo héroe empieza por definirse: crea la clase que representa a un hobbit de la Comarca.",
    challenge: {
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
  halito_negro: {
    kind: "challenge",
    title: "El Hálito Negro",
    lore_intro:
      "Un Jinete Negro olfatea el aire cerca del camino. Para pasar inadvertido debes controlar tu Sigilo — un estado privado que nadie puede manipular directamente desde fuera.",
    challenge: {
      topic: "Encapsulamiento (private) + getters/setters",
      instructions:
        "En la clase Hobbit protege la propiedad $nivelSigilo (private, empieza en 0). Añade: getNivelSigilo(): int; ocultarse(int $n): void que SUME sigilo sin pasar de 100; y esVisiblePara(Nazgul $n): bool que devuelva true solo si tu sigilo es MENOR que la percepción del Nazgûl.\n\nLa clase Nazgul ya existe (ver «Código de apoyo»): obtén su percepción con $n->getPercepcion() — con paréntesis, es un método.",
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
        { input: "getNivelSigilo()", expected: 0, description: "El sigilo empieza en 0" },
        { input: "ocultarse(70)", expected: null, description: "ocultarse() no devuelve nada (void)" },
        { input: "getNivelSigilo()", expected: 70, description: "Tras ocultarse(70) el sigilo es 70" },
        { input: "ocultarse(50)", expected: null, description: "Sumar más sigilo…" },
        { input: "getNivelSigilo()", expected: 100, description: "…pero nunca supera 100 (70+50 → 100)" },
        { input: "esVisiblePara(new Nazgul(50))", expected: false, description: "Con sigilo 100 y percepción 50, NO te ve" },
        { input: "esVisiblePara(new Nazgul(120))", expected: true, description: "Un Nazgûl muy perceptivo (120) sí te ve" },
      ],
    },
  },
};


/** Capítulo 2 · Ciclo de vida: constructores, métodos y destructores. */
export const SYL_PHP_COMMUNITY_2: Syllabus = {
  c2_raiz: {
    kind: "battle",
    questions: [
      {
        question: "¿Cuándo se ejecuta `__construct()`?",
        options: [
          "Al hacer `new`, antes de que nadie pueda usar el objeto",
          "La primera vez que se llama a un método",
          "Cuando se declara la clase",
          "Hay que llamarlo a mano tras crear el objeto",
        ],
        correct: 0,
        explanation:
          "PHP lo llama solo, y sólo una vez, justo al construir. Por eso es el sitio donde exigir lo imprescindible.",
      },
      {
        question:
          "¿Qué hace la promoción de propiedades en el constructor?\n`public function __construct(private string $nombre) {}`",
        options: [
          "Declara la propiedad, la asigna y la deja privada, todo de una vez",
          "Sólo declara un parámetro; hay que asignarlo después",
          "Hace la propiedad pública",
          "Es sintaxis inválida",
        ],
        correct: 0,
        explanation:
          "Desde PHP 8, poner la visibilidad delante del parámetro declara la propiedad y hace el `$this->nombre = $nombre;` por ti.",
      },
      {
        question: "¿Qué debe devolver un constructor?",
        options: ["Nada: no puede tener tipo de retorno", "El objeto creado", "true si todo fue bien", "$this"],
        correct: 0,
        explanation:
          "`__construct` no devuelve nada y declararle un tipo de retorno es error fatal. El objeto lo entrega `new`.",
      },
    ],
  },
  c2_niebla: {
    kind: "battle",
    questions: [
      {
        question: "¿Cuándo se ejecuta `__destruct()`?",
        options: [
          "Cuando ya no queda ninguna referencia al objeto, o al terminar el script",
          "Cuando escribes `delete $objeto`",
          "Inmediatamente después del constructor",
          "Nunca: PHP no tiene destructores",
        ],
        correct: 0,
        explanation:
          "PHP cuenta referencias: cuando la última desaparece llama al destructor. Sirve para soltar recursos.",
      },
      {
        question: "¿Qué hace `unset($hobbit);` si `$hobbit` es la única referencia?",
        options: [
          "Destruye el objeto y llama a su __destruct()",
          "Pone la variable a null pero el objeto sigue vivo",
          "Vacía las propiedades del objeto",
          "Da error si el objeto tiene destructor",
        ],
        correct: 0,
        explanation:
          "`unset()` quita ESA referencia. Si era la última, el objeto se destruye y su destructor se ejecuta ahí mismo.",
      },
      {
        question: "Un método declara `public function cantar(): void`. ¿Qué significa `void`?",
        options: [
          "Que no devuelve valor; un `return $algo;` dentro sería error",
          "Que devuelve null",
          "Que puede devolver cualquier cosa",
          "Que no recibe parámetros",
        ],
        correct: 0,
        explanation:
          "`void` promete que el método no entrega nada; se permite `return;` a secas, pero no `return $x;`.",
      },
    ],
  },
  c2_sauce: {
    kind: "battle",
    questions: [
      {
        question: "¿Puede un método llamar a OTRO método de la misma clase? ¿Cómo?",
        options: [
          "Sí, con $this->otroMetodo()",
          "No: cada método es independiente",
          "Sí, pero sólo si el otro es público",
          "Sí, con self::otroMetodo() siempre",
        ],
        correct: 0,
        explanation:
          "Dentro de un objeto, $this-> te da acceso a todos sus métodos, incluidos los privados. self:: se reserva para lo estático.",
      },
      {
        question: "Un método sin `return` explícito, ¿qué devuelve?",
        options: ["null", "false", "0", "Una cadena vacía"],
        correct: 0,
        explanation:
          "Si un método termina sin return, PHP devuelve null. Por eso conviene declarar : void cuando no debe devolver nada.",
      },
      {
        question: "¿Qué diferencia hay entre un parámetro y una propiedad?",
        options: [
          "El parámetro vive sólo durante la llamada; la propiedad, mientras viva el objeto",
          "Ninguna: son dos nombres para lo mismo",
          "La propiedad no puede cambiar de valor",
          "El parámetro pertenece a la clase",
        ],
        correct: 0,
        explanation:
          "Un parámetro es una variable local que existe mientras se ejecuta el método. Una propiedad es memoria del objeto: persiste entre llamadas.",
      },
    ],
  },
  c2_jefe_tumulario: {
    kind: "battle",
    questions: [
      {
        question:
          "¿Qué imprime?\n```\nclass A { public function __construct() { echo '1'; } public function __destruct() { echo '3'; } }\n$a = new A(); echo '2'; unset($a);\n```",
        options: ["123", "132", "213", "321"],
        correct: 0,
        explanation:
          "El constructor sale al hacer `new` (1), luego el echo (2), y el destructor al soltar la referencia con unset (3).",
      },
      {
        question: "¿Cuál es la diferencia entre un método y una función suelta?",
        options: [
          "El método pertenece a una clase y tiene acceso a `$this`",
          "El método no puede recibir parámetros",
          "La función no puede devolver valores",
          "Ninguna: son sinónimos",
        ],
        correct: 0,
        explanation:
          "Un método vive dentro de una clase y puede leer y modificar el estado del objeto a través de `$this`.",
      },
      {
        question: "Quieres que sea IMPOSIBLE crear un Hobbit sin nombre. ¿Dónde lo garantizas?",
        options: [
          "Exigiendo el nombre como parámetro obligatorio del constructor",
          "Comprobándolo en cada método que use el nombre",
          "Poniendo la propiedad como public para que se la asignen",
          "Documentándolo en un comentario",
        ],
        correct: 0,
        explanation:
          "Si el constructor lo exige, un Hobbit sin nombre no llega a existir: el error salta en el punto exacto del fallo.",
      },
      {
        question: "¿Qué pasa si una clase hija define `__construct()` y NO llama a `parent::__construct()`?",
        options: [
          "El constructor del padre no se ejecuta y su inicialización se pierde",
          "PHP llama al del padre automáticamente antes",
          "Error fatal al instanciar",
          "Se ejecutan los dos, en orden padre→hijo",
        ],
        correct: 0,
        explanation:
          "PHP NO encadena constructores solo: el de la hija sustituye al del padre. Tienes que llamar tú a `parent::__construct()`.",
      },
    ],
  },
  pergamino_ciclo_vida: {
    kind: "scroll",
    title: "El Pergamino del Camino",
    lore_intro:
      "Clavado en un poste junto a la Cerca, medio comido por la humedad, alguien dejó un aviso para los que entran al Bosque: «Todo lo que nace aquí, aquí termina. Y al terminar, deshace lo que ató.»",
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
          body: "Una variable LOCAL muere al terminar el método → su destructor se dispara ahí mismo.\nSi guardas el objeto en una PROPIEDAD, sigue vivo mientras viva el dueño → el destructor NO se ejecuta.",
          code: `public function cantarConjuro(Personaje $p): void {
    $efecto = new EfectoHechizo($p);   // local: muere aquí y libera
    // $this->efecto = new EfectoHechizo($p);  // sobrevive: no libera
}`,
        },
      ],
      keyTakeaway:
        "El constructor deja el objeto válido; el destructor deshace lo que ató. Y quién guarda la referencia decide CUÁNDO muere.",
    },
  },
  viejo_hombre_sauce: {
    kind: "challenge",
    title: "El Viejo Hombre Sauce",
    lore_intro:
      "Un sauce inmenso adormece a los hobbits y atrapa a Merry entre sus raíces. Para enfrentarlo primero hay que darle forma: todo objeto nace con un constructor.",
    challenge: {
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
        { input: "getFuerza()", expected: 80, description: "El constructor guarda la fuerza recibida" },
        { input: "atrapar('Merry')", expected: "Merry queda atrapado entre las raíces", description: "atrapar() usa el nombre recibido" },
      ],
    },
  },
  tumulo_espectro: {
    kind: "challenge",
    title: "El Túmulo del Espectro",
    lore_intro:
      "Entre las piedras erguidas, un Tumulario susurra en la niebla. Su frío drena la vida de quien se acerque… pero nunca por debajo de cero.",
    challenge: {
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
        { input: "drenar(100)", expected: 70, description: "Drena 30 puntos de vida" },
        { input: "drenar(20)", expected: 0, description: "La vida nunca baja de 0" },
      ],
    },
  },
  canto_bombadil: {
    kind: "challenge",
    title: "El Canto de Tom Bombadil",
    lore_intro:
      "«¡Eh, vamos alegre dol!» Tom canta y el hechizo se deshace. En PHP, lo que se deshace al terminar su vida es un objeto: su DESTRUCTOR es el que libera a los prisioneros.",
    challenge: {
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
        "Clave: en cantarConjuro() guarda el efecto en una variable LOCAL. Si lo guardas como propiedad, no se destruye al salir del método.",
      ],
      test_cases: [
        { input: "Prueba::nueva()->estaParalizado()", raw: true, expected: true, description: "El personaje empieza paralizado por el hechizo" },
        { input: "$sut->cantarConjuro(Prueba::$victima)", raw: true, expected: null, description: "Tom canta (el método no devuelve nada)" },
        { input: "Prueba::$victima->estaParalizado()", raw: true, expected: false, description: "Al acabar el método, el destructor liberó al personaje" },
      ],
    },
  },
};
