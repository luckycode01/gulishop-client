import { reqGetCode, reqGetUserInfo, reqLogin, reqLogout, reqRegister } from '@/api';
import { getUserTempId } from '@/utils/userAbout';

const state = {
  userTempId: getUserTempId(),
  code: '',
  // token: '',
  token: localStorage.getItem('token_key'),
  userInfo: {},
};
const mutations = {
  RECEIVE_GETCODE(state, code) {
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
  // 获取验证码
  async getCode({ commit }, phone) {
    const res = await reqGetCode(phone);
    if (res.code === 200) {
      commit('RECEIVE_GETCODE', res.data);
      return res.data;
    }
    return Promise.reject(new Error(res.message));
  },
  // 注册
  async register({ commit }, userInfo) {
    const res = await reqRegister(userInfo);
    if (res.code === 200) return 'ok';
    return Promise.reject(new Error(res.message));
  },
  // 登录
  async login({ commit }, userInfo) {
    const res = await reqLogin(userInfo);
    if (res.code === 200) {
      commit('RECEIVE_TOKEN', res.data.token);
      localStorage.setItem('token_key', res.data.token);
      return res.data.token;
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
      return Promise.reject(new Error(res.message));
    }
  },
  // 清除token
  clearToken({ commit }) {
    localStorage.removeItem('token_key');
    commit('RESET_TOKEN');
  },
  async logout({ commit, dispatch }) {
    const res = await reqLogout();
    if (res.code === 200) {
      commit('RESET_USERINFO');
      dispatch('clearToken');
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
