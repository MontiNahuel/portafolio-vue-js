<script setup lang="ts">
import Navbar from './components/TheNavbar.vue'
import { RouterView } from 'vue-router'
import { NavInfo } from './data.ts'
</script>

<template>
  <Navbar :items="NavInfo"/>
  <main>
    <RouterView />
  </main>
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
