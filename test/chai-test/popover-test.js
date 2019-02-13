import Vue from 'vue'
import Popover from '../../src/miro/miro-popover/miro-popover'

import chai from 'chai'
import spies from "chai-spies"

chai.use(spies)
const assert = chai.assert
const expect = chai.expect

// {
//   const Constructor = Vue.extend(Popover)
//   const vm = new Constructor({
//     propsData:{
//       autoClose: 300
//     }
//   })
//   vm.$mount()
//   document.body.appendChild(vm.$el)
//   assert.equal(document.body.contains(vm.$el), true, 'toast 存在')
//   setTimeout(()=>{
//     assert.equal(document.body.contains (vm.$el), false, 'toast 不存在')
//   },700)
// }
// {
//   let spy = chai.spy(function (){})
//   const Constructor = Vue.extend(Toast)
//   const vm = new Constructor({
//     propsData:{
//       autoClose: false,
//       callback: spy
//     }
//   })
//   vm.$mount()
//   setTimeout(()=>{
//     vm.onClickClose()
//     expect(spy).to.have.been.called()
//   },500)
// }
// {
//   const Constructor = Vue.extend(Toast)
//   const vm = new Constructor({
//     propsData:{
//       autoClose: 300,
//       position: 'bottom'
//     }
//   })
//   vm.$mount()
//   assert.equal(vm.$el.classList.contains('position-bottom-enter'), true, '可以修改 position')
// }
