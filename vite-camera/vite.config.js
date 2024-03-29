import { defineConfig } from "vite"; // VSCode autocomplete

export default defineConfig({
    base: "http://localhost:4173/project/",
    server: {
        port: 1234,
    },
    build: {
        target: [ "firefox78", "safari14" ],
    },
    //... lots of other options
});
