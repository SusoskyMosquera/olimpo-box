/**
 * Central site configuration: contact, conversion (WhatsApp), location and
 * social links. Single source of truth — every component reads from here.
 */

export interface SocialLink {
  readonly platform: "instagram" | "tiktok" | "facebook";
  readonly label: string;
  readonly url: string;
}

export interface SiteConfig {
  readonly name: string;
  readonly tagline: string;
  readonly whatsapp: {
    /** Phone in international format, digits only (for wa.me). */
    readonly phone: string;
    readonly defaultMessage: string;
  };
  /** Free trial offer used as the main conversion hook. */
  readonly freeTrial: {
    readonly label: string;
    readonly message: string;
  };
  readonly location: {
    readonly city: string;
    readonly address: string;
    readonly mapsUrl: string;
  };
  readonly social: readonly SocialLink[];
}

export const site: SiteConfig = {
  name: "Olimpo Box",
  tagline: "Funcional · CrossFit · Calistenia",
  whatsapp: {
    phone: "573105795421",
    defaultMessage:
      "Hola Olimpo Box, quiero información sobre los planes 2026 💪",
  },
  freeTrial: {
    label: "Primera clase de cortesía",
    message: "Hola Olimpo Box, quiero reservar mi clase de cortesía 🎟️",
  },
  location: {
    city: "Villavicencio, Meta",
    address: "Av. Los Maracos #13-81, Villavicencio, Meta",
    mapsUrl: "https://maps.app.goo.gl/oenMBjoFxJXnCbFUA",
  },
  social: [
    {
      platform: "instagram",
      label: "Instagram",
      url: "https://www.instagram.com/olimpoboxvcio/",
    },
    {
      platform: "tiktok",
      label: "TikTok",
      url: "https://www.tiktok.com/@olimpoboxvcio/",
    },
  ],
};
