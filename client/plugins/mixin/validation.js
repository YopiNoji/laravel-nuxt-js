import Vue from 'vue'

import { mapGetters } from 'vuex'

const Validation = {
  install(Vue) {
    Vue.mixin({
      computed: {
        // ストアのゲッターを監視する
        ...mapGetters({
          errors: 'validation/errors'
        })
      }
    })
  }
}

Vue.use(Validation)
