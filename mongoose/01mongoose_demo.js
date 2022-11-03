//引入mongoose
const mongoose = require('mongoose');
//2、建立链接
mongoose.connect('mongodb://127.0.0.1:27017/eggcms');

var UserSchema =  mongoose.Schema({
    name:String,
    age:Number,
    status:Number
})


var User = mongoose.model('Users',UserSchema);
User.find({},function(err,doc){
    if(err){
        console.log(err);
        return;
    }
    console.log(doc);
})

// // 增加数据
// var u = new User({
//     name:'李四',
//     age:20,
//     status:1
// })
// u.save(function(err){
//     if(err){
//         console(err)
//         return 
//     }
//     console.log("添加成功");
// })