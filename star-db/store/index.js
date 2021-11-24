import Vue from 'vue'
import Vuex from 'vuex'

import swapi from './swapi/swapi.js'

Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    modules: [swapi],
  })

export default store
