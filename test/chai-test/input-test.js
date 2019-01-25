import Vue from 'vue'
import Input from '../../src/miro-input'

import chai from 'chai'

const assert = chai.assert
const Constructor = Vue.extend(Input)

{
  const vm = new Constructor({
    propsData: {
      value: 'miro'
    }
  }).$mount()
  let input = vm.$el.querySelector('input')
  assert.equal(input.value, 'miro', '测试 value')
  vm.$el.remove()
  vm.$destroy
}
{
  const vm = new Constructor({
    propsData: {
      disabled: true
    }
  }).$mount()
  let input = vm.$el.querySelector('input')
  assert.equal(input.disabled, true, '测试 disabled')
  vm.$el.remove()
  vm.$destroy
}
{
  const vm = new Constructor({
    propsData: {
      readonly: true
    }
  }).$mount()
  let input = vm.$el.querySelector('input')
  assert.equal(input.readOnly, true, '测试 readonly')
  vm.$el.remove()
  vm.$destroy
}
{
  const vm = new Constructor({
    propsData: {
      error: 'error'
    }
  }).$mount()
  let icon = vm.$el.querySelector('use').getAttribute('xlink:href')
  let msg = vm.$el.querySelector('span').innerText
  assert.equal(icon, '#i-error', '测试 error')
  assert.equal(msg, 'error', '测试 error')
  vm.$el.remove()
  vm.$destroy
}
{
  let value
  const vm = new Constructor({}).$mount()
  const callBack = function(e){
    return value = e
  }
  vm.$on('change', callBack)
  vm.$emit('change','hello')
  assert.equal(value, 'hello', '测试事件')
  vm.$el.remove()
  vm.$destroy
}