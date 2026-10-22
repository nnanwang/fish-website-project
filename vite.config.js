// Import Vite's helper for creating a clear configuration object.
import { defineConfig } from "vite";

// Import the plugin that teaches Vite how to compile React and JSX.
import react from "@vitejs/plugin-react";

// Export the configuration so Vite can read it during development and builds.
export default defineConfig({
  // Enable React support for this project.
  plugins: [react()],
});
