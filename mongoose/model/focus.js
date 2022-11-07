var mongoose = require('./db.js');
// 定义数据表（集合的）映射 字段名称必须和数据库保持一致
var FocusSchema = mongoose.Schema({
    title: {
        type: String,
        trim: true   //定义 mongoose 模式修饰符 去掉空格
    },
    pic: String,
    redirect: {
        type: String,
        set(parmas) {       //增加数据的时候对redirect字段进行处理  
            //parmas 可以获取redirect 的值， 返回的数据就是redirect 在数据库实际保存的值
            if (parmas.indexOf("http://") != 0 && parmas.indexOf("https://") != 0) {
                return "http://" + parmas
            }
            return parmas;
        }
    },
    status: {
        type: Number,
        default: 1
    }

})
// 定义model 操作数据库
var FocusModel = mongoose.model('Focus', FocusSchema, 'focus');

module.exports = FocusModel