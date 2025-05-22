// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  css: [
    '@/assets/scss/global.scss',
  ],
  plugins: ['~/plugins/montserrat.js'],
  modules: ['@nuxt/ui'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/scss/variables.scss" as *;` 
        }
      }
    }
  }
})
