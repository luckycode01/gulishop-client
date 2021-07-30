import { reqGetCode, reqLogin, reqRegister, reqUserInfo, reqLogout } from '@/api';
import { getUserTempId } from '@/utils/userAbout';
const state = {
  userTempId: getUserTempId(),
  code: '',
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
  RECEIVE_USERINFO(state, userinfo) {
    state.userInfo = userinfo;
  },
  RESET_USERINFO(state) {
    state.userInfo = {};
  },
  RESET_TOKEN(state) {
    state.token = '';
  },
};
const actions = {
  // 获取验证密码
  async getCode({ commit }, phone) {
    const res = await reqGetCode(phone);
    if (res.code === 200) {
      commit('RECEIVE_CODE', res.data);
      return res.data;
    }
  },

  // 注册
  async register({ commit }, userInfo) {
    const res = await reqRegister(userInfo);
    if (res.code === 200) return 'ok';
    else return Promise.reject(new Error(res.message));
  },

  // 登录
  async login({ commit }, userInfo) {
    const res = await reqLogin(userInfo);
    if (res.code === 200) {
      localStorage.setItem('token_key', res.data.token);
      commit('RECEIVE_TOKEN', res.data.token);
      return 'ok';
    } else return Promise.reject(new Error(res.message));
  },
  // /获取用户信息
  async getUserInfo({ commit }) {
    const res = await reqUserInfo();
    if (res.code === 200) {
      commit('RECEIVE_USERINFO', res.data);
    }
  },
  // 清空token
  resetToken({ commit }) {
    localStorage.removeItem('token_key');
    commit('RESET_TOKEN');
  },

  // 退出登录
  async logout({ commit, dispatch }) {
    const res = await reqLogout();
    if (res.code === 200) {
      commit('RESET_USERINFO');
      dispatch('resetToken');
      return 'ok';
    } else {
      return Promise.reject(new Error('faild'));
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
