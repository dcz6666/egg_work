// This file is created by egg-ts-helper@1.33.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome = require('../../../app/controller/home');
import ExportNews = require('../../../app/controller/news');
import ExportUser = require('../../../app/controller/user');
import ExportAdminArticle = require('../../../app/controller/admin/article');
import ExportAdminProduct = require('../../../app/controller/admin/product');
import ExportAdminUser = require('../../../app/controller/admin/user');
import ExportApiProduct = require('../../../app/controller/api/product');
import ExportApiUser = require('../../../app/controller/api/user');

declare module 'egg' {
  interface IController {
    home: ExportHome;
    news: ExportNews;
    user: ExportUser;
    admin: {
      article: ExportAdminArticle;
      product: ExportAdminProduct;
      user: ExportAdminUser;
    }
    api: {
      product: ExportApiProduct;
      user: ExportApiUser;
    }
  }
}
