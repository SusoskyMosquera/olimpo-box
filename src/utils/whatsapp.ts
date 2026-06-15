import { site } from "../data/site";

/**
 * Builds a WhatsApp conversion link (wa.me) with a pre-filled message.
 * Centralizing this keeps the conversion logic in one place (DRY).
 */
export function buildWhatsAppUrl(
  message: string = site.whatsapp.defaultMessage,
): string {
  const encodedMessage: string = encodeURIComponent(message);
  return `https://wa.me/${site.whatsapp.phone}?text=${encodedMessage}`;
}
