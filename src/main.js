import Vue from 'vue';
import App from './App.vue';

import router from '@/router';
import store from './store';
import 'swiper/css/swiper.min.css';
import '@/mock/mockServe';

import { MessageBox, Message } from 'element-ui';
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$message = Message;
// 测试接口请求
// import { reqCategoryList } from '@/api/';
// reqCategoryList();
import * as API from '@/api';
Vue.prototype.$API = API;

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
