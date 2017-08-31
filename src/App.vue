<template>
  <div id="app">
  <!-- 写在这个页面的是公共部分的 每个路由里面都有这个东西  除非是挂在进来的 -->
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
    <div class="luyouf">
      <router-link tag="span" active-class="active_b" to="/y1">
            <div class="mun">
              <s class="iconfont icon-shouye"></s>
              <i>首页</i>
            </div>
        </router-link>
        <router-link tag="span" active-class="active_b"  to="/y2">
            <div class="mun">
              <s class="iconfont icon-caidan1"></s>
              <i>发布</i>
            </div>
        </router-link>
        <router-link tag="span" active-class="active_b"  to="/y3">
            <div class="mun">
              <s class="iconfont icon-xiaoxi"></s>
              <i>消息</i>
            </div>
        </router-link>
        <router-link tag="span" active-class="active_b"  to="/y4">
            <div class="mun">
              <s class="iconfont icon-wode-fuben_fuzhi"></s>
              <i>我的</i>
            </div>
        </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
      actived:0
    }
  },
  methods:{

  }
}
</script>

<style scoped>
.active_b{
  color: #009688;
}
.luyouf{
  width: 100%;
  position: fixed;
  bottom: 0;
  background: #fff;
  /*border:1px solid #ccc;*/
}
.mun{
  display: inline-block;
  width: 25%;
  height: 1.3746667rem;
  text-align: center;
  float: left;
}
.mun>s{
  display: block;
  text-decoration: none;
  line-height: 0.93746667rem;
  font-size: 0.533333rem;
}
.mun>i{
  display: block;
  height: 60%;
  line-height: 0.29rem;
  font-size: 0.4rem;
}
</style>
