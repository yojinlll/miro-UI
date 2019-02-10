<template>
  <div class="demo">
    <h1>输入框</h1>
    <div class="demo-block">
      <h2>基础用法</h2>
      <p>定义占位符或 value 。</p>
      <div class="demo">
        <div class="demo-row">
          <miro-input placeholder="占位符 placeholder"></miro-input>
        </div>
        <div class="demo-row">
          <miro-input value="默认 value "></miro-input>
        </div>
        <demo-code :code="codeData.default"></demo-code>
      </div>
    </div>
    <div class="demo-block">
      <h2>{{input}}</h2>
      <p>使用双向绑定。</p>
      <div class="demo">
        <div class="demo-row">
          <miro-input v-model="input"></miro-input>
        </div>
        <demo-code :code="codeData.vModel"></demo-code>
      </div>
    </div>
    <div class="demo-block">
      <h2>禁用</h2>
      <div class="demo">
        <div class="demo-row">
          <miro-input placeholder="hello,miro" disabled></miro-input>
        </div>
        <demo-code :code="codeData.disabled"></demo-code>
      </div>
    </div>
    <div class="demo-block">
      <h2>只读</h2>
      <div class="demo">
        <div class="demo-row">
          <miro-input placeholder="hello,miro" readonly></miro-input>
        </div>
        <demo-code :code="codeData.readonly"></demo-code>
      </div>
    </div>
    <div class="demo-block">
      <h2>错误提示</h2>
      <div class="demo">
        <div class="demo-row">
          <miro-input value="hello,miro" error="输入错误"></miro-input>
        </div>
        <demo-code :code="codeData.error"></demo-code>
      </div>
    </div>

    <demo-table :attributes="attributes"></demo-table>
  </div>
</template>

<script>
  // mixin 引入 Prism 和 组件
  import mixin from '../mixin'

  let codeData = {
    default: `<miro-input placeholder="占位符 placeholder"></miro-input>
<miro-input value="默认 value "></miro-input>`,
    vModel:`<miro-input v-model="input"></miro-input>

data: {
  input: 'v-model'
}`,
    disabled: `<miro-input placeholder="hello,miro" disabled></miro-input>`,
    readonly: `<miro-input placeholder="hello,miro" readonly></miro-input>`,
    error: `<miro-input value="hello,miro" error="输入错误"></miro-input>`
  }
  for (let code in codeData) {
    codeData[code] = Prism.highlight(codeData[code], Prism.languages.html)
  }

  let attributes = {
    value: {
      name: 'value',
      instructions: '必填值，输入绑定值',
      type: 'String',
      optional: '——',
      default: '——'
    },
    placeholder: {
      name: 'placeholder',
      instructions: '输入框占位文本',
      type: 'String',
      optional: '——',
      default: '——'
    },
    disabled: {
      name: 'disabled',
      instructions: '禁用',
      type: 'Boolean',
      optional: '——',
      default: 'false'
    },
    readonly: {
      name: 'readonly',
      instructions: '只读',
      type: 'Boolean',
      optional: '——',
      default: 'false'
    },
    error: {
      name: 'error',
      instructions: '提示错误信息',
      type: 'String',
      optional: '——',
      default: '——'
    }
  }

  export default {
    name: "page-input",
    data(){
      return {
        showCode: false,
        input: 'v-model',
        codeData,
        attributes
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
              margin: 40px 10px;
            }
          }
        }
      }
    }
  }


</style>
