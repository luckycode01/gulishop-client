import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/pages/Home';
import Search from '@/pages/Search';
import Login from '@/pages/Login';
import Register from '@/pages/Register';

Vue.use(VueRouter);

const _push = VueRouter.prototype.push;
VueRouter.prototype.push = function(localtion, resolved, rejected) {
  if (!resolved && !rejected) return _push.call(this, localtion).catch(() => {});
  return _push.call(this,localtion, resolved, rejected);
};
const replace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function(localtion, resolved, rejected) {
  if (!resolved && !rejected) return replace.call(this, localtion).catch(() => {});
  return replace.call(this,localtion, resolved, rejected);
};

export default new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home,
    },
    {
      name: 'search',
      path: '/search/:keyWord',
      component: Search,
    },
    {
      path: '/login',
      component: Login,
      meta: {
        isShowFooter: true,
      },
    },
    {
      path: '/register',
      component: Register,
      meta: {
        isShowFooter: true,
      },
    },
    {
      path: '/',
      redirect: '/home',
    },
  ],
});
