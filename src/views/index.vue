<template lang="pug">
div(class="box_slt")
    div main
    router-link(
        class='a'
        :to="{name:'set2',query:{id:2,type:2}}"
    )
        div 222
        div 111
    router-link(
        class="b"
        :to="{name:'set3',params:{page:1}}"
    ) 333
    div(class="box_slt")
        div
            input(type="text")
        div
            router-view(:key="key")
        div(@click="goPage") 1 2 3 4 5
</template>

<script>
    export default {
    	computed:{
    	    key(){
    	    	return this.$route.fullPath+new Date().getTime();
            }
        },
    	methods:{
		    goPage(){
		    	let t=  new Date().getTime();
		    	this.$router.push({
                   name:'set3',
                   params:{page:new Date().getTime()}
                });
            }
        }
    }
</script>
<style>
    .a{
        color: red;
    }
    .a:link,.a:visited{
        color: red;
    }
    .a:hover{
        opacity: .5;
    }
</style>
