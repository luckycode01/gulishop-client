module.exports = {
  devServer: {
    open: true,
    proxy: {
      "/api": {
        target: "http://gmall-h5-api.atguigu.cn",
        changeOrigin: true,
      },
    },
  },
  lintOnSave: false,
};
