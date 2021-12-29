

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
        :style="nowInputStyle"
        class="__input__ boxflex1"
    ) {{val}}

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
</style>
