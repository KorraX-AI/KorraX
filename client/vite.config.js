import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    esbuild: {
        loader: "jsx", // Tell Vite to treat .js files as JSX
        include: /src\/.*\.js$/, // Apply only to JS files in the src folder
    },
});
