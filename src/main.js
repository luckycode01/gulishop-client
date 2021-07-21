import Vue from 'vue';
import App from './App.vue';

import router from '@/router';
import store from '@/store';
import '@/mock/mockServe';
import 'swiper/css/swiper.min.css';
// 全局组件
// 测试接口
// import { reqCategoryList } from '@/api';
// reqCategoryList();

import TypeNav from '@/components/TypeNav';
Vue.component('TypeNav', TypeNav);
import MySwiper from '@/components/MySwiper';
Vue.component('MySwiper', MySwiper);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app');
