<template>
  <div class="demo">
    <h1>标签页</h1>
    <div class="demo-block">
      <h2>基础用法</h2>
      <div class="demo">
        <div class="demo-row">
          <miro-tabs :select.sync="activeNames">
            <miro-tabs-head slot="head">
              <miro-tabs-item class="" name="one">One</miro-tabs-item>
              <miro-tabs-item name="two">Two</miro-tabs-item>
              <miro-tabs-item name="three">Three</miro-tabs-item>
              <miro-tabs-item name="four">Four</miro-tabs-item>
            </miro-tabs-head>

            <miro-tabs-pane name="one" style="line-height: 100px; text-align: center">
              One
            </miro-tabs-pane>
            <miro-tabs-pane name="two" style="line-height: 100px; text-align: center">
              Two
            </miro-tabs-pane>
            <miro-tabs-pane name="three" style="line-height: 100px; text-align: center">
              Three
            </miro-tabs-pane>
            <miro-tabs-pane name="four" style="line-height: 100px; text-align: center">
              Four
            </miro-tabs-pane>
          </miro-tabs>
        </div>
        <demo-code :code="codeData.default"></demo-code>
      </div>
    </div>

    <demo-table title="Tabs Attributes" :attributes="attributes.tabs"></demo-table>
    <demo-table class="next-table" title="Tabs Item Attributes" :attributes="attributes.tabsItem"></demo-table>
    <demo-table class="next-table" title="Tabs Pane Attributes" :attributes="attributes.tabsItem"></demo-table>
  </div>
</template>

<script>
  // mixin 引入 Prism 和 组件
  import mixin from '../mixin'

  let codeData = {
    default: `<miro-tabs :select.sync="activeNames">
  <miro-tabs-head slot="head">
    <miro-tabs-item name="one">One</miro-tabs-item>
    <miro-tabs-item name="two">Two</miro-tabs-item>
    <miro-tabs-item name="three">Three</miro-tabs-item>
    <miro-tabs-item name="four">Four</miro-tabs-item>
  </miro-tabs-head>

  <miro-tabs-pane name="one" style="line-height: 100px; text-align: center">
    One
  </miro-tabs-pane>
  <miro-tabs-pane name="two" style="line-height: 100px; text-align: center">
    Two
  </miro-tabs-pane>
  <miro-tabs-pane name="three" style="line-height: 100px; text-align: center">
    Three
  </miro-tabs-pane>
  <miro-tabs-pane name="four" style="line-height: 100px; text-align: center">
    Four
  </miro-tabs-pane>
</miro-tabs>`
  }
  for (let code in codeData) {
    codeData[code] = Prism.highlight(codeData[code], Prism.languages.html)
  }

  let attributes = {
    tabs: {
      select: {
        name: ':select.sync',
        instructions: '选择当前激活的面板，数组中的值为 name',
        type: 'String',
        optional: '——',
        default: '——'
      }
    },
    tabsItem: {
      name: {
        name: 'name',
        instructions: '唯一标识符',
        type: 'String',
        optional: '——',
        default: '——'
      }
    }
  }

  export default {
    name: "page-tabs",
    data(){
      return {
        showCode: false,
        codeData,
        attributes,
        activeNames: 'one'
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

  @media (max-width: 500px) {
    .miro-tabs-item{padding: 0 0.2em !important; }
  }
  .next-table {
    margin-top: 50px;
  }


</style>
