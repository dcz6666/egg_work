var mongoose = require('./db.js');
// 定义数据表（集合的）映射 字段名称必须和数据库保持一致
var NewsSchema =  mongoose.Schema({
    title:String,
    author:String,
    pic:String,
    content:String,
    status:{
        type:Number,
        default:1
    }
  
})
// 定义model 操作数据库
var NewsModel = mongoose.model('News',NewsSchema);

module.exports = NewsModel