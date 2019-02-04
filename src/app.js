import Vue from 'vue'

import Button from './miro-button/miro-button.vue'
import ButtonGroup from './miro-button/miro-button-group'
import Input from './miro-input'

import Row from './miro-grid/miro-grid-row'
import Col from './miro-grid/miro-grid-col'

import Layout from './miro-layout/miro-layout'
import Header from './miro-layout/miro-header'
import Aside from './miro-aside'
import Content from './miro-layout/miro-content'
import Footer from './miro-layout/miro-footer'

import toast from "./miro-toast/toastPlugin"
Vue.use(toast)

import Tabs from './miro-tabs/miro-tabs'
import TabsHead from './miro-tabs/miro-tabs-head'
import TabsItem from './miro-tabs/miro-tabs-item'
import TabsPane from './miro-tabs/miro-tabs-pane'

import Popover from './miro-popover'

import Collapse from './miro-collapse/miro-collapse'
import CollapseItem from './miro-collapse/miro-collapse-item'


Vue.component('miro-button', Button)
Vue.component('miro-button-group', ButtonGroup)
Vue.component('miro-input', Input)
Vue.component('miro-row', Row)
Vue.component('miro-col', Col)

Vue.component('miro-layout', Layout)
Vue.component('miro-header', Header)
Vue.component('miro-aside', Aside)
Vue.component('miro-content', Content)
Vue.component('miro-footer', Footer)

Vue.component('miro-tabs',Tabs)
Vue.component('miro-tabs-head',TabsHead)
Vue.component('miro-tabs-item',TabsItem)
Vue.component('miro-tabs-pane',TabsPane)

Vue.component('miro-popover',Popover)

Vue.component('miro-collapse',Collapse)
Vue.component('miro-collapse-item',CollapseItem)

// 测试
// import '../test/chai-test/chai-test.js'

new Vue({
  el: '#app',
  data: {
    msg: 'hello,miro',
    load: true,
    text: 'boo',
    // showItem: [1,4]
    showItem: ['1']
  },
  mounted(){
    // console.log(this.$children[4])
    // .$on('input', (e) => {       // change input focus blur
    //   console.log(e)
    // })
  },
  methods: {
    log(e){
      console.log(e)
      this.text = e
    },
    createToast1(){
      this.$toast('hello,miro', {
        showClose: true,
      })
    },
    createToast2(){
      this.$toast('hello,miro', {
        showClose: true,
        position: 'middle',
      })
    },
    createToast3(){
      this.$toast('hello,miro', {
        showClose: true,
        position: 'bottom',
      })
    },
  }
})
