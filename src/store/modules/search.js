import { reqGetGoodsList } from '@/api';
const state = {
  // 商品数据
  goodsListInfo: {},
};

const mutations = {
  SET_GOODSLISTINFO(state, goodsListInfo) {
    state.goodsListInfo = goodsListInfo;
  },
};
const actions = {
  async getGoodsListInfo({ commit }, goodsParams) {
    const res = await reqGetGoodsList(goodsParams);
    if (res.code === 200) commit('SET_GOODSLISTINFO', res.data);
  },
};
const getters = {
  attrsList(state) {
    return state.goodsListInfo.attrsList;
  },
  trademarkList(state) {
    return state.goodsListInfo.trademarkList;
  },
  goodsList(state) {
    return state.goodsListInfo.goodsList;
  },
};
export default {
  state,
  mutations,
  actions,
  getters,
};
