import Vue from 'vue'
import Button from './miro-button.vue'
import ButtonGroup from './miro-button-group'

Vue.component('miro-button', Button)
Vue.component('miro-button-group', ButtonGroup)

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