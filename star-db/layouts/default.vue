<template>
  <v-app dark>
    <div class="container">
      <header class="header">
        <header-nav />
        <header-random-planet />
      </header>
      <main class="main">
        <Nuxt />
      </main>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style lang="sass" scoped>
.container
  padding: 0 !important
  margin: 0 auto !important
  box-sizing: border-box !important
</style>
