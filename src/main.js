import Vue from 'vue';
import App from './App.vue';

import router from '@/router';
// 全局组件
import TypeNav from '@/components/TypeNav';
Vue.component('TypeNav', TypeNav);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
