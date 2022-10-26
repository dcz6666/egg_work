'use strict';

const Subscription = require('egg').Subscription;
var i=0;
class Watchfile extends Subscription {
    // 通过schedule 属性来设置定时任务的执行间隔配置
  static get schedule() {
        return{
            interval:'2s',
            type:'all'
        }
  }
  async subscribe(){
    // 定时任务执行的操作
    ++i;
    console.log("i",i);
  }
}

module.exports = Watchfile;
