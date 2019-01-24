import Vue from 'vue'
import Button from './miro-button.vue'
import ButtonGroup from './miro-button-group'
import Input from './miro-input'

import '../test/button-test'
import '../test/input-test'

Vue.component('miro-button', Button)
Vue.component('miro-button-group', ButtonGroup)
Vue.component('miro-input', Input)

new Vue({
  el: '#app',
  data: {
    msg: 'hello,miro',
    load: true
  },
  methods: {
    log(e){
      console.log(e,111)
    }
  }
})
