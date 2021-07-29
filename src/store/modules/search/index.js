import { reqGoodsListInfo } from '@/api';

const state = {
  goodsListInfo: {},
};
const mutations = {
  RECEIVE_GOODSLISTINFO(state, goodsListInfo) {
    state.goodsListInfo = goodsListInfo;
  },
};
const actions = {
  async getCoodsListInfo({ commit }, goodsInfo) {
    const res = await reqGoodsListInfo(goodsInfo);
    if (res.code === 200) commit('RECEIVE_GOODSLISTINFO', res.data);
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
