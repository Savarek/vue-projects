<template>
  <li class="item">
    <h1
      class="item-title"
      :class="{ completed: completed }"
      @click="completed = !completed"
    >
      {{ title }}
    </h1>
    <button class="item-delete">Delete</button>
  </li>
</template>

<script>
export default {
  props: ['title'],
  data() {
    return {
      completed: false,
    }
  },
}
</script>

<style lang="sass" scoped>
.completed
  text-decoration: line-through

.item
  display: flex
  list-style-type: none
  border: .0625rem white solid
  padding: 1.25rem
  justify-content: space-between

  &-title
    cursor: pointer

  &-delete
    background-color: #E32322
    border-radius: .3125rem
    padding: .3125rem .4375rem
    font-size: 1.125rem
</style>
