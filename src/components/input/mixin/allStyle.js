


//全局样式配置

export default {
	//全局部分
	//行的样式
	rowStyle:'width:100%;height:40px;line-height:40px;',
	//单位的样式
	unitStyle:'font-size:14px; color:#333; width:30px;',
	//字段样式
	nameStyle:'font-size:14px; color:333;',
	//输入框样式
	inputStyle:'border:1px solid #ccc; border-radius:10px;',
	//输入框获取焦点样式
	inputFocusStyle:'border:1px solid blue; border-radius:10px;',
	//输入框不可编辑样式
	disabledStyle:'border:1px solid #ccc; border-radius:10px;color:#999;',
	//错误提示的样式
	errStyle:'color:red; font-size:12px;',

	//特有部分
	//sms
	sms:{
		//发送前按钮文字
		btnText:'发送短信',
		//发送后按钮文字
		btnSendText:'剩{x}秒',
		//默认按钮样式
		btnStyle:'color:#333; width:60px;',
		//发送后btn样式
		sendBtnStyle:'color:#ccc; width:60px;',
		//发送短信倒计时
		time:'60'
	},

	//yzm
	yzm:{
		yzmStyle:'width:80px; height:40px; display:block;'
	}

};
