<template>
    <div @click="test">123</div>
</template>

<script>
	export default {
		name: "test",
        methods:{
			test(){
                this.test1().catch(e=>{
                	console.log(e);
                })
            },
            async test1(){
	            let {ajax,api} = this;
	            let [data] = await ajax.send([
		            api.distAll({id:1}),
                    api.shopCarDel({id:1})
	            ]);
	            console.log(data)
            }
        }
	}
</script>

<style scoped>

</style>
