import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from 'dotenv';

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: process.env.VITE_SERVER_PROXY,
      },
      "/auth": {
        target: process.env.VITE_SERVER_PROXY,
      },
    },
  },  
  define: {
    'process.env': process.env
  }
});
