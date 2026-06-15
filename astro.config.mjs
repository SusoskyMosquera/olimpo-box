import { defineConfig } from "astro/config";

// https://astro.build/config
// Tailwind v4 is wired through PostCSS (see postcss.config.mjs) instead of the
// Vite plugin, which is currently incompatible with Astro 6's rolldown-vite.
export default defineConfig({
  site: "https://olimpo-box.vercel.app",
});
