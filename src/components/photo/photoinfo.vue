<template>
    <div id="temp1">
        <p class="til">图片详情</p>
        <h4 class="title">{{data.title}}</h4>
        <div class="cnt">
            <p>
                <span>{{data.add_time | datafmt('YYYY-MM-DD: HH:mm:ss')}}</span>
                <span>浏览{{data.click}}次</span>
            </p>
            <div id="imgs">
                <div class="box" v-for="(item,index) in imglist" :key="index">
                    <img :src="item.src">
                </div>
            </div>
            <p v-html="data.content" class="info"></p>
            <comment :id="id"></comment>
        </div>
	</div>
</template>
<script>
import commont from "../../common.js";
import comment from "../subcom/comment.vue";
export default {
  data() {
    return {
      id: "",
      data: {},
      imglist: []
    };
  },
  components: {
    comment
  },
  created() {
    this.id = this.$route.params.id;
    this.getimginfo();
    this.getimgs();
  },
  methods: {
    getimginfo() {
      var url = commont.temurl + "/api/getimageInfo/" + this.id;
      this.$http.get(url).then(function(res) {
        this.data = res.body.message[0];
      });
    },
    getimgs() {
      var url = commont.temurl + "/api/getthumimages/" + this.id;
      this.$http.get(url).then(function(res) {
        this.imglist = res.body.message;
        console.log(this.imglist);
      });
    }
  }
};
</script>
<style scoped>
.cnt {
  padding: 0 10px;
}
.til {
  width: 100%;
}
.title {
  color: #0094ff;
  padding-left: 10px;
}
.til {
  height: 30px;
  font-size: 14px;
  background-color: #ccc;
  text-align: center;
  line-height: 30px;
  color: #0094ff;
}
#imgs {
  overflow: hidden;
  margin: 20px;
}
#imgs .box {
  width: calc(100%/3);
  padding: 10px;
  height: 100px;
  box-sizing: border-box;
  display: inline-block;
}
#imgs img {
  height: 100%;
  width: 100%;
}
.info {
  line-height: 25px;
  text-indent: 2em;
}
</style>