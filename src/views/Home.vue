<template lang="pug">
div
    test(class="test")
    div 123
</template>

<script>
	// @ is an alias to /src
	import HelloWorld from '@/components/HelloWorld.vue'
	import test from '../components/test';

	export default {
		name: 'Home',
		components: {
			HelloWorld,test
		}
	}
</script>

<style lang="less" scoped>
    .test{
        color:red; padding-top: 20px;
    }
</style>
