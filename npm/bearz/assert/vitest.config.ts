import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        // ... Specify options here.
        include: ["./src/**/*_test.ts"],
    },
});
