<template>
  <section class="date">
    <h1 class="date-time">{{ date }}</h1>
  </section>
</template>

<script>
export default {
  data() {
    return {
      date: '',
    }
  },
  mounted() {
    this.date = new Date()
    setInterval(() => {
      this.date = new Date()
    }, 1000)
  },
}
</script>

<style lang="sass" scoped>
.date
  margin-top: 3rem
</style>
