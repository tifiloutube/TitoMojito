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
  plugins: [
    { src: '~/plugins/lenis.js', mode: 'client' },
  ],
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL,
    }
  },
  sitemap: {
    siteUrl: 'https://titomojito.fr',
    gzip: true,
    trailingSlash: false
  }
});