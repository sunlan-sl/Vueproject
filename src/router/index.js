import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home.vue';
import shopcar from '@/components/shopcar/shopcar.vue';
import newlist from '@/components/news/newlist.vue';
import newsinfo from '@/components/news/newsinfo.vue';

Vue.use(Router)


export default new Router({
  linkActiveClass:'mui-active',
  routes: [
    {  
      path:'/',
      redirect:'/home',        //路由重定向

   },
    {  
       path:'/home',
       component:home,

    },
    {
      path:'/shopcar',
      component:shopcar
     },
     {
      path:'/news/newslist',
      component:newlist,
     },
     {
      path:'/news/newsinfo/:id',
      component:newsinfo,
     },
  ]
})
