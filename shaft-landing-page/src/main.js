import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'vue-googlemaps/dist/vue-googlemaps.css'
import BaiduMap from 'vue-baidu-map'
 
Vue.use(BaiduMap, {
  ak: 'AIzaSyC7XGjvP6DWzLIpV1AkMnN6irKS1xmkb-U'
})

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
