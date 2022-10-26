/**
 * 
 * @param {*} options 中间件的配置项 框架会将app.config[${middlewareName}] 传递进来
 * @param {*} app ：当前应用Application 的实例
 * @returns 
 */
module.exports = (options, app) => {
    //返回一个异步的方法
    return async function printDate(ctx, next) {

        // 屏蔽的ip:127.0.0.1
        let forbidips = options.forbidips;
        // console.log("ip", ctx.request.ip)
        let clientIp = ctx.request.ip
        let hasIp = forbidips.some(function (forbidip) {
            return forbidip === clientIp
        })
        // console.log("===hasIp==",hasIp);
        if (hasIp) {
            ctx.status = 403
            ctx.body = "您的IP已屏蔽"
        } else {
            await next()
        }
    }
}