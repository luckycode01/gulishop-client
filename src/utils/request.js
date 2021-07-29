import axios from 'axios';
import Nprogress from 'nprogress';
import store from '../store';
const service = axios.create({
  baseURL: 'http://39.98.123.211/api',
  timeout: 5000,
});

service.interceptors.request.use(
  (config) => {
    // 显示进度条
    Nprogress.start();

    let userTempId = store.state.user.userTempId;
    if (userTempId) {
      config.headers.userTempId = userTempId;
    }
    let token = store.state.user.token;
    if (token) {
      config.headers.token = token;
    }

    return config;
  }
  // 拦截失败的回调一般不写
);
service.interceptors.response.use(
  (response) => {
    // 结束进度条
    Nprogress.done();
    // 返回数据
    return response.data;
  },
  (errors) => {
    Nprogress.done();
    console.log(err);
    return new Promise(() => {});
  }
);

export default service;
