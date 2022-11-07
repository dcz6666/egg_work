var mongoose = require('./db.js');

// 定义数据表（集合的）映射 字段名称必须和数据库保持一致
var UserSchema =  mongoose.Schema({
    userName:{type:String,unique:true},
    password:String,
    name:String,
    age:Number,
    sex:String,
    tel:Number,
    status:{
        type:Number,
        default:1
    }
})
//静态方法
UserSchema.statics.findBySn=function(sn,cb){
    this.find({"sn":sn},function(err,docs){
        cb(err,docs)
    })
}

// 实例方法（基本不用）
UserSchema.methods.print= function(){
    console.log("这是一个实例方法");
    console.log("this",this)
}
// 定义model 操作数据库
var UserModel = mongoose.model('Users',UserSchema,'users');

module.exports = UserModel