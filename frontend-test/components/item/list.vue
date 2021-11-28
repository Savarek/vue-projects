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
    ...mapGetters(['items']),
  },
  created() {
    this.FILTER_ITEMS_MIN_MAX()
  },
  methods: {
    ...mapMutations(['FILTER_ITEMS_MIN_MAX']),
  },
}
</script>

<style lang="sass" scoped>
.list-wrapper
  display: grid
  grid-template-columns: 1fr 1fr 1fr
  grid-row-gap: 1rem
</style>
