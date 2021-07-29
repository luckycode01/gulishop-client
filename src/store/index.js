import Vue from 'vue';
import Vuex from 'vuex';

import home from './modules/home';
import search from './modules/search';
import detail from './modules/detail';
import shopcart from './modules/shopcart';
import user from './modules/user';
Vue.use(Vuex);

const state = {};
const mutations = {};
const actions = {};
const getters = {};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    home,
    search,
    detail,
    shopcart,
    user,
  },
});
