'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;

    // 调用extend 里面扩展的application
    // console.log("0000",this.app.foo())
    // console.log("11111",this.ctx.getHost())
    // console.log("22222",this.ctx.request.foo1())

    // ctx.body = 'hi, egg';
    // 设置一个
    /** 第一个参数cookies名字
     * 第二参数cookies的值
     * 第三个参数 ：配置
      */

     ctx.cookies.set("username","张三",{
       maxAge:24*3600*1000,  //cookies 存储一天
       httpOnly:true,
       signed:true, //d对cookie进行签名 防止用户修改cookie
       encrypt:true //是否对cookie 进行加密 
     })

    // this.ctx.csrf 用户访问这个页面生成一个秘钥
    console.log("this.ctx.csrf",this.ctx.csrf)
    await this.ctx.render('home')
  }
  // 获取post 请求的数据
  async add(){
      console.log("this.ctx.request.body",this.ctx.request.body)
      this.ctx.body=this.ctx.request.body
  }

  async loginOut(){
    //清理cookies
    this.ctx.cookies.set('username',null);
    this.ctx.redirect('/news') /**路由跳转 */
  }
}

module.exports = HomeController;
