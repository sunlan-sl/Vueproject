<template>
    <div id="temp1">
        <div class="header">
            <h4>{{list.title}}</h4>
            <p>发布日期:{{list.add_time | datafmt("YYYY-MM-DD")}} | 点击次数:{{list.click}}</p>
        </div>
        <div class="content">
            <p v-html="list.content"></p>
        </div>
	</div>
</template>
<script>
  import common from '../../common.js'
    export default {
        data(){
            return {
               id:0,
               list:{},
            }
        },
        created(){
            this.id = this.$route.params.id;
            this.getlist();
        },
        methods:{
            getlist:function(){
                this.$http.get(common.temurl+'/api/getnew/'+this.id).then(function(res){
                    if(res.body.message[0].status == 0){
                        alert('信息请求失败');
                        return;
                    }
                    this.list = res.body.message[0];
                })
            }
        }
       
    };
</script>
<style scoped>
#temp1{
    padding: 10px;
}
.header {
    border-bottom:1px solid #ccc;
    margin-bottom: 10px;
}
.header h4 {
    color:#0ff4f0;
}
.header p {
    color:#ccc;
    padding-left: 20px;
}
</style>