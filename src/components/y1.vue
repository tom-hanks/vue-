<template>
 <!-- 首页 -->
 <div id="header">
    <div class="title"  v-bind:class="{ ulilisColor: isActive1, ulilisColor2: isActive2, ulilisColor3: isActive3 }" >
      <span class="logo left_l"><img  src="../assets/logo.png" class="logo"></span>
      首页
      <span class="logo right_l iconfont icon-caidan" v-on:click="toggleCol()"></span>
    </div>
    <!-- tap切换 -->
    <div class="qie">
      <ul>
        <li  v-bind:class="{ ulilisColor: isActive1, ulilisColor2: isActive2, ulilisColor3: isActive3 }" v-for="item in ullis">{{item.text}}</li>
      </ul>
    </div>
    <div class="color_k">
        <ul>
            <li v-for="(item2,index) in ullis2" v-on:click="toggleCol(index+1)">{{item2.text2}}</li>
        </ul>
    </div>
 </div>
</template>

<script>
import axios from 'axios'
import Bus from '../router/bus.js';
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isActive1:true,
      isActive2:'',
      isActive3:'',
      isullistCober:false,
      ullis:[
        {'text':'全部'},
        {'text':'精华'},
        {'text':'weex'},
        {'text':'分享'},
        {'text':'回答'},
        {'text':'招聘'},
      ],
      ullis2:[
        {'text2':'LIGHT'},
        {'text2':'CARBON'},
        {'text2':'TEAL'},

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
  },
  methods:{
    // 换色
      toggleCol(a){
        if(a==1){
          this.isActive1=true;
          this.isActive2=false;
          this.isActive3=false;
          Bus.$emit('id-selected', 1);
        }else if(a==2){
          this.isActive1=false;
          this.isActive2=true;
          this.isActive3=false;
          Bus.$emit('id-selected', 2);
        }else if(a==3){
          this.isActive1=false;
          this.isActive2=false;
          this.isActive3=true;
          Bus.$emit('id-selected', 3);
        }
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
    font-size: 0.5rem;
    font-weight: 400;
    color: #fff;
    position: relative;
    box-shadow: 0 1px 6px rgba(0,0,0,.2117647), 0 1px 4px rgba(0,0,0,.117647);
  }
  .ulilisColor{
    color: #fff;
    background:  #009688;
  }
  .ulilisColor2{
    color: #fff;
    background-color: #7e57c2;
  }
  .ulilisColor3{
    color: #fff;
    background-color: #474a4f;
  }
  .ullistCober{
    color:red;
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
.color_k{
  width: 2.5rem;
  background: #fff;
  position: fixed;
  top: 20px;
  right: 20px;
  border-radius:10px;
}
.color_k>ul>li{
  width: 100%;
  height: 0.9666667rem;
  line-height: 0.9666667rem;
  text-align:center;
  box-shadow: 0 1px 6px rgba(0,0,0,.3117647), 0 1px 4px rgba(0,0,0,.117647);
}
</style>
