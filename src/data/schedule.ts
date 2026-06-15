/** Weekly class schedule (2026). One-hour blocks. */

export interface TimeBlock {
  readonly start: string; // "05:00"
  readonly end: string; // "06:00"
}

export interface ScheduleGroup {
  readonly period: string; // "Mañanas"
  readonly blocks: readonly TimeBlock[];
}

export interface ScheduleDay {
  readonly label: string; // "Lunes a Viernes"
  readonly groups: readonly ScheduleGroup[];
}

export const schedule: readonly ScheduleDay[] = [
  {
    label: "Lunes a Viernes",
    groups: [
      {
        period: "Mañanas",
        blocks: [
          { start: "05:00", end: "06:00" },
          { start: "06:00", end: "07:00" },
          { start: "07:00", end: "08:00" },
          { start: "08:00", end: "09:00" },
        ],
      },
      {
        period: "Tardes / Noches",
        blocks: [
          { start: "16:00", end: "17:00" },
          { start: "17:00", end: "18:00" },
          { start: "18:00", end: "19:00" },
          { start: "19:00", end: "20:00" },
        ],
      },
    ],
  },
  {
    label: "Sábados y Festivos",
    groups: [
      {
        period: "Jornada única",
        blocks: [{ start: "07:00", end: "10:00" }],
      },
    ],
  },
];
