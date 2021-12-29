

<template lang="pug">
bodyDom(
    :icon="icon"
    :name="name"
    :value="value"
    :err="err"
    :disabled="disabled"
    :rowStyle="rowStyle"
    :unitStyle="unitStyle"
    :nameStyle="nameStyle"
    :inputStyle="inputStyle"
    :inputFocusStyle="inputFocusStyle"
    :errStyle="errStyle"

    :showErr="showErr"
)
    input(
        :style="nowInputStyle"
        :disabled="disabled"
        class="__input__ boxflex1"
        type="text"
        :placeholder="placeholder1"
        autocomplete="off"
        v-model="val"
        :rule="rule"
        @focus="focusFn"
        @blur="BlurFn"
        @input="onInput"
    )
    div(
        class="smsBtn isBtn"
        :style="nowBtnStyle"
        @click="onclick"
    ) {{nowBtnText}}

</template>


<script>
	import bodyDom from './mixin/body';
	import mixinFn from './mixin/mixin';
	import allStyle from "./mixin/allStyle";

	export default {
		components:{bodyDom},
		mixins:[mixinFn],
		props:{
			//按钮发送短信前文字
			btnText:{
				type:String,
				default:allStyle.sms.btnText
			},
			//按钮发送短信后，文字模版  {x}变量，会被替换
			btnSendText:{
				type:String,
				default:allStyle.sms.btnSendText
			},
			//按钮发送短信前样式
			btnStyle:{
				type:String,
				default:allStyle.sms.btnStyle
			},
			//发送后样式
			sendBtnStyle:{
				type:String,
				default:allStyle.sms.sendBtnStyle
			},
			//发送函数名   传入Page中的对象下的函数名
			sendSmsFn:{
				type:String,
				default:''
			},
			time:{
				type:[Number,String],
				default:allStyle.sms.time
			}
		},
		data(){
			return {
				nowBtnStyle:'',
				nowBtnText:'',
				sendOk:false
			}
		},
		mounted(){
			this.nowBtnStyle = this.btnStyle;
			this.nowBtnText = this.btnText;
		},
		methods:{
			onclick(){
				if(this.sendOk){return;}

				this.sendAjaxFn().then().catch(e=>{
					alert(e.toString());
				})

			},

			async sendAjaxFn(){
				let page = this.$parent,
					fnName = this.sendSmsFn;

				if(page[fnName]){
					let state = await page[fnName]();
					if(state){
						//发送成功
						this.sendOk = true;

						this.intervalTime();

					}
				}
			},

			intervalTime(){
				this.nowBtnStyle = this.sendBtnStyle;

				let t = parseInt(this.time)+1;
				let a = setInterval(()=>{
					t--;
					if(t<0){
						//完成
						this.nowBtnStyle = this.btnStyle;
						this.nowBtnText = this.btnText;
						this.sendOk = false;
						clearInterval(a);
						return;
					}

					let text = this.btnSendText.replace('{x}',t);
					this.nowBtnText = text;
				},1000)
			}
		}
	}
</script>

<style scoped lang="less">
    @import "../../css/box";

    .__input__{
        position: relative;
        display: block;
        height: 100%;
        color: #333; box-sizing: border-box;
        padding:0 10px;
        box-sizing: border-box;
        background: none;
    }

    .smsBtn{
        display: inline-block;
        padding:0 5px;
        margin:0 5px;
        /*border:1rpx solid #333;*/
        text-align: center;
        cursor: pointer;
    }


    .isBtn{
        transition: all 0.2s ease-in;
    }
    .isBtn:hover{
        opacity:0.6;
    }
</style>
