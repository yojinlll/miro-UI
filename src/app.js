import Vue from 'vue'
import Button from './miro-button.vue'
import ButtonGroup from './miro-button-group'
import Input from './miro-input'
import Row from './miro-row'
import Col from './miro-col'

import Layout from './miro-layout'
import Header from './miro-header'
import Aside from './miro-aside'
import Content from './miro-content'
import Footer from './miro-footer'


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

import '../test/chai-test/chai-test.js'

new Vue({
  el: '#app',
  data: {
    msg: 'hello,miro',
    load: true
  },
  mounted(){
    // console.log(this.$children[4])
    // .$on('input', (e) => {       // change input focus blur
    //   console.log(e)
    // })
  },
  methods: {
    log(e){
      this.msg = e
    },

  }
})
