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
        path: '/home',
        name: 'home',
        component: home,
        meta: {
            requireAuth: true
        }
    }, {
        path: '/collect',
        name: 'collect',
        component: collect,
        meta: {
            requireAuth: true
        }
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
        component: mine,
        meta: {
            requireAuth: true
        }
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

router.beforeEach(async (to, from, next) => {
    if (document.cookie) {
        let userData = JSON.parse(document.cookie.split('=')[1]);
        userData.forEach(i => {
            if (i.status === true) {
                store.commit('actionIncrease', i);
            }
        });
    }
    //这里的requireAuth为路由中定义的 meta:{requireAuth:true}，意思为：该路由添加该字段，表示进入该路由需要登陆的
    if (to.matched.some(r => r.meta.requireAuth)) {
        if (store.state.userData.userInfo.userAccountNumber && store.state.userData.userInfo.userPassword) {
            next();
        } else {
            next({
                path: '/login',
            })
        }
    } else {
        if (store.state.userData.userInfo.userAccountNumber && store.state.userData.userInfo.userPassword) {
            next('/Home');
        } else {
            next()
        }
    }
    //当路由错误时，进行重定向
    if (to.path == '/') {
        next({path: '/Home'})
    } else {
        next();
    }
});

export default router
