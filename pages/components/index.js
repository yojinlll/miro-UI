import Vue from 'vue'
import router from './router/index'

import {miro} from '../../src/miro-ui'

Vue.use(miro)

new Vue({
  el: '#app',
  router,
  data: {
    title: 'Miro',
    currentIndex: - 2,    /* 用于激活<li>样式 */
    currentRoute: '',     /* 用于确认 */
    isToggle: true,       /* 用于控制菜单icon。宽度不足720px时，出现菜单icon */
    iconToggle: true,
    sidebarList: [
      'Icon',
      'Button',
      'Input',
      'Tabs',
      'Grid',
      'Popover',
      'Toast',
      'Collapse',
    ]
  },
  computed: {
    prevRoute(){
      if (this.sidebarList.indexOf(this.currentRoute) >= 0) {
        return this.sidebarList[this.sidebarList.indexOf(this.currentRoute) - 1]
      }
    },
    nextRoute(){
      if (this.sidebarList.indexOf(this.currentRoute) >= 0) {
        return this.sidebarList[this.sidebarList.indexOf(this.currentRoute) + 1]
      }
    }
  },
  mounted(){

  },
  methods: {
    select(item, index){
      this.isToggle = true
      this.$router.push({name: item.toLowerCase()})
      this.currentIndex = index
      this.currentRoute = item
    },
    goRoute(item){
      this.$router.push(item.toLowerCase())
      this.currentIndex = this.sidebarList.indexOf(item)
      this.currentRoute = item
    }
  }

})