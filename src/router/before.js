

//路由前置拦截器
//to: 来自于页面的 route
//from: 当前页的  route
//next 执行函数



export default function (to,from,next) {

	// if(to.name=='Home'){
	// 	//直接跳转到其它页面
		// next({path:'/about',replace:true});
	// }else{
	// 	//通过
		// next();
	// }


	//正常执行
	next();
}
