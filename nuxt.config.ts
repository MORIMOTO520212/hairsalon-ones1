// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  srcDir: 'src/',
  devServer: {
    port: 3000,
  },
  modules: ['nuxt-microcms-module', '@nuxtjs/emotion'],
  microCMS: {
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
    target: 'all',
  },
});
