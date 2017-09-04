<template>
  <div id="app">
  <!-- 写在这个页面的是公共部分的 每个路由里面都有这个东西  除非是挂在进来的 -->
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
    <div class="luyouf">
      <router-link tag="span"  to="/y1">
            <div class="mun">
              <s class="iconfont icon-shouye" :class="{active_b1:isactive1,active_b2:isactive2,active_b3:isactive3}"></s>
              <i :class="isactive1?'aa1':''">首页{{isactive1}}</i>
            </div>
        </router-link>
        <router-link tag="span" active-class="active_b1"  to="/y2">
            <div class="mun">
              <s class="iconfont icon-caidan1"></s>
              <i :class="isactive2?'aa2':''">发布</i>
            </div>
        </router-link>
        <router-link tag="span" active-class="active_b1"  to="/y3">
            <div class="mun">
              <s class="iconfont icon-xiaoxi"></s>
              <i :class="isactive3?'aa3':''">消息</i>
            </div>
        </router-link>
        <router-link tag="span" active-class="active_b1"  to="/y4">
            <div class="mun">
              <s class="iconfont icon-wode-fuben_fuzhi"></s>
              <i>我的</i>
            </div>
        </router-link>
    </div>
  </div>
</template>

<script>;
import Bus from './router/bus.js';
export default {
  name: 'app',
  data(){
    return{
      actived:0,
      isactive1:'',
      isactive2:'',
      isactive3:'',
      jilu:0
    }
  },
  methods:{

  },
  watch:{
    jilu:function(newValue,oldValue){
      console.log(this.jilu)
    }
  },
    created() {
      console.log(1113222)
        Bus.$on('id-selected', function (id) {
          // alert(id)
          // this.jilu=id;
          if(id==1){
            this.isactive1=true;
            this.isactive2=false;
            this.isactive3=false;
            console.log(111)
          }if(id==2){
            this.isactive1=false;
            this.isactive2=true;
            this.isactive3=false;
            console.log(this.isactive2)
          }if(id==3){
            this.isactive1=false;
            this.isactive2=false;
            this.isactive3=true;
            // alert('3')
          }
        })
    },
    // components:{HESSADADSADASD}             <HESSADADSADASD></HESSADADSADASD>  注册组件  想调用其他组件里面的东西到这个组件里，先import进来，然后一定要这样注册一下
    // router.push({name:'路由名字',params:{key:value}})跳转页面的时候传入地址栏的参数；
    // this.$route.params.key   取传过来的参数
    // import $ from jQuery
    // <keep-alive></keep-alive>存下离开之前的这个页面的所有状态，回来依旧。
    // computed:{}和watch差不多，以后少用watch 凡是要监听的都用computed
    // beforRouterEnter(to,from,next){  进入路由之前（跳入之前传参，等），这个是属于路由的功能   有三个
        // next(=>{
          // 一进入页面，更早，节点还没创建完成就可以执行，比created还早
        // })
    // }
}
</script>

<style scoped>
.aa1{
  color:#f00;
}
.aa2{
  color:#ff0;
}.aa3{
  color:#00f;
}
.active_b1{
  color: #009688;
}
.active_b2{
  color: #7e57c2;
}
.active_b3{
  color: #474a4f;
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
