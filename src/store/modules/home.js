import { reqCategoryList } from '@/api';

const state = {
  categoryList: [],
};
const mutations = {
  RECEIVE_CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList;
  },
};
const actions = {
  async getCategoryList({ commit }) {
    const res = await reqCategoryList();
    if (res.code === 200) {
      commit('RECEIVE_CATEGORYLIST', res.data);
    }
  },
};
const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
