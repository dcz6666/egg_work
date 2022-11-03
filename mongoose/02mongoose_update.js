//引入mongoose
const mongoose = require('mongoose');
//2、建立链接
mongoose.connect('mongodb://127.0.0.1:27017/eggcms');


var UserSchema =  mongoose.Schema({
    title:String,
    author:String,
    pic:String,
    content:String,
    status:Number
})

// 定义操作数据库的Model
var News = mongoose.model('News',UserSchema,'news');

//增加数据
//通过实例化 Model创建增加的数据

var news = new News({
    title:"我是一个新闻",
    author:"张三",
    pic:"我是一张图",
    content:"我是新闻内容",
    status:1
})
// news.save(function(err){
//     if(err){
//         return console.log(err)
//     }
//     console.log("成功")
// });

//修改数据
// News.updateOne(
//     {"_id":"63627d6a101b336e174bfee9"},
//     {"title":"我是一个新闻2"},
//     function(err,doc){
//         if(err){
//             return console.log(err)
//         }
//         console.log("成功",doc);
// })

//删除数据
News.deleteOne({"_id":"63627d6a101b336e174bfee9"},(err,result)=>{
    if(err){
        return console.log(err)
    }
    console.log("成功",result);
})
