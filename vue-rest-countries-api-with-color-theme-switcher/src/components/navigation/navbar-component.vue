<script lang="ts" setup>
/**
 * Компонент: Панель навигации. Не содержит навигационного меню, а только
 * кнопку переключения темы сайта.
 *
 * @author Serukhin Aleksandr Aleksandrovich
 * @version: 0.3
 */
import { ref } from 'vue';
import ButtonComponent from '@/components/containment/button-component.vue';

// Параметры кнопки:
defineProps({
  title: {
    type: String,
    default: 'Application'
  }
});

/**
 * Переключение темы сайта.
 */
const theme = ref<'light' | 'dark'>(
  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
);

const setTheme = (newTheme: 'light' | 'dark') => {
  theme.value = newTheme;
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
};

function onThemeToggler() {
  setTheme(theme.value === 'light' ? 'dark' : 'light');
}
</script>

<template>
  <header>
    <h1>{{ title }}</h1>
    <div class="theme-toggle">
      <ButtonComponent
        :label="theme === 'light' ? 'Dark Mode' : 'Light Mode'"
        color="primary"
        :icon="theme === 'light' ? 'pi-moon' : 'pi-sun'"
        :shadow="false"
        size="sm"
        @click="onThemeToggler"
      />
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: var(--primary-color);
  box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.6);
  padding: 0 100px;
  width: 100%;
}
header > h1 {
  font-size: 1.5em;
  font-weight: var(--font-weight-bold);
}
header .theme-toggle {
  font-weight: var(--font-weight-bold);
}
</style>
