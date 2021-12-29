

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
    input(
        :style="nowInputStyle"
        :disabled="disabled"
        class="__input__ boxflex1"
        type="date"
        autocomplete="off"
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

	export default {
		components:{bodyDom},
		mixins:[mixinFn]
	}
</script>

<style scoped lang="less">

    .__input__{
        position: relative;
        display: block;
        height: 100%;
        color: #333; box-sizing: border-box;
        padding:0 10px;
        box-sizing: border-box;
        background: none;
    }
    input{outline:none}
</style>
