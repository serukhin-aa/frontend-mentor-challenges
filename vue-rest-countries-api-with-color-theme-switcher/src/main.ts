import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import { TemplatePreset } from './presets/template.preset';

const app = createApp(App);

app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: TemplatePreset,
    options: {
      prefix: 'p',
      darkModeSelector: '.p-dark',
      cssLayer: false
    }
  }
});
app.mount('#app');
