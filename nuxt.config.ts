import NuxtConfiguration from '@nuxt/config'

require('dotenv').config()

const config: NuxtConfiguration = {
  mode: 'spa',
  srcDir: 'client/',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    'ress/dist/ress.min.css',
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/dependency',
    '~/plugins/mixin/validation',
    '~/plugins/mixin/user',
    '~/plugins/axios'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/eslint-module',
    '@nuxtjs/proxy',
    // Doc: https://auth.nuxtjs.org/
    '@nuxtjs/auth'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: '/api'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  generate: {
    dir: 'public/dist'
  },
  auth: {
    strategies: {
      local: {
        //自前の認証処理を実行する
        endpoints: {
          login: {
            //ログインを実行する際のリクエスト設定
            url: 'auth/login',
            method: 'post',
            propertyName: 'token'
          },
          user: {
            //ログイン済みのユーザ情報取得を実行する際のリクエスト設定
            url: 'user',
            method: 'get',
            propertyName: 'data'
          },
          logout: {
            //ログアウトを実行する際のリクエスト設定
            url: 'auth/logout',
            method: 'get'
          }
        }
      }
    },
    redirect: {
      login: '/auth/login', //未ログインユーザが認証が必要な画面にアクセスした際のリダイレクト先
      home: '/dashboard' //ログイン後のリダイレクト先
    },
    plugins: ['~/plugins/auth']
  }
}

if (process.env.API_BASE_URL) {
  config.proxy = [process.env.API_BASE_URL]
}

export default config
