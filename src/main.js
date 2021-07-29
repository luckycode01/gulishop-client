import Vue from 'vue';
import App from './App.vue';

import router from '@/router';
import store from '@/store';
import 'nprogress/nprogress.css';
import '@/mock/mockServe';
import 'swiper/css/swiper.min.css';
// 全局组件
import TypeNav from '@/components/TypeNav';
Vue.component('TypeNav', TypeNav);
import MySwiper from '@/components/MySwiper';
Vue.component('MySwiper', MySwiper);
import Pagination from '@/components/Pagination';
Vue.component('Pagination', Pagination);

Vue.config.productionTip = false;

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  render: (h) => h(App),
  router,
  store,
}).$mount('#app');
