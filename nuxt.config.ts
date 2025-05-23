// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  css: [
    '@/assets/scss/global.scss',
  ],
  plugins: ['~/plugins/montserrat.js'],
  modules: ['@nuxt/ui', '@nuxtjs/color-mode'],
    colorMode: {
    preference: 'system',
    fallback: 'light', 
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode'
  },
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
