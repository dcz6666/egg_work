'use strict';

const Controller = require('egg').Controller;

class ProductController extends Controller {
   async index() {
    this.ctx.body ="这是商品接口"
  }
}

module.exports = ProductController;
