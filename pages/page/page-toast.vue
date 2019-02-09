<template>
  <div class="demo">
    <h1>消息提示</h1>
    <div class="demo-block">
      <h2>基础用法</h2>
      <p>从顶部出现，3 秒后自动消失。</p>
      <div class="demo">
        <div class="demo-row">
          <miro-button @click="createToast1">toast</miro-button>
        </div>
        <demo-code :code="codeData.default.all"></demo-code>
      </div>
    </div>

    <div class="demo-block">
      <h2>设置关闭按钮</h2>
      <div class="demo">
        <div class="demo-row">
          <miro-button @click="createToast2">toast</miro-button>
        </div>
        <demo-code :code="codeData.showClose.all"></demo-code>
      </div>
    </div>

    <div class="demo-block">
      <h2>设置出现位置</h2>
      <p>默认顶部出现，可选中间出现或底部出现。</p>
      <div class="demo">
        <div class="demo-row">
          <miro-button @click="createToast3">top</miro-button>
          <miro-button @click="createToast4">middle</miro-button>
          <miro-button @click="createToast5">bottom</miro-button>
        </div>
        <demo-code :code="codeData.position.all"></demo-code>
      </div>
    </div>

    <div class="demo-block">
      <h2>设置自动关闭的时间</h2>
      <p>默认 3s 关闭，可设置自动关闭时间或不自动关闭，计时单位为毫秒。</p>
      <div class="demo">
        <div class="demo-row">
          <miro-button @click="createToast6">5s 后关闭</miro-button>
          <miro-button @click="createToast7">1s 后关闭</miro-button>
          <miro-button @click="createToast8">不自动关闭</miro-button>
        </div>
        <demo-code :code="codeData.autoClose.all"></demo-code>
      </div>
    </div>

    <div class="demo-block">
      <h2>设置 only</h2>
      <p>默认值为 false 。当 toast 的 only 属性为 true ，该 toast 出现时会删除上一个 toast ，以此实现当前页面仅存一个 toast 。</p>
      <div class="demo">
        <div class="demo-row">
          <miro-button @click="createToast9">两者存一</miro-button>
          <miro-button @click="createToast10">两者存一</miro-button>
        </div>
        <demo-code :code="codeData.only.all"></demo-code>
      </div>
    </div>

    <div class="demo-block">
      <h2>设置回调函数</h2>
      <p>关闭时的回调函数</p>
      <div class="demo">
        <div class="demo-row">
          <miro-button @click="createToast11">callback</miro-button>
        </div>
        <demo-code :code="codeData.callback.all"></demo-code>
      </div>
    </div>

    <div class="demo-block">
      <h2>使用 HTML 片段</h2>
      <p>支持传入 HTML 片段。谨慎使用，在网站上动态渲染任意 HTML 容易导致 XSS 攻击。</p>
      <div class="demo">
        <div class="demo-row">
          <miro-button @click="createToast12">HTML</miro-button>
        </div>
        <demo-code :code="codeData.useHtml.all"></demo-code>
      </div>
    </div>

    <div class="demo-block">
      <h2>使用方式</h2>
      <p>通过插件的方式使用，为 Vue.prototype 添加了全局方法 $toast。</p>
      <div class="demo">
        <div class="demo-row">
          <pre v-html="codeData.method.all"></pre>
        </div>
      </div>
    </div>

    <demo-table :attributes="attributes"></demo-table>
  </div>
</template>

<script>
  // mixin 引入 Prism 和 组件
  import mixin from '../mixin'

  let codeData = {
    default: {
      all: '',
      html: `<miro-button @click="createToast1"> toast </miro-button>`,
      js: `

import plugin from 'toastPlugin.js
Vue.use(plugin)

methods: {
  createToast(){
    this.$toast('hello,miro')
  }
}
     `
    },
    showClose: {
      all: '',
      html: `<miro-button @click="createToast2"> toast </miro-button>`,
      js: `

import plugin from 'toastPlugin.js'
Vue.use(plugin)

methods: {
  createToast(){
    this.$toast('hello,miro',{
      showClose: true
    })
  }
}`
    },
    position: {
      all: '',
      html: `<miro-button @click="createToast3">top</miro-button>
<miro-button @click="createToast4">middle</miro-button>
<miro-button @click="createToast5">bottom</miro-button>`,
      js: `

import plugin from 'toastPlugin.js'
Vue.use(plugin)

methods: {
  createToast3(){
    this.$toast('top',{
      showClose: true,
    })
  },
  createToast4(){
    this.$toast('middle',{
      showClose: true,
      position: 'middle',
    })
  },
  createToast5(){
    this.$toast('bottom',{
      showClose: true,
      position: 'bottom',
    })
  }
}`
    },
    autoClose: {
      all: '',
      html: `<miro-button @click="createToast6">5s 后关闭</miro-button>
<miro-button @click="createToast7">1s 后关闭</miro-button>
<miro-button @click="createToast8">不自动关闭</miro-button>`,
      js: `

import plugin from 'toastPlugin.js'
Vue.use(plugin)

methods: {
  createToast6(){
    this.$toast('bottom', {
      showClose: true,
      autoClose: 5000,
    })
  },
  createToast7(){
    this.$toast('bottom', {
      showClose: true,
      position: 'middle',
      autoClose: 1000,
    })
  },
  createToast8(){
    this.$toast('bottom', {
      showClose: true,
      position: 'bottom',
      autoClose: false,
    })
  }
}`
    },
    only: {
      all: '',
      html: `<miro-button @click="createToast9">两者存一</miro-button>
<miro-button @click="createToast10">两者存一</miro-button>`,
      js: `

import plugin from 'toastPlugin.js'
Vue.use(plugin)

methods: {
  createToast9(){
    this.$toast('only', {
      showClose: true,
      only: true
    })
  },
  createToast10(){
    this.$toast('me,too', {
      showClose: true,
      position: 'bottom',
      only: true
    })
  }
}`
    },
    callback: {
      all: '',
      html: `<miro-button @click="createToast11">callback</miro-button>`,
      js: `

import plugin from 'toastPlugin.js'
Vue.use(plugin)

methods: {
  createToast11(){
    this.$toast('hello,miro', {
      showClose: true,
      position: 'bottom',
      callback(){
        this.$toast('callback toast',{showClose: true})
      }
    })
  }
}`
    },
    useHtml: {
      all: '',
      html: `<miro-button @click="createToast12">HTML</miro-button>`,
      js: `

import plugin from 'toastPlugin.js'
Vue.use(plugin)

methods: {
  createToast11(){
    this.$toast('<div style="color:lightskyblue">style color 为 lightskyblue</div>', {
      showClose: true,
      position: 'bottom',
      useHtml: true
    })
  }
}`
    },
    method: {
      all: '',
      html: '',
      js: `import plugin from 'toastPlugin.js'
Vue.use(plugin)

methods: {
  this.$toast()
}`
    }
  }

  for (let code in codeData) {
    codeData[code].html = Prism.highlight(codeData[code].html, Prism.languages.html)
    codeData[code].js = Prism.highlight(codeData[code].js, Prism.languages.js)
    codeData[code].all = codeData[code].html + codeData[code].js
  }

  let attributes = {
    autoClose: {
      name: 'autoClose',
      instructions: '设置自动关闭的时间',
      type: 'String,Boolean',
      optional: '——',
      default: '3000'
    },
    showClose: {
      name: 'showClose',
      instructions: '设置关闭按钮',
      type: 'Boolean',
      optional: '——',
      default: 'false'
    },
    position: {
      name: 'position',
      instructions: '设置出现位置',
      type: 'String',
      optional: 'top / middle / bottom',
      default: 'top'
    },
    center: {
      name: 'center',
      instructions: '设置文本是否居中',
      type: 'Boolean',
      optional: '——',
      default: 'false'
    },
    only: {
      name: 'only',
      instructions: '当前页面仅存在唯一 toast',
      type: 'Boolean',
      optional: '——',
      default: 'false'
    },
    callback: {
      name: 'callback',
      instructions: '设置回调函数',
      type: 'Function',
      optional: '——',
      default: '——'
    },
    useHtml: {
      name: 'useHtml',
      instructions: '设置内容以 html 展示',
      type: 'Boolean',
      optional: '——',
      default: 'false'
    }
  }

  export default {
    name: "page-toast",
    data(){
      return {
        showCode: false,
        codeData,
        attributes
      }
    },
    methods: {
      createToast1(){
        this.$toast('hello,miro')
      },
      createToast2(){
        this.$toast('hello,miro', {showClose: true,})
      },
      createToast3(){
        this.$toast('top', {
          showClose: true,
        })
      },
      createToast4(){
        this.$toast('middle', {
          showClose: true,
          position: 'middle',
        })
      },
      createToast5(){
        this.$toast('bottom', {
          showClose: true,
          position: 'bottom',
        })
      },
      createToast6(){
        this.$toast('5s 后自动关闭', {
          showClose: true,
          autoClose: 5000,
        })
      },
      createToast7(){
        this.$toast('1s 后自动关闭', {
          showClose: true,
          position: 'middle',
          autoClose: 1000,
        })
      },
      createToast8(){
        this.$toast('不自动关闭', {
          showClose: true,
          position: 'bottom',
          autoClose: false,
        })
      },
      createToast9(){
        this.$toast('only', {
          showClose: true,
          only: true
        })
      },
      createToast10(){
        this.$toast('me,too', {
          showClose: true,
          position: 'bottom',
          only: true
        })
      },
      createToast11(){
        this.$toast('hello,miro', {
          showClose: true,
          position: 'bottom',
          callback(){
            this.$toast('callback toast', {showClose: true})
          }
        })
      },
      createToast12(){
        this.$toast('<div style="color:lightskyblue">style color 为 lightskyblue</div>', {
          showClose: true,
          position: 'bottom',
          useHtml: true
        })
      }
    },
    mixins: [mixin]
  }
</script>

<style lang="scss" scoped>
  $border-color: #d1d3d6;

  .demo {
    margin: 50px 0;

    h1 {
      margin-top: 50px;
      font-size: 2.5em;
    }

    .demo-block {
      > h2 {
        margin-top: 100px;
        font-size: 1.8em;
        padding-bottom: 10px;
        border-bottom: 1px solid $border-color;
      }
      > p {margin: 1.5em 0;}

      .demo {
        border: 1px solid $border-color;
        border-radius: 6px;

        .demo-row {
          margin: 40px;

          @media (max-width: 500px) {
            & {
              margin: 40px 20px;
            }
          }
        }
      }
    }
  }


</style>
