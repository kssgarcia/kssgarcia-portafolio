import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import glsl from 'vite-plugin-glsl';
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), glsl(), nodePolyfills()],
  build: {
    commonjsOptions: { transformMixedEsModules: true } // Change
  },
  define: {
    global: {},
  },
  base: "/kssgarcia-portafolio/",
})
