import Vue from 'vue'
import router from 'vue-router'
import y1 from '@/components/y1'
import y2 from '@/components/y2'
import y3 from '@/components/y3'
import y4 from '@/components/y4'

Vue.use(router)

export default new router({
  routes: [
  	  // 有几个页面就要配几个路由  * 代表 不管输入什么乱七八糟的地址 都指向默认的第一页 y1
	 {
	  	path: '*',
	  		redirect:'/y1'
	 },
    {
      path: '/y1',
      name: 'y1',
      component: y1,

    },
    {
    	path:'/y2',
    	name:'y2',
    	component:y2
    },
    {
      path:'/y3',
      name:'y3',
      component:y3
    },
    {
      path:'/y4',
      name:'y4',
      component:y4
    }
  ]
})
