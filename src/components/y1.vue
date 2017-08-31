<template>
 <!-- 首页 -->
 <div id="header">
    <div class="title">
      <span class="logo left_l"><img  src="../assets/logo.png" class="logo"></span>
      首页
      <span class="logo right_l iconfont icon-caidan"></span>
    </div>
    <!-- tap切换 -->
    <div class="qie">
      <ul>
        <li class="ulilisColor" v-for="item in ullis">{{item.text}}</li>
      </ul>
    </div>
 </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      ullis:[
        {'text':'全部'},
        {'text':'精华'},
        {'text':'weex'},
        {'text':'分享'},
        {'text':'回答'},
        {'text':'招聘'},
      ]
    }
  },
  mounted() {
    console.log('111')
      axios.get('https://www.vue-js.com/api/v1/topics')
      .then(function(response){
    console.log(response.data.data[3]);
  })
       .catch(function(err){
    console.log(err);
  });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .title{
    width: 100%;
    text-align: center;
    height: 1.5rem;
    line-height: 1.5rem;
    font-size: 0.5rem;
    font-weight: 400;
    background-color: #009688;
    color: #fff;
    position: relative;
    box-shadow: 0 1px 6px rgba(0,0,0,.2117647), 0 1px 4px rgba(0,0,0,.117647);
  }
  .ulilisColor{
    color: #fff;
    background:  #009688;
  }
  .logo{
    display: inline-block;
    width: 0.8666667rem;
    height: 0.8666667rem;
    line-height: 0.8666667rem;
    margin: auto;
    font-size: 0.666667rem;
  }
  .left_l{
    position: absolute;
    top:50%;
    left: 3%;
    margin-top: -0.4333333rem;
  }
  .right_l{
    position: absolute;
    top:50%;
    right: 3%;
    margin-top: -0.4333333rem;
  }
  .qie>ul{
    display: flex;
    /*border-top:1px solid #ccc;*/
    width: 100%;
  }
  .qie>ul>li{
    text-align: center;
    flex: 1;
    height: 1.2rem;
    line-height: 1.2rem;
  }
 
</style>
