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
    path: '/contigo',
    name: 'Contigo',
    component: () => import('../views/Contigo.vue'),
  },
  {
    path: '/hot-sale',
    name: 'Hot Sale',
    component: () => import('../views/HotSale.vue'),
  },
];

const router = new VueRouter({
    mode:'history',
    routes,
});

export default router;
