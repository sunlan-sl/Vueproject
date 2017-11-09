import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home.vue';    //首页   
import shopcar from '@/components/shopcar/shopcar.vue';   //购物车
import newlist from '@/components/news/newlist.vue';      //新闻列表
import newsinfo from '@/components/news/newsinfo.vue';   //新闻详细信息

import goodslist from '@/components/goods/goodslist.vue';
import photolist from '@/components/photo/photolist.vue';
import photoinfo from '@/components/photo/photoinfo.vue';

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
     {
      path:'/goods/goodslist',
      component:goodslist,
     },
     {
      path:'/photo/photolist',
      component:photolist,
     },
     {
      path:'/photo/photoinfo/:id',
      component:photoinfo,
     },
  ]
})
