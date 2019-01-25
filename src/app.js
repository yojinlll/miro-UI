import Vue from 'vue'
import Button from './miro-button.vue'
import ButtonGroup from './miro-button-group'
import Input from './miro-input'
import Row from './miro-row'
import Col from './miro-col'

Vue.component('miro-button', Button)
Vue.component('miro-button-group', ButtonGroup)
Vue.component('miro-input', Input)
Vue.component('miro-row', Row)
Vue.component('miro-col', Col)

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
