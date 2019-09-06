import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const router = new Router({
    routes: [{
            path: "/home",
            meta: {
                requiresAuth: true
            },
            component: () =>
                import ("./views/home")
        },
        {
            path: "/login",
            meta: {
                requiresAuth: false
            },
            component: () =>
                import ('./views/login/login')
        },
        {
            path: "/zc",
            meta: {
                requiresAuth: false
            },
            component: () =>
                import ('./views/zc/zc')
        },
        {
            path: "/vote",
            component: () =>
                import ('./views/vote/vote')
        },
        {
            path: "/startvote",
            component: () =>
                import ('./views/vote/startvote')
        },
        {
            path: "/votedetail",
            component: () =>
                import ('./views/vote/votedetail/votedetail')
        },
        {
            path: "/",
            redirect: "/home"
        }
    ]
})
router.beforeEach((to, from, next) => {
    if (to.matched.some(item => item.meta.requiresAuth)) {
        if (!localStorage.getItem('token')) {
            next({ path: "login", query: { redirect: to.fullPath } }) //当前界面的路由to.fullpath
        } else {
            next()
        }
    } else {
        next()
    }
})
export default router;