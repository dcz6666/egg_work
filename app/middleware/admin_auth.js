module.exports =(options,app)=>{
    //返回一个异步的方法
    return async function auth(ctx,next){
        //如果session存在表示已经登录
        if(ctx.session && ctx.session.userinfo){
            await next()
        }else{
            ctx.redirect('/')
        }
    }
}