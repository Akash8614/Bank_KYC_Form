import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/bank_kyc_form/",
  resolve: {
    alias: {
      src: "/src",
      components: "/src/components",
      assets: "/src/assets",
    },
  },
});
