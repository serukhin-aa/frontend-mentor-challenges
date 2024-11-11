<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavbarComponent from '@/components/navigation/navbar-component.vue';
</script>

<template>
  <NavbarComponent title="Where in the World?" />
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
main {
  padding: 15px 100px;
  height: 100%;
}
</style>
