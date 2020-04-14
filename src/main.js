import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueMeta from 'vue-meta'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import VueAnalytics from 'vue-analytics';


Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true
})

Vue.config.productionTip = false;

Vue.use(VueAnalytics, {
  id: 'UA-129526873-3',
  router
});


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
