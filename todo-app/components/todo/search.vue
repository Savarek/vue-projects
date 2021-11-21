<template>
  <section class="search">
    <form class="search-form" @submit.prevent="onItemSubmit()">
      <input
        v-model="title"
        type="text"
        class="search-input"
        placeholder="Please type something(("
      />
      <button class="search-button">Create</button>
    </form>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      title: '',
    }
  },

  methods: {
    ...mapMutations(['onItemAdd']),
    onItemSubmit() {
      this.onItemAdd(this.title)
      this.title = ''
    },
  },
}
</script>

<style lang="sass" scoped>
.search

  &-input
    border: .0625rem white solid
    border-radius: .3125rem
    padding: .5rem .75rem
    color: white
    font-weight: bold

  &-button
    border: .0625rem white solid
    border-radius: .3125rem
    padding: .5rem .75rem
    color: white
    font-weight: bold
</style>
