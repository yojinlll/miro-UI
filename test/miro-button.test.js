const expect = chai.expect;
const assert = chai.assert;
import Vue from 'vue'
import Button from '../src/miro-button/miro-button'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Button', () => {
  it('存在.', () => {
    // expect(Button).to.be.ok
    assert.exists(Button,'Button 存在')
  })
  it('可以设置icon.', () => {
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
  })
  it('可以设置loading.', () => {
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
  })
  it('icon 默认的 order 是 1', () => {
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
  })
  it('设置 iconPosition 可以改变 order', () => {
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
  })
  it('点击 button 触发 click 事件', () => {
    const Constructor = Vue.extend(Button)
    const clickButton = new Constructor({
      propsData: {
        icon: 'settings',
      }
    }).$mount()

    const callBack = sinon.fake()
    clickButton.$on('click',callBack)
    clickButton.$emit('click')
    expect(callBack).to.have.been.called
  })
})