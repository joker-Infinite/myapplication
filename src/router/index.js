import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../pages/Home'
import collect from '../pages/Collect'
import shoppingCart from '../pages/ShoppingCart'
import mine from '../pages/Mine'
import login from "../components/login";
import registered from "../components/registered";
import store from "../store";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: home,
    }, {
        path: '/collect',
        name: 'collect',
        component: collect
    }, {
        path: '/shoppingCart',
        name: 'shoppingCart',
        component: shoppingCart,
        meta: {
            requireAuth: true
        }
    }, {
        path: '/mine',
        name: 'mine',
        component: mine
    }, {
        path: '/login',
        name: 'login',
        component: login
    }, {
        path: '/registered',
        name: 'registered',
        component: registered
    },
];

const router = new VueRouter({
    routes
});

router.beforeEach((to, from, next) => {
    //这里的requireAuth为路由中定义的 meta:{requireAuth:true}，意思为：该路由添加该字段，表示进入该路由需要登陆的
    if (to.matched.some(r => r.meta.requireAuth)) {
        if (store.state.user.userAccountNumber && store.state.user.userPassword) {
            next();
        } else {
            next({
                path: '/login',
            })
        }
    } else {
        next();
    }
});

export default router
