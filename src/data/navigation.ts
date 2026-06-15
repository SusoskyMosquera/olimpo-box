/** Primary navigation — the 9 tabs mapped to in-page sections. */

export interface NavItem {
  readonly label: string;
  readonly href: string;
}

export const navItems: readonly NavItem[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Servicios", href: "#servicios" },
  { label: "Planes", href: "#planes" },
  { label: "Eventos", href: "#eventos" },
  { label: "Equipo", href: "#equipo" },
  { label: "Comunidad", href: "#comunidad" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "Contacto", href: "#contacto" },
];
