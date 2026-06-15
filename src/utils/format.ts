/**
 * Presentation helpers. Data stays raw in src/data; formatting happens here.
 */

/**
 * Formats a COP amount into the brand's compact style.
 * 120000 -> "120K", 90000 -> "90K".
 */
export function formatThousands(amount: number): string {
  return `${Math.round(amount / 1000)}K`;
}
