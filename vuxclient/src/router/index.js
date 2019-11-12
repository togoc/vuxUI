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
import confirm from '../components/confirm'

Vue.use(VueRouter)

let children = [
    { path: "", name: "demoList", component: demoList },
    { path: "/actionsheet", name: "actionsheet", component: actionsheet, class: "iconfont icon-timesheet" },
    { path: "/alert", name: "alert", component: alert, class: "iconfont icon-jinggao" },
    { path: "/buttontab", name: "buttontab", component: buttontab, class: "iconfont icon-btn-on" },
    { path: "/blur", name: "blur", component: blur, class: "iconfont icon-blur" },
    { path: "/calendar", name: "calendar", component: calendar, class: "iconfont icon-calendaralt-fill" },
    { path: "/card", name: "card", component: card, class: "iconfont icon-card" },
    { path: "/badge", name: "badge", component: badge, class: "iconfont icon-tishi" },
    { path: "/xswitch", name: "xswitch", component: xswitch, class: "iconfont icon-list" },
    { path: "/cell", name: "cellbox", component: cell, class: "iconfont icon-list1" },
    { path: "/cellform", name: "cellform", component: cellform, class: "iconfont icon-timesheet" },
    { path: "/check", name: "check", component: check, class: "iconfont icon-icon-test" },
    { path: "/divider", name: "divider", component: divider, class: "iconfont icon-list" },
    { path: "/confirm", name: "confirm", component: confirm, class: "iconfont icon-icon-test1" },
]

//储存给demoList
localStorage.removeItem("demoList")
let prototypeList = JSON.parse(JSON.stringify(children)).slice(1)
prototypeList.forEach((item) => {
    delete item.component
})
localStorage.setItem("demoList", JSON.stringify(prototypeList))

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
    children
}]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})


export default router