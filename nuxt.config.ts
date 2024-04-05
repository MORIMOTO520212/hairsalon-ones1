// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  srcDir: 'src/',
  devServer: {
    port: 3000,
  },
  tailwindcss: {},
  microCMS: {
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
    target: 'all',
  },
  gtag: {
    id: 'G-LC4BYHFP9R',
  },
  gsap: {
    extraPlugins: {
      scrollTrigger: true,
    },
  },
  modules: [
    'nuxt-microcms-module',
    '@nuxtjs/emotion',
    '@nuxtjs/tailwindcss',
    'nuxt-gtag',
    '@hypernym/nuxt-gsap',
  ],
});
