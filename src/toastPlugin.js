import Toast from './miro-toast'

export default {
  install(Vue){
    Vue.prototype.$toast = function (text,toastOptions){
      let Constructor = Vue.extend(Toast)
      let toast = new Constructor({
        propsData: toastOptions
      })
      toast.$slots.default = text
      toast.$mount()
      document.body.appendChild(toast.$el)
      // toast.isShow = true
    }
  }
}

