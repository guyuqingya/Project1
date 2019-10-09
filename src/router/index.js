import Vue from 'vue'
import Router from 'vue-router'


import Login from '@/views/login/login.vue'
import Main from '@/views/main/main.vue'
import Home from '@/views/home/home.vue'
import Choose from '@/views/choose/choose.vue'
import History from '@/views/history/history.vue'
import Vedio from '@/views/vedio/vedio.vue'
import Dongtai1 from '@/views/dongtai1/dongtai1.vue'
import Dongtai2 from '@/views/dongtai2/dongtai2.vue'
import Dongtai3 from '@/views/dongtai3/dongtai3.vue'
import Passwd from '@/views/passwd/passwd.vue'
import Zhichi from '@/views/zhichi/zhichi.vue'
import Lianxi from '@/views/lianxi/lianxi.vue'
import Kongzhi from '@/views/kongzhi/kongzhi.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Jquery from 'jquery';

Vue.use(ElementUI)
Vue.use(Router)
Vue.use(Jquery)
Vue.use(Login)
Vue.use(Main)
Vue.use(Home)
Vue.use(Choose)
Vue.use(History)
Vue.use(Vedio)
Vue.use(Dongtai1)
Vue.use(Dongtai2)
Vue.use(Dongtai3)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: "/main",
      name: "Main",
      component: Main
    },
    {
      path: "/home",
      name: "Home",
      component: Home
    },
    {
      path: "/choose",
      name: "Choose",
      component: Choose
    },
    {
      path: "/history",
      name: "History",
      component: History
    },
    {
      path: "/vedio",
      name: "Vedio",
      component:Vedio
    },
    {
      path: "/dongtai1",
      name: "Dongtai1",
      component:Dongtai1
    },
    {
      path: "/dongtai2",
      name: "Dongtai2",
      component:Dongtai2
    },
    {
      path: "/dongtai3",
      name: "Dongtai3",
      component:Dongtai3
    },
    {
      path: "/passwd",
      name: "Passwd",
      component:Passwd
    },
    {
      path: "/zhichi",
      name: "Zhichi",
      component:Zhichi
    },
    {
      path: "/lianxi",
      name: "Lianxi",
      component:Lianxi
    },
    {
      path: "/kongzhi",
      name: "Kongzhi",
      component:Kongzhi
    },
  ],

  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return { x: 0, y: 0 }
  }

})

