import Vue from 'vue'
import Button from './miro-button.vue'
import ButtonGroup from './miro-button-group'
import Input from './miro-input'

import '../test/button-test'

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
    log(){
      alert(1)
    }
  }
})
