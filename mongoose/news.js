var NewsModel = require('./model/news.js')

// 增加数据
var news = new NewsModel({
     name:'李四',
//     age:20,
//     status:1
})
news.save(function (err) {
    if (err) {
        console.log(err)
        return
    }
    console.log("添加成功");
    NewsModel.find({}, function (err, doc) {
        if (err) {
            console.log(err);
            return;
        }
        console.log(doc);
    })
})


