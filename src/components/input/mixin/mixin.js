
import checkFn from './inputCheck';
import allStyle from "./allStyle";

export default {
	props:{
		icon:{
			type: String,
			default: ''
		},
		placeholder:{
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
		unit:{
			type:String,
			default:''
		},
		inRef:{
			type:String,
			default:''
		},
		blurCheck:{
			type:Boolean,
			default:true
		},
		rowStyle:{
			type:String,
			default:allStyle.rowStyle
		},
		unitStyle:{
			type:String,
			default:allStyle.unitStyle
		},
		nameStyle:{
			type:String,
			default:allStyle.nameStyle
		},
		inputStyle:{
			type:String,
			default:allStyle.inputStyle
		},
		inputFocusStyle:{
			type:String,
			default:allStyle.inputFocusStyle
		},
		disabledStyle:{
			type:String,
			default:allStyle.disabledStyle
		},
		errStyle:{
			type:String,
			default:allStyle.errStyle
		}
	},
	data(){
		return {
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
		this.placeholder1 = this.placeholder;
		this.nowInputStyle = this.inputStyle;
		this.val = this.value;

		this.disabledFn();


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

		disabledFn: function () {
			let params = this.disabled;
			if(params){
				this.nowInputStyle = this.disabledStyle;
				this.placeholder1 = '';
			}else{
				this.nowInputStyle = this.inputStyle;
				this.placeholder1 = this.placeholder;
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






