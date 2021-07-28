import store from '@/store';
import Vue from 'vue';
import VueRouter from 'vue-router';

import routes from './routes';

Vue.use(VueRouter);

const _push = VueRouter.prototype.push;
VueRouter.prototype.push = function(localtion, resolved, rejected) {
  if (!resolved && !rejected) return _push.call(this, localtion).catch(() => {});
  return _push.call(this, localtion, resolved, rejected);
};
const replace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function(localtion, resolved, rejected) {
  if (!resolved && !rejected) return replace.call(this, localtion).catch(() => {});
  return replace.call(this, localtion, resolved, rejected);
};

const router = new VueRouter({
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
  routes,
});

router.beforeEach(async (to, from, next) => {
  let token = store.state.user.token;
  let userInfo = store.state.user.userInfo;
  if (token) {
    // 有token说明已经登录
    if (to.path === '/login') {
      // 登录后再点登录，强制跳转到主页
      next('/');
    } else {
      if (userInfo.name) {
        next();
      } else {
        // 用户信息不存再时
        try {
          // 获取用户信息
          await store.dispatch('getUserInfo');
          next();
        } catch (error) {
          // 清除错误或过期的token
          store.dispatch('clearToken');
          next('/login');
        }
      }
    }
  } else {
    next();
  }
});

export default router;
