import { RouteRecordRaw, createRouter,createWebHashHistory } from "vue-router";
const routes:RouteRecordRaw[]=[
    {
        path:'/',
        name:"home",
        component: () =>import('@/components/Fish/index.vue')
    },
    {
        path:'/friend',
        name:"friend",
        component: ()=>import('@/components/Friend/index.vue')
    }
]
const router=createRouter({
    history:createWebHashHistory(),
    routes
})
export default router