const expect = chai.expect
const assert = chai.assert
import Vue from "vue"
import Toast from '../src/miro-toast/miro-toast'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
  it('存在', () => {
    assert.exists(Toast, 'Toast 存在')
  })
  it('可以设置autoClose.', () => {
    const Constructor = Vue.extend(Toast)
    const vm = new Constructor({
      propsData: {
        autoClose: 300
      }
    })
    vm.$mount()
    document.body.appendChild(vm.$el)
    assert.equal(document.body.contains(vm.$el), true, 'toast 存在')
    setTimeout(() => {
      assert.equal(document.body.contains(vm.$el), false, 'toast 不存在')
    }, 700)
  })
  it('可以设置 callback.', () => {
    const callback = sinon.fake()
    const Constructor = Vue.extend(Toast)
    const vm = new Constructor({
      propsData: {
        autoClose: false,
        callback
      }
    })
    vm.$mount()
    setTimeout(() => {
      vm.onClickClose()
      expect(callback).to.have.been.called()
    }, 500)
  })
  it('可以设置 position.', () => {
    const Constructor = Vue.extend(Toast)
    const vm = new Constructor({
      propsData: {
        autoClose: 300,
        position: 'bottom'
      }
    })
    vm.$mount()
    assert.equal(vm.$el.classList.contains('position-bottom-enter'), true, '可以修改 position')
  })
})