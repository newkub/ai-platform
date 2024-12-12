// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: ['@unocss/nuxt'],
  compatibilityDate: '2024-04-03',
  css: [
    '@unocss/reset/tailwind.css',
    '@/assets/css/theme.css',
    '@/assets/css/main.css'
  ],
  devtools: {
    enabled: true
  },
  unocss: {
    preflight: true,
    icons: true,
    attributify: true,
    safelist: [
      'i-mdi-account',
      'i-mdi-home',
      'i-carbon-user',
      'i-carbon-home'
    ]
  },
  alias: {
    '@': '~/components',
    '~': '~/composables'
  }
})