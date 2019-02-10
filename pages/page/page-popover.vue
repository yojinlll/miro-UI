<template>
  <div class="demo">
    <h1>弹出框</h1>
    <div class="demo-block">
      <h2>基础用法</h2>
      <p>弹出框的两种触发方式。</p>
      <div class="demo">
        <div class="demo-row">
          <miro-popover>
            <template slot="popover">hello</template>
            <miro-button>click 激活</miro-button>
          </miro-popover>
          <miro-popover trigger="hover">
            <template slot="popover">hello</template>
            <miro-button>hover 激活</miro-button>
          </miro-popover>
        </div>
        <demo-code :code="codeData.default"></demo-code>
      </div>
    </div>

    <div class="demo-block">
      <h2>设置 position </h2>
      <div class="demo">
        <div class="demo-row">
          <miro-popover position="left">
            <template slot="popover">hello</template>
            <miro-button>left</miro-button>
          </miro-popover>
          <miro-popover>
            <template slot="popover">hello</template>
            <miro-button>top</miro-button>
          </miro-popover>
          <miro-popover position="bottom">
            <template slot="popover">hello</template>
            <miro-button>bottom</miro-button>
          </miro-popover>
          <miro-popover position="right">
            <template slot="popover">hello</template>
            <miro-button>right</miro-button>
          </miro-popover>
        </div>
        <demo-code :code="codeData.position"></demo-code>
      </div>
    </div>

    <demo-table :attributes="attributes"></demo-table>
  </div>
</template>

<script>
  // mixin 引入 Prism 和 组件
  import mixin from '../mixin'

  let codeData = {
    default: `<miro-popover>
  <template slot="popover">hello</template>
  <miro-button>click 激活</miro-button>
</miro-popover>
<miro-popover trigger="hover">
  <template slot="popover">hello</template>
  <miro-button>hover 激活</miro-button>
</miro-popover>`,
    position: `<miro-popover position="left">
  <template slot="popover">hello</template>
  <miro-button>left</miro-button>
</miro-popover>
<miro-popover >
  <template slot="popover">hello</template>
  <miro-button>top</miro-button>
</miro-popover>
<miro-popover position="bottom">
  <template slot="popover">hello</template>
  <miro-button>bottom</miro-button>
</miro-popover>
<miro-popover position="right">
  <template slot="popover">hello</template>
  <miro-button>right</miro-button>
</miro-popover>`
  }
  for (let code in codeData) {
    codeData[code] = Prism.highlight(codeData[code], Prism.languages.html)
  }

  let attributes = {
    trigger: {
      name: 'trigger',
      instructions: '设置触发方式',
      type: 'String',
      optional: 'click / hover',
      default: 'click'
    },
    position: {
      name: 'position',
      instructions: '设置弹出框出现的位置',
      type: 'String',
      optional: 'top / right / bottom / left',
      default: 'top'
    }
  }

  export default {
    name: "page-popover",
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
