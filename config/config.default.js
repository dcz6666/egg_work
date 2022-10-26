/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1666507361955_5814';

  // add your middleware config here
  config.middleware = ['printdate','forbidip','jsonp','compress'];

  // 给printdate 中间件传入的参数
  config.printdate={
    aa:"134567894568a"
  }

  // 配置session 
  exports.session = {
    key: 'SESSION_ID',
    maxAge: 24 * 3600 * 1000, // 1 day
    httpOnly: true,
    encrypt: true
  };

  // config.auth={
  //   title:"this is auth",
      // enable:false,
      // match:"/news",
      //ignore:'/news
        // match(ctx){
          //ctx 上下文 可以获取请求的地址
        //   console.log(ctx.request.url);
        //   if(ctx.request.url==''){
        //     return true
        //   }
        //   return false
        // }
  // }

  // 需要屏蔽的ip
  config.forbidip ={
    forbidips:["127.0.0.2","127.0.0.3"]
  }


  // 框架中间件的默认配置
  config.bodyParser={
    jsonLimit:'10mb' //Default is 1mb
  }

  config.compress={
    threshold:1024 //他支持指定只有body大于配置的threshold时才进行gzip
  }

  //配置 ejs 模板引擎
  config.view = {
    mapping: {
      '.html': 'ejs',
    }
  };

  //配置公共的api
  config.api="http://www.phonegap100.com/"
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
