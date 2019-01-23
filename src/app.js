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


import chai from 'chai'

const expect = chai.expect
const assert = chai.assert
{
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData: {
      icon: 'settings'
    }
  })
  button.$mount()
  let use = button.$el.querySelector('use')
  let icon = use.getAttribute('xlink:href')
  assert.equal(icon, '#i-settings')
  button.$el.remove()
  button.$destroy
}
{
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData: {
      icon: 'settings',
      loading: true
    }
  })
  button.toggle = true
  button.$mount()
  let use = button.$el.querySelector('use')
  let icon = use.getAttribute('xlink:href')
  assert.equal(icon, '#i-loading')
  button.$el.remove()
  button.$destroy
}
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData: {
      icon: 'settings'
    }
  })
  button.$mount(div)
  let svg = button.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg)
  assert.equal(order, '1')
  button.$el.remove()
  button.$destroy
}
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData: {
      icon: 'settings',
      iconPosition: 'right'
    }
  })
  button.$mount(div)
  let svg = button.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg)
  assert.equal(order, '2')
  button.$el.remove()
  button.$destroy
}
{
  // const Constructor = Vue.extend(Button)
  // const clickButton = new Constructor({
  //   propsData: {
  //     icon: 'settings',
  //     loading: true
  //   }
  // })
  // clickButton.$mount()
  // clickButton.onToggle()
  // clickButton.$nextTick(() => {
  //     let use = clickButton.$el.querySelector('use')
  //     let icon = use.getAttribute('xlink:href')
  //     assert.equal(icon,'#i-loading')
  //   }
  // )
  // clickButton.$el.remove()
  // clickButton.$destroy
}
