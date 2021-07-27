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

export default new VueRouter({
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
  routes,
});
