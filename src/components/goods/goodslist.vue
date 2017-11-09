<template>
    <div id="temp1">
        商品购买
        <div>
            <mt-field style="margin-bottom:0px" label="用户名" placeholder="请输入用户名"></mt-field>
<mt-field label="邮箱" placeholder="请输入邮箱" type="email"></mt-field>
<mt-field label="密码" placeholder="请输入密码" type="password"></mt-field>
<mt-field label="手机号" placeholder="请输入手机号" type="tel"></mt-field>
<mt-field label="网站" placeholder="请输入网址" type="url"></mt-field>
<mt-field label="数字" placeholder="请输入数字" type="number"></mt-field>
<mt-field label="生日" placeholder="请输入生日" type="date"></mt-field>
<mt-field label="自我介绍" placeholder="自我介绍" type="textarea" rows="4"></mt-field>
        </div>
	</div>
</template>
<script>
 import { Field } from 'mint-ui';
import Vue from 'Vue';
Vue.component(Field.name, Field);
    export default {
        data(){
            return {
               
            }
        },
       
    };
</script>
<style scoped>
.mt-field {
    margin-bottom: 0px;
}

</style>