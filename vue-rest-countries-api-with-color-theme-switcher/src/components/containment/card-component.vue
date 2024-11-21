<script setup lang="ts">
import type { TCard } from '@/types/components/card-type';

withDefaults(defineProps<TCard>(), {
  title: true,
  subtitle: true
});
</script>

<template>
  <section class="card">
    <header class="card-header" v-if="header">
      <slot name="header">
        {{ header }}
      </slot>
    </header>
    <article class="card-body">
      <div class="card-title" v-if="title">
        <slot name="title">
          {{ title }}
        </slot>
      </div>
      <div class="card-subtitle" v-if="subtitle">
        <slot name="subtitle">
          {{ subtitle }}
        </slot>
      </div>
      <div v-if="content" class="content">
        <slot name="content">
          {{ content }}
        </slot>
      </div>
    </article>
    <footer v-if="footer">
      <slot name="footer">
        {{ footer }}
      </slot>
    </footer>
  </section>
</template>

<style scoped>
.card {
  background: var(--primary-color);
  color: var(--text-color);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s;
  margin: 0 10px;

  &:hover {
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  > .card-header {
    width: 100%;
    height: 150px;
  }

  > .card-body {
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
