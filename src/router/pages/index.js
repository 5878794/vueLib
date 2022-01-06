


export default {

	path:'/index',
	name:'index',
	component:()=>import('../../views/index/index'),
	children:[
		{
			path:'',
			redirect:to=>{
				return to.fullPath+'/user'
			}
		},
		{
			path:'user',
			component:()=>import('../../views/index'),
			children:[
				{
					path:'',
					redirect:to=>{
						return to.fullPath+'/set1';
					}
				},
				{
					path:'set1',
					name:'set1',
					component:()=>import('../../views/set1'),
				},
				{
					path:'set2',
					name:'set2',
					component:()=>import('../../views/set2'),
				},
				{
					path:'set3/:page',
					name:'set3',
					component:()=>import('../../views/set3'),
				}
			]
		}
	]

}
