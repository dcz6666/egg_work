'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
   async getNewsList() {
        //通过抓取接口返回数据
        //curl 的方法可以获取远程的数据
        var api =this.config.api+'appapi.php?a=getPortalList&catid=20&page=1'
        var response = await this.ctx.curl(api);
        let data = JSON.parse(response.data);
        return data.result;
  }
  async getNewContent(aid) {
    //通过抓取接口返回数据
    //curl 的方法可以获取远程的数据
    var api =this.config.api+`appapi.php?a=getPortalArticle&aid=${aid}`
    var response = await this.ctx.curl(api);
    let data = JSON.parse(response.data);
    return data.result;
}
}

module.exports = NewsService;
