var mongoose = require('./db.js');
// 定义数据表（集合的）映射 字段名称必须和数据库保持一致
var OrderItemSchema =  mongoose.Schema({
    order_id:String,
    title:String,
    price:Number,
    num:Number,
})
// 定义model 操作数据库
var OrderItemModel = mongoose.model('OrderItem',OrderItemSchema,'order_item');
module.exports = OrderItemModel