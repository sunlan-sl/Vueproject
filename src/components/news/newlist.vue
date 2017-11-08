<template>
    <div id="temp1">
        <ul class="mui-table-view">
				<li  class="mui-table-view-cell mui-media" v-for="(item,index) in data" :key="index">
					<router-link :to="'/news/newsinfo/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							{{item.title}}
							<p class="mui-ellipsis">{{item.zhaiyao}}</p>
							<div class="ft">
								<span class="date">发表时间:{{item.add_time | datafmt("YYYY-MM-DD HH:mm:ss")}}</span>
								<span class="click">点击数:{{item.click}}</span>
							</div>
						</div>
					</router-link>
				</li>

			</ul>
	</div>
</template>
<script>
 import common from '../../common.js'
    export default {
        data(){
            return {
               data:[],
            }
        },
        created(){
            this.getdata();
        },
        methods:{
            getdata(){
                 this.$http.get(common.temurl+'/api/getnewslist').then(function(res){
					 if(res.body.status != 0){
						 alert(res.body.message);
						 return;
					 }else{
						this.data = res.body.message;
					 }
                    
            })
            }
        }
       
    };
</script>
<style scoped>
.mui-table-view .mui-media-object {
    line-height: 80px;
    max-width: 80px;
	height: 80px;
}
.ft {
	margin-top: 1.5em;
	font-size: 14px;
	color:blue;
	overflow: hidden;
}
.ft .date{
	float: left;
}
.ft .click {
	float: right;
	margin-right: 10px;
}
</style>