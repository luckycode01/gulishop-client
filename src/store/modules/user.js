import { reqGetCode, reqRegister, reqLogin, reqGetUserInfo, logout } from '@/api';
import { getuserTempId } from '@/utils/userabout';

const state = {
  userTempId: getuserTempId(),
  code: '',
  // token: '',
  token: localStorage.getItem('token_key'),
  userInfo: {},
};
const mutations = {
  RECEIVE_CODE(state, code) {
    state.code = code;
  },
  RECEIVE_TOKEN(state, token) {
    state.token = token;
  },
  RECEIVE_USERINFO(state, userInfo) {
    state.userInfo = userInfo;
  },
  RESET_TOKEN(state) {
    state.token = '';
  },
  RESET_USERINFO(state) {
    state.userInfo = {};
  },
};
const actions = {
  async getCode({ commit }, phone) {
    const res = await reqGetCode(phone);

    if (res.code === 200) {
      commit('RECEIVE_CODE', res.data);
      return res.data;
    } else {
      return Promise.reject(new Error(res.message));
    }
  },
  async register({ commit }, userInfo) {
    const res = await reqRegister(userInfo);
    if (res.code === 200) {
      return 'ok';
    } else {
      return Promise.reject(new Error(res.message));
    }
  },

  // 登录
  async login({ commit }, userInfo) {
    const res = await reqLogin(userInfo);
    if (res.code === 200) {
      commit('RECEIVE_TOKEN', res.data.token);
      localStorage.setItem('token_key', res.data.token);
      return 'ok';
    } else {
      return Promise.reject(new Error(res.message));
    }
  },
  // 获取用户信息
  async getUserInfo({ commit }) {
    const res = await reqGetUserInfo();
    if (res.code === 200) {
      commit('RECEIVE_USERINFO', res.data);
      return 'ok';
    } else {
      return Promise.reject(new Error());
    }
  },
  // 清除token
  clearToke({ commit }) {
    localStorage.removeItem('token_key');
    commit('RESET_TOKEN');
  },
  // 退出登录
  async logout({ commit, dispatch }) {
    const res = await logout();
    if (res.code === 200) {
      commit('RESET_USERINFO');
      dispatch('clearToke');
      return 'ok';
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
