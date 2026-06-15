/**
 * Membership plans for 2026.
 * Amounts are raw numbers (COP) — formatting lives in src/utils/format.ts so
 * data stays decoupled from presentation.
 */

export interface Plan {
  readonly slug: string;
  readonly name: string;
  /** Raw amount in Colombian pesos (COP). */
  readonly amount: number;
  /** Human-readable unit, e.g. "por mes" or "12 clases / 30 días". */
  readonly unit: string;
  readonly perks: readonly string[];
  /** Highlighted plan (Tiquetera Olimpo). */
  readonly featured: boolean;
}

export const plans: readonly Plan[] = [
  {
    slug: "monthly",
    name: "Mensualidad",
    amount: 120000,
    unit: "por mes",
    perks: ["Acceso a todos los horarios", "Todas las modalidades"],
    featured: false,
  },
  {
    slug: "quarterly",
    name: "Trimestre",
    amount: 340000,
    unit: "por 3 meses",
    perks: ["Ahorras frente al plan mensual", "Acceso completo"],
    featured: false,
  },
  {
    slug: "biannual",
    name: "Semestre",
    amount: 660000,
    unit: "por 6 meses",
    perks: ["El mejor precio por mes", "Compromiso con tus metas"],
    featured: false,
  },
  {
    slug: "olimpo-pass",
    name: "Tiquetera Olimpo",
    amount: 90000,
    unit: "12 clases / 30 días",
    perks: [
      "12 clases para usar en 30 días",
      "Ideal si entrenas por temporadas",
      "Flexibilidad total",
    ],
    featured: true,
  },
];
