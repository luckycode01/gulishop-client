import Vue from 'vue';
import VueRouter from 'vue-router';

import routes from './routes';

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
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
  routes,
});
