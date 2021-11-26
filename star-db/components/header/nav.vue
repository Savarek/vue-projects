<template>
  <nav class="nav">
    <nuxt-link to="/" class="nav-heading">Star-DB</nuxt-link>
    <div class="nav-items">
      <nuxt-link to="/characters" class="nav-item">Persons</nuxt-link>
      <nuxt-link to="/starships" class="nav-item">Starships</nuxt-link>
      <nuxt-link to="/planets" class="nav-item">Planets</nuxt-link>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['category']),
  },

  methods: {
    ...mapActions(['getCategoryByParam']),
  },
}
</script>

<style lang="sass" scoped>
.nav
  display: flex
  margin-top: 2rem

  &-heading
    color: white
    font-weight: bold
    font-size: 4rem
    text-decoration: none

  &-items
    margin-left: 4rem
    display: flex

  &-item
    padding: .3125rem .625rem
    color: #008F5A
    text-decoration: none
    font-weight: bold
    font-size: 1.5rem
    transition: background .2s linear, color .2s linear
    align-self: center

    &:focus
      border-radius: .1875rem
      background: #505453
      color: #02B774

    &:hover
      background: #696A6A
      border-radius: .1875rem
      color: #03A96B
</style>
