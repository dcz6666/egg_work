var FocusModel = require('./model/focus.js')

// 增加数据
var focus = new FocusModel({
    title: ' 我是一个上海新闻 123 ',
    pic: "http://baidu.com",
    redirect:"www.baidu.com"
})
focus.save(function (err) {
    if (err) {
        console.log(err)
        return
    }
    console.log("添加成功");
    FocusModel.find({}, function (err, doc) {
        if (err) {
            console.log(err);
            return;
        }
        console.log(doc);
    })
})


