const items = {
  state: {
    items: [
      {
        img: 'https://www.tadviser.ru/images/thumb/6/6d/EMBARGOED_UNTIL_SEP_10_2019_Polaroid_Lab_Update_June_1_5_flat_v2_1_.0.jpg/840px-EMBARGOED_UNTIL_SEP_10_2019_Polaroid_Lab_Update_June_1_5_flat_v2_1_.0.jpg',
        name: 'Наименование товара',
        description:
          'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: '10000',
        id: '1',
      },
      {
        img: 'https://www.tadviser.ru/images/thumb/6/6d/EMBARGOED_UNTIL_SEP_10_2019_Polaroid_Lab_Update_June_1_5_flat_v2_1_.0.jpg/840px-EMBARGOED_UNTIL_SEP_10_2019_Polaroid_Lab_Update_June_1_5_flat_v2_1_.0.jpg',
        name: 'Наименование товара',
        description:
          'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: '10000',
        id: '2',
      },
      {
        img: 'https://www.tadviser.ru/images/thumb/6/6d/EMBARGOED_UNTIL_SEP_10_2019_Polaroid_Lab_Update_June_1_5_flat_v2_1_.0.jpg/840px-EMBARGOED_UNTIL_SEP_10_2019_Polaroid_Lab_Update_June_1_5_flat_v2_1_.0.jpg',
        name: 'Наименование товара',
        description:
          'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: '10000',
        id: '3',
      },
      {
        img: 'https://www.tadviser.ru/images/thumb/6/6d/EMBARGOED_UNTIL_SEP_10_2019_Polaroid_Lab_Update_June_1_5_flat_v2_1_.0.jpg/840px-EMBARGOED_UNTIL_SEP_10_2019_Polaroid_Lab_Update_June_1_5_flat_v2_1_.0.jpg',
        name: 'Наименование товара',
        description:
          'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: '10000',
        id: '4',
      },
      {
        img: 'https://www.tadviser.ru/images/thumb/6/6d/EMBARGOED_UNTIL_SEP_10_2019_Polaroid_Lab_Update_June_1_5_flat_v2_1_.0.jpg/840px-EMBARGOED_UNTIL_SEP_10_2019_Polaroid_Lab_Update_June_1_5_flat_v2_1_.0.jpg',
        name: 'Наименование товара',
        description:
          'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        price: '10000',
        id: '5',
      },
    ],
  },
  mutations: {
    ADD_ITEM(state, value) {
      state.items.push(value)
    },
    DELETE_ITEM(state, id) {
      state.items = state.items.filter((item) => item.id !== id)
    },
    FILTER_ITEMS_MIN_MAX(state, todos) {
      state.price = state.price.sort((price, newPrice) => price - newPrice)
    },
  },
  actions: {
    addItem({ commit }, value) {
      commit('ADD_ITEM', value)
    },
  },
  getters: {
    items: (state) => state.items,
  },
}

export default items
