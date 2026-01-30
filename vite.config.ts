import { defineConfig } from "vite";
import observerPlugin from "mobx-react-observer/babel-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          observerPlugin(
            // optional
            { exclude: ["src/ui-components/**"] },
          ),
        ],
      },
    }),
  ],
});
