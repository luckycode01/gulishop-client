import { reqGetCode, reqLogin, reqRegister, reqUserInfo } from '@/api';
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
};
const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
