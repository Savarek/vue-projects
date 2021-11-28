<template>
  <select v-model="selected" class="filter">
    <option value="by-name" class="filter-option">По наименованию</option>
    <option value="min-max" class="filter-option">По возрастанию цены</option>
    <option value="max-min" class="filter-option">По убыванию цены</option>
  </select>
</template>

<script>
export default {
  data() {
    return {
      selected: 'by-name',
    }
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
</style>
