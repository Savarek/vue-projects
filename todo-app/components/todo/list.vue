<template>
  <section class="list">
    <ul class="list-ul">
      <todo-item v-for="todo of filteredItems" :key="todo.id" :item="todo" />
    </ul>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      filteredItems: [],
    }
  },
  computed: {
    ...mapGetters(['currentFilter', 'todos']),
  },

  watch: {
    currentFilter(value) {
      if (value === 'all') {
        this.filteredItems = this.todos
      } else if (value === 'completed') {
        this.filteredItems = this.todos.filter((item) => item.completed)
      } else {
        this.filteredItems = this.todos.filter((item) => !item.completed)
      }
    },
    todos(value) {
      this.filteredItems = value
    },
  },

  created() {
    this.filteredItems = this.todos
  },
}
</script>

<style lang="sass" scoped>
.list
  margin-top: 4rem

  &-ul
    padding: 0
</style>
