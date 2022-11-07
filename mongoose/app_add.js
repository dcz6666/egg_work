var ArticleCateModel = require('./model/articlecate')
var UserModel= require('./model/user')
var ArticleModel = require("./model/article")
// var cate = new ArticleCateModel({
//     title:"国内新闻1",
//     description:"国内新闻内容"
// })

// var cate = new UserModel({
//     username:"李四",
//     password:"123456",
//     name:"李四",
//     age:25,
//     sex:"男",
//     tel:124578145
// })

var cate = new ArticleModel({
    title:"这是国内新闻",
    cid:"63672b169a52d65196a74a35",/**分类 id */
    author_id:"63675b68c574cccfb775c8fe",/**用户 id */
    author_name:"李四",
    description:"王宝强出轨了",
    order:1,
    content:"王宝强出轨了123465",
})
cate.save()