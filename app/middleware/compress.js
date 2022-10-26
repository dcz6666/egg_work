//egg.js 中使用koa-compress 开启压缩
module.exports = require('koa-compress')

/**
 * egg.js中非标准的中间件配置
 * const Middleware = require('some-koa-middleware');
 * module.exports =(option,app)=>{
 *     return Middleware(options.compiler,options.xxx)
 * }
 */