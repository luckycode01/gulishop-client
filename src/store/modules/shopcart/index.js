import { reqAddOrUpdateShopCart, reqAllIsChecked, reqDeleteOneCart, reqOneIsChecked, reqShopCartList, reqDeleteAllCart } from '@/api';

const state = {
  shopCartList: [],
};
const mutations = {
  RECEIVE_SHOPCARTLIST(state, shopCartList) {
    state.shopCartList = shopCartList;
  },
};
const actions = {
  // 添加或修改购物车数量
  async addOrUpdateShopCart({ commit }, { skuId, skuNum }) {
    const res = await reqAddOrUpdateShopCart(skuId, skuNum);
    if (res.code === 200) {
      return 'ok';
    }
  },
  // 获取购物车列表
  async getShopCartList({ commit }) {
    const res = await reqShopCartList();
    if (res.code === 200) commit('RECEIVE_SHOPCARTLIST', res.data);
  },
  //改变单个购物车状态
  async oneIsChecked({ commit }, { skuId, isChecked }) {
    const res = await reqOneIsChecked(skuId, isChecked);
    if (res.code === 200) return 'ok';
    else return Promise.reject(new Error(res.message));
  },
  // 批量修改购物车状态
  async allIsChecked({ commit }, { isChecked, skuIdList }) {
    const res = await reqAllIsChecked(isChecked, skuIdList);
    if (res.code === 200) return 'ok';
    else return Promise.reject(new Error(res.message));
  },
  // 单个删除
  async deleteOneCart({ commit }, skuId) {
    const res = await reqDeleteOneCart(skuId);
    if (res.code === 200) return 'ok';
    else return Promise.reject(new Error(res.message));
  },
  // 批量删除
  async deleteAllCart({ commit }, skuIdList) {
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
