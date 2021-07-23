import axios from 'axios';
import Nprogress from 'nprogress';

const service = axios.create({
  baseURL: '/mock',
  timeout: 5000,
});

service.interceptors.request.use(
  (config) => {
    // 显示进度条
    Nprogress.start();
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
