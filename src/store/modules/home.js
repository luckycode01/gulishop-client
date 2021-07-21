import { reqCategoryList, reqGetBannerList, reqGetFloorList } from '@/api';

const state = {
  // 分类数据
  categoryList: [],
  // 轮播图数据
  bannerList: [],
  // 楼层数据
  floorList: [],
};
const mutations = {
  RECEIVE_CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList;
  },
  RECEIVE_BANNERLIST(state, bannerList) {
    state.bannerList = bannerList;
  },
  RECEIVE_FLOORLIST(state, floorList) {
    state.floorList = floorList;
  },
};
const actions = {
  // 获取分类数据
  async getCategoryList({ commit }) {
    const res = await reqCategoryList();
    if (res.code === 200) {
      commit('RECEIVE_CATEGORYLIST', res.data);
    }
  },
  // 获取轮播
  async getBannerList({ commit }) {
    const res = await reqGetBannerList();
    if (res.code === 200) {
      commit('RECEIVE_BANNERLIST', res.data);
    }
  },
  async getFloorList({ commit }) {
    const res = await reqGetFloorList();
    if (res.code === 200) {
      commit('RECEIVE_FLOORLIST', res.data);
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
