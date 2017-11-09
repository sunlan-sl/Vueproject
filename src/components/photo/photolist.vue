<template>
    <div id="temp1">
        <!-- 图片分类 -->
        <div id="cate">
            <ul :style="{'width':ulWidth+'px'}">
                <li@click="getlist(0)" >全部</li>
                <li  v-for="(item,index) in cates" :key="index" @click="getlist(item.id)">{{item.title}} </li>
            </ul>
        </div>
        <!-- 分类详情 -->
        <div id="catelist">
            <ul>
                 <li v-for="(item,index) in list" :key="index">
                    <router-link :to="'/photo/photoinfo/'+item.id" >
                         <img v-lazy="item.img_url">
                         <div class="details">
                             <h5>{{item.title}}</h5>
                             <p>{{item.zhaiyao}}</p>
                         </div>
                     </router-link>
                  </li>
            </ul>
        </div>
	</div>
</template>
<script>
 import common from '../../common.js';
 import { Toast } from 'mint-ui';
    export default {
        data(){
            return {
               cates:[],
               ulWidth:300,
               list:[],
            }
        },
        created:function(){
            this.getcates();
            this.getlist(0);
        },
        methods:{
            getcates(){
                this.$http.get(common.temurl+'/api/getimgcategory').then(function(res){
                    this.cates = res.body.message;
                    var count = res.body.message.length;
                     this.ulWidth = (count+1) * 78;
                })
            },
            getlist(id){
                 var url=common.temurl+'/api/getimages/'+id
                this.$http.get(url).then(function(res){
                    if(res.body.message.length == 0){
                        Toast({message: '无数据'});
                        return;
                    }
                    this.list = res.body.message;
                })
            }
        }
       
    };
</script>
<style scoped>

#cate {
    max-width: 320px;
    width: 300px;
    overflow: auto;
    margin: 0  auto;;
}
#cate ul {
    list-style: none;
    overflow: hidden;
    padding: 0;

}
#cate li {
    color:#0094ff;
    float: left;
    margin-right: 10px;
}
#catelist ul {
    padding: 0;
    margin: 0;
}
#catelist li {
    list-style: none;
    width: 100%;
    position: relative;
}
#catelist li img{
    width: 100%;
    height: 300px;
    font-size: 0px;
}

#catelist .details {
    position: absolute;
    bottom: 0px;
    background:rgba(0,0,0,0.3);

}
#catelist  h5 {
     color: #fff;
     font-weight: 700;
     font-size: 14px;

}
#catelist  p {
     color: #fff;
     font-size: 12px;
}
</style>