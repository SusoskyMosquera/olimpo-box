/** Events Olimpo Box has hosted or competed in. */

export interface BoxEvent {
  readonly slug: string;
  readonly title: string;
  /** Uniform role tag, e.g. "Sede oficial" or "Competimos". */
  readonly tag: string;
  readonly description: string;
  readonly image: string;
}

export const events: readonly BoxEvent[] = [
  {
    slug: "batalla-de-dioses",
    title: "Batalla de Dioses",
    tag: "Sede oficial",
    description:
      "Fuimos sede del Torneo Nacional de calistenia y street workout más exigente del país.",
    image: "/images/events/batalla-de-dioses.jpg",
  },
  {
    slug: "hyrox",
    title: "HYROX",
    tag: "Competimos",
    description:
      "Competimos en HYROX, la prueba de fitness funcional más grande del mundo.",
    image: "/images/events/hyrox.jpg",
  },
  {
    slug: "unbroken-games",
    title: "Unbroken Games",
    tag: "Competimos",
    description:
      "Llevamos la bandera de Olimpo Box a la arena del CrossFit competitivo.",
    image: "/images/events/unbroken-games.jpg",
  },
  {
    slug: "reto-isimali",
    title: "Reto Isimali",
    tag: "Competimos",
    description:
      "Presentes en el Reto Isimali de Villavicencio, demostrando el nivel de nuestra comunidad.",
    image: "/images/events/isimali.jpg",
  },
];
