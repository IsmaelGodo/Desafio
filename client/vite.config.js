import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target:"https://tripulaciones-server-ese6s67fhq-ew.a.run.app/"
      },
      "/auth": {
        target:"https://tripulaciones-server-ese6s67fhq-ew.a.run.app/"
      },
    }
  }
})