/** Training modalities offered at the box. */

export interface Service {
  readonly slug: string;
  readonly name: string;
  readonly description: string;
  /** Optional image path under /public. Falls back to a placeholder. */
  readonly image?: string;
}

export const services: readonly Service[] = [
  {
    slug: "crossfit",
    name: "CrossFit",
    description:
      "Entrenamiento de alta intensidad que combina fuerza, resistencia y movilidad. Cada WOD te reta a superar tu marca anterior.",
    image: "/images/services/crossfit.jpeg",
  },
  {
    slug: "functional",
    name: "Funcional",
    description:
      "Movimientos naturales del cuerpo aplicados a la vida real: empujar, halar, levantar y desplazarte con potencia y control.",
    image: "/images/services/functional.jpg",
  },
  {
    slug: "calisthenics",
    name: "Calistenia",
    description:
      "Domina tu propio peso corporal. Fuerza, equilibrio y skills de street workout — la disciplina que nos hizo sede de la Batalla de Dioses.",
    image: "/images/services/calisthenics.jpeg",
  },
  {
    slug: "open-box",
    name: "Open Box",
    description:
      "Espacio y equipamiento a tu disposición para entrenar a tu ritmo, con el respaldo de nuestros coaches cuando lo necesites.",
    image: "/images/services/open-box.png",
  },
];
