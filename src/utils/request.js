import axios from 'axios';
import Nprogress from 'nprogress';
import 'nprogress/nprogress.css';
import store from '@/store';
const service = axios.create({
  baseURL: '/api',
  timeout: 5000,
});

//请求拦截器
// 作用修改报文，添加功能
service.interceptors.request.use(
  (config) => {
    Nprogress.start();

    // 设置请求头，添加唯一标识
    // let userTempId = localStorage.getItem('userTempId');
    // 这里不从本地存储拿userTempId 因为影响效率，在vueX 中已经保存了一份，直接就获取vuex的userTempId，
    let userTempId = store.state.user.userTempId;
    if (userTempId) {
      config.headers.userTempId = userTempId;
    }
    // 一定要返回报文
    return config;
  }
  // 请求拦截器可不写失败的回调
);
// 响应拦截器
service.interceptors.response.use(
  (response) => {
    Nprogress.done();
    return response.data;
  },
  (error) => {
    Nprogress.done();
    console.log('请求失败' + error.message);
    // 后续还需处理，就需要把错误信息传下去
    // return Promise.reject(new Error(error.message));
    // 后续不需要处理，中断promise链
    return new Promise(() => {});
  }
);

export default service;
