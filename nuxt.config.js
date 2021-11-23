export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Fullstack Academy",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [
      { rel: "shortcut icon", href: "/images/favicon.png" },
      {
        rel: "stylesheet",
        href: "/vendors/iconfonts/mdi/css/materialdesignicons.min.css"
      },
      {
        rel: "stylesheet",
        href: "/vendors/css/vendor.bundle.base.css"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/css/style.css"
      },
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"
      }
    ],
    script: [
      { src: "/vendors/js/vendor.bundle.base.js" },
      { src: "/vendors/js/vendor.bundle.addons.js" },
      { src: "/js/off-canvas.js" },
      { src: "/js/misc.js" },
      { src: "/js/dashboard.js" }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // Sweet Alert Nuxt
    "vue-sweetalert2/nuxt",
    // Nuxt Auth
    "@nuxtjs/auth-next",
    "@nuxtjs/proxy"
  ],
  router: {
    middleware: ["auth"]
  },
  auth: {
    strategies: {
      local: {
        token: {
          property: "token",
          global: true,
          type: false
          // required: true,
          // type: 'Bearer'
        },
        user: {
          property: "data"
          // autoFetch: true
        },
        endpoints: {
          login: { url: "login", method: "post" },
          user: {
            url: `user/me`,
            method: "get"
          },
          logout: false
        }
      }
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // proxy: true,
    baseURL: "http://localhost:3000"
  },

  // proxy: {
  //   "/api/": {
  //     target: "http://localhost:3000",
  //     pathRewrite: { "^/api/": "" },
  //     changeOrigin: true
  //   },
  //   "/register": {
  //     target: "http://localhost:3000",
  //     pathRewrite: { "^/": "" },
  //     changeOrigin: true
  //   }
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  server: {
    port: 7000
  }
};
