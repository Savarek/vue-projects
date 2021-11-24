const swapi = {
  state: {
    items: [],
    currentCategory: 'home',
    currentPlanet: {},
    _apiBase: 'https://swapi.dev/api/',
    _apiPlanetBase: 'https://swapi.dev/api/planets/',
  },
  mutations: {
    setItems(state, items) {
      state.items = items
    },

    setCategory(state, category) {
      state.currentCategory = category
    },

    setCurrentPlanet(state, currentPlanet) {
      state.currentPlanet = currentPlanet
    },
  },
  actions: {
    async getDataByCategory({ commit, state }, param) {
      const cons = await fetch(state._apiBase + param)

      if (!cons.ok) {
        console.log('Error')
      }

      const data = await cons.json()

      commit('setItems', data.results)
    },

    async getPlanet({ commit, state }, id) {
      const planet = await fetch(state._apiPlanetBase + id)

      if (!planet.ok) {
        console.log('Error')
      }

      const data = await planet.json()

      commit('setCurrentPlanet', data)
    },
  },
  getters: {
    data: (state) => state.items,
    category: (state) => state.currentCategory,
    planet: (state) => state.currentPlanet,
  },
}

export default swapi
