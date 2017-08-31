<template>
 <!-- 首页 -->
 <div id="header">
    页面3
    <!-- tap切换 -->
 </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
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
    font-size: 60px;
    font-weight: 400;
    background-color: #009688;
    color: #fff;
    position: relative;
  }
  .logo{
    display: inline-block;
    width: 0.8666667rem;
    height: 0.8666667rem;
    line-height: 0.8666667rem;
    margin: auto;
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
</style>
