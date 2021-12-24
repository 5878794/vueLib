import router from '../router/index';


let sys = {
	//打开页面
	openPage(url,param={},type=''){
		if(type == 'self'){
			router.replace({
				path:url,
				query:param
			});
		}else{
			router.push({
				path:url,
				query:param
			})
		}


	},
	//后退
	goBack(){
		router.back();
	},
	//刷新页面
	refresh(){
		router.go(0);
	}
};



export default sys;
