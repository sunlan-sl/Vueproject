<template>
    <div id="temp1">
        <!-- 提交评论 -->
        <div class="commit">
          <h4>提交评论</h4>
          <p class="line"></p>
          <textarea placeholder="请输入评论信息" v-model="msg"></textarea>
          <mt-button size="large" type="primary"  @click="postcomment">提交</mt-button>
        </div>
        <!-- 获取评论列表 -->
        <div class="getcomment">
            <h4>获取评论列表</h4>
            <p class="line"></p>
            <div class="commentlist" v-for="(item, index) in list" :key="index">
                <div class="title">
                    <span>{{item.user_name}}</span>
                    <span>第{{index+1}}楼层&nbsp;</span>
                   <span>发布时间:{{item.add_time | datafmt('YYYY-MM-DD HH:mm:ss')}}</span>
                </div>
            
                <ul class="mui-table-view">
                    <li class="mui-table-view-cell" >{{item.content}}</li>
                </ul>
            </div>
        </div>
        <!-- 加载更多 -->
        <mt-button size="large" type="default" @click="more">获取更多</mt-button>
	</div>
</template>
<script>
import common from '../../common.js';      //URL
import { Toast } from 'mint-ui';
    export default {
        data(){
            return {
               msg:"",
               list:[],  //获取评论信息列表
               pageindex:1,
            }
        },
        created:function(){
            this.getcommments();
        },
        
        props:['id'],
        created:function(){
            this.getcommments();
        },
        methods:{
            more:function(){
                this.pageindex++;
                this.getcommments(this.pageindex);
            },
            postcomment:function(){
                if(this.msg.trim().length <= 0){
                    Toast('请输入评论信息');
                    return;
                }
                var url = common.temurl+'/api/postcomment/'+this.id;
                this.$http.post(url,{content:this.msg},{emulateJSON:true}).then(function(res){
                    Toast({
                         message: res.body.message,
                         position: 'middle',
                         duration: 3000,
                    });
                    //将最新的评论信息追加到当前页的最前面
                    this.list =[{'user_name':'匿名用户','add_time':new Date(),'content':this.msg}].concat(this.list)
                    //this.list.unshift({'user_name':'匿名用户','add_time':new Date(),'content':this.msg})
                    this.msg = "";


                })
            },
            getcommments:function(pageindex){
               // pageindex = pageindex || 1;
                var url = common.temurl + '/api/getcomments/'+this.id+'?pageindex='+this.pageindex;
                this.$http.get(url).then(function(res){
                    this.list = this.list.concat(res.body.message); //拼接实现数据再次请求不是覆盖而是追加
                })
            }
        },
       
    };
</script>
<style scoped>
.title {
    color: #6d6d72;
    font-size: 15px;
    padding:3px;
}
.commentlist {
    background-color: #ccc;

}
.commit textarea {
    margin-bottom: 0px;
}
.line {
    width: 100%;
    height: 0;
    border-bottom: 1px solid #ccc;
    margin-top: 5px;
}
.getcomment  {
    margin-top: 10px;
}
</style>