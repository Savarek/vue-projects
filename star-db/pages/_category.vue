<template>
  <section class="category">
    <item-list :category="data" />
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  fetch() {
    this.getDataByCategory(this.$route.params.category)
  },
  computed: {
    ...mapGetters(['data']),
  },
  methods: {
    ...mapActions(['getDataByCategory']),
  },
}
</script>
