/**
 * 
 * @param {*} options 中间件的配置项 框架会将app.config[${middlewareName}] 传递进来
 * @param {*} app ：当前应用Application 的实例
 * @returns 
 */
module.exports =(options,app)=>{
    //返回一个异步的方法
    return async function printDate(ctx,next){
        console.log("中间件", new Date());
        await next()
    }
}