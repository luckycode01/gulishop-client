import store from "@/store";
import Vue from "vue";
import VueRouter from "vue-router";

import routes from "./routes";

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

const router = new VueRouter({
  mode: "hash",
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
  routes,
});

router.beforeEach(async (to, from, next) => {
  // 获取token和用户信息
  let token = store.state.user.token;
  let userInfo = store.state.user.userInfo;
  if (token) {
    // token存在说明用户已经登录
    if (to.path === "/login") {
      // 用户已经登录了还点击登录，
      next("/");
    } else {
      // 登录后点击的不是login页，判断有没有用户信息，
      if (userInfo.name) {
        next();
      } else {
        try {
          await store.dispatch("getUserInfo");
          next();
        } catch (error) {
          store.dispatch("clearToken");
          next("/login");
        }
      }
    }
  } else {
    // 没有token，没有登录
    let targetPath = to.path;
    if (
      targetPath.indexOf("/trade") === 0 ||
      targetPath.indexOf("/pay") === 0 ||
      targetPath.startsWith("/center")
    ) {
      next("/login?redirect=" + targetPath);
    } else {
      next();
    }
  }
});

export default router;
