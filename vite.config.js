import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
    server: {
        port: 8081,

    },
   resolve: {
    alias: {
        "@firestore/user/actions": path.resolve("./src/services/firebase/collections/user/actions"),
        crypto: "./node_modules/bcrypt/bcrypt.js"
    }
   }
});