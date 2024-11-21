<script setup lang="ts">
import type { TInput } from '@/types/components/input-type';

withDefaults(defineProps<TInput>(), {
  width: '300px'
});
</script>

<template>
  <div class="form-input" :style="{ width: width }">
    <span v-if="icon" :class="`inputicon pi ${icon}`"></span>
    <input
      class="input-text"
      :type="type"
      :name="name"
      :id="name"
      :placeholder="placeholder"
      :value="value"
    />
    <label :for="name" class="input-label">{{ label }}</label>
  </div>
</template>

<style scoped lang="css">
.form-input {
  position: relative;

  > .inputicon {
    position: absolute;
    top: 50%;
    margin-top: calc(-1 * 1rem / 2);
    color: #94a3b8;
    line-height: 1;
    margin-left: 24px;
  }

  > .input-text {
    width: 100%;
    height: 40px;
    border: 1px solid lightgray;
    border-radius: 5px;
    outline: none;
    background-color: var(--primary-color);
    color: var(--text-color);
    padding-left: 60px;
    padding-right: 20px;

    &::placeholder {
      color: var(--text-color);
    }
  }
}
</style>
