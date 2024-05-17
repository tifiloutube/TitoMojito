// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'fr'
      }
    }
  },
  devtools: { enabled: true },
  css: ['~/assets/css/global.css'],
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL,
    }
  }
});