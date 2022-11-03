//引入mongoose
const mongoose = require('mongoose');

//2、建立链接
//useNewsUrlParser 这个属性会在url里识别验证用户所有的db未升级前是不需要指定的，升级到一定要指定
mongoose.connect('mongodb://127.0.0.1:27017/eggcms',{useNewUrlParser:true},function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("数据库链接成功")
});


module.exports = mongoose;