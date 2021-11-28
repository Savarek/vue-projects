<template>
  <section class="container">
    <header class="header">
      <heading />
      <product-filter />
    </header>
    <main class="main">
      <product-redactor />
      <item-list />
    </main>
  </section>
</template>

<style lang="sass">
*
  font-family: Source Sans Pro, sans-serif
  margin: 0
  padding: 0

body
  background: #F5F4F2

.container
  box-sizing: border-box
  margin: 0 auto
  padding: 2rem
  max-width: 90rem

.header
  display: flex
  justify-content: space-between
  margin-bottom: 1rem

.main
  display: grid
  grid-template-columns: 1fr 3fr
</style>
