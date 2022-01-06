import { createRouter, createWebHistory } from 'vue-router';
import before from "./before";
import after from "./after";


import indexRoute from './pages/index';


const routes = [
	{
		path: '/',
		name:'login',
		component:()=>import('../views/login/login')
	},
	{
		path:'/:catchAll(.*)',
		name:'404',
		component:()=>import('../views/404')
	},

	indexRoute,



	// {
	// 	path: '/about',
	// 	name: 'About',
	// 	// route level code-splitting
	// 	// this generates a separate chunk (about.[hash].js) for this route
	// 	// which is lazy-loaded when the route is visited.
	// 	component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	// }
];



const router = createRouter({
			//hash模式  createWebHashHistory    其实都是单页面  只是hash能直接访问
	history: createWebHistory(process.env.BASE_URL),
	routes
});



//全局路由监听 router
router.beforeEach((to, from, next) => {
	before(to,from,next);
	after(to,from);
});



export default router
