import {reqAddOrUpdateShopCart} from '@/api';

const state = {};
const mutations = {};
const actions = {
  async addOrUpdateShopCart({ commit }, {skuId,skuNum}) {
    const res = await reqAddOrUpdateShopCart(skuId, skuNum);
    if (res.code === 200) {
      return 'ok';
    } else {
      return Promise.reject(new Error(res.message));
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
