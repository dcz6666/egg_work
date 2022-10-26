'use strict';

// const Controller = require('egg').Controller;
const BaseController =require('../core/base')

class UserController extends BaseController {
    async login() {
        await this.ctx.render('login')
    }

    async register() {
        await this.ctx.render('register')
    }
    async doLogin() {
        console.log("this.ctx.request.body==1",this.ctx.request.body)
        await this.success('/login')
    }
    async doRegister() {
        console.log(this.ctx.request.body)
        await this.success('/login')
    }

}

module.exports = UserController;
