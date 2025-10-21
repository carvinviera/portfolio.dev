import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import { fileURLToPath } from "url";
import netlify from "@astrojs/netlify"; // <-- 1. IMPORTA EL ADAPTADOR

export default defineConfig({
  output: 'server',
  integrations: [
    tailwind(), 
    robotsTxt(), 
    netlify() // <-- 3. AÑADE EL ADAPTADOR AQUÍ
  ],
  site: "https://carvinviera-dev-dd6e0c.netlify.app/",
  vite: {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url))
      }
    }
  },
  adapter: netlify()
});