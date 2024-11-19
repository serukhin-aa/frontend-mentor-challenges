<script setup lang="ts">
import type { TSelect } from '@/types/components/select-type';

withDefaults(defineProps<TSelect>(), {
  width: '150px'
});
</script>

<template>
  <div class="form-select" :style="{ width: width }">
    <label :for="name" class="select-label">{{ label }}</label>
    <select class="select-text" :name="name" :id="name">
      <option value="" hidden>{{ placeholder }}</option>
      <option v-for="(option, index) in options" :key="index" :value="option.value">
        {{ option.label }}
      </option>
    </select>
    <span v-if="icon" :class="`select-icon pi ${icon}`"></span>
  </div>
</template>

<style scoped lang="css">
.form-select {
  position: relative;

  > .select-text {
    cursor: pointer;
    appearance: none;
    width: 100%;
    height: 40px;
    border: 1px solid lightgray;
    border-radius: 5px;
    outline: none;
    background-color: var(--primary-color);
    color: var(--text-color);
    padding-left: 10px;
    padding-right: 10px;
    background-color: var(--background-color);
  }

  > .select-icon {
    position: absolute;
    top: 50%;
    right: 12px;
    margin-top: calc(-1 * 1rem / 2);
  }
}
</style>
