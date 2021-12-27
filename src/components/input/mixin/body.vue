






<template lang="pug">
div
    div(class="box_hlc body" :style="rowStyle")
        div(class="input_body box_hlc boxflex1" :class="disabledClass")
            img(v-if="icon" ref="icon" class="icon_" :src="icon")
            div(v-if="name" :style="nameStyle" ref="name" class="name") {{name}}
            slot
            div(v-if="unit" class="unit" :style="unitStyle") {{unit}}
    div(v-if="showErr" :style="errLeft" class="err") {{err}}
</template>


<script>
	export default {
		props:{
			icon:{
				type: String,
				default: ''
			},
            value:{
			    type:[String,Number],
                default:''
            },
			err:{
				type: String,
				default: ''
			},
			name:{
				type: String,
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
			rowStyle:{
				type:String,
				default:''
			},
			unitStyle:{
			    type:String,
                default:''
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
			},
			showErr:{
				type:Boolean,
                default:false
            }
		},
		data(){
			return {
				disabledClass:''
			}
		},
		mounted(){
			this.disabledFn();

			let left = 0,
				icon = (this.icon)? this.$refs.icon.offsetWidth : 0,
				name = (this.name)? this.$refs.name.offsetWidth: 0;
			left = left +icon +name;
			this.errLeft = 'padding-left:'+left +'px';

		},
		methods: {
			disabledFn: function () {//  'params'是要监听的字段，（params）是已更新变化后的数据
				let params = this.disabled;
				if(params){
					this.disabledClass = 'disabledClass';
				}else{
					this.disabledClass = '';
				}
			}
		}
	};

</script>

<style scoped lang="less">
    @import "../../../css/box";

    .body{
        width:100%; box-sizing: border-box;
        padding: 0 !important;
        font-size: 14px;
    }
    .name{
        min-width: 50px;
        box-sizing: border-box;
        color: #222223;
        padding-right: 10px;
        width: 100px;
    }

    .input_body{
        /*border:1rpx solid #ccc; */
        box-sizing: border-box;
        width: 100%; height: 100%;

    }
    .icon_{
        display: block; width:25px; height: 25px;
        padding: 0 10px;
    }


    .err{
        width: 100%; color: red; line-height: 20px;
        box-sizing: border-box;
        text-align: left; padding-top: 5px;
    }
    .textarea_name{
        padding:7px 0;
    }

    .show_text{
        /*position: absolute; left:10rpx; top:0; right:20rpx; bottom:0;*/
        padding:0 5px;
        /*padding-right: 34rpx;*/
    }
    .show_text .diandian{
        padding-right: 5px;
    }


    .disabledClass{
        border-color:#eee;
        color:#ccc !important;
    }


    .disabledClass .__input__,
    .disabledClass .__input_textarea__,
    .disabledClass .view{
        color:#aaa !important;
    }
    .disabledClass .view:after{
        display: none;
    }




    .smsBtn{
        display: inline-block;
        padding:0 5px;
        margin:0 5px;
        /*border:1rpx solid #333;*/
        text-align: center;
    }


    .isBtn{
        transition: all 0.2s ease-in;
    }
    .isBtn:active{
        opacity:0.6;
    }

    .placeholder_style{
        color: #ccc !important;
    }

    .unit{
        /*padding-right: 10rpx;*/
        color: #999;
        width: 20px;
        text-align: center;
    }

</style>
