<template>
  <section class="list">
    <ul class="list-ul">
      <todo-item v-for="todo of todos" :key="todo.id" :title="todo.title" />
    </ul>
  </section>
</template>

<script>
export default {
  props: ['selected'],
  data() {
    return {
      todos: [
        { id: 1, title: 'Сходить в магазин', copmleted: false },
        { id: 2, title: 'Покормить ежа', copmleted: false },
        { id: 3, title: 'Сделать Todo App', copmleted: false },
      ],
    }
  },
  computed: {
    filteredItems() {
      if (this.selected.value === 'all') {
        return this.todo
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.list
  margin-top: 4rem

  &-ul
    padding: 0
</style>
