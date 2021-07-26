import { reqGoodsDetailInfo } from '@/api';

const state = {
  goodsDetailInfo: {},
};
const mutations = {
  GET_GOODSDETAILINFO(state, goodsDetailInfo) {
    state.goodsDetailInfo = goodsDetailInfo;
  },
};
const actions = {
  async getGoodsDetailInfo({ commit }, skuId) {
    const res = await reqGoodsDetailInfo(skuId);
    if (res.code === 200) {
      commit('GET_GOODSDETAILINFO', res.data);
    }
  },
};
const getters = {
  categoryView(state) {
    return state.goodsDetailInfo.categoryView || {};
  },
  spuSaleAttrList(state) {
    return state.goodsDetailInfo.spuSaleAttrList || {};
  },
  skuInfo(state) {
    return state.goodsDetailInfo.skuInfo || [];
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
