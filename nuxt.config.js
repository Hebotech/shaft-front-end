export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Cascos Shaft México 🏍😎🇲🇽 | Sitio Oficial Shaft',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#DDF64C' },
      { hid: 'description', name: 'description', content: '' },
      { title: 'description', name: 'description', content: '' },
      {
        name: 'description',
        content:
          '¡Nueva colección disponible!😍 Entra ahora a la página oficial de Shaft Helmets México y descubre la nueva colección 🔥 de cascos, encuentra dónde comprar 🗺 o vende Shaft 🤑',
      },
      { property: 'og:url', content: 'https://www.shaft.mx' },
      { property: 'fb:app_id', content: '1198760310313529' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Cascos Shaft México 🏍😎🇲🇽' },
      {
        property: 'og:description',
        content:
          '¡Nueva colección! Descubre la nueva colección 	&#57629;, encuentra dónde comprar 🗺 o vende Shaft 🤑',
      },
      { property: 'og:image', content: '<%= BASE_URL %>brand/sitio-shaft.png' },
    ],
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css',
        integrity:
          'sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh',
        crossorigin: 'anonymous',
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
      {
        rel: 'stylesheet',
        href: 'https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.0/mapbox-gl.css',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['./plugins/GA.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  css: ['~/assets/styles/_variables.scss'],

  styleResources: {
    // your settings here

    scss: ['~/assets/styles/_variables.scss'],
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
