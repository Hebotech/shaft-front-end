import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/hot-sale',
    name: 'HotSale',
    component: () => import('../views/HotSale.vue'),
  },
  {
    path: '/contigo',
    name: 'Contigo',
    component: () => import('../views/Contigo.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
