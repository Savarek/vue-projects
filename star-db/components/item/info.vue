<template>
  <v-list-item active-class="active" color="submit">
    <h1 class="item-name">{{ item.name }}</h1>
  </v-list-item>
</template>

<script>
export default {
  props: ['item'],

  data() {
    return {}
  },
}
</script>

<style lang="sass" scoped>

.item

  &-name
    color: white
    font-weight: bold
</style>
