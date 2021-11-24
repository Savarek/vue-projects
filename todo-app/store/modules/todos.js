const todos = {
  state: {
    currentFilter: 'all',
    todos: [
      { id: 1, title: 'Сходить в магазин', completed: false },
      { id: 2, title: 'Покормить ежа', completed: false },
      { id: 3, title: 'Сделать Todo App', completed: false },
    ],
  },
  mutations: {
    changeCompleteById(state, id) {
      state.todos = state.todos.map((item) => {
        if (item.id === id) {
          item.completed = !item.completed
        }
        return item
      })
    },
    filterItems(state, todos) {
      state.filteredItems = todos
    },
    onItemAdd(state, title) {
      state.todos.push({ id: Date.now(), title, completed: false })
    },
    onItemDelete(state, id) {
      state.todos = state.todos.filter((item) => item.id !== id)
    },
    switchFilter(state, currentFilter) {
      state.currentFilter = currentFilter
    },
  },
  actions: {},
  getters: {
    currentFilter: (state) => state.currentFilter,
    todos: (state) => state.todos,
  },
}

export default todos
