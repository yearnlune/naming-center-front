process.env.VUE_APP_VERSION = require("./package.json").version;

module.exports = {
  transpileDependencies: ["vuetify"],

  chainWebpack: (config) => {
    config.module
      .rule("babel")
      .test("/\\.js$/")
      .use("babel-loader")
      .loader("babel-loader");
    config.module
      .rule("eslint")
      .pre()
      .exclude.add(/src\/assets/)
      .add(/public\/static/);
  },
};
