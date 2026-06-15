import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * Team collection: one JSON file per coach under src/content/team.
 * The Zod schema validates every entry at build time — if a file is missing a
 * required field, the build fails loudly instead of shipping broken data.
 */
const team = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/team" }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    specialties: z.array(z.string()).default([]),
    bio: z.string().optional(),
    /** Optional image path under /public. Falls back to a placeholder. */
    image: z.string().optional(),
    /** Controls display order (lower first). */
    order: z.number().default(0),
  }),
});

export const collections = { team };
