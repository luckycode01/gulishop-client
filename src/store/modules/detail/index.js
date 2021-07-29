import { reqGoodsDetailInfo } from '@/api';

const state = {
  goodsDetailInfo: {},
};
const mutations = {
  RECEIVE_GOODSDETAILINFO(state, goodsDetailInfo) {
    state.goodsDetailInfo = goodsDetailInfo;
  },
};
const actions = {
  async getGoodsDetailInfo({ commit }, skuId) {
    const res = await reqGoodsDetailInfo(skuId);
    if (res.code === 200) commit('RECEIVE_GOODSDETAILINFO', res.data);
  },
};
const getters = {
  categoryView(state) {
    return state.goodsDetailInfo.categoryView || {};
  },
  skuInfo(state) {
    return state.goodsDetailInfo.skuInfo || {};
  },
  spuSaleAttrList(state) {
    return state.goodsDetailInfo.spuSaleAttrList || [];
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
