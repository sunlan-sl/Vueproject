<template>
    <div id="temp1">
        <div class="wrap">
            <mt-swipe :auto="4000">
                <mt-swipe-item v-for="(item,index) in list" :key="index">      <!-- 这里不加key会有警告 -->
                    <img :src="item.img" alt="" class="img">
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <!-- 九宫格 -->
        <div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/news/newslist">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">新闻资讯</div>
                        </router-link>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/photo/photolist">
		                    <span class="mui-icon mui-icon-email"></span>
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/goods/goodslist">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">商品购买</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">留言反馈</div></router-link>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">视频专区</div></router-link>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">联系我们</div></router-link>
                    </li>
		        </ul> 
		</div>
	</div>
</template>

<script>
import Vue from 'vue'  //导入Vue核心包
import { Toast } from 'mint-ui';
//import './common';
import  common from '../common.js';
    export default {
        data(){
            return {
              list:[],
            }
        },
        created(){
            this.getList();
        },
        methods:{
           getList(){
                this.$http.get(common.temurl+'/api/getlunbo').then(function(res){
                        if(res.body.status !=0){
                                Toast({
                                        message: res.body.message,
                                        position: 'bottom',
                                        duration: 5000
                                });
                                return;
                        }
                         this.list = res.body.message;
                })
           }
        }
    };
</script>
<style scoped>
.wrap {
    height: 300px;
}
.img {
    width: 100%;
    height: 100%;
}
.mui-icon-home::before ,.mui-icon-email::before ,.mui-icon-chatbubble::before,
.mui-icon-location::before ,.mui-icon-search::before, .mui-icon-phone::before {
    content: "";
    display: inline-block;
    width: 50px;
    height: 50px;
    background-image: url('../../static/imgs/1.png');
    background-size: contain;
    background-repeat: no-repeat;
}
.mui-icon-home::before {
    background-image: url('../../static/imgs/1.png');    
}
.mui-icon-email::before {
    background-image: url('../../static/imgs/2.png'); 
}
.mui-icon-chatbubble::before {
    background-image: url('../../static/imgs/3.png'); 
}
.mui-icon-location::before {
    background-image: url('../../static/imgs/4.png'); 
}
.mui-icon-search::before {
    background-image: url('../../static/imgs/5.png'); 
}
.mui-icon-phone::before {
    background-image: url('../../static/imgs/6.png'); 
}
.mui-grid-view.mui-grid-9 {
    background-color: #fff;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border:0;
}
.mui-grid-view.mui-grid-9 {
   border:0;
}
</style>