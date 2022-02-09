export default {
  content: {
    markdown: {
      plugins: ["remark-unwrap-images"]
    }
  },

  generate: {
    fallback: true
  },
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Not Made By Robots",
    htmlAttrs: {
      lang: "de"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
      { name: "msapplication-TileColor", content: "#da532c" },
      { name: "theme-color", content: "#ffffff" },
      {
        name: "description",
        content:
          "Wenn Roboter die besseren Kreativschaffenden sind, wozu brauchen wir dann noch Designer:innen?"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "favicon/favicon.ico" },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/favicon/apple-touch-icon.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon/favicon-32x32.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon/favicon-16x16.png"
      },
      { rel: "manifest", href: "/favicon/site.webmanifest" },
      {
        rel: "mask-icon",
        href: "/favicon/safari-pinned-tab.svg",
        color: "#5bbad5"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/main.css",
    "node_modules/@splidejs/splide/dist/css/splide.min.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/slick.js", "~plugins/splide"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules

  modules: [
    "@nuxt/image",
    "@nuxt/content",
    "modules/twitter"
    // '@nuxtjs/cloudinary'
  ],
  content: {
    markdown: {
      prism: {
        theme: "~/assets/prism-atom-dark.css"
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // babel: {
    //   presets({isServer}) {
    //     const targets = isServer ? { node: 'current' } : { ie: 11 }
    //     return [
    //       [ require.resolve("@babel/preset-env"), { targets }  ]
    //     ]
    //   },
    //   plugins: [
    //     "@babel/syntax-dynamic-import",
    //     "@babel/transform-runtime",
    //     "@babel/transform-async-to-generator"
    //   ]
    // },
  }
};
