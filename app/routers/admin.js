'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
 //后台
 router.get('/admin/user',controller.admin.user.index)

 router.get('/admin/article',controller.admin.article.index)
 router.get('/admin/article/add',controller.admin.article.add)
 router.get('/admin/article/edit',controller.admin.article.edit)
};

