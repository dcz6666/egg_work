
var mongoose = require('./db.js');
var ArticleCateSchema =  mongoose.Schema({
    title:{type:String,unique:true},
    description:String,
    status:{
        type:Number,
        default:1
    }
})

// 定义model 操作数据库
var ArticleCateleModel = mongoose.model('ArticleCate',ArticleCateSchema,"articleCate");
module.exports = ArticleCateleModel