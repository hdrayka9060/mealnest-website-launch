import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import fs from "fs";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "0.0.0.0",   // Listen on all interfaces (including public IP)
    port: 443,          // Use port 443 for HTTPS
    https: {
      key: fs.readFileSync("/etc/letsencrypt/live/mealnest.in/privkey.pem"), // Path to your private key
      cert: fs.readFileSync("/etc/letsencrypt/live/mealnest.in/fullchain.pem"), // Path to your certificate
    },
    allowedHosts: ['mealnest.in'], // Add your domain
  },
  preview: {
    host: "0.0.0.0",  // Listen on all interfaces (including public IP)
    port: 443,         // Use port 443 for HTTPS preview
    allowedHosts: ['mealnest.in'], // Add your domain
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
