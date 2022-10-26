module.exports = {
    getHost(){
        //this 就是ctx 对象 在其中可以调用ctx上的其他方法，或访问属性
        return this.request.host;
    }
}