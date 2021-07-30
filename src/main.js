import Vue from 'vue';
import App from './App.vue';

import router from '@/router';
import store from '@/store';
import '@/mock/mockServe';
import 'swiper/css/swiper.min.css';

import * as API from './api';
// 全局组件
// 测试接口
// import { reqCategoryList } from '@/api';
// reqCategoryList();

// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);
import { Button, Message, MessageBox } from 'element-ui';
Vue.use(Button);
Vue.prototype.$message = Message;
Vue.prototype.$alert = MessageBox.alert;

import TypeNav from '@/components/TypeNav';
Vue.component('TypeNav', TypeNav);
import MySwiper from '@/components/MySwiper';
Vue.component('MySwiper', MySwiper);

Vue.config.productionTip = false;

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },
  render: (h) => h(App),
  router,
  store,
}).$mount('#app');
