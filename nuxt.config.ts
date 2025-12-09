export default defineNuxtConfig({
  app: {
    head: {
      title: 'Demo nuxt',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'apple-touch-icon', type: 'image/png', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes:'32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes:'96x96', href: '/favicon-96x96.ico' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
          crossorigin: '',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        }
      ],
      meta: [
        { name: 'author', content: 'Holger Koenemann'},
        { name: "generator", content: "Eleventy v2.0.0" },
        { name: 'HandheldFriendly', content: true}
      ]
    },
    // pageTransition: { name: 'page', mode: 'out-in' },
    // layoutTransition: { name: 'layout', mode: 'out-in' },
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: {
    apiSecret: process.env.API_SECRETS,
    public: {
      apiBase: process.env.API_BASE
    }
  },
  vue: {
    propsDestructure: true,
  },
  css: ["~/assets/css/main.scss"],
  vite: {
    css: {
        preprocessorMaxWorkers: true,
        preprocessorOptions: {
          scss: {
            additionalData: '@use "~/assets/css/_colors.scss" as *;',
          },
      },
    },
    vue: {
      customElement: true,
    },
    vueJsx: {
      mergeProps: true,
    },
  },
  $production: {
     routeRules: {
      '/**': { isr: true },
    },
  },
  $development: {

  },
  $env: {
    staging: {

    },
    dev: {

    },
    prod: {

    }
  }
})
