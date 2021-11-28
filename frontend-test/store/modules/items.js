const items = {
  state: {
    items: [
      {
        img: 'https://www.tadviser.ru/images/thumb/6/6d/EMBARGOED_UNTIL_SEP_10_2019_Polaroid_Lab_Update_June_1_5_flat_v2_1_.0.jpg/840px-EMBARGOED_UNTIL_SEP_10_2019_Polaroid_Lab_Update_June_1_5_flat_v2_1_.0.jpg',
        name: 'Наименование товара',
        description:
          'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: '10000',
        id: Date.now(),
      },
      {
        img: 'https://www.tadviser.ru/images/thumb/6/6d/EMBARGOED_UNTIL_SEP_10_2019_Polaroid_Lab_Update_June_1_5_flat_v2_1_.0.jpg/840px-EMBARGOED_UNTIL_SEP_10_2019_Polaroid_Lab_Update_June_1_5_flat_v2_1_.0.jpg',
        name: 'Наименование товара',
        description:
          'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: '10000',
        id: Date.now(),
      },
      {
        img: 'https://www.tadviser.ru/images/thumb/6/6d/EMBARGOED_UNTIL_SEP_10_2019_Polaroid_Lab_Update_June_1_5_flat_v2_1_.0.jpg/840px-EMBARGOED_UNTIL_SEP_10_2019_Polaroid_Lab_Update_June_1_5_flat_v2_1_.0.jpg',
        name: 'Наименование товара',
        description:
          'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: '10000',
        id: Date.now(),
      },
      {
        img: 'https://www.tadviser.ru/images/thumb/6/6d/EMBARGOED_UNTIL_SEP_10_2019_Polaroid_Lab_Update_June_1_5_flat_v2_1_.0.jpg/840px-EMBARGOED_UNTIL_SEP_10_2019_Polaroid_Lab_Update_June_1_5_flat_v2_1_.0.jpg',
        name: 'Наименование товара',
        description:
          'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: '10000',
        id: Date.now(),
      },
      {
        img: 'https://www.tadviser.ru/images/thumb/6/6d/EMBARGOED_UNTIL_SEP_10_2019_Polaroid_Lab_Update_June_1_5_flat_v2_1_.0.jpg/840px-EMBARGOED_UNTIL_SEP_10_2019_Polaroid_Lab_Update_June_1_5_flat_v2_1_.0.jpg',
        name: 'Наименование товара',
        description:
          'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: '10000',
        id: Date.now(),
      },
    ],
    currentFilter: 'by-name',
  },
  mutations: {
    ADD_ITEM(state, value) {
      state.items.push(value)
    },
    SET_ITEMS(state, items) {
      state.items = items
    },
    DELETE_ITEM(state, id) {
      state.items = state.items.filter((item) => item.id !== id)
    },
    FILTER_ITEMS_MIN_MAX(state) {
      state.items = state.items.sort(
        (item1, item2) => item1.price - item2.price
      )
    },
    FILTER_ITEMS_MAX_MIN(state) {
      state.items = state.items.sort(
        (item1, item2) => item2.price - item1.price
      )
    },
    FILTER_ITEMS_BY_NAME(state) {
      state.items = state.items.sort((item1, item2) =>
        item1.name.localeCompare(item2.name)
      )
    },
    SET_CURRENT_FILTER(state, currentFilter) {
      state.currentFilter = currentFilter
    },
  },
  actions: {
    addItem({ commit }, value) {
      commit('ADD_ITEM', value)
    },
  },
  getters: {
    items: (state) => state.items,
    currentFilter: (state) => state.currentFilter,
  },
}

export default items
