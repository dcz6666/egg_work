// 扩展引入第三方模块
var sd = require('silly-datetime')
module.exports = {
    formatTime(param) {
        // this 是helper对象在其中可以调用其他helper 方法
        //格式化日期
        return sd.format(new Date(param*1000),"'YYYY-MM-DD HH:mm")
    }
}