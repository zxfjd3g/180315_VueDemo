import Vue from 'vue'

import App from './App.vue'

import router from './router'


/*
入口js
 */
new Vue({
  el: '#app',
  components: {// 注册组件
    App
  },
  template: '<App/>',
  router // 注册路由器  给所有组件对象添加$route(代表当前路由的对象)的data数据, $router(代表路由器)
})