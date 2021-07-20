import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/pages/Home';
import Search from '@/pages/Search';
import Login from '@/pages/Login';
import Register from '@/pages/Register';

Vue.use(VueRouter);

const _push = VueRouter.prototype.push;
VueRouter.prototype.push = function(location, resolved, rejected) {
  if (resolved === undefined && rejected === undefined) {
    return _push.call(this, location).catch(() => {});
  } else {
    return _push.call(this, location, resolved, rejected);
  }
};
const _replace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function(location, resolved, rejected) {
  if (resolved === undefined && rejected === undefined) {
    return _replace.call(this, location).catch(() => {});
  } else {
    return _replace.call(this, location, resolved, rejected);
  }
};

export default new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home,
    },
    {
      name: 'search',
      path: '/search/:keyword',
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
