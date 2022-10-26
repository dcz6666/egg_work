'use strict';

const Controller = require('egg').Controller;

class BaseController extends Controller {
    async success(redirectUrl) {
        await this.ctx.render('public/success', {
            redirectUrl: redirectUrl || '/'
        })
    }
    async error(){
        await this.ctx.render('public/error',{
            redirectUrl: redirectUrl || '/'
        })
    }
    
}

module.exports = BaseController;
