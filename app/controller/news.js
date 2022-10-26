'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
    async index(){
        // this.ctx.body= "新闻页面"
        // var msg="ejs";
        let list = await this.service.news.getNewsList();
        let user = this.ctx.cookies.get('username',{
            encrypt:true
        });
        console.log("user==",user);
        // console.log("list",list);
        await this.ctx.render('news',{
            list,
        })
    }
    async content(){
        var query= this.ctx.query;
        let list = await this.service.news.getNewContent(query.aid);
        await this.ctx.render('newscontent',{
            list:list[0]
        })
        // console.log("query",query);
        // console.log("list",list);
    }
    
}

module.exports = NewsController;
