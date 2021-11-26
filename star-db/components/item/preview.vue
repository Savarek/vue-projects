<template>
  <section class="card">
    <img
      :src="`https://starwars-visualguide.com/assets/img/${param}/${id}.jpg`"
      alt=""
      class="card-image"
    />
    {{ currentItem }}
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      id: 3,
      param: this.$route.params.category,
    }
  },
  fetch() {
    this.getItem(this.$route.params.category, this.id)
  },
  computed: {
    ...mapGetters(['currentItem']),
  },
  methods: {
    ...mapActions(['getItem']),
  },
}
</script>
