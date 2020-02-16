import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Book from '@/components/Book';
import Login from '@/components/Login';
import Teach from '@/components/Teach';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path     : '/', //从哪里进来
      component: Home     //做什么反应: HelloWorld.vue
    },
    {
      path     : '/Book', //从哪里进来
      component: Book     //做什么反应: HelloWorld.vue
    },
    {
      path     : '/Login', //从哪里进来
      component: Login     //做什么反应: HelloWorld.vue
    },
    {
      path     : '/Teach', //从哪里进来
      component: Teach     //做什么反应: HelloWorld.vue
    },
  ]
})
