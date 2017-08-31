<template>
 	<div id="yemian2">
 		页面2
 		<div class="container">
      		<h1></h1>
      		<input type="text" v-model="newItem" v-on:keyup.enter="addNew"/>
     		<button v-on:click="addNew">Add</button>
      		<ul>
      		  <li  v-for="(item, index) in arr2">
              <span>{{index+"、"}}</span>
      		    <span :class="item.panduan?'finished':''">{{ item.name }}</span>
      		    <span class="func first" v-on:click="toggle(index)">{{item.panduan?'todo':"done"}}</span>
      		    <span class="func" v-on:click="del(index)">delete</span>
      		  </li>
      		</ul>
      		<div class="delAll" v-on:click="delAll">
        		Delete All
      		</div>
    	</div>
 	</div>
</template>

<script>

export default {
  		name:"yemian2",
  		data(){
  			return{
  				newItem:"",
  				label:"",
  				arr:[],
          panduan:false,
          num:null,
          arr2:[]
  			}
  		},
      mounted(){//相当于window.onload
            this.arr2 = JSON.parse(localStorage.getItem('weekDay'));
            this.arr=this.arr2;
      },
      watch:{//实时监听
          arr:function(newValue,oldValue){
            this.arr2 = JSON.parse(localStorage.getItem('weekDay'));
            console.log(JSON.parse(localStorage.getItem('weekDay')))
          }
      },
  		methods:{//写方法
  			addNew(){
  				this.arr.push({name:this.newItem,panduan:false});
          this.setzhi();
          this.newItem="";
  			},
        toggle(index){
          this.arr2[index].panduan=!this.arr2[index].panduan;
          this.arr[index].panduan=!this.arr[index].panduan;

          this.setzhi();
        },
        del(index){
          this.arr.splice(index,1)
          this.setzhi();
        },
        delAll(){
          this.arr=[];
          this.setzhi();
        },
        setzhi(){
          localStorage.setItem('weekDay',JSON.stringify(this.arr));
        }
  		}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}*/
.container {
  text-align: center;
}
input {
  box-shadow: 0 0 8px rgb(150, 104, 219);
  border: none;
}
li {
  margin-top: 9px;
}
button {
  border-radius: 14px;
  color: black;
  box-shadow: 0 0 2px rgb(70, 120, 231);
  background: none;

}
span.func {
  cursor: pointer;
  margin-left: 7px;
  text-decoration: underline;
}
span.func.first {
  margin-left: 13px;
}
ul {
  text-align: left;
  margin-left: 50px;
}
.finished {
  text-decoration: line-through;
}
div.delAll {
  cursor:pointer;
  text-decoration: underline;
}
#yemian2 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}
</style>
