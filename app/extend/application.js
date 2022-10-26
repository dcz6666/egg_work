module.exports = {
    foo(param){
        //this 就是app对象，在其中可以调用app 上的其他，或访问属性
        return this.config.api
    }
}