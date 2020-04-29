import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../pages/Home'
import collect from '../pages/Collect'
import shoppingCart from '../pages/ShoppingCart'
import mine from '../pages/Mine'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: home
    }, {
        path: '/collect',
        name: 'collect',
        component: collect
    }, {
        path: '/shoppingCart',
        name: 'shoppingCart',
        component: shoppingCart
    }, {
        path: '/mine',
        name: 'mine',
        component: mine
    },
];

const router = new VueRouter({
    routes
});

export default router
