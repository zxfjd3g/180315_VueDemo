/*
路由器
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import About from '../pages/about.vue'
import Home from '../pages/home.vue'
import News from '../pages/news.vue'
import Message from '../pages/message.vue'

// 声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
  // mode: 'history',
  // 所有路由
  routes: [
    // 路由
    {
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          // path: '/news', // path最左侧的/永远代表根路径
          path: '/home/news',
          component: News
        },
        {
          path: 'message',
          component: Message
        },
        {  // 自动跳转的路由
          path: '',
          redirect: '/home/news'
        }
      ]
    },
    {  // 自动跳转的路由
      path: '/',
      redirect: '/about'
    }
  ]
})
