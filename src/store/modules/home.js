//请求函数
import { reqCategoryList, reqFloorList, reqBannerList } from '@/api';

const state = {
  categoryList: [],
  bannerList: [],
  floorList: [],
};
const mutations = {
  SET_CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList;
  },
  SET_BANNERLIST(state, bannerList) {
    state.bannerList = bannerList;
  },
  SET_FLOORLIST(state, floorList) {
    state.floorList = floorList;
  },
};
const actions = {
  async getCategoryList({ commit }) {
    const res = await reqCategoryList();
    if (res.code === 200) {
      commit('SET_CATEGORYLIST', res.data);
    }
  },
  async getBannerList({ commit }) {
    const res = await reqBannerList();
    if (res.code === 200) commit('SET_BANNERLIST', res.data);
  },
  async getFloorList({ commit }) {
    const res = await reqFloorList();
    if (res.code === 200) commit('SET_FLOORLIST', res.data);
  },
};
const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
