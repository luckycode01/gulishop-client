import Vue from 'vue';
import Vuex from 'vuex';

import home from './modules/home';
import user from './modules/user';
import search from './modules/search';
import detail from './modules/detail';
import shopcart from './modules/shopcart';


Vue.use(Vuex);

// 保存初始状态数据，页面刷新时重新初始化
const state = {};
// 修改数据
const mutations = {};
// 提供vue与vuex的桥梁； 提交mutations 修改数据
const actions = {};
// 简化数据操作，计算
const getters = {};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,

  modules: {
    home,
    user,
    search,
    detail,
    shopcart
  },
});
