
<template lang="pug">
div(@click="login") login
</template>


<script>
    export default {
    	methods:{
    		login(){
    			console.log(this.$route)
    			this.$router.replace({
                    name:'set3',
                    params:{page:2}
                })
            }
        }
    }
</script>
