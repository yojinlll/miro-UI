import Vue from 'vue'
import Button from '../src/miro-button'

import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)

const expect = chai.expect
const assert = chai.assert
{
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData: {
      icon: 'settings'
    }
  }).$mount()
  let icon = button.$el.querySelector('use').getAttribute('xlink:href')
  assert.equal(icon, '#i-settings', '测试 icon 是否存在')
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
  }).$mount()
  button.onToggle()
  button.$nextTick(()=>{
    let use = button.$el.querySelector('use')
    let icon = use.getAttribute('xlink:href')
    assert.equal(icon, '#i-loading','loading 为 true 时，可以触发点击切换 loading')
  })
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
  }).$mount(div)
  let svg = button.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg)
  assert.equal(order, '1', 'icon 默认位置在左边')
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
  }).$mount(div)
  let svg = button.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg)
  assert.equal(order, '2','icon 位置可以在右边')
  button.$el.remove()
  button.$destroy
}
{
  const Constructor = Vue.extend(Button)
  const clickButton = new Constructor({
    propsData: {
      icon: 'settings',
    }
  }).$mount()
  let spy = chai.spy(function (){})
  clickButton.$on('click',spy)
  clickButton.$emit('click')
  expect(spy).to.have.been.called()
  clickButton.$el.remove()
  clickButton.$destroy
}
