import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate'
import items from './modules/items.js'

Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    modules: [items],
    plugins: [createPersistedState()],
  })

export default store
