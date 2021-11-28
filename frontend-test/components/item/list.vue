<template>
  <section class="list-wrapper">
    <item-card
      v-for="item of items"
      :key="item.index"
      :item="item"
      class="list"
    ></item-card>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['items', 'currentFilter']),
  },
  methods: {
    ...mapMutations(['FILTER_ITEMS_MIN_MAX', 'FILTER_ITEMS_MAX_MIN']),
  },
}
</script>

<style lang="sass" scoped>
@media screen and (max-width: 90rem)

  .list-wrapper
    grid-template-columns: 1fr 1fr !important

@media screen and (max-width: 42.5rem)

  .list-wrapper
    margin-top: 1.5rem
    grid-template-columns: 1fr !important

.list-wrapper
  display: grid
  grid-template-columns: 1fr 1fr 1fr
  grid-row-gap: 1rem
</style>
