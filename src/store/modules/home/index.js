import { reqGetBannerList, reqGetCateList, reqGetFloorList } from '@/api';

const state = {
  cateList: [],
  bannerList: [],
  floorList: [],
};
const mutations = {
  SET_CATELIST(state, cateList) {
    state.cateList = cateList;
  },
  SET_BANNERLIST(state, bannerList) {
    state.bannerList = bannerList;
  },
  SET_FLOORLIST(state, floorList) {
    state.floorList = floorList;
  },
};
const actions = {
  async getCateList({ commit }) {
    const res = await reqGetCateList();
    if (res.code === 200) commit('SET_CATELIST', res.data);
  },
  async getBannerList({ commit }) {
    const res = await reqGetBannerList();
    if (res.code === 200) commit('SET_BANNERLIST', res.data);
  },
  async getFloorList({ commit }) {
    const res = await reqGetFloorList();
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
