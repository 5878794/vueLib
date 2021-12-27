
<template>
    <div>
        <div class="box_hlc body" :style="'height:'+height ">
            <div class="input_body box_hlc boxflex1" :class="disabledClass">

                <!--            判断是否有图标-->
                <img v-if="icon" ref="icon" class="icon_" :src="icon"/>

                <div v-if="name" :style="nameStyle" ref="name" class="name">{{name}}</div>


                <input
                    :style="nowInputStyle"
                    @focus="focusFn"
                    @blur="BlurFn"
                    placeholder-class="placeholder_style"
                    :disabled="disabled"
                    class="__input__ boxflex1"
                    type="text"
                    :placeholder="placeholder1"
                    v-model="val"
                    :rule="rule"
                    @input="onInput"
                />


                <div v-if="unit" class="unit">{{unit}}</div>

            </div>
        </div>
            <div v-if="showErr" :style="errLeft" class="err">{{err}}</div>
    </div>
</template>


<script>
    import mixinFn from "./mixin/mixin";
	export default {
		mixins:[mixinFn]
	}
</script>

<style scoped lang="less">
    @import "../../css/box";
    @import "./mixin/publish.css";
</style>
