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
    // 有token说明已登录，用户再点击登录
    if (to.path === '/login') {
      next('/');
    } else {
      // 判断是否有用户信息
      if (userInfo.name) {
        // 有用户
        next();
      } else {
        // 没有用户信息
        try {
          await store.dispatch('getUserInfo');
          next();
        } catch (err) {
          await store.dispatch('resetToken');
          next('/');
        }
      }
    }
  } else {
    // 未作支付页面，暂时全部放行
    next();
  }
});

export default router;
