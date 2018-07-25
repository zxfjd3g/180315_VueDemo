import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

// 声明使用插件
Vue.use(VueResource) // 内部会给vm/组件对象添加一个$http属性对象(get()/post())

/*
入口js
 */
new Vue({
  el: '#app',
  components: {// 注册组件
    App
  },
  template: '<App/>'  // 将App标签渲染到el对应div中
})