import { reqAddOrUpdateToCart, reqCartList, reqUpdateOneCartIsCheak, reqUpdateAllCartIsCheak, reqDeleteOneCart, reqDeleteAllCart } from '@/api';

const state = {
  cartList: [],
};
const mutations = {
  RECEIVE_CARTLIST(state, cartList) {
    state.cartList = cartList;
  },
};
const actions = {
  // 获取购物车列表
  async getCartList({ commit }) {
    const res = await reqCartList();
    if (res.code === 200) {
      commit('RECEIVE_CARTLIST', res.data);
    }
  },
  //添加或更新购物车
  async AddOrUpdateToCart({ commit }, { skuId, skuNum }) {
    const res = await reqAddOrUpdateToCart(skuId, skuNum);
    if (res.code === 200) {
      return 'ok';
    } else {
      return Promise.reject(new Error(res.message));
    }
  },
  // 改变购物车单个物品状态
  async updateOneCartIsCheak({ commit }, { skuId, isChecked }) {
    const res = await reqUpdateOneCartIsCheak(skuId, isChecked);
    if (res.code === 200) {
      return 'ok';
    } else {
      return Promise.reject(new Error(res.message));
    }
  },
  // 改变购物车多个物品状态
  async updateAllCartIsCheak({ commit }, { isChecked, skuIdList }) {
    const res = await reqUpdateAllCartIsCheak(isChecked, skuIdList);
    if (res.code === 200) {
      return 'ok';
    } else {
      return Promise.reject(new Error(res.message));
    }
  },
  // 单个删除
  async deleteOneCart({ commit }, skuId) {
    const res = await reqDeleteOneCart(skuId);
    if (res.code === 200) {
      return 'ok';
    } else {
      return Promise.reject(new Error(res.message));
    }
  },
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
