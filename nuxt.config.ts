// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  srcDir: 'src/',
  devServer: {
    port: 3000,
  },
  app: {
    head: {
      meta: [
        {
          name: 'google-site-verification',
          content: 'niHSaLlrT6Vi3JwIR-7Rcr_c67zZ8GA8Bcl3NWP9hzI',
        },
      ],
    },
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
