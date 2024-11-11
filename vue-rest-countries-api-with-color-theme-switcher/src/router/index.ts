import { createRouter, createWebHistory } from 'vue-router';
import CountrysView from '@/views/countrys-view.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Countrys',
      component: CountrysView
    }
  ]
});

export default router;
