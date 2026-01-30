import { defineConfig } from "vite";
import observerPlugin from "mobx-react-observer/babel-plugin";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    // Tailwind как Vite плагин
    tailwindcss(),

    // React с Babel плагинами
    react({
      babel: {
        plugins: [
          // Только Babel плагины здесь
          observerPlugin({ exclude: ["src/ui-components/**"] }),
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
