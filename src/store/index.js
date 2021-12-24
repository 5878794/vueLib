import {createStore, mapState} from 'vuex'

//缓存数据 外面用法
// import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';
// export default {
// 	computed:{
// 		...mapState(['test'])
// 	},
// 	methods:{
// 		storeFn(){
// 			this.$store.commit('add','1');
// 			console.log(this.$store.state.test)
//
// 			this.$store.dispatch('add1','2');
// 			console.log(this.$store.state.test)
// 		}
// 	}
// }



export default createStore({
	// 全局属性变量
	state: {
		// test:0
	},
	//同步方法
	mutations: {
		// add(state,val){
		// 	state.test =  val;
		// }
	},
	//异步方法  没求的啥子用  不能await  直接在外面调commit
	actions: {
		// async add1(state,val2){
		// 	console.log(val2);
		// 	return setTimeout(e=>{
		// 		state.commit('add',val2);
		// 	},2000)
		// }
	},
	//获取计算的属性
	getters:{
		// getTest:(state)=>(id)=>{
		// 	console.log(id);
		// 	return state.test;
		// },
	},
	modules: {

	}
})
