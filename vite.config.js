import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
/* type ViteConfigInput = {
  mode: string,
  command: string,
} */

export default () => {
  return defineConfig({
    plugins: [react()],
    css: {
      modules: {
        localsConvention: "camelCase",
      },
    },
  });
};
