/** "How to start" funnel — the three steps to join the box. */

export interface Step {
  readonly number: string;
  readonly title: string;
  readonly description: string;
}

export const steps: readonly Step[] = [
  {
    number: "01",
    title: "Escríbenos",
    description:
      "Cuéntanos tus objetivos por WhatsApp y resolvemos todas tus dudas, sin compromiso.",
  },
  {
    number: "02",
    title: "Clase de cortesía",
    description:
      "Ven a vivir una sesión real y siente la energía del box antes de decidir.",
  },
  {
    number: "03",
    title: "Elige tu plan",
    description:
      "Súmate a la familia Olimpo y empieza a forjar tu mejor versión.",
  },
];
