<template>
  <select v-model="selected" class="filter">
    <option value="by-name" class="filter-option">По наименованию</option>
    <option value="min-max" class="filter-option">По возрастанию цены</option>
    <option value="max-min" class="filter-option">По убыванию цены</option>
  </select>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data() {
    return {
      selected: 'by-name',
    }
  },

  computed: {
    ...mapGetters(['items']),
  },
  watch: {
    selected(value) {
      if (value === 'min-max') {
        this.FILTER_ITEMS_MIN_MAX()
      } else if (value === 'max-min') {
        this.FILTER_ITEMS_MAX_MIN()
      } else if (value === 'by-name') {
        this.FILTER_ITEMS_BY_NAME()
      }
    },
  },
  methods: {
    ...mapMutations([
      'FILTER_ITEMS_MIN_MAX',
      'FILTER_ITEMS_MAX_MIN',
      'FILTER_ITEMS_BY_NAME',
    ]),
  },
}
</script>

<style lang="sass" scoped>
.filter
  background: #FFFEFB
  box-shadow: 0rem .125rem .3125rem rgba(0, 0, 0, 0.1)
  border-radius: 4px
  border: none
  padding: .75rem 0 .75rem 1rem
  color: #B4B4B4
  font-size: .75rem
  outline: none
</style>
