import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue"
import { VineVitePlugin as vineVitePlugin } from 'vue-vine/vite'

export default defineConfig({
  plugins: [
    vue(),
    vineVitePlugin(),
  ]
})
