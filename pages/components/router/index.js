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
import pageGuide from '../../page/page-guide'
// import pageIntroduce from '../../page/page-introduce'
const Foo = () => import('../../page/page-introduce')

let routes = [
  {path: '/', redirect: {name: 'introduce'}},
  {path: '/button', component: pageButton, name: 'button'},
  {path: '/toast', component: pageToast, name: 'toast'},
  {path: '/collapse', component: pageCollapse, name: 'collapse'},
  {path: '/popover', component: pagePopover, name: 'popover'},
  {path: '/input', component: pageInput, name: 'input'},
  {path: '/icon', component: pageIcon, name: 'icon'},
  {path: '/tabs', component: pageTabs, name: 'tabs'},
  {path: '/grid', component: pageGrid, name: 'grid'},
  {path: '/guide', component: pageGuide, name: 'guide'},
  {path: '/introduce', component: Foo, name: 'introduce'}
]

let router = new Router({
  // mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})


export default router