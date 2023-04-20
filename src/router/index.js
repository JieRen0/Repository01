import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRoutes = [{
        path: '/header',
        component: () =>
            import ('@/components/my-header')
    },

    {
        path: "/findpwd",
        component: () =>
            import ('@/components/Register/findpwd'),


    },
    {
        path: "/register",
        component: () =>
            import ('@/components/Register/register'),


    },
    {
        path: '/',
        component: () =>
            import ('@/views/login/index'),
        hidden: true,

    },
    {
        path: "/complete",
        component: () =>
            import ('@/views/login/index'),

    },
    {
        //起别名为main01
        path: "/main01",
        component: () =>
            //引入路径
            import ('@/views/main/main01'),

    },
    {
        path: "/xxx",
        component: () =>
            import ('@/views/xxx/xxx'),

    },

    {
        path: "/demo",
        component: () =>
            import ('@/views/xxx/demo'),

    },

]

const createRouter = () => new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}


export default router