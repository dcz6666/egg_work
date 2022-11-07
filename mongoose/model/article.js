const { Schema } = require('mongoose');
var mongoose = require('./db.js');
// 定义数据表（集合的）映射 字段名称必须和数据库保持一致
var ArticleSchema =  mongoose.Schema({
    title:{
        type:String,
        trim:true   //定义 mongoose 模式修饰符 去掉空格
    },
    cid:{
        type:Schema.Types.ObjectId,
        ref:"ArticleCate" //cid 和文章分类建立关系
    },/**分类 id */
    author_id:{
        type:Schema.Types.ObjectId,
        ref:"Users" // author_id 和 用户表建立关系


    },/**用户 id */
    author_name:{
        type:String,
        default:"it营"
    },
    description:String,
    order:{
        type:Number,
        default:100
    },
    content:String,
  
})
// 定义model 操作数据库
var ArticleModel = mongoose.model('Article',ArticleSchema,"article");

module.exports = ArticleModel