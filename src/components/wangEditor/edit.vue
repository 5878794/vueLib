<template>
    <div id="websiteEditorElem" :class="show ? '' : 'show_active'"  v-on:keyup.enter="carriageReturn"></div>
</template>

<script>
	import E from "wangeditor"; //不了解看官方文档 https://www.wangeditor.com/ (如需要富文本组件，安装cnpm i -S wangeditor )
	import axios from "axios";
	let editor = null;

	export default {
		props: {
			action: {
				//上传地址
				type: String,
				default: "http://47.108.226.28:8080/Api/File/UpLoad",
			},
			placeholder:{
				type: String,
				default: "请输入内容",
			},
			show: {
				//是否显示菜单
				type: Boolean,
				default: true,
			},
			excludeMenus: {
				//隐藏菜单的数组
				type: Array,
				default: () => ([]),
				// 'head',//所有菜单
				// 'bold',
				// 'fontSize',
				// 'fontName',
				// 'italic',
				// 'underline',
				// 'strikeThrough',
				// 'indent',
				// 'lineHeight',
				// 'foreColor',
				// 'backColor',
				// 'link',
				// 'list',
				// 'todo',
				// 'justify',
				// 'quote',
				// 'emoticon',
				// 'image',
				// 'video',
				// 'table',
				// 'code',
				// 'splitLine',
				// 'undo',
				// 'redo',
			},
		},
		data() {
			return {};
		},
		components: {},
		methods: {
			seteditor() {
				let _this = this;
				editor = new E("#websiteEditorElem");
				editor.config.pasteFilterStyle = true;
				editor.config.placeholder = _this.placeholder;
				// 忽略图片，默认 false
				editor.config.pasteIgnoreImg = false;
				editor.config.customUploadImg = function (file, insertImgFn) {
					let fd = new FormData();
					fd.append("file", file[0]);
					let config = {
						headers: {
							"Content-Type": "multipart/form-data",
						},
					};
					axios.post(_this.action, fd, config).then((res) => {
						if (res.data.code > -1) {
							insertImgFn(res.data.data[0]);
						}
					});
				};
				editor.config.excludeMenus = _this.excludeMenus; //需要隐藏的菜单
				editor.config.onchange = function (newHtml) {
					_this.$emit('input', editor.txt.html(),editor.txt.text());//分发input事件
				};
				editor.create();
			},
			//富文本编辑调用此方法赋值
			assignment(val) {
				editor.cmd.do("insertHTML", val);
			},
			//调用此方法禁止输入
			disable() {
				editor.disable();
			},
			//调用此方法允许输入
			enable() {
				editor.enable();
			},
			//enter事件
			carriageReturn(){
				this.$emit('carriageReturn', editor.txt.html(),editor.txt.text());
			}
		},
		mounted() {
			this.seteditor();
		},
		watch: {},
		computed: {},
	};
</script>

<style  lang='less'>
    #websiteEditorElem {
        width: 100%;
        height: 100%;
    }
    .show_active {
        .w-e-toolbar {
            display: none !important;
        }
        .w-e-text-container {
            border-top: 1px solid #c9d8db;
        }
    }
</style>
