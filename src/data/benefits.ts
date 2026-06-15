/** Value propositions shown in the Benefits grid. */

export type BenefitIcon = "community" | "structure" | "equipment" | "space";

export interface Benefit {
  readonly icon: BenefitIcon;
  readonly title: string;
  readonly description: string;
}

export const benefits: readonly Benefit[] = [
  {
    icon: "community",
    title: "Comunidad unida",
    description:
      "Más que un gimnasio, una familia que te empuja a no rendirte. Entrenás acompañado, creces acompañado.",
  },
  {
    icon: "structure",
    title: "Entrenamiento estructurado",
    description:
      "Programación profesional y progresiva. Cada sesión tiene un propósito; nada queda librado al azar.",
  },
  {
    icon: "equipment",
    title: "Equipamiento de alta calidad",
    description:
      "Barras, kettlebells, racks y superficies pensadas para entrenar fuerte y seguro.",
  },
  {
    icon: "space",
    title: "Espacio amplio",
    description:
      "Zonas diferenciadas para CrossFit, funcional y calistenia. Aire, altura y libertad para moverte.",
  },
];
