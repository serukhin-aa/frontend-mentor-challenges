<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavbarComponent from '@/components/navigation/navbar-component.vue';
</script>

<template>
  <section class="app-container">
    <section class="app-header">
      <NavbarComponent title="Where in the World?" />
    </section>
    <main class="app-content">
      <RouterView />
    </main>
  </section>
</template>

<style scoped lang="css">
.app-container {
  display: grid;
  grid-template-columns: 0 3fr 0;
  grid-template-rows: 62px calc(100vh - 62px);
  gap: 0 0;
  grid-template-areas:
    'header header header'
    '. content .';

  > .app-header {
    grid-area: header;
    z-index: 100;
  }

  > .app-content {
    grid-area: content;
    overflow-y: auto;
    padding: 0 100px 15px 100px;
  }
}
</style>
