const swapi = {
  state: {
    items: [],
    currentCategory: 'home',
    currentPlanet: {},
    currentItem: {},
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

    setCurrentItem(state, item) {
      state.currentItem = item
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

    async getItem({ commit, state }, param, id) {
      const currentItem = await fetch(state._apiBase + param + '/' + id)

      if (!currentItem.ok) {
        console.log('Error')
      }

      const data = await currentItem.json()

      commit('setCurrentItem', data)
    },
  },
  getters: {
    data: (state) => state.items,
    category: (state) => state.currentCategory,
    planet: (state) => state.currentPlanet,
    currentItem: (state) => state.currentItem,
  },
}

export default swapi
