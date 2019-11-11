import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import demo from '../views/demo'
import demoList from '../components/demolist'
import actionsheet from '../components/actionsheet'
import alert from '../components/alert'
import buttontab from '../components/buttontab'
import blur from '../components/blur'
import badge from '../components/badge'
import calendar from '../components/calendar'
import card from '../components/card'
import xswitch from '../components/xswitch'
import cell from '../components/cell'
import cellform from '../components/cellform'
import check from '../components/check'
import divider from '../components/divider'

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
    component: demo,
    children: [
        { path: "", name: "demoList", component: demoList },
        { path: "/actionsheet", name: "actionsheet", component: actionsheet },
        { path: "/alert", name: "alert", component: alert },
        { path: "/buttontab", name: "buttontab", component: buttontab },
        { path: "/blur", name: "blur", component: blur },
        { path: "/calendar", name: "calendar", component: calendar },
        { path: "/card", name: "card", component: card },
        { path: "/badge", name: "badge", component: badge },
        { path: "/xswitch", name: "xswitch", component: xswitch },
        { path: "/cell", name: "cellbox", component: cell },
        { path: "/cellform", name: "cellform", component: cellform },
        { path: "/check", name: "check", component: check },
        { path: "/divider", name: "divider", component: divider },
    ]
}]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router