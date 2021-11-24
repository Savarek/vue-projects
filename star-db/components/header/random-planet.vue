<template>
  <section class="random-planet">
    <img
      :src="`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`"
      alt=""
      class="random-planet__img"
    />
    <h1 class="123512345sd">{{ planet.name }}</h1>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  props: ['planet'],
  data() {
    return {
      id: Math.floor(Math.random() * 40) + 1,
    }
  },
  fetch() {
    this.getPlanet(this.id)
  },
  computed: {
    ...mapGetters(['planet']),
  },
  methods: {
    ...mapActions(['getPlanet']),
  },
}
</script>
