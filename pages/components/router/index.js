import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import pageButton from '../../page/page-button'
import pageToast from '../../page/page-toast'
import pagePopover from '../../page/page-popover'
import pageTabs from '../../page/page-tabs'
import pageIcon from '../../page/page-icon'
import pageCollapse from '../../page/page-collapse'
import pageInput from '../../page/page-input'
import pageGrid from '../../page/page-grid'

let routes = [
  { path: '/',  redirect: '/button'},
  { path: '/button', component: pageButton},
  { path: '/toast', component: pageToast},
  { path: '/collapse', component: pageCollapse},
  { path: '/popover', component: pagePopover},
  { path: '/input', component: pageInput},
  { path: '/icon', component: pageIcon},
  { path: '/tabs', component: pageTabs},
  { path: '/grid', component: pageGrid}
]

let router = new Router({
  routes
})

export default router