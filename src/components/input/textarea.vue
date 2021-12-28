

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
    boxType='box_hlt'

    :showErr="showErr"
)
    textarea(
        :style="nowInputStyle"
        :disabled="disabled"
        class="__input_textarea__ boxflex1"
        type="text"
        :placeholder="placeholder1"
        v-model="val"
        :rule="rule"
        @focus="focusFn"
        @blur="BlurFn"
        @input="onInput"
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
			rowStyle:{
				type:String,
                default:allStyle.textarea.rowStyle
            }
        }
	}
</script>

<style scoped lang="less">
    @import "../../css/box";

    .__input_textarea__{
        display: block; line-height: 20px;
        color: #333; box-sizing: border-box;
        padding:5px;
        width:auto; min-height: 35px; height: 100%;
    }
</style>
