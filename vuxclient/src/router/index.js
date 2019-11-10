import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import demo from '../views/demo'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: "/home"
}, {
    path: "/home",
    name: "home",
    component: Home
}, {
    path: "/demo",
    name: "demo",
    component: demo
}]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router