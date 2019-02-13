const expect = chai.expect
const assert = chai.assert
import Vue from 'vue'
import Input from '../src/miro/miro-input/miro-input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {

  it('存在.', () => {
    assert.exists(Input, 'Input 存在')
  })

  describe('props', () => {
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(() => {
      vm.$el.remove()
      vm.$destroy
    })

    it('可以设置 value.', () => {
      vm = new Constructor({
        propsData: {
          value: 'miro'
        }
      }).$mount()
      let input = vm.$el.querySelector('input')
      assert.equal(input.value, 'miro', '测试 value')
    })

    it('可以设置 disabled.', () => {
      vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount()
      let input = vm.$el.querySelector('input')
      assert.equal(input.disabled, true, '测试 disabled')
    })

    it('可以设置 readonly', () => {
      vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount()
      let input = vm.$el.querySelector('input')
      assert.equal(input.getAttribute('readonly'), 'readonly', '测试 readonly')
    })
    it('可以设置 error', () => {
      vm = new Constructor({
        propsData: {
          error: 'error'
        }
      }).$mount()
      let icon = vm.$el.querySelector('use').getAttribute('xlink:href')
      let msg = vm.$el.querySelector('span').textContent
      assert.equal(icon, '#i-error', '测试 error')
      assert.equal(msg, 'error', '测试 error')
    })
  })

  describe('事件', () => {
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(() => {
      vm.$el.remove()
      vm.$destroy
    })
    it('支持 change 事件', () => {
      vm = new Constructor({}).$mount()
      const callBack = sinon.fake()
      vm.$on('change',callBack)
      vm.$emit('change')
      // let event = new Event('change')
      // let inputElement = vm.$el.querySelector('input')
      // inputElement.dispatchEvent(event)
      expect(callBack).to.have.been.called
    })
    it('支持 input/focus/blur 事件', () => {
      ['input','focus','blur'].forEach((eventName)=>{
        vm = new Constructor({}).$mount()
        const callBack = sinon.fake()
        vm.$on(eventName,callBack)
        vm.$emit(eventName)
        expect(callBack).to.have.been.called
      })
    })
  })
})