import 'whatwg-fetch';
import 'custom-event-polyfill';
import 'core-js/stable/promise';
import 'core-js/stable/symbol';
import 'core-js/stable/string/starts-with';
import 'core-js/web/url';
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerMicroApps, start } from 'qiankun';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

registerMicroApps([
  {
    name: 'app-vue-history',
    entry: 'http://localhost:2222',
    container: '#appContainer',
    activeRule: '/app-vue-history',
    props: { data : store }
  },
  {
    name: 'app-vue-history2',
    entry: 'http://localhost:2233',
    container: '#appContainer',
    activeRule: '/app-vue-history2',
    props: { data : store }
  },
  {
    name: 'app-vue-vite',
    entry: 'http://localhost:3333',
    container: '#appContainer',
    activeRule: '/app-vue-vite',
  },
  {
    name: 'app-vue-vite2',
    entry: 'http://localhost:4444',
    container: '#appContainer',
    activeRule: '/app-vue-vite2',
  },
]);

start();
