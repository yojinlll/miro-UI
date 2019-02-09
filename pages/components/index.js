import Vue from 'vue'
import router from './router/index'

import Icon from '../../src/miro-icon'
import pageButton from '../page/page-button'
import pageToast from '../page/page-toast'

Vue.component('miro-page-button',pageButton)
Vue.component('miro-page-toast',pageToast)
Vue.component('miro-icon',Icon)

new Vue({
  el: '#app',
  router,
  data: {
    title: 'Miro',
    currentIndex: 0,
    isToggle: true,
    sidebarList: [
      'Button',
      'Icon',
      'Input',
      'Toast',
      'Collapse',
      'Grid',
      'Popover',
      'Tabs'
    ],
  },
  mounted(){
  },
  methods: {
    select(item,index){
      this.currentIndex = index
      this.$router.push(item.toLowerCase())
      this.isToggle = true
    }
  },

})