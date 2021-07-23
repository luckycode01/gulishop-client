import { reqGoodsListInfo } from '@/api';
const state = {
  goodsListInfo: {},
};
const mutations = {
  SET_GOODSLISTINFO(state, goodsListInfo) {
    state.goodsListInfo = goodsListInfo;
  },
};
const actions = {
  async getGoodsListInfo({ commit }, searchInfo) {
    const res = await reqGoodsListInfo(searchInfo);
    if (res.code === 200) {
      commit('SET_GOODSLISTINFO', res.data);
    }
  },
};
const getters = {
  trademarkList(state) {
    return state.goodsListInfo.trademarkList || [];
  },
  attrsList(state) {
    return state.goodsListInfo.attrsList || [];
  },
  goodsList(state) {
    return state.goodsListInfo.goodsList || [];
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
