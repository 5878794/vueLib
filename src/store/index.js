import { createStore } from 'vuex'

export default createStore({
	// 全局属性变量
	state: {
		test:0
	},
	//同步方法
	mutations: {
		add(state){
			state.test++;
		}
	},
	//异步方法
	actions: {

	},
	//获取计算的属性 vue3还在不在
	getters:{

	},
	modules: {

	}
})
