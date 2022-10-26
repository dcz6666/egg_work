// 'use strict';

 /**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  // 获取路由中间件
  var auth = app.middleware.auth({title:'this.is router.js middleware'});
  router.get('/',auth, controller.home.index);
  router.post('/add', controller.home.add);
  router.get('/news',controller.news.index)
  router.get('/newscontent',controller.news.content)

  router.get('/login', auth,controller.user.login);
  router.post('/doLogin', controller.user.doLogin);

};

