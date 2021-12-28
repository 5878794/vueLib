


<template lang="pug">
bodyDom(
    :icon="icon"
    :name="name"
    :value="value"
    :unit="unit"
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
    div(
        class="__input__ boxflex1"
        :style="nowInputStyle"
    )
        select(

            :disabled="disabled"
            class="__select__"
            :class="noSelect"
            :placeholder="placeholder1"
            v-model="val"
            :rule="rule"
            @focus="focusFn"
            @blur="BlurFn"
            @change="onSelect"
        )
            option(
                v-for="(item,index) in selectList"
                :v-key="index"
                :value="item.key"
            ) {{item.val}}

</template>


<script>
	import bodyDom from './mixin/body';
	import mixinFn from './mixin/mixin';

	export default {
		components:{bodyDom},
		mixins:[mixinFn],
        props:{
	        selectData:{
	        	type:Array,
                default(){return []}
            }
        },
        data(){
		    return {
		    	selectList:[],
			    noSelect:''
            }
        },
        watch:{
	        selectData(){
	        	this.handlerData();
            }
        },
        mounted() {
			this.handlerData();
        },
        methods:{
	        handlerData(){
	        	let backData = [];
                if(this.placeholder){
	                backData.push({key:'',val:this.placeholder})
                }



                this.selectData.map(rs=>{
                	backData.push(rs);
                });

                this.selectList = backData;

                this.onSelect();
            },
	        onSelect(){
                if(this.val === ''){
                	this.noSelect = 'noSelect';
                }else{
                	this.noSelect = '';
                }
		        this.$emit('mychange',{value:this.val,ref:this.inRef});
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
    .__select__{
        display: block; width: 100%; height: 100%;
        border: none;
        outline:none;
    }
    .noSelect{
        color:#aaa !important;
    }
</style>
