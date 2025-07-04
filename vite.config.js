import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import ElementPlus from 'unplugin-element-plus/vite'

// https://vite.dev/config/
export default defineConfig({
  server:{
    host: '0.0.0.0', // 允许通过局域网访问
    port: 3000, // 可以自定义端口号
  },
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    // ElementPlus({
    //   useSource: true,
    // }),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@use "@/styles/element-variables.scss" as *;`,
  //     },
  //   },
  // },
})
