import Vue from 'vue';
import App from './App.vue';

import router from '@/router';
import store from '@/store';
import '@/mock/mockServe';
import 'swiper/css/swiper.min.css';

import * as API from './api';
import './utils/validate'; // 引入表单验证
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

// 注册全局组件
import TypeNav from '@/components/TypeNav';
Vue.component('TypeNav', TypeNav);
import MySwiper from '@/components/MySwiper';
Vue.component('MySwiper', MySwiper);
import Pagination from '@/components/Pagination';
Vue.component('Pagination', Pagination);

// 懒加载
import VueLazyload from 'vue-lazyload';
import loading from '@/assets/images/loading.gif';
// 在图片界面没有进入到可视范围前不加载, 在没有得到图片前先显示loading图片
Vue.use(VueLazyload, {
  // 内部自定义了一个指令lazy
  loading, // 指定未加载得到图片之前的loading图片
});

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
