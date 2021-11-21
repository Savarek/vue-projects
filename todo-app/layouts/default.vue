<template>
  <v-app dark>
    <div class="todo container">
      <todo-heading />
      <todo-list />
      <div class="utilities">
        <todo-search />
        <todo-filter />
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style lang="sass" scoped>
.container
  margin: 0 auto
  padding: 0
  box-sizing: border-box
  max-width: 72rem

.utilities
  display: flex
  justify-content: space-between
  margin-top: 3rem
</style>
