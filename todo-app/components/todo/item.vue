<template>
  <li class="item">
    <h1
      class="item-title"
      :class="{ completed: item.completed }"
      @click="changeCompleteById(item.id)"
    >
      {{ item.title }}
    </h1>
    <button class="item-delete" @click="onItemDelete(item.id)">Delete</button>
  </li>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  props: ['item'],
  data() {
    return {}
  },

  computed: {
    ...mapGetters(['todos']),
  },

  methods: {
    ...mapMutations(['onItemDelete', 'changeCompleteById']),
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
