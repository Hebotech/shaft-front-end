import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { VueHammer } from 'vue2-hammer'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false;
Vue.use(VueHammer)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
