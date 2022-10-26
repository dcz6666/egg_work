//定时任务简写方式一
// var k=1001
// module.exports={
//     schedule:{
//         interval:"5s",
//         type:'all'
//     },
//     async task(ctx){
//         ++k;
//         console.log(k)
//     }
// }

// 定时任务简写方式二
module.exports =(app)=>{
    return{
        schedule:{
            interval:"5s",
            type:'all'
        },
        async task(ctx){
             var result =await ctx.service.news.getNewsList();
             console.log("result:===",result)
        }
    }
}
