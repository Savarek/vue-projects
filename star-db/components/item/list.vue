<template>
  <v-list>
    <v-list-item-group>
      <item-info v-for="(item, index) of category" :key="index" :item="item" />
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  props: ['category'],
  data() {
    return {}
  },
}
</script>

<style lang="sass" scoped>

.list
  border-radius: .1875rem
  border: .0625rem #2D2D2D solid
  list-style-type: none
</style>
