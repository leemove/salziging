var config = require('./config');
var logger = require('koa-logger');
const static = require('koa-static')

// blog初始化配置
module.exports = function (app, mongoose) {
  // 根据环境选择日志工具
  switch (app.env) {
    case 'development':
      app.use(logger('dev'));
      break;
    case 'production':
      app.use(require('koa-logger')({
        path: __dirname + '/log/request.log'
      }));
      break;
  }

  // 根据环境连接不同数据库
  switch (app.env) {
    case 'development':
      mongoose.connect(config.mongo.development.connectionString, config.mongo.opts);
      break;
    case 'production':
      mongoose.connect(config.mongo.production.connectionString, config.mongo.opts);
      break;
    default:
      throw new Error(app.env + '是不被连接数据库的执行环境');
  }
  app.use(async (ctx, next) => {
    const start = Date.now()
    await next()
    const ms = Date.now() - start
    console.log('请求一共用了' + ms + '毫秒')
  })
};