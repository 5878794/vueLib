

import checkFn from './inputCheck';

export default {
	props:{
		icon:{
			type: String,
			default: ''
		},
		place:{
			type: String,
			default: ''
		},
		err:{
			type: String,
			default: ''
		},
		name:{
			type: String,
			default: ''
		},
		rule:{
			type: String,
			default: ''
		},
		value:{
			type: [String,Number],
			default: ''
		},
		disabled:{
			type:Boolean,
			default:false
		},
		// textAlign:{
		// 	type:String,
		// 	default:'right'
		// },
		unit:{
			type:String,
			default:''
		},
		inRef:{
			type:String,
			default:''
		},
		maxlength:{     //只有digit加咯该属性
			type:[Number,String],
			default:-1
		},
		blurCheck:{
			type:Boolean,
			default:true
		},
		height:{
			type:String,
			default:'30px'
		},
		nameStyle:{
			type:String,
			default:''
		},
		inputStyle:{
			type:String,
			default:''
		},
		inputFocusStyle:{
			type:String,
			default:''
		}
	},
	data(){
		return {
			// textAlign__:'',
			disabledClass:'',
			placeholder1:'',
			val:'',
			showErr:false,
			nowInputStyle:''
		}
	},
	watch:{
		value(val){
			this.val = val;
		}
	},
	updated(){
		this.isReady = true;
		if(this.catchSetVal){
			this.setValue(this.catchSetVal);
		}
	},

	mounted(){
		this.placeholder1 = this.place;
		this.nowInputStyle = this.inputStyle;
		this.val = this.value;

		console.log(this.nowInputStyle,this.nameStyle)

		this.disabledFn();

		let left = 0,
			icon = (this.icon)? this.$refs.icon.offsetWidth : 0,
			name = (this.name)? this.$refs.name.offsetWidth: 0;
		left = left +icon +name;
		this.errLeft = 'padding-left:'+left +'px';

	},
	methods: {
		onInput(e){
			this.$emit('mychange',{value:this.val,ref:this.inRef});
		},
		focusFn(){
			if(this.inputFocusStyle){
				this.nowInputStyle = this.inputFocusStyle;
			}
		},
		BlurFn(){
			this.nowInputStyle = this.inputStyle;
			if(this.blurCheck){
				this.check().then().catch();
			}
		},

		setValue(value){
			if(!this.isReady){
				this.catchSetVal = value;
				return;
			}
			this.catchSetVal = '';

			this.val = value;
		},

		disabledFn: function () {//  'params'是要监听的字段，（params）是已更新变化后的数据
			let params = this.disabled;
			if(params){
				this.disabledClass = 'disabledClass';
				this.placeholder = '';
			}else{
				this.disabledClass = '';
				this.placeholder = this.placeholder1;
			}
		},

		check(){
			return new Promise((success,error)=>{
				if(checkFn(this.val,this.rule)){
					this.showErr = false;
					success(this.val);
				}else{
					this.showErr = true;
					error(this.err);
				}
			});
		}
	}
};






