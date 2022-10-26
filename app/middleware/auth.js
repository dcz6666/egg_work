module.exports =(options,app)=>{
    console.log("==options==1",options)
    //返回一个异步的方法
    return async function auth(ctx,next){
        console.log("====auth===:",new Date());
        ctx.state.csrf = ctx.csrf
        await next()
    }
}