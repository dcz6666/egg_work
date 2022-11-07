var mongoose = require('./db.js');
// 定义数据表（集合的）映射 字段名称必须和数据库保持一致
var OrderSchema =  mongoose.Schema({
    order_id:String,
    uid:Number,
    trade_no:String,
    all_price:Number,
    all_num:Number
  
})
// 定义model 操作数据库
var OrderModel = mongoose.model('Order',OrderSchema,'order');

module.exports = OrderModel