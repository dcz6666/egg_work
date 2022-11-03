var UserModel = require('./model/user.js')

var NewsModel = require('./model/news.js')

// 数据的查找
UserModel.find({},function(err,doc){
    if(err){
        console.log(err);
        return;
    }
    console.log(doc);
})

NewsModel.find({},function(err,doc){
    if(err){
        console.log(err);
        return;
    }
    console.log(doc);
})

// 增加数据
// var user = new UserModel({
//     name:'李四',
//     age:20,
//     status:1
// })
// user.save(function(err){
//     if(err){
//         console.log(err)
//         return 
//     }
//     console.log("添加成功");
// })