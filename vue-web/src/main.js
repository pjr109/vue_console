// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import http from './assets/js/http';
Vue.prototype.$http = http;
import QS from 'qs'
Vue.prototype.qs = QS;
import VueRouter from "vue-router"
// import vresource from "vue-resource"//这个现在已经没人再维护了，建议最好用axios
import Home from "./components/home"
import Login from "./components/Login"
import Detail from "./components/detail"
import API from "./assets/js/api"
Vue.prototype.API = API

Vue.use(ElementUI)
Vue.use(VueRouter)
// Vue.use(vresource)
Vue.config.productionTip = false

var router = new VueRouter({
    routes:[{
      path:'/',
      component:Home
    },{
      path:'/login',
      component:Login
    },{
      path:'/detail',
      component:Detail
    }],
    mode:"history"
})
/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
//index.html -> main.js -> app.vue
