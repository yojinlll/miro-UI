import Vue from 'vue'
import Button from './miro-button.vue'

Vue.component('miro-button', Button)

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