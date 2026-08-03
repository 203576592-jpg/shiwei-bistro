import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  // base: './' 让构建产物使用相对路径,可直接部署到 GitHub Pages 等子路径
  base: './',
  plugins: [vue()],
  server: {
    port: 5173,
    open: false
  }
})