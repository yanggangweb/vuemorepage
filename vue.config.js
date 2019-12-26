let pageMethod = require('./util/getPages.js');
pages = pageMethod.pages();
module.exports = {
    pages,
    baseUrl: process.env.NODE_ENV === 'production'
    ? '/dist/'
    : '/',
	devServer: {
    // host: 'localhost',
    port: 8460, // 端口号
    https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器  http://172.16.1.12:7071/rest/mcdPhoneBar/
    hotOnly: true, // 热更新
  },
}