<template lang="pug">
div
    div(class="test" @click="testFn") test
    pagination(
        class='pagination box_hcc'
        :totalList="141"
        :nowPage="6"
        :pageSize="10"
        url="/about?page="
    )
    b-select(
        ref="input_text123"
        inRef='input2'
        class="b_input"
        placeholder="请选择电话号码"
        :disabled="false"
        :selectData="selectData"
        :icon="icon"
        name="输入"
        value=""
        unit="米"
        rule="must"
        err="请输入用户名"
        :blurCheck='true'
        @mychange="changeFn"
    )
    b-text(
        ref="input_text123"
        inRef='input2'
        class="b_input"
        placeholder="电话号码"
        :disabled="false"
        :icon="icon"
        name="输入"
        value="fff"
        unit="米"
        rule="must,min:1,max:20,str"
        err="请输入用户名"
        :blurCheck='true'
        @mychange="changeFn"
    )
    b-password(
        ref="input_text"
        inRef='input2'
        class="b_input"
        placeholder="电话号码"
        :disabled="false"
        :icon="icon"
        name="密码"
        value="fff"
        unit="米"
        rule="must,min:1,max:20,str"
        err="请输入用户名"
        :blurCheck='true'
        @mychange="changeFn"
    )


    b-info(
        ref="input_text"
        class="b_input"
        :icon="icon"
        name="文本"
        value="fff"
        unit="米"
    )




    b-sms(
        ref="input_text"
        inRef='input2'
        class="b_input"
        placeholder="电话号码"
        :disabled="false"
        :icon="icon"
        name="输入"
        value="fff"
        unit="米"
        rule="must,min:1,max:20,str"
        err="请输入用户名"
        :blurCheck='true'

        sendSmsFn='sendSms'

    )
    b-yzm(
        ref="input_text"
        inRef='input2'
        class="b_input"
        placeholder="电话号码"
        :disabled="false"
        :icon="icon"
        name="输入"
        value="fff"
        rule="must,min:1,max:20,str"
        err="请输入用户名"
        :blurCheck='true'

        getYzmFn='getYzmFn'

    )

    b-textarea(
        ref="input_textarea"
        inRef='input2'
        class="b_textarea"
        placeholder="电话号码"
        :disabled="false"
        :icon="icon"
        name="输入"
        value="fff"
        rule="must,min:1,max:20,str"
        err="请输入用户名"
        :blurCheck='true'
        @mychange="changeFn"
    )
    div(@click="getVal") aaaa
</template>

<script>
	// @ is an alias to /src
    import pagination from "../components/pagination/pagination";
    import bText from '../components/input/text';
    import bInfo from '../components/input/info';
    import bPassword from "../components/input/password";
    import bSms from '../components/input/sms';
    import bYzm from '../components/input/yzm';
    import bTextarea from '../components/input/textarea';
    import bSelect from '../components/input/select';
    import sys from "../lib/sys";

	import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';

	export default {
		name: 'Home',
		components: {
			pagination,bText,bInfo,bPassword,bSms,bYzm,bTextarea,bSelect
		},
		computed:{
			...mapState(['test'])
        },
        data(){
		    return {
		    	icon:require('../assets/logo.png'),
			    selectData:[
                    {key:0,val:'a'},
				    {key:2,val:'b'},
				    {key:3,val:'c'},
				    {key:4,val:'d'}
                ]
            }
        },
        methods:{
	        storeFn(){
		        this.$store.commit('add','1');
	        	console.log(this.$store.state.test)

                this.$store.dispatch('add1','2');
		        console.log(this.$store.state.test)

	        	// let t = this.$store.getters.getTest(2);
	        	// console.log(t);
            },
	        testFn(){
	        	console.log(this.username)
	        	// this.$router.push({
                //     path:"/about",
                //     query:{id:123456}
                // });
		        // sys.goBack();
	        	sys.openPage('/about',{id:1},'self');
                // sys.refresh();

            },
	        changeFn(val){
	        	console.log(val)
            },
	        async getVal(){
	        	let val = await this.$refs.input_text123.check();
	        	console.log(val);
            },
	        sendSms(){
	        	console.log(123)
		        return new Promise(success=>{
			        setTimeout(e=>{
				        success(true);
			        },1000)
		        });
            },
	        getYzmFn(){
		        return new Promise(success=>{
			        setTimeout(e=>{
				        success({
					        src:'https://xinqihang.junegeorge.top/index.php?s=/captcha&_='+new Date().getTime(),
					        token:'111222333'
				        })
			        },1000)
		        })
            },
	        changeFn(e){
	        	console.log(e)
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
    }
    .b_input{
        width: 100%; margin-bottom: 20px;
    }
    .b_textarea{
        width: 100%; margin-bottom: 20px;
    }
</style>
