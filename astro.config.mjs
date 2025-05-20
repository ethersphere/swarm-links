import { defineConfig } from "astro/config";
import relativeLinks from "astro-relative-links";

import alpinejs from "@astrojs/alpinejs";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  trailingSlash: "always",
  integrations: [relativeLinks(), alpinejs()],

  vite: {
    plugins: [tailwindcss()],
  },
});