

<template lang="pug">
div(class="box_slt main")
    div(class="top") top{{text}}
    div(class="box_hlt boxflex1")
        div(class="left") left
        router-view(class="boxflex1 box")
    div(class="bottom") bottom
</template>

<script>
	export default {
		data(){
			return {
				text:1
			}
		},
		mounted(e) {
			let a = 1;
			setInterval(()=>{
				a++;
				this.text = a;
			},1000)
		}
	}
</script>


<style scoped>
    .main{
        width: 100%; height: 100%;
    }
    .top{
        width: 100%; height: 100px; background: #1d83ed;
    }
    .left{
        width: 150px; height: 100%; background: #999999;
    }
    .box{
        background: #c9d8db; height: 100%;
    }
    .bottom{
        width: 100%; height: 60px; background: #222223; color: #fff;
    }
</style>
