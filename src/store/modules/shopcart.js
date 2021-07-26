import { reqAddOrUpdateToCart } from '@/api';

const state = {};
const mutations = {};
const actions = {
  async AddOrUpdateToCart({ commit }, { skuId, skuNum }) {
    const res = await reqAddOrUpdateToCart(skuId, skuNum);
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
