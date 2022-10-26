'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    this.ctx.body="这是用户管理后台"
  }
}

module.exports = UserController;
