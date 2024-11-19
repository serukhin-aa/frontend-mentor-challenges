<script setup lang="ts">
import type { TButton } from '@/types/components/button-type';

/**
 * Компонент: Универсальная кнопка. Может принимать различную форму и внешний вид.
 *
 * @author Serukhin Aleksandr Aleksandrovich
 * @version: 0.3
 */

// Параметры кнопки:
withDefaults(defineProps<TButton>(), {
  label: 'Button',
  color: 'primary'
});

/**
 * Действия при нажатии на кнопку.
 * Отправляются внешним компонентом по отношению к текущему компоненту.
 */
const emit = defineEmits(['click']);

const onClickButton = () => {
  emit('click');
};
</script>

<template>
  <button
    type="button"
    :class="[
      'button',
      `_${color}`,
      { _rounded: rounded },
      { _sm: size === 'sm' },
      { _lg: size === 'lg' },
      { _shadow: shadow }
    ]"
    :disabled="disabled"
    @click="onClickButton"
  >
    <span class="button-icon" v-if="icon" :class="`pi ${icon}`"></span>
    <span>{{ label }}</span>
  </button>
</template>

<style scoped>
.button {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  align-content: center;
  gap: var(--button-gap);
  user-select: none;
  border: 1px solid var(--primary-color);
  border-radius: var(--button-border-radius);
  color: var(--text-color);
  font-size: 1rem;
  padding: var(--button-padding-y) var(--button-padding-x);
  font-weight: inherit;
}
.button > span.button-icon {
  font-weight: inherit;
}
.button._sm {
  font-size: var(--button-sm-font-size);
  padding: var(--button-sm-padding-y) var(--button-sm-padding-x);
}
.button._lg {
  font-size: var(--button-lg-font-size);
  padding: var(--button-lg-padding-y) var(--button-lg-padding-x);
}
.button._rounded {
  border-radius: var(--button-rounded-border-radius);
}
.button._shadow {
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
}
.button._primary {
  background-color: var(--primary-color);
}
.button._primary:hover {
  cursor: pointer;
  color: var(--text-hover-color);
}
</style>
