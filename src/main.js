import Vue from 'vue';
import App from './App.vue';

import router from '@/router';
import store from './store';
import 'swiper/css/swiper.min.css';
import '@/mock/mockServe';

// 测试接口请求
// import { reqCategoryList } from '@/api/';
// reqCategoryList();

// 全局组件
import TypeNav from '@/components/TypeNav';
Vue.component('TypeNav', TypeNav);
import MySwiper from '@/components/MySwiper';
Vue.component('MySwiper', MySwiper);

Vue.config.productionTip = false;

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  render: (h) => h(App),
  router,
  store,
}).$mount('#app');
