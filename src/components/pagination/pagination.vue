
<!--//分页组件-->


<template lang="pug">
div(class="body_ box_hcc")
    template(
        v-for="(item,index) in list"
        :key="index"
    )
        router-link(
            v-if='item.canClick'
            :class="item.className"
            :to="url+item.page"
        ) {{item.text}}
        div(
            v-else
            :class="item.className"
        ) {{item.text}}

</template>

<script>
    export default {
        props:{
	        totalList:{type:[String,Number],default:''},
            pageSize:{type:[String,Number],default:10},
            nowPage:{type:[String,Number],default:''},
            url:{type:String,default:''}
        },
        mounted() {
        	this.init();
        },
        watch:{
	        totalList(){this.init();},
	        nowPage(){this.init();}
        },
        data(){
            return {
            	list:[]
            }
        },
        methods:{
        	//初始化
	        init(){
        		if(!this.totalList || !this.nowPage){
        			return;
                }

        		this.list = this.getList();
            },
            //获取页数
	        getList(){
        		let totalPage = this.getTotalPage();

        		return this.getShowList(totalPage);
            },
            //获取总页面数
	        getTotalPage(){
        		let number = this.totalList,
                    pageSize = this.pageSize,
                    temp = parseInt(number/pageSize);

	            return (number/pageSize == temp)? temp : temp+1;
            },
            //获取要显示的页码列表
	        getShowList(totalPage){
        		let nowPage = parseInt(this.nowPage);
                totalPage = parseInt(totalPage);

                //前一页、后一页
	            let pre = (nowPage-1>0)? nowPage-1 : 1,
		            next = (nowPage+1<totalPage)? nowPage+1 : totalPage,
		            backData;

	            if(totalPage<=7){
		            backData = [];
		            for(let i=1,l=totalPage;i<=l;i++){
			            backData.push(i);
		            }
		            backData.push(next);
		            backData.unshift(pre);
		            // backData = [pre,1,2,3,4,5,6,7,next];
	            }else{
		            backData = this.countPage(pre,next,nowPage,totalPage);
	            }

	            return this.returnData(backData,nowPage,totalPage);
            },
            //分页条 列表显示计算
	        countPage(pre,next,nowPage,totalPage){
		        //设置初始
		        let data = [pre,1];

		        //判断前面是否需要显示。。。
		        if(nowPage-1>3){
			        data.push('...');
		        }else{
			        data.push(2);
		        }

		        //补充中间
		        if(nowPage-1<=3){
			        data.push(3);
			        data.push(4);
			        data.push(5);
		        }else if(totalPage-nowPage<=3){
			        data.push(totalPage-4);
			        data.push(totalPage-3);
			        data.push(totalPage-2);
		        }else{
			        data.push(nowPage-1);
			        data.push(nowPage);
			        data.push(nowPage+1);
		        }


		        //判断后面是否需要显示。。。
		        if(totalPage-nowPage>3){
			        data.push('...');
		        }else{
			        data.push(totalPage-1);
		        }
		        //补充完
		        data.push(totalPage,next);

		        return data;
            },
	        //返回具体的分页条的数据
	        returnData(data,nowPage,totalPage){
		        let ll = data.length-1,
			        back = [];

		        for(let i=0,l=data.length;i<l;i++){
			        let rs = data[i];

			        if(i==0){
			        	let canClick = (nowPage!=1),
                            className = 'item_pre_ ';
				        className += (canClick)? '' :'item_notClick_';

				        back.push({
                            type:'pre',
                            text:'<',
                            page:rs,
                            select:false,
                            canClick:canClick,
                            className:className
				        });
			        }else if(i==ll){
			        	let canClick = (nowPage!=totalPage),
					        className = 'item_next_ ';
				        className += (canClick)? '' :'item_notClick_';

				        back.push({
                            type:'next',
                            text:'>',
                            page:rs,
                            select:false,
					        canClick:canClick,
					        className:className
				        });
			        }else{
				        let type = (rs=='...')? 'text' : 'page',
					        canClick = (type=='page' && nowPage !=rs),
                            canSelect = (nowPage==rs),
					        className = 'item_'+type+'_ ';
                        className += (canClick)? ' ' : 'item_notClick_ ';
				        className += (canSelect)? 'item_select_' :'';

				        back.push({
                            type:type,
                            text:rs,
                            page:rs,
                            select:canSelect,
					        canClick:canClick,
					        className:className
				        })
			        }
		        }

		        return back;
	        }
        }
    }
</script>

<style lang="less" scoped>
    @import "../../css/box";
    .body_{
        width: 100%; height: 100%; min-width: 500px;
        user-select: none;
    }
    .item_pre_,.item_next_,.item_page_,.item_text_{
        width: 30px; height: 30px; border:1px solid #333;
        margin: 0 10px; color: #333; line-height: 30px;
        font-size: 16px; text-decoration: none;
        text-align: center; border-radius: 5px;
        &:hover{
            opacity: .5;
        }
    }
    .item_text_{
        line-height: 23px;
    }

    .item_notClick_{
        color: #ccc; border:1px solid #ccc;
        &:hover{
            opacity: 1;
        }
    }
    .item_select_{
        color: #1d83ed; border:1px solid #1d83ed;
    }

</style>
