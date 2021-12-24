<template lang="pug">
div
    test(class="test")
    div(@click="storeFn") {{test}}
    pagination(
        class='pagination box_hcc'
        :totalList="141"
        :nowPage="6"
        :pageSize="10"
        url="/about?page="
    )
</template>

<script>
	// @ is an alias to /src
    import pagination from "../components/pagination";

	import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';

	export default {
		name: 'Home',
		components: {
			pagination
		},
		computed:{
			...mapState(['test'])
        },
        methods:{
	        storeFn(){
		        this.$store.commit('add','1');
	        	console.log(this.$store.state.test)

                this.$store.dispatch('add1','2');
		        console.log(this.$store.state.test)

	        	// let t = this.$store.getters.getTest(2);
	        	// console.log(t);
            }
        }
	}
</script>

<style lang="less" scoped>
    .test{
        color:red; padding-top: 20px;
    }
    .pagination{
        width: 100%; height: 100px;
        background: #42b983;
    }
</style>
