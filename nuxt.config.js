// import colors from 'vuetify/es5/util/colors'

module.exports = {
  debug: true,
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - food-fast',
    title: 'food-fast',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~plugins/filters.js'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyB8jI1P3IzMBp1A4V2xMWqNzQjtVpwOPfA",
          authDomain: "projectfoodfast.firebaseapp.com",
          databaseURL: "https://projectfoodfast.firebaseio.com",
          projectId: "projectfoodfast",
          storageBucket: "projectfoodfast.appspot.com",
          messagingSenderId: "205041185820",
          appId: "1:205041185820:web:330935fc33244010af1bd9",
          measurementId: "G-YVP85E6RJG"
        },
        services: {
          auth: {
            ssr: false,
          },
          firestore: true,
          functions: true,
          storage: true,
          onFirebaseHosting: true,
        },
      },
    ]


  ],

  // Router
  router: {
    middleware: ['authentication'],
  },

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      // themes: {
      //   dark: {
      //     primary: colors.blue.darken2,
      //     accent: colors.grey.darken3,
      //     secondary: colors.amber.darken3,
      //     info: colors.teal.lighten1,
      //     warning: colors.amber.base,
      //     error: colors.deepOrange.accent4,
      //     success: colors.green.accent3
      //   }
      // }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  // build: {
  //   extractCss: true,
  //   babel: {
  //     presets: ({ isServer }) => [
  //       [
  //         {
  //           targets: isServer
  //             ? { node: '10.21.0' }
  //             : { browsers: ['defaults'] },
  //         },
  //       ],
  //     ],
  //   },
  // },
}
