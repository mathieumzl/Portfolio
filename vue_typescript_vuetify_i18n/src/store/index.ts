import Vue from 'vue'
import Vuex from 'vuex'
import i18n from '@/i18n'
import createPersistedState from 'vuex-persistedstate'
const persistedStateOptions = {
  storage: window.sessionStorage
}
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    version: '0.0.0',
    name: 'MZL Home Design',
    locale: 'fr'
  },
  mutations: {
    switchLanguages: function (state:any, locale:any) {
      state.locale = locale.payload
      i18n.locale = locale.payload
    }
  },
  actions: {
    switchlanguages ({ commit }: any, payload:any) {
      commit('switchLanguages', { payload })
    }
  },
  modules: {
  },
  plugins: [createPersistedState(persistedStateOptions)]
})
