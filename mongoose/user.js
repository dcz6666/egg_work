var UserModel = require('./model/user.js')

// 增加数据
// var user = new UserModel({
//     name:'李四',
//     age:20,
//     sn:"123456",
//     status:1
// })
// user.save(function (err) {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log("添加成功");
//     UserModel.find({}, function (err, doc) {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         console.log(doc);
//     })
// })
UserModel.findBySn("123456",function(err,docs){
    console.log("docs",docs)
})
UserModel.findBySn("123456",function(err,docs){
    console.log("docs",docs)
})


