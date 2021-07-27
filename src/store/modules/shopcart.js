import { reqAddOrUpdateShopCart, reqChangeAllIsChecked, reqChangeOneIsCheck, reqDeleteAllCart, reqDeleteOneCart, reqShopCartList } from '@/api';

const state = {
  shopCartList: [],
};
const mutations = {
  RECEVE_SHOPCARTLIST(state, shopCartList) {
    state.shopCartList = shopCartList;
  },
};
const actions = {
  async addOrUpdateShopCart({ commit }, { skuId, skuNum }) {
    const res = await reqAddOrUpdateShopCart(skuId, skuNum);
    if (res.code === 200) {
      return 'ok';
    } else {
      return Promise.reject(new Error(res.message));
    }
  },
  async getShopCartList({ commit }) {
    const res = await reqShopCartList();
    if (res.code === 200) {
      commit('RECEVE_SHOPCARTLIST', res.data);
    }
  },
  async changeOneIsCheck({ commit }, { skuId, isChecked }) {
    const res = await reqChangeOneIsCheck(skuId, isChecked);
    if (res.code === 200) return 'ok';
    else {
      return Promise.reject(new Error(res.message));
    }
  },
  async changeAllIsChecked({ commit }, { isChecked, skuIdList }) {
    const res = await reqChangeAllIsChecked(isChecked, skuIdList);
    if (res.code === 200) return 'ok';
    else return Promise.reject(new Error(res.message));
  },
  async changeOneCart({ commit }, skuId) {
    const res = await reqDeleteOneCart(skuId);
    if (res.code === 200) return 'ok';
    else return Promise.reject(new Error(res.message));
  },
  async changeAllCart({ commit }, skuIdList) {
    const res = await reqDeleteAllCart(skuIdList);
    if (res.code === 200) return 'ok';
    else return Promise.reject(new Error(res.message));
  },
};
const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
