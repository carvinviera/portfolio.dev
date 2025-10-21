import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import { fileURLToPath } from "url";

export default defineConfig({
  integrations: [tailwind(), robotsTxt()],
  site: "https://porfolio.dev/",
  vite: {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url))
      }
    }
  }
});
