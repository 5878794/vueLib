

import axios from "axios";
import serverApi from './api';
import setting from './setting.js';
// import sys from './sys';

let serverUrl = setting.serverApiUrl;

let ajax = {
	//处理返回的数据
	handlerData(res,success,error){
		if(res.status !=200){
			error('请求服务器失败!');
			return;
		}

		let data = res.data;
		if(data.code == 1){
			// backData = sys.imgSrcRelToAbs(backData,true);
			success(data.data);
		}else{
			error(data.msg);
		}

	},
	//请求函数主体
	run(url, data, type, success, error){
		url = serverUrl + url;

		//处理图片不是绝对地址问题 需要setting中配置图片服务器地址 imageServerUrl
		//图片绝对地址转相对地址
		// data = sys.imgSrcRelToAbs(data,false);

		// let token = sys.getLocationData('token') || '';

		let postData={},urlParams={};
		if(type=='post'){
			postData = data;
		}else{
			urlParams = data;
		}


		axios({
			method:type,
			url:url,
			responseType:'json',
			params:urlParams,
			data:postData,
			timeout:20000,
			headers:{
				'Content-Type':'application/json',
				// token:'123'
			}
		})
		.then(res=>{
			this.handlerData(res,success,error);
		})
		.catch(err=>{
			if(axios.isCancel(err)){
				error('user cancel');
			}else{
				error(err);
			}
		});



		// uni.request({
		// 	method: type,
		// 	url: url,
		// 	data: data,
		// 	dataType: "json",
		// 	timeout: 20000,     //20秒
		// 	header: {
		// 		token: token
		// 	},
		// 	success: async function(rs) {
		// 		let data = rs.data,
		// 			statusCode = rs.statusCode;
		// 		// console.log(data)
		// 		if(statusCode != 200){
		// 			if(statusCode == '401'){
		// 				error('401');
		// 				// sys.openPage('/pages/my/loginByPass','self');
		// 				return;
		// 			}else{
		// 				console.log(rs)
		// 				error('服务器异常！');
		// 				return;
		// 			}
		// 		}
		//
		//
		// 		if(data.code == 1){
		// 			let backData = data.data;
		// 			//图片绝对地址转相对地址
		// 			backData = sys.imgSrcRelToAbs(backData,true);
		// 			success(backData);
		// 		}else{
		// 			error(data.msg);
		// 		}
		// 	},
		// 	fail: function(e) {
		// 		console.log(e)
		// 		// errorHandler.ajaxError(type,url,data,e);
		// 		if(e.status == 500){
		// 			error('服务器内部错误！');
		// 			return;
		// 		}
		//
		//
		// 		if(e.status == 0 && e.statusText == 'timeout'){
		// 			error('访问人数过多，请稍后访问');
		// 			return;
		// 		}
		//
		// 		if(e.status == 0 && e.statusText != 'error'){
		// 			return;
		// 		}
		//
		// 		error("网络错误,无法连接服务器。");
		// 	}
		// });
	},
	//发送一堆请求
	send(arr){
		return new Promise((success,error)=>{
			Promise.all(arr).then(rs=>{
				success(rs)
			}).catch(err=>{
				error(err);
			})
		})
	}

};


let api = new Proxy(serverApi, {
	get(target, key, receiver) {
		return function (data) {
			data = data || {};
			return new Promise((success, error) => {
				let url = target[key].url,
					type = target[key].type || 'post';


				//判断是否含有一堆大括号,大括号内为参数
				let delArray = [];
				url = url.replace(/{(.+?)}/g,function(key){
					key = key.substr(1,key.length-2);
					delArray.push(key);
					return data[key];
				});

				//删除data中的对象
				delArray.map(rs=>{
					delete data[rs];
				});

				ajax.run(url, data, type, success, error);
			})
		}
	}
});



export {ajax,api};


