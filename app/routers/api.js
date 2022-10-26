'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

 //接口
 router.get('/api/product',controller.api.product.index)
 router.get('/api/user',controller.api.product.index)
  // 路由重定向
  // router.redirect('/news','/admin/user',302)
};

