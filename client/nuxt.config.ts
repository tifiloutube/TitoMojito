// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/global.css'],
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL,
    },
    plugins: [
      { src: '~/plugins/gsap.js', mode: 'client' }
    ]
  }
});