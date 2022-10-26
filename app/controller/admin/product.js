'use strict';

const Controller = require('egg').Controller;

class ProductController extends Controller {
   async index() {
        this.ctx.body = "这是商品管理后台"
  }
}

module.exports = ProductController;
