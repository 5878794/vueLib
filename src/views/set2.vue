<template lang="pug">
div set2222
</template>


<script>
	export default {
		mounted(e) {
			this.username.aaa = new Date().getTime();
			let param  = this.$route.query;
			console.log(param)
		}
	}
</script>
