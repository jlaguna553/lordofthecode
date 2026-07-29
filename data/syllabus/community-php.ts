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


/** Capítulo 3 · Herencia y sobrescritura (parent::). */
export const SYL_PHP_COMMUNITY_3: Syllabus = {
  c3_ferny: {
    kind: "battle",
    questions: [
      {
        question: "¿Qué hereda una clase hija de su padre?",
        options: [
          "Los miembros public y protected; los private no",
          "Absolutamente todo, incluidos los private",
          "Sólo los métodos, nunca las propiedades",
          "Sólo lo que declares con `use`",
        ],
        correct: 0,
        explanation:
          "`private` es privado de verdad: la hija no lo ve, aunque ocupe espacio en el objeto. Lo que quieras compartir con las hijas va en `protected`.",
      },
      {
        question: "¿Cuántas clases puede extender una clase en PHP?",
        options: ["Una sola", "Todas las que quieras, separadas por comas", "Hasta tres", "Ninguna: PHP no tiene herencia"],
        correct: 0,
        explanation:
          "PHP tiene herencia SIMPLE: un solo `extends`. Para reunir comportamiento de varios sitios están los `interface` y los `trait`.",
      },
      {
        question: "Al sobrescribir un método del padre, ¿qué NO puedes hacer?",
        options: [
          "Reducir su visibilidad (pasar de public a private)",
          "Cambiar el cuerpo por completo",
          "Ampliar la visibilidad (de protected a public)",
          "Llamar a la versión del padre desde dentro",
        ],
        correct: 0,
        explanation:
          "La hija puede abrir el acceso, nunca cerrarlo: si el padre prometía un método público, quien use la hija como el padre debe poder llamarlo. Es Liskov aplicado por el lenguaje.",
      },
    ],
  },
  c3_espia_nazgul: {
    kind: "battle",
    questions: [
      {
        question: "¿Qué hace exactamente `parent::__construct($x)`?",
        options: [
          "Ejecuta el constructor del padre desde el de la hija",
          "Crea un objeto nuevo de la clase padre",
          "Convierte el objeto en una instancia del padre",
          "Copia las propiedades del padre",
        ],
        correct: 0,
        explanation:
          "`parent::` no crea nada: ejecuta el método del padre sobre el objeto ACTUAL. Permite ampliar el comportamiento heredado en vez de reemplazarlo.",
      },
      {
        question:
          "Una hija sobrescribe `atacar()` y quiere hacer lo mismo que el padre MÁS algo extra. ¿Cuál es la forma correcta?",
        options: [
          "Llamar a parent::atacar() dentro y añadir lo suyo",
          "Copiar y pegar el código del padre y añadirlo",
          "Declarar el método como abstract",
          "No se puede: hay que reescribirlo entero",
        ],
        correct: 0,
        explanation:
          "Copiar y pegar se rompe el día que alguien toque al padre: dos versiones divergiendo en silencio. `parent::atacar()` mantiene una sola fuente de verdad.",
      },
      {
        question:
          "`$x instanceof Personaje` con `$x = new Hobbit()` y `class Hobbit extends Personaje`. ¿Qué devuelve?",
        options: ["true: un Hobbit ES un Personaje", "false: sólo compara la clase exacta", "Error de tipos", "true sólo si Personaje es abstracta"],
        correct: 0,
        explanation:
          "`instanceof` recorre toda la cadena de herencia y las interfaces implementadas. Es lo que hace posible el polimorfismo.",
      },
    ],
  },
  c3_montaraz_falso: {
    kind: "battle",
    questions: [
      {
        question: "`class B extends A {}`. Si `A` tiene un método protegido `paso()`, ¿puede `B` llamarlo?",
        options: ["Sí: protected es visible para las clases hijas", "No: protected es como private", "Sólo si B lo declara también", "Sólo desde el constructor"],
        correct: 0,
        explanation:
          "`protected` está pensado para esto: compartir con las hijas lo que sigue oculto para el exterior. Punto medio entre `private` y `public`.",
      },
      {
        question: "Al sobrescribir un método, ¿puedes cambiar el tipo de retorno por uno más específico?",
        options: ["Sí: covarianza. Puedes devolver un subtipo del tipo original", "No: debe ser idéntico", "Sí, cualquier tipo distinto", "Sólo si el método es estático"],
        correct: 0,
        explanation:
          "PHP permite covarianza en el retorno: si el padre devuelve `Animal`, la hija puede devolver `Perro`. La regla de fondo es la sustituibilidad.",
      },
      {
        question: "¿Qué es una clase base o superclase?",
        options: ["La clase de la que otra hereda (el padre)", "La primera clase que se declara en el fichero", "Una clase que no se puede instanciar", "La clase con más métodos"],
        correct: 0,
        explanation:
          "Superclase, clase base y clase padre son lo mismo: aquella de la que otra extiende. La que hereda es la subclase, derivada o hija.",
      },
    ],
  },
  c3_jefe_reybrujo: {
    kind: "battle",
    questions: [
      {
        question:
          "```\nclass A { public function saludo() { return 'A'; } }\nclass B extends A { public function saludo() { return parent::saludo() . 'B'; } }\necho (new B())->saludo();\n```",
        options: ["AB", "BA", "B", "A"],
        correct: 0,
        explanation:
          "`parent::saludo()` devuelve 'A' y la hija le concatena su 'B'. Patrón «extender, no reemplazar».",
      },
      {
        question: "¿Qué significa marcar una clase como `final`?",
        options: ["Que nadie puede extenderla", "Que no se puede instanciar", "Que sus métodos no se pueden llamar dos veces", "Que todas sus propiedades son readonly"],
        correct: 0,
        explanation:
          "`final class` cierra la herencia; `final function` cierra la sobrescritura de ese método. Si una clase no está pensada para extenderse, decirlo lo evita.",
      },
      {
        question:
          "El padre declara `public function golpe(int $fuerza): int`. ¿Puede la hija declarar `public function golpe(int $fuerza, string $arma): int`?",
        options: ["No: cambiar la firma obligatoria rompe el contrato del padre", "Sí, siempre", "Sí, pero sólo si el padre es abstracto", "Sí, si el parámetro extra va el primero"],
        correct: 0,
        explanation:
          "Quien tenga un `A` y llame a `golpe(5)` debe funcionar aunque por dentro sea `B`. Un parámetro OBLIGATORIO extra lo rompe. Con valor por defecto sí sería compatible.",
      },
      {
        question: "¿Cuándo es preferible la COMPOSICIÓN a la herencia?",
        options: ["Casi siempre: hereda sólo cuando hay un «es un» real y estable", "Nunca: la herencia siempre es mejor", "Sólo cuando no puedes modificar la clase padre", "Sólo en lenguajes sin herencia múltiple"],
        correct: 0,
        explanation:
          "La herencia ata a la hija a los detalles del padre para siempre. La composición («tiene un») intercambia piezas sin tocar nada. Si dudas entre «es un» o «tiene un», es «tiene un».",
      },
    ],
  },
  pergamino_herencia: {
    kind: "scroll",
    title: "El Pergamino de los Montaraces",
    lore_intro:
      "En un rincón del Póney Pisador, bajo una jarra, un pergamino con el emblema de la Estrella: «Un montaraz es un viajero. No repitas lo que ya sabe tu estirpe: hereda.»",
    scroll: {
      topic: "Herencia y sobrescritura",
      sections: [
        {
          heading: "extends: heredar es «ES UN»",
          body: "Una subclase recibe TODAS las propiedades y métodos del padre sin reescribirlos, y añade lo suyo.\n\nUsa herencia sólo cuando «una X ES UNA Y» es cierta de verdad. Si sólo quieres reutilizar código suelto, busca composición o un trait.",
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
          body: "`private` esconde el dato incluso de las hijas. Si quieres que la subclase pueda usarlo, decláralo `protected`: visible para la clase y su descendencia, cerrado para el resto.",
          code: `class Viajero {
    public function __construct(protected string $nombre) {}
}

class Montaraz extends Viajero {
    public function rastrear(string $rastro): string {
        return "{$this->nombre} sigue el rastro";  // protected sí se ve
    }
}`,
        },
        {
          heading: "Sobrescribir sin tirar lo que había: parent::",
          body: "Redefinir un método en la hija SUSTITUYE al del padre. Si sólo quieres AMPLIARLO, llama al original con `parent::metodo()` y añade lo tuyo.",
          code: `class HojaDeTumulo extends Arma {
    public function atacar(): int {
        return parent::atacar() * 2;   // reutiliza y amplía
    }
}`,
        },
      ],
      keyTakeaway:
        "Hereda cuando hay parentesco real. Y al sobrescribir, pregúntate si debes reemplazar el método del padre o ampliarlo con parent::.",
    },
  },
  poney_pisador: {
    kind: "challenge",
    title: "Trancos, el Montaraz",
    lore_intro:
      "Un hombre curtido observa desde el rincón más oscuro de la posada. Es un Montaraz: un viajero como cualquier otro… pero con habilidades que los demás no tienen. En POO, eso es HEREDAR.",
    challenge: {
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
        { input: "viajar('Rivendel')", expected: "Trancos viaja hacia Rivendel", description: "viajar() se HEREDA de Viajero sin reescribirlo" },
        { input: "rastrear('los Nazgûl')", expected: "Trancos sigue el rastro de los Nazgûl", description: "rastrear() es el método propio del Montaraz" },
      ],
    },
  },
  hojas_de_tumulo: {
    kind: "challenge",
    title: "Las Hojas de los Túmulos",
    lore_intro:
      "Tom Bombadil entregó a los hobbits dagas forjadas contra el Rey Brujo. Son armas normales… mejoradas. Sobrescribir un método no significa tirar el del padre: puedes reutilizarlo con parent::.",
    challenge: {
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
        { input: "atacar()", expected: 30, description: "La hoja duplica el daño base (15 → 30)" },
        { input: "(new HojaDeTumulo(7))->atacar()", raw: true, expected: 14, description: "Funciona con cualquier daño (7 → 14)" },
        { input: "Arma::$llamadasAlPadre > 0", raw: true, expected: true, description: "atacar() reutiliza el método del padre con parent::" },
      ],
    },
  },
  cima_de_los_vientos: {
    kind: "challenge",
    title: "La Cima de los Vientos",
    lore_intro:
      "Cinco Jinetes Negros ascienden entre las ruinas de Amon Sûl. El acero común los atraviesa sin daño: son espectros. Sólo una hoja encantada puede herir lo que es invisible.",
    challenge: {
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
        { input: "golpear(new Espectro())", expected: 20, description: "La hoja encantada SÍ hiere al espectro invisible" },
        { input: "(new Arma(20))->golpear(new Espectro())", raw: true, expected: 0, description: "Un arma común sigue sin poder herirlo (padre intacto)" },
      ],
    },
  },
};

/** Capítulo 4 · static, self::, constantes de clase y enums. */
export const SYL_PHP_COMMUNITY_4: Syllabus = {
  c4_jinete_rezagado: {
    kind: "battle",
    questions: [
      {
        question: "¿A quién pertenece una propiedad `static`?",
        options: [
          "A la clase: la comparten todas sus instancias",
          "A cada objeto, como cualquier otra propiedad",
          "Al primer objeto que se cree",
          "Al fichero donde está la clase",
        ],
        correct: 0,
        explanation:
          "Sólo hay UNA copia, viva mientras dure el script, y todos los objetos ven la misma. Por eso sirve para contar instancias o llevar un registro común — y por eso también es peligrosa: es estado global disfrazado.",
      },
      {
        question:
          "¿Cómo se lee una propiedad estática desde dentro de la propia clase?",
        options: ["self::$contador", "$this->contador", "self->contador", "static.contador"],
        correct: 0,
        explanation:
          "Se accede con `::` y CONSERVANDO el `$`: `self::$contador`. Es justo al revés que en las propiedades normales, donde el `$` desaparece (`$this->contador`). Confundirlo es el error de sintaxis más habitual con estáticos.",
      },
      {
        question: "¿Y una constante de clase?",
        options: ["self::NOMBRE, sin signo dólar", "self::$NOMBRE", "$this->NOMBRE", "const::NOMBRE"],
        correct: 0,
        explanation:
          "Las constantes no llevan `$` nunca, ni al declararlas (`const NUEVE = 9;`) ni al leerlas (`self::NUEVE`). Desde fuera se leen con el nombre de la clase: `Nazgul::NUEVE`.",
      },
    ],
  },
  c4_lobo: {
    kind: "battle",
    questions: [
      {
        question: "¿Cuál es la diferencia entre `self::` y `static::`?",
        options: [
          "self:: apunta a la clase donde está escrito; static:: a la clase real del objeto",
          "Son sinónimos",
          "self:: sólo funciona con constantes",
          "static:: sólo funciona en métodos estáticos",
        ],
        correct: 0,
        explanation:
          "`static::` es «resolución estática tardía»: mira la clase con la que REALMENTE se llamó, no dónde está el código. Si una hija sobrescribe un método y el padre usa `self::`, se ejecutará el del padre; con `static::`, el de la hija. Es lo que hace funcionar patrones como los factory heredables.",
      },
      {
        question: "Dentro de un método `static`, ¿puedes usar `$this`?",
        options: [
          "No: un método estático se llama sin objeto, así que no hay $this",
          "Sí, apunta al último objeto creado",
          "Sí, pero sólo para leer",
          "Sí, si la clase tiene al menos una instancia",
        ],
        correct: 0,
        explanation:
          "`Clase::metodo()` se llama sin ningún objeto de por medio, así que `$this` no existe y usarlo es error fatal. Si un método necesita el estado del objeto, no debería ser estático.",
      },
      {
        question: "¿Por qué se dice que abusar de los estáticos complica las pruebas?",
        options: [
          "Porque son estado global: no se pueden sustituir por un doble ni se reinician entre pruebas",
          "Porque son más lentos",
          "Porque no se pueden llamar desde otra clase",
          "Porque PHP los ejecuta en otro hilo",
        ],
        correct: 0,
        explanation:
          "Una dependencia que recibes por constructor la puedes cambiar por una falsa en un test. Una llamada estática está soldada al código: no hay dónde meter la mano. Además el valor sobrevive de un test al siguiente y aparecen fallos fantasma según el orden.",
      },
    ],
  },
  c4_jefe_nueve: {
    kind: "battle",
    questions: [
      {
        question:
          "```\nclass N { public static int $vistos = 0;\n  public function __construct() { self::$vistos++; } }\nnew N(); new N(); new N();\necho N::$vistos;\n```",
        options: ["3", "1", "0", "Error: no se puede leer desde fuera"],
        correct: 0,
        explanation:
          "La propiedad estática es una sola para toda la clase, así que los tres constructores incrementan el MISMO contador. Es el uso clásico y legítimo de un estático: contar instancias. Y siendo `public` se lee desde fuera con `N::$vistos`.",
      },
      {
        question: "¿Se puede cambiar el valor de una `const` en tiempo de ejecución?",
        options: [
          "No: se fija al declararla y es inmutable",
          "Sí, con self::CONST = nuevo",
          "Sí, sólo dentro de la clase",
          "Sí, si la clase no es final",
        ],
        correct: 0,
        explanation:
          "Una constante de clase es inmutable por definición. Si el valor tiene que poder cambiar, no es una constante: usa una propiedad estática, o mejor una normal inyectada por constructor.",
      },
      {
        question: "¿Cuál es un buen uso de un método estático?",
        options: [
          "Un constructor con nombre: Fecha::desdeTexto('2026-07-22')",
          "Guardar la conexión a la base de datos para todo el programa",
          "Cualquier método que no use $this",
          "Reemplazar a las funciones sueltas",
        ],
        correct: 0,
        explanation:
          "Los constructores con nombre son ideales: crean y devuelven una instancia, expresan la intención mejor que un `new` con cinco argumentos, y no guardan estado global. Lo contrario es el singleton de conexión: estado compartido escondido, imposible de sustituir en un test.",
      },
      {
        question:
          "Una clase padre tiene `public static function crear(): static { return new static(); }`. ¿Qué devuelve `Hija::crear()`?",
        options: ["Una instancia de Hija", "Una instancia del padre", "Error: new static no existe", "null"],
        correct: 0,
        explanation:
          "`new static()` usa resolución estática tardía: construye la clase con la que se hizo la llamada. Con `new self()` habrías obtenido siempre el padre. Es exactamente lo que permite escribir un factory una vez en el padre y que funcione en todas las hijas.",
      },
    ],
  },
  c4_trasgo_montaraz: {
    kind: "battle",
    questions: [
      {
        question:
          "Declaras `const VELOCIDAD = 5;` en una clase. ¿Cómo la lees desde FUERA?",
        options: ["Caballo::VELOCIDAD", "$caballo->VELOCIDAD", "Caballo::$VELOCIDAD", "$Caballo::VELOCIDAD"],
        correct: 0,
        explanation:
          "Las constantes de clase se leen con `NombreClase::CONSTANTE`, sin `$` en ningún sitio. Desde dentro usarías `self::VELOCIDAD` o `static::VELOCIDAD`. Ponerle `$` la confundiría con una propiedad estática.",
      },
      {
        question:
          "¿Cuál es una ventaja de usar una constante frente a escribir el número 5 directamente en el código?",
        options: [
          "Un nombre explica qué significa y se cambia en un solo sitio",
          "Es más rápida en tiempo de ejecución",
          "Ocupa menos memoria",
          "Permite cambiarla mientras corre el programa",
        ],
        correct: 0,
        explanation:
          "El valor 5 suelto por el código es un «número mágico»: nadie sabe qué representa ni cuántas veces aparece. `VELOCIDAD_MAXIMA` se explica solo y se ajusta en un único punto. La constante no es más rápida — es más legible y mantenible.",
      },
      {
        question:
          "Un método estático `Contador::total()`. ¿Necesitas crear un objeto para llamarlo?",
        options: [
          "No: los estáticos se llaman sobre la clase, sin instancia",
          "Sí, siempre",
          "Sí, al menos uno debe existir",
          "Depende de si la clase es final",
        ],
        correct: 0,
        explanation:
          "Un método estático pertenece a la clase, no a ningún objeto: `Contador::total()` funciona sin haber hecho `new` nunca. Justo por eso dentro no tiene `$this`.",
      },
    ],
  },
  pergamino_estatico: {
    kind: "scroll",
    title: "El Poder Compartido",
    lore_intro:
      "Antes de partir, Elrond te entrega un pergamino: «No siempre hace falta crear una cosa para usar su poder. Algunos poderes pertenecen a la estirpe entera, no a un solo individuo.»",
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
  montura_asfaloth: {
    kind: "challenge",
    title: "Asfaloth, el Corcel Élfico",
    lore_intro:
      "Glorfindel pone a Frodo sobre su caballo blanco. «¡Noro lim, Asfaloth!» Ningún corcel, por élfico que sea, supera su límite: eso es una constante.",
    challenge: {
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
        { input: "galopar(90)", expected: 90, description: "Por debajo del límite, galopa a lo pedido" },
        { input: "galopar(200)", expected: 120, description: "Nunca supera VELOCIDAD_MAXIMA" },
        { input: "Asfaloth::VELOCIDAD_MAXIMA", raw: true, expected: 120, description: "La constante es pública y se lee sin instanciar" },
      ],
    },
  },
  recuento_de_los_nueve: {
    kind: "challenge",
    title: "El Recuento de los Nueve",
    lore_intro:
      "Los Jinetes Negros son nueve, y el recuento no pertenece a ninguno en particular: pertenece a la Sombra entera. Un contador que viven todas las instancias a la vez es estado estático.",
    challenge: {
      topic: "Propiedades estáticas (self::$prop)",
      instructions:
        "Crea la clase Caceria con una propiedad estática privada $jinetes que empiece en 0, y dos métodos ESTÁTICOS: sumar(int $n): void, que la incremente, y total(): int, que la devuelva. Todo se llama con Caceria::… sin instanciar.",
      starter_code:
        "<?php\n\nclass Caceria {\n    // 1) private static int $jinetes = 0;\n\n    // 2) public static function sumar(int $n): void\n\n    // 3) public static function total(): int\n}\n",
      hints: [
        "Declara el estado compartido: private static int $jinetes = 0;",
        "Dentro de un método estático no hay $this: usa self::$jinetes += $n;",
        "Los métodos también deben ser static para poder llamarlos con Caceria::sumar(5).",
      ],
      test_cases: [
        { input: "Caceria::total()", raw: true, expected: 0, description: "La cacería empieza sin jinetes contados" },
        { input: "Caceria::sumar(5)", raw: true, expected: null, description: "Cinco jinetes en la Cima de los Vientos…" },
        { input: "Caceria::sumar(4)", raw: true, expected: null, description: "…y los cuatro restantes se unen" },
        { input: "Caceria::total()", raw: true, expected: 9, description: "El estado es compartido: son los Nueve" },
      ],
    },
  },
  vado_de_bruinen: {
    kind: "challenge",
    title: "El Vado de Bruinen",
    lore_intro:
      "«¡Volved a la tierra de Mordor y no me sigáis!» Las aguas se alzan en caballos de espuma. No hace falta crear un río nuevo para desatar su furia: el poder es de la clase, no del objeto.",
    challenge: {
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
        { input: "RioBruinen::FUERZA_CRECIDA", raw: true, expected: 50, description: "La fuerza de la crecida es una constante de clase" },
        { input: "RioBruinen::desbordar([10, 20, 80])", raw: true, expected: 2, description: "Dos jinetes débiles son arrastrados; el fuerte resiste" },
        { input: "RioBruinen::desbordar([60, 70])", raw: true, expected: 0, description: "Ninguno cede ante la crecida" },
        { input: "RioBruinen::desbordar([5, 5, 5, 5, 5, 5, 5, 5, 5])", raw: true, expected: 9, description: "Los Nueve caballos son barridos por las aguas" },
      ],
    },
  },
  c4_runas_del_vado: {
    kind: "challenge",
    title: "Las runas del Vado",
    lore_intro:
      "Grabados en la roca sobre Bruinen hay tres signos: aguas calmas, aguas crecidas, aguas desbordadas. Sólo tres estados posibles, y ni uno más — como un enum.",
    challenge: {
      topic: "Enums respaldados (const con superpoderes)",
      instructions:
        "Un enum es un conjunto CERRADO de valores con nombre: como las constantes de clase, pero convertidas en un tipo propio.\n\n" +
        "Declara el enum `Vado` respaldado por `string` con tres casos y sus valores exactos:\n" +
        "• `Calmo` = `'calmo'`\n• `Crecido` = `'crecido'`\n• `Desbordado` = `'desbordado'`\n\n" +
        "Añade:\n" +
        "• `esVadeable(): bool` — sólo el Vado Calmo se puede cruzar.\n" +
        "• `public static function segunCaudal(int $caudal): self` — devuelve `Calmo` si el caudal es menor que 30, `Crecido` si es menor que 70, y `Desbordado` en los demás casos. Usa `match (true)`.",
      starter_code:
        "<?php\n\nenum Vado: string\n{\n    // 1) los tres casos con su valor\n\n    public function esVadeable(): bool\n    {\n        // 2)\n    }\n\n    public static function segunCaudal(int $caudal): self\n    {\n        // 3) match (true) => ...\n    }\n}\n",
      hints: [
        "Un enum respaldado declara el tipo tras el nombre y cada caso lleva valor: `case Calmo = 'calmo';`",
        "`esVadeable()` es una comparación de identidad: `return $this === Vado::Calmo;`",
        "`match (true)` evalúa condiciones: `$caudal < 30 => Vado::Calmo, $caudal < 70 => Vado::Crecido, default => Vado::Desbordado`.",
      ],
      test_cases: [
        { input: "Vado::from('crecido')->name", expected: "Crecido", description: "from() encuentra el caso por su valor", raw: true },
        { input: "Vado::Calmo->value", expected: "calmo", description: "El valor respaldado", raw: true },
        { input: "Vado::Calmo->esVadeable()", expected: true, description: "El Vado calmo se cruza", raw: true },
        { input: "Vado::Desbordado->esVadeable()", expected: false, description: "El desbordado, no", raw: true },
        { input: "Vado::segunCaudal(10)->name", expected: "Calmo", description: "Caudal bajo", raw: true },
        { input: "Vado::segunCaudal(50)->name", expected: "Crecido", description: "Caudal medio", raw: true },
        { input: "Vado::segunCaudal(200)->name", expected: "Desbordado", description: "El río contra los Nueve", raw: true },
        { input: "count(Vado::cases())", expected: 3, description: "El enum está cerrado en tres", raw: true },
      ],
    },
  },
};

/** Capítulo 5 · Encapsulamiento avanzado, readonly, invariantes y value objects. */
export const SYL_PHP_COMMUNITY_5: Syllabus = {
  c5_crebain: {
    kind: "battle",
    questions: [
      {
        question: "¿Qué garantiza una propiedad `readonly`?",
        options: [
          "Que se asigna una vez y ya no puede cambiar",
          "Que nadie de fuera puede leerla",
          "Que su valor es siempre null hasta el constructor",
          "Que es compartida por todas las instancias",
        ],
        correct: 0,
        explanation:
          "`readonly` (PHP 8.1) permite UNA asignación —normalmente en el constructor— y después cualquier intento de escribir lanza error. No afecta a la lectura: sirve para objetos inmutables, no para ocultar. Ocultar sigue siendo cosa de la visibilidad.",
      },
      {
        question: "¿Dónde se puede asignar por primera vez una propiedad readonly?",
        options: [
          "Desde dentro de la clase, típicamente en el constructor",
          "Desde cualquier parte, una sola vez",
          "Sólo en la declaración, con un valor literal",
          "En cualquier método público",
        ],
        correct: 0,
        explanation:
          "La primera asignación debe hacerse desde el ámbito de la propia clase (el constructor es lo habitual). Intentar `$obj->prop = x` desde fuera falla aunque nunca se hubiera asignado: readonly no es «write-once desde donde sea», es «write-once desde dentro».",
      },
      {
        question: "¿Puede una propiedad `readonly` tener también un tipo declarado?",
        options: [
          "Sí, y de hecho DEBE tenerlo",
          "No, son incompatibles",
          "Sólo si el tipo es un objeto",
          "Sólo si además es private",
        ],
        correct: 0,
        explanation:
          "readonly EXIGE un tipo: `public readonly int $edad;`. Una propiedad sin tipo no puede ser readonly. Combina bien con la promoción en el constructor: `public function __construct(public readonly int $edad) {}`.",
      },
    ],
  },
  c5_lobo_nieve: {
    kind: "battle",
    questions: [
      {
        question: "Un `setEdad($n)` que rechaza edades negativas protege una…",
        options: [
          "invariante: una condición que el objeto mantiene siempre cierta",
          "constante de clase",
          "propiedad estática",
          "interfaz",
        ],
        correct: 0,
        explanation:
          "Una invariante es una regla que el objeto se compromete a no romper nunca: «la edad nunca es negativa», «el saldo nunca baja de cero». Validar en el setter (o en el constructor) es cómo se hace cumplir. Con la propiedad pública, esa promesa no existe.",
      },
      {
        question: "¿Por qué un setter con validación es mejor que una propiedad pública?",
        options: [
          "Centraliza la comprobación: es imposible dejar el objeto en un estado inválido",
          "Es más rápido de ejecutar",
          "Ocupa menos memoria",
          "Permite herencia múltiple",
        ],
        correct: 0,
        explanation:
          "Si el ÚNICO camino para cambiar el valor pasa por tu setter, ahí validas una vez y queda garantizado para siempre. Con la propiedad pública, cada punto del programa que la toque tendría que recordar validar — y alguno se olvidará.",
      },
      {
        question: "Quieres cambiar un dato de un objeto `readonly`. ¿Cuál es el patrón idiomático?",
        options: [
          "Devolver una copia nueva con el cambio (with...), sin tocar el original",
          "Quitar el readonly temporalmente",
          "Usar reflexión para forzar la escritura",
          "Convertirlo en propiedad estática",
        ],
        correct: 0,
        explanation:
          "Los objetos inmutables no se modifican: se crea otro. Un método `conEdad(int $n): static { return new static($n, ...); }` devuelve una copia con el cambio y deja intacto el original. Es el mismo patrón de `DateTimeImmutable`.",
      },
    ],
  },
  c5_jefe_caradhras: {
    kind: "battle",
    questions: [
      {
        question:
          "```\nclass Temp {\n  public function __construct(public readonly int $grados) {}\n}\n$t = new Temp(-5);\n$t->grados = 0;\n```\n¿Qué ocurre en la última línea?",
        options: [
          "Error: no se puede modificar una propiedad readonly ya inicializada",
          "Se asigna 0 sin problema",
          "Se ignora en silencio",
          "Error: -5 no es válido",
        ],
        correct: 0,
        explanation:
          "La promoción ya inicializó `$grados` con -5 en el constructor. Cualquier escritura posterior —incluso al mismo valor— lanza «Cannot modify readonly property». Es justo la garantía que buscas: una vez creado, el objeto no cambia.",
      },
      {
        question:
          "Un constructor recibe un porcentaje y hace `if ($p < 0 || $p > 100) throw new InvalidArgumentException();`. ¿Qué consigue?",
        options: [
          "Que no exista ningún objeto con un porcentaje fuera de rango",
          "Que el porcentaje se ajuste solo al rango válido",
          "Que la propiedad sea readonly",
          "Que el método sea más rápido",
        ],
        correct: 0,
        explanation:
          "Validar en el constructor y lanzar si algo no cuadra hace IMPOSIBLE construir un objeto inválido: el error salta en el punto exacto del fallo, no tres capas más abajo. Es la base de los objetos de valor: si existe, es válido.",
      },
      {
        question: "¿Qué es un «objeto de valor» (value object)?",
        options: [
          "Un objeto pequeño e inmutable que representa un valor (Dinero, Fecha, Coordenada)",
          "Cualquier objeto con propiedades públicas",
          "Un objeto que sólo tiene métodos estáticos",
          "El objeto principal de la aplicación",
        ],
        correct: 0,
        explanation:
          "Un value object encapsula un concepto (un Dinero, un Email, una Temperatura) validándolo al crearlo y sin permitir cambios después. Dos son iguales si sus valores coinciden, no por identidad. `readonly` + validación en el constructor es exactamente la receta.",
      },
      {
        question: "¿Cuál es la diferencia entre `private` y `readonly`?",
        options: [
          "private controla QUIÉN accede; readonly controla CUÁNDO se puede escribir",
          "Son sinónimos",
          "readonly impide la lectura; private no",
          "private sólo aplica a métodos",
        ],
        correct: 0,
        explanation:
          "Son ejes distintos y combinables. `private` es visibilidad: desde dónde se ve. `readonly` es mutabilidad: cuántas veces se escribe. Una propiedad puede ser `private readonly` (oculta e inmutable) o `public readonly` (visible pero inmutable).",
      },
    ],
  },
  c5_trasgo_montanes: {
    kind: "battle",
    questions: [
      {
        question:
          "Declaras `public readonly array $items;` y en el constructor haces `$this->items = [];`. Luego `$this->items[] = 'x';` desde un método. ¿Funciona?",
        options: [
          "No: readonly impide modificar el array tras asignarlo, incluso añadir elementos",
          "Sí: readonly sólo protege la reasignación completa",
          "Sí, pero sólo desde el constructor",
          "Sí, siempre",
        ],
        correct: 0,
        explanation:
          "readonly protege la propiedad ENTERA: una vez asignado el array, no puedes reasignarlo ni mutarlo (ni `[]=`, ni `unset` de una clave). Para «cambiar» un array readonly creas uno nuevo y devuelves una copia del objeto. Es la inmutabilidad llevada al contenido, no sólo a la referencia.",
      },
      {
        question: "¿Qué pasa si un método intenta LEER una propiedad readonly?",
        options: [
          "Nada: leer siempre está permitido",
          "Error: readonly bloquea la lectura",
          "Devuelve null",
          "Sólo se puede leer una vez",
        ],
        correct: 0,
        explanation:
          "readonly no tiene nada que ver con la lectura, que es libre y tantas veces como quieras. Sólo limita la ESCRITURA a una vez, desde dentro de la clase. Quien confunde readonly con private busca la herramienta equivocada.",
      },
      {
        question: "¿Cuál es la ventaja de un objeto inmutable a la hora de razonar sobre el código?",
        options: [
          "Si lo pasas a otra función, sabes que no te lo van a cambiar por detrás",
          "Ocupa la mitad de memoria",
          "Se ejecuta en paralelo",
          "No necesita constructor",
        ],
        correct: 0,
        explanation:
          "Con un objeto mutable, cualquiera que reciba una referencia puede alterarlo y provocarte un bug a distancia. Uno inmutable es un dato de confianza: una vez creado, vale lo mismo para siempre y en todas partes. Menos cosas que vigilar.",
      },
    ],
  },
  pergamino_hielo: {
    kind: "scroll",
    title: "El Pergamino del Hielo",
    lore_intro:
      "Gandalf resguarda un pergamino bajo su capa antes de que la ventisca lo arranque. «Lo que no debe cambiar, protégelo. Lo que cambia, vigílalo en la puerta.»",
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
  carga_de_bill: {
    kind: "challenge",
    title: "La Carga de Bill el Poney",
    lore_intro:
      "Sam repasa los fardos que carga Bill. Una provisión es lo que es: su nombre y su peso no cambian a mitad del camino. Eso, en PHP, se llama readonly.",
    challenge: {
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
        { input: "nombre", expected: "lembas", description: "El nombre se lee sin problema" },
        { input: "peso", expected: 5, description: "El peso se lee sin problema" },
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
  resistencia_comunidad: {
    kind: "challenge",
    title: "La Resistencia de la Comunidad",
    lore_intro:
      "El viento arrecia. Boromir abre paso entre la nieve, pero las fuerzas menguan. Vigila el calor de la Comunidad: que nadie pueda alterarlo desde fuera y que nunca caiga por debajo de cero.",
    challenge: {
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
        { input: "getCalor()", expected: 100, description: "La Comunidad parte con el calor intacto" },
        { input: "estaCongelada()", expected: false, description: "Al principio nadie está congelado" },
        { input: "enfriar(50)", expected: null, description: "La ventisca muerde…" },
        { input: "getCalor()", expected: 50, description: "…y el calor baja a 50" },
        { input: "enfriar(40)", expected: null, description: "Sigue nevando…" },
        { input: "estaCongelada()", expected: true, description: "Con 10 de calor (≤ 20) la Comunidad se congela" },
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
  temperatura_montana: {
    kind: "challenge",
    title: "El Umbral de la Nieve",
    lore_intro:
      "«La montaña no negocia», murmura Aragorn mirando el termómetro de escarcha. Una medida no se altera: si el frío cambia, lo que tienes es OTRA medida.",
    challenge: {
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
        { input: "grados", expected: -10, description: "La temperatura de partida" },
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
};
