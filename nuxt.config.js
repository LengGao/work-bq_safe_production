import env from './env' // 环境配置文件
export default {
  server: {
    // port: 80, // default: 3000 (如果用80之外的端口 在asyncData里的请求不写完整会报错)
    // host: '0.0.0.0', // default: localhost
  },
  router: {
    middleware: ['storage']
  },
  axios: {
    proxy: true
  },
  proxy: {
    '/api': {
      // target: 'http://192.168.8.120:90', //蚁
      target: 'http://v2.testadmin.beiqujy.com/apidata/admin/v2', //测试
      pathRewrite: {
        '^/api': '/',
      },
    },
  },
  env: {
    baseUrl: env[process.env.NODE_ENV].BASE_API,
    NODE_ENV: env[process.env.NODE_ENV].NODE_ENV
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '安监',
    htmlAttrs: {
      lang: 'zh'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '//at.alicdn.com/t/font_3359348_ioyw1e9eon.css' },
      {
        rel: "stylesheet",
        href: "https://g.alicdn.com/de/prismplayer/2.8.2/skins/default/aliplayer-min.css",
      },
    ],
    script: [
      {
        src: "https://g.alicdn.com/de/prismplayer/2.8.2/aliplayer-min.js",
        async: true,
        defer: true,
      },
    ],
  },
  // 在页面切换的时候，Nuxt.js 使用内置的加载组件显示加载进度条。你可以定制它的样式
  loading: {
    color: '#199fff'
  },

  styleResources: {
    scss: ['./assets/scss/variable.scss']
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // 'element-ui/lib/theme-chalk/index.css',
    '@/assets/css/reset.css',
    '@/assets/css/page-transition.css',
    '@/assets/scss/variable.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/axios',
    '@/plugins/api',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    'cookie-universal-nuxt'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
    babel: {
      "plugins": [
        [
          "component",
          {
            "libraryName": "element-ui",
            "styleLibraryName": "theme-chalk"
          }
        ]
      ]
    }
  }
}
