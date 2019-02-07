<template>
  <div class="demo">
    <h1>输入框</h1>
    <div class="demo-block">
      <h2>基础用法</h2>
      <p>基础的按钮用法</p>
      <div class="demo">
        <div class="demo-row">
          <miro-input ></miro-input>
        </div>
        <demo-code :code="codeData.default"></demo-code>
      </div>
    </div>

    <div class="demo-block">
      <h2>设置 icon </h2>
      <div class="demo">
        <div class="demo-row">
          <miro-button icon="settings" loading>设置</miro-button>
          <miro-button icon="info">提示</miro-button>
          <miro-button icon="error">错误</miro-button>
        </div>
        <demo-code :code="codeData.icon"></demo-code>
      </div>
    </div>

    <demo-table :attributes="attributes"></demo-table>
  </div>
</template>

<script>
  // mixin 引入 Prism 和 组件
  import mixin from '../mixin'

  let codeData = {
    default: `<miro-button> 默认按钮 </miro-button>`,
    icon: `<miro-button icon="settings" loading> 设置 </miro-button>
<miro-button icon="info"> 提示 </miro-button>
<miro-button icon="error"> 错误 </miro-button>`,
    group: `<miro-button-group>
  <miro-button icon="left">上一页</miro-button>
  <miro-button>返回</miro-button>
  <miro-button icon="right" icon-position="right">下一页</miro-button>
</miro-button-group>`
  }
  for (let code in codeData) {
    codeData[code] = Prism.highlight(codeData[code], Prism.languages.html)
  }

  let attributes = {
    icon: {
      name: 'icon',
      instructions: '设置 icon',
      type: 'String',
      optional: '——',
      default: '——'
    },
    iconPosition: {
      name: 'iconPosition',
      instructions: '设置 icon 位置',
      type: 'String',
      optional: 'left / right',
      default: 'left'
    },
    loading: {
      name: 'loading',
      instructions: '点击按钮 icon 切换成 loading ',
      type: 'String',
      optional: 'left / right',
      default: 'left'
    }
  }

  export default {
    name: "page-input",
    data(){
      return {
        showCode: false,
        codeData,
        attributes
      }
    },
    mixins: [mixin]
  }
</script>

<style lang="scss">
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
              margin: 40px 10px;
            }
          }
        }
      }
    }
  }


</style>
