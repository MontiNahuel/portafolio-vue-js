<script setup lang="ts">
import Navbar from './components/TheNavbar.vue'
</script>

<template>
  <Navbar :items="['Home', 'About', 'Contact']"/>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
</style>
