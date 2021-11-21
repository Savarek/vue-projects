<template>
  <section class="filter">
    <select
      v-model="selected"
      :selected="selected.selected"
      class="filter-select"
    >
      <option value="all" class="filter-select__option">All</option>
      <option value="completed" class="filter-select__option">Completed</option>
      <option value="uncompleted" class="filter-select__option">
        Uncompleted
      </option>
    </select>
  </section>
</template>

<script>
export default {
  data() {
    return {
      selected: 'all',
    }
  },
}
</script>

<style lang="sass" scoped>
.filter

  &-select
    border: .0625rem white solid
    border-radius: .3125rem
    padding: .5rem .75rem
    color: white

    &__option
      background-color: #000
</style>
