<template>
  <section class="random-planet">
    <img
      :src="`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`"
      alt="planet image"
      class="random-planet__img"
    />
    <div class="random-planet__info">
      <p class="random-planet__name">Planet: {{ planet.name }}</p>
      <p class="random-planet__population">
        Population: {{ planet.population }}
      </p>
      <p class="random-planet__rotation">
        Rotation period: {{ planet.rotation_period }} days
      </p>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  props: ['planet'],
  data() {
    return {
      id: Math.floor(Math.random() * 10) + 1,
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

<style lang="sass" scoped>
.random-planet
  display: flex
  background-color: #1E1E1E
  margin: 2rem 0
  border-radius: .625rem
  padding: 3.125rem 2rem

  &__img
    max-width: 15.625rem
    max-height: 15.625rem
    border-radius: 1.25rem
    border: .125rem #fff solid

  &__info
    display: flex
    flex-direction: column
    justify-content: center
    margin-left: 12.5rem

  &__name
    font-weight: bold
    font-size: 2rem

  &__population
    font-weight: bold
    font-size: 2rem

  &__rotation
    font-weight: bold
    font-size: 2rem
</style>
