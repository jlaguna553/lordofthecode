import type { ChapterNarrative } from "@/lib/game/narrative";

/**
 * Narrativa compartida del Libro I (La Comunidad del Anillo). El esqueleto de la
 * historia — mapa, personajes, enemigos y lore — que cualquier lenguaje reviste
 * con su temario. Bilingüe ES/EN.
 */

/** Capítulo 1 · Sombras en la Comarca. */
export const NARR_COMMUNITY_1: ChapterNarrative = {
  chapter: 1,
  title: { es: "Sombras en la Comarca", en: "Shadows over the Shire" },
  lore: {
    es: "Frodo debe abandonar Bolsón Cerrado y cruzar la Comarca hacia Los Gamos, evadiendo a los Jinetes Negros que buscan el Anillo.",
    en: "Frodo must leave Bag End and cross the Shire toward Buckland, evading the Black Riders who seek the Ring.",
  },
  mapSize: { cols: 44, rows: 26 },
  spawn: { x: 2, y: 9 },
  xpParaRetos: 65,
  companions: ["sam"],
  scenery: {
    pathRows: [9],
    pond: { x: 16, y: 10, w: 5, h: 3 },
    npcs: [
      { spriteId: "merry", x: 6, y: 12, label: { es: "Merry", en: "Merry" } },
      { spriteId: "pippin", x: 8, y: 12, label: { es: "Pippin", en: "Pippin" } },
    ],
    dialogues: [
      {
        x: 5,
        y: 9,
        speaker: "sam",
        name: { es: "Sam", en: "Sam" },
        text: {
          es: "Si doy un paso más, será el punto más lejos de casa en que haya estado.",
          en: "If I take one more step, it'll be the farthest from home I've ever been.",
        },
      },
      {
        x: 13,
        y: 9,
        speaker: "sam",
        name: { es: "Sam", en: "Sam" },
        text: {
          es: "Señor Frodo… ese jinete no huele a nada bueno.",
          en: "Mr. Frodo… that rider doesn't smell like anything good.",
        },
      },
    ],
    decor: [
      { type: "house", x: 2, y: 7, label: { es: "Bolsón Cerrado", en: "Bag End" } },
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
      { type: "tree", x: 24, y: 3 },
      { type: "tree", x: 28, y: 2 },
      { type: "tree", x: 31, y: 5 },
      { type: "tree", x: 25, y: 13 },
      { type: "tree", x: 30, y: 16 },
      { type: "tree", x: 22, y: 17 },
      { type: "tree", x: 15, y: 17 },
      { type: "tree", x: 9, y: 16 },
      { type: "rock", x: 26, y: 7 },
      { type: "rock", x: 32, y: 11 },
      { type: "rock", x: 19, y: 15 },
      { type: "rock", x: 12, y: 18 },
      { type: "tree", x: 5, y: 21 },
      { type: "tree", x: 11, y: 23 },
      { type: "tree", x: 17, y: 22 },
      { type: "tree", x: 24, y: 21 },
      { type: "tree", x: 30, y: 23 },
      { type: "tree", x: 38, y: 20 },
      { type: "tree", x: 41, y: 14 },
      { type: "rock", x: 20, y: 23 },
      { type: "rock", x: 35, y: 17 },
      { type: "rock", x: 40, y: 22 },
      { type: "rock", x: 27, y: 19 },
    ],
  },
  nodes: [
    {
      node_id: "c1_espia",
      kind: "battle",
      title: {
        es: "El husmeador del Camino Verde",
        en: "The snoop of the Greenway",
      },
      lore_intro: {
        es: "Un hombre flaco pregunta por «un tal Bolsón» a todo el que pasa. No lleva armas, pero lleva preguntas.",
        en: "A gaunt man asks everyone passing by about \"a certain Baggins\". He carries no weapons, but plenty of questions.",
      },
      position: { x: 26, y: 5 },
      spriteId: "aldeano",
      enemy: {
        name: { es: "Husmeador de Bree", en: "Bree snoop" },
        spriteId: "aldeano",
        hp: 2,
        damage: 1,
        xp: 25,
        taunt: {
          es: "«¿Bolsón, dice? Conozco a alguien muy interesado en ese apellido…»",
          en: "\"Baggins, you say? I know someone very interested in that name…\"",
        },
      },
    },
    {
      node_id: "c1_jinete_rastreador",
      kind: "battle",
      title: { es: "El rastreador", en: "The tracker" },
      lore_intro: {
        es: "El caballo negro olfatea el suelo donde te detuviste. El jinete no tiene rostro, pero sabe que estás cerca.",
        en: "The black horse sniffs the ground where you stopped. The rider has no face, but knows you're near.",
      },
      position: { x: 30, y: 13 },
      spriteId: "nazgul",
      enemy: {
        name: { es: "Jinete Negro rastreador", en: "Black Rider tracker" },
        spriteId: "nazgul",
        hp: 3,
        damage: 1,
        xp: 25,
        taunt: {
          es: "«Ssssiento el Anillo. Está muy cerca…»",
          en: "\"I ssssense the Ring. It is very near…\"",
        },
      },
    },
    {
      node_id: "c1_perro_negro",
      kind: "battle",
      title: { es: "Perro entre los setos", en: "A hound in the hedges" },
      lore_intro: {
        es: "En los campos del sur de Los Gamos, un perro grande y flaco gruñe desde la maleza. No es de ninguna granja de por aquí.",
        en: "In the southern fields of Buckland, a big lean hound growls from the brush. It belongs to no farm around here.",
      },
      position: { x: 8, y: 22 },
      spriteId: "orco",
      enemy: {
        name: { es: "Can del Nazgûl", en: "Hound of the Nazgûl" },
        spriteId: "orco",
        hp: 3,
        damage: 1,
        xp: 25,
        taunt: {
          es: "El animal husmea el aire buscando el olor del Anillo.",
          en: "The beast sniffs the air, hunting for the scent of the Ring.",
        },
      },
    },
    {
      node_id: "c1_jefe_nazgul",
      kind: "battle",
      title: { es: "El Jinete del Vado", en: "The Rider at the Ford" },
      lore_intro: {
        es: "Cierra el paso al este. La hoja está desenvainada y el aire huele a frío. No hay rodeo posible: o pasas por encima, o vuelves a Bolsón Cerrado.",
        en: "It bars the way east. The blade is drawn and the air smells of cold. No way around: pass over it, or return to Bag End.",
      },
      position: { x: 32, y: 9 },
      spriteId: "nazgul",
      enemy: {
        name: { es: "El Jinete del Vado", en: "The Rider at the Ford" },
        spriteId: "nazgul",
        hp: 4,
        damage: 2,
        xp: 45,
        boss: true,
        taunt: {
          es: "«El Anillo… ¡el Anillo va a Mordor, y tú con él!»",
          en: "\"The Ring… the Ring goes to Mordor, and you with it!\"",
        },
        reward: {
          hero: "sam",
          name: { es: "Samsagaz Gamyi", en: "Samwise Gamgee" },
          blurb: {
            es: "El jardinero leal que juró no dejarte solo. Desde ahora puedes jugar con Sam.",
            en: "The loyal gardener who swore never to leave you. From now on you can play as Sam.",
          },
        },
      },
    },
    // Huecos de temario (pergamino y retos): la narrativa fija el sitio.
    { node_id: "pergamino_clases", kind: "scroll", position: { x: 6, y: 6 } },
    { node_id: "sendero_comarca", kind: "challenge", position: { x: 9, y: 9 } },
    {
      node_id: "halito_negro",
      kind: "challenge",
      position: { x: 15, y: 5 },
      spriteId: "nazgul",
    },
  ],
};
