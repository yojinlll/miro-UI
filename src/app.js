import Vue from 'vue'
import {miro} from './miro/miro-ui'
Vue.use(miro)

// 测试
// import '../test/chai-test/chai-test.js'

new Vue({
  el: '#app',
  data: {
    msg: 'Hello,Miro',
    load: true,
    text: 'boo',
    showItem: ['1']
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
