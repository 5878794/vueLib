import { createApp } from 'vue'
import App from './App.vue'
// import './registerServiceWorker'
import router from './router'
import store from './store'
import {ajax,api} from "./lib/ajax";

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';


const app = createApp(App);
app.use(store);
app.use(router);
app.use(Antd);
// app.config.globalProperties.username = {aaa:111};
app.config.globalProperties.ajax = ajax;
app.config.globalProperties.api = api;
app.mount('#app');



// config（配置）	包含应用配置的对象。同Vue2中config。提供统一配置。
// directive（指令）	注册或检索全局指令。指令是一组具有生命周期的钩子。
// mixin（混入）	在整个应用范围内应用混入。一旦注册，它们就可以在当前的应用中任何组件模板内使用它。插件作者可以使用此方法将自定义行为注入组件。不建议在应用代码中使用。
// mount（挂载）	应用实例的根组件挂载在提供的 DOM 元素上。同Vue2中的el。
// provide（搭配Inject）	设置一个可以被注入到应用范围内所有组件中的值。组件应该使用 inject 来接收 provide 的值。provide 和 inject 绑定不是响应式的。
// unmount（卸载）	在提供的 DOM 元素上卸载应用实例的根组件。
// use（使用）	安装 Vue.js 插件。在同一个插件上多次调用此方法时，改插件将仅安装一次。
// component（组件）	注册或检索全局组件。注册还会使用给定的 name 参数自动设置组件的 name
