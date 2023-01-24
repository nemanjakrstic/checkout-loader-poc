import preact from "@preact/preset-vite";
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [preact()],

    build: {
        lib: {
            // Could also be a dictionary or array of multiple entry points
            entry: resolve(__dirname, "src/index.tsx"),
            name: "checkoutjs",
            // the proper extensions will be added
            fileName: "checkout",
        },
    },

    define: {
        "process.env.NODE_ENV": process.env.NODE_ENV,
    },
});
