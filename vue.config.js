module.exports = {
  devServer: {
    open: true,
    proxy: {
      '/api': {
        target: 'http://39.98.123.211',
        changeorigin: true,
      },
    },
  },
  lintOnSave: false,
};
