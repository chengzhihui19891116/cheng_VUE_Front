import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import Leftbar1 from '@/pagesroute/leftbar1/leftbar1.vue'
// import Leftbar2 from '@/pagesroute/leftbar2/leftbar2.vue'
// import Leftbar3 from '@/pagesroute/leftbar3/leftbar3.vue'

// const Leftbar1=()=>import('../pagesroute/leftbar1/leftbar1.vue')
// const Leftbar2=()=>import('../pagesroute/leftbar2/leftbar2.vue')
// const Leftbar3=()=>import('../pagesroute/leftbar3/leftbar3.vue')

Vue.use(Router)

export default new Router({
    routes: [
        //  {
        //    path: '/',
        //    name: 'HelloWorld',
        //    component: HelloWorld
        //  },
        // {
        //   path: '/',
        //   redirect: '/leftbar1'
        // },
        // {
        //   path: '/leftbar1',
        //   component: Leftbar1
        // },
        // {
        //   path: '/leftbar2',
        //   component: Leftbar2
        // },
        // {
        //   path: '/leftbar3',
        //   component: Leftbar3
        // },
    ]
})