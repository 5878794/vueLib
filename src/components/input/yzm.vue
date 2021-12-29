

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
        v-model="val"
        :rule="rule"
        @focus="focusFn"
        @blur="BlurFn"
        @input="onInput"
    )

    img(
        class="isBtn"
        :src="yzmSrc"
        :style="yzmStyle"
        @click="onclick"
    )


</template>


<script>
	import bodyDom from './mixin/body';
	import mixinFn from './mixin/mixin';
	import allStyle from "./mixin/allStyle";

	export default {
		components:{bodyDom},
		mixins:[mixinFn],
		props:{
			yzmStyle:{
			    type:String,
				default:allStyle.yzm.yzmStyle
            },
			getYzmFn:{
				type:String,
				default:''
			}
		},
		data(){
			return {
				yzmSrc:'',
				catchData:''
			}
		},
		mounted(){
			this.getPic();
		},
		methods:{
			getPic(){
				this.getYzm().then().catch(e=>{
					alert('获取验证码失败，请稍后再试！');
				})
			},

			onclick(){
				//获取新的验证码
				this.getPic();
			},

			async getYzm(){
				this.pageObj = this.$parent;
				let fnName = this.getYzmFn;
				if(this.pageObj[fnName]){
					let data = await this.pageObj[fnName]();

					this.catchData = data;
					this.yzmSrc = data.src;
					this.val = '';
				}
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
    .isBtn{
        transition: all 0.2s ease-in;
        cursor: pointer;
    }
    .isBtn:hover{
        opacity:0.6;
    }
</style>
