import axios from 'axios';
import Nprogress from 'nprogress';
import 'nprogress/nprogress.css';
// 二次封装axios 需要创建一个新的实例封装，（如果在原来的axios上封装，当有多个服务器地址时就没办法封装）
const service = axios.create({
  // baseURL: 'http://39.98.123.211/api',
  baseURL: '/mock',
  timeout: 5000,
});

// 请求拦截器 1、修改报文   2、添加功能
// 请求拦截器中失败的回调一般不写
service.interceptors.request.use((config) => {
  //进度条
  Nprogress.start();
  return config;
});
service.interceptors.response.use(
  (response) => {
    Nprogress.done();
    return response.data;
  },
  (error) => {
    Nprogress.done();
    // alert('请求失败' + error.message);
    return Promise.reject(new Error(error.message));
  }
);

export default service;
