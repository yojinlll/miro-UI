import Vue from '../node_modules/vue/dist/vue.min.js'
import Button from './miro-button.vue'

Vue.component('miro-button', Button)

new Vue({
  el: '#app',
  data: {
    msg: 'hello,miro'
  }
})