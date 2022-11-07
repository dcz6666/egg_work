const mongoose = require('mongoose');
var UserModel = require('./model/user.js')
var NewsModel = require('./model/news.js')

var OrderModel = require('./model/order.js')
var OrderItemModel = require('./model/order_item.js')

// 数据的查找
// UserModel.find({},function(err,doc){
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(doc);
// })

// NewsModel.find({},function(err,doc){
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(doc);
// })

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

// OrderModel.find({},function(err,doc){
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("doc1",doc);
// })
// OrderModel.aggregate([
//     {
//         $lookup:{
//             from:"order_item",
//             localField:"order_id",
//             foreignField:"order_id",
//             as:"items"
//         }
//     }
// ],function(err,docs){
//     console.log("docs2",docs)
// })
// 查询order_item 找出商品名称是酸奶的商品，酸奶这个商品对应的订单的订单号及订单的总价格

//第一种实现方式
// OrderItemModel.find({"_id":"635e3152845e34b1a4fb2c63"},function(err,docs){
//     if(err){
//         console.log(err);
//         return;
//     }
//     var order_item= JSON.parse(JSON.stringify(docs))
//     let order_id= order_item[0].order_id;
//     OrderModel.find({"order_id":order_id},function(err,order){
//         order_item[0].item_Info= order[0]
//     })
// })

// 第二种实现方式
// OrderItemModel.aggregate([
//     {
//         $lookup:{
//             from:"order_item",
//             localField:"order_id",
//             foreignField:"order_id",
//             as:"order_info"
//         }
//     },
//     {
//        $match:{_id:mongoose.Types.ObjectId('635e3152845e34b1a4fb2c63')}
//     }
// ],function(err,docs){
//     console.log("docs2", JSON.stringify(docs))
// })

var ArticleModel = require("./model/article");
var ArticleCateModel = require('./model/articlecate')
// ArticleModel.find({},function(err,docs){
//     console.log("docs",docs)
// })
// 查询文章信息 并显示文章的分类 以及文章的作者信息
//多个表关联查询  方法一
// ArticleModel.aggregate([
//     {
//         $lookup: {
//             from: "articleCate",
//             localField: "cid",
//             foreignField: "_id",
//             as: "cate"
//         }
//     },
//     {
//         $lookup: {
//             from: "users",
//             localField: "author_id",
//             foreignField: "_id",
//             as: "user"
//         }
//     }
// ], function (err, docs) {
//     console.log("docs2", JSON.stringify(docs))
// })

//方法二
ArticleModel.find({}).populate('cid').populate('author_id').exec(function (err, docs) {
    console.log("docs", docs);
})

