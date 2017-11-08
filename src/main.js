import Vue from 'vue'  //导入Vue核心包
import router from './router/index.js'

Vue.config.productionTip = false
//导入login.vue的Vue对象
import App from './App.vue'  //导入app.vue页面

//引入mint Ui的使用
import Mint from 'mint-ui';
//导入css样式
import 'mint-ui/lib/style.css';
//导入js
import 'mint-ui/lib/index.js';
Vue.use(Mint);

//导入mui的css样式
import '../static/mui/js/mui.js';
import '../static/mui/css/mui.css';

//导入全局css样式，要在所有的css样式后面，否则会被覆盖
import '../static/css/appvue.css';

//路由绑定
import vueResource from 'vue-resource';
Vue.use(vueResource);


//日期格式化 moment.js
import moment from 'moment';
Vue.use(moment);
//定义全局过滤器
Vue.filter('datafmt',function(input,datestr){
  return moment(input).format(datestr);
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
