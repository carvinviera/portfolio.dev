import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import { fileURLToPath } from "url";
import netlify from "@astrojs/netlify"; // <--- 1. IMPORTAR

export default defineConfig({
  output: 'server', // <--- 2. AÑADIR ESTA LÍNEA
  integrations: [
    tailwind(), 
    robotsTxt(),
    netlify() // <--- 3. AÑADIR EL ADAPTADOR
  ],
  site: "https://carvinviera-dev-dd6e0c.netlify.app/",
  vite: {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url))
      }
    }
  }
});