//请求函数
import {reqCategoryList} from '@/api'


const state = {
  categoryList: [],
};
const mutations = {
  SET_CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList;
  }
};
const actions = {
  async getCategoryList({commit}) {
    const res = await reqCategoryList();
    if (res.code === 200) {
      commit('SET_CATEGORYLIST',res.data);
    }
  }
};
const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
}
