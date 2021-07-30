import { reqTradeInfo, reqUserAddressList } from '@/api';

const state = {
  tradeInfo: {},
  userAddressList: [],
};

const mutations = {
  RECEIVE_TRADEINFO(state, tradeInfo) {
    state.tradeInfo = tradeInfo;
  },
  RECEIVE_USERADDRESSLIST(state, userAddressList) {
    state.userAddressList = userAddressList;
  },
};

const actions = {
  async getTradeInfo({ commit }) {
    const res = await reqTradeInfo();
    if (res.code === 200) {
      commit('RECEIVE_TRADEINFO', res.data);
    }
  },
  async getUserAddressList({ commit }) {
    const res = await reqUserAddressList();
    if (res.code === 200) {
      commit('RECEIVE_USERADDRESSLIST', res.data);
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
