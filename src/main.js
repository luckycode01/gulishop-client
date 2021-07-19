import Vue from 'vue';
import App from './App.vue';

import router from '@/router';
import store from './store'

// 测试接口请求
// import { reqCategoryList } from '@/api/';
// reqCategoryList();

// 全局组件
import TypeNav from '@/components/TypeNav';
Vue.component('TypeNav', TypeNav);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app');
