/*
 * @Author: abc
 * @Date: 2021-08-16 11:14:27
 * @LastEditors: abc
 * @LastEditTime: 2021-09-07 16:30:01
 * @Description:nuxt setting
 */
// const path = require('path')
let pattern = false;
const plugins = [
  [
    'component',
    {
      libraryName: 'element-ui',
      styleLibraryName: 'theme-chalk'
    }
  ]
];
if (process.env.NODE_ENV !== 'production') {
  pattern = true;
} else {
  plugins.push('transform-remove-console');
  pattern = false;
}
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ibax-os',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'ie',
        'http-equiv': 'X-UA-Compatible',
        content: 'IE=11; IE=10; IE=9; IE=8; IE=EDGE'
      },
      {
        hid: 'edge',
        'http-equiv': 'X-UA-Compatible',
        content: 'IE=edge,chrome=1'
      }
    ],
    link: [
      { rel: 'shortcut icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: '/animate/animate.min.css' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: '//at.alicdn.com/t/font_2762091_s7n8z4drowq.css'
      }
    ],
    script: [{ src: '' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['element-ui/lib/theme-chalk/display.css', '@/assets/sass/index.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/i18n.js',
    '@/plugins/mixin.js',
    '@/plugins/http.js',
    '@/plugins/vueSlickCarousel.js',
    { src: '@/plugins/vueSroll.js', ssr: false },
    { src: '@/plugins/vueP5.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module'
  ],
  router: {
    middleware: ['i18n', 'router'],
    linkActiveClass: 'nav-active-link'
    /* scrollBehavior(to, from, savedPosition) {
      return { x: 0, y: 0 };
    } */
  },
  /*  transition: {
    name: 'page',
    mode: 'out-in',
    beforeEnter(el) {
      // console.log("Before enter...");
    }
  }, */
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    icon: {
      source: '/icon.png', // 路径为static中的icon2.png
      fileName: 'icon.png'
    },
    manifest: {
      lang: 'en'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
    cssSourceMap: pattern,
    cache: pattern,
    build: {
      hotMiddleware: {
        client: {
          // turn off client overlay when errors are present
          overlay: false
        }
      }
    },
    babel: {
      plugins
    },
    //
    filenames: {
      app: ({ isDev }) => (isDev ? '[name].js' : '[chunkhash].js'),
      chunk: ({ isDev }) => (isDev ? '[name].js' : '[id].[name].js'),
      img: ({ isDev }) => (isDev ? '[path][name].[ext]' : 'img/[hash:7].[ext]'),
      font: ({ isDev }) =>
        isDev ? '[path][name].[ext]' : 'fonts/[hash:7].[ext]',
      video: ({ isDev }) =>
        isDev ? '[path][name].[ext]' : 'videos/[hash:7].[ext]'
    },
    extend(config, ctx) {
      //
      if (ctx.isClient) {
        config.devtool = pattern ? 'eval-source-map' : 'none';
      }
      //
      if (ctx.isServer) {
        config.devtool = pattern ? 'eval-source-map' : 'none';
      }
    }
  }
};
