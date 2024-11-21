<script setup lang="ts">
import type { TSpinner } from '@/types/components/spinner-type';
import { computed, reactive } from 'vue';

const props = withDefaults(defineProps<TSpinner>(), {
  loading: true,
  color: '#5dc596',
  size: '15px',
  margin: '2px',
  radius: '100%'
});

const spinnerStyle = reactive({
  backgroundColor: props.color,
  width: props.size,
  height: props.size,
  margin: props.margin,
  borderRadius: props.radius,
  display: 'inline-block',
  animationName: 'stretchDelay',
  animationDuration: '0.75s',
  animationIterationCount: 'infinite',
  animationTimingFunction: 'cubic-bezier(.2,.68,.18,1.08)',
  animationFillMode: 'both'
});

const spinnerDelay1 = computed(() => ({ animationDelay: '0.12s' }));
const spinnerDelay2 = computed(() => ({ animationDelay: '0.24s' }));
const spinnerDelay3 = computed(() => ({ animationDelay: '0.36s' }));
</script>

<template>
  <div class="spinner-container" v-show="loading">
    <div :style="[spinnerStyle, spinnerDelay1]"></div>
    <div :style="[spinnerStyle, spinnerDelay2]"></div>
    <div :style="[spinnerStyle, spinnerDelay3]"></div>
  </div>
</template>

<style>
.spinner-container {
  height: calc(100vh - 206px);
  display: flex;
  align-items: center;
  justify-content: center;
}
@-webkit-keyframes stretchDelay {
  0%,
  80% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-opacity: 1;
    opacity: 1;
  }
  45% {
    -webkit-transform: scale(0.1);
    transform: scale(0.1);
    -webkit-opacity: 0.7;
    opacity: 0.7;
  }
}
@keyframes stretchDelay {
  0%,
  80% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-opacity: 1;
    opacity: 1;
  }
  45% {
    -webkit-transform: scale(0.1);
    transform: scale(0.1);
    -webkit-opacity: 0.7;
    opacity: 0.7;
  }
}
</style>
