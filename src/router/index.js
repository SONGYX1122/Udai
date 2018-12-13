import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from "../components/index"
import login from "../components/login"
import register from "../components/register"
import details from "../components/details"
import shoppingCart from "../components/shoppingCart"

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name: 'index',component: index},
    {path: '/index',component: index},
    {path: '/login',component: login},
    {path: '/register',component: register},
    {path: '/details',component: details},
    {path: '/shoppingCart',component: shoppingCart},
  ]
})
