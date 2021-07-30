import Vue from 'vue';
import Vuex from 'vuex';

import home from './modules/home';
import user from './modules/user';
import search from './modules/search';
import detail from './modules/detail';
import shopcart from './modules/shopcart';
import trade from './modules/trade';

Vue.use(Vuex);

// 存储数据，初始化数据，页面刷新时需要重新初始化
const state = {};
// 直接修改数据，不能写if for  异步等
const mutations = {};
// 可以写if   for   异步
// 作用：1、vue与vuex之间的桥梁· 2、提交mutations修改数据（间接修改数据）
const actions = {};
//简化数据的操作
const getters = {};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  // 合并小分支的store到总的store
  modules: {
    home,
    user,
    search,
    detail,
    shopcart,
    trade,
  },
});
