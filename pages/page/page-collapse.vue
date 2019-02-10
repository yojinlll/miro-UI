<template>
  <div class="demo">
    <h1>折叠面板</h1>
    <div class="demo-block">
      <h2>基础用法</h2>
      <p>可同时展开多个面板，面板之间不影响</p>
      <div class="demo">
        <div class="demo-row">
          <miro-collapse :select.sync="activeNames">
            <miro-collapse-item name="1">
              <div slot="title" style="padding: 8px">One</div>
              <div style="background: lightblue; text-align: center; line-height: 100px">
                One
              </div>
            </miro-collapse-item>
            <miro-collapse-item name="2">
              <div slot="title" style="padding: 8px">Two</div>
              <div style="background: coral; text-align: center; line-height: 100px">
                Two
              </div>
            </miro-collapse-item>
            <miro-collapse-item name="3">
              <div slot="title" style="padding: 8px">Three</div>
              <div style="background: #b9cd68; text-align: center; line-height: 100px">
                Three
              </div>
            </miro-collapse-item>
            <miro-collapse-item name="4">
              <div slot="title" style="padding: 8px">Four</div>
              <div style="background: #f8c84d; text-align: center; line-height: 100px">
                Four
              </div>
            </miro-collapse-item>
          </miro-collapse>
        </div>
        <demo-code :code="codeData.default.all"></demo-code>
      </div>
    </div>

    <div class="demo-block">
      <h2>手风琴效果</h2>
      <p>每次只能展开一个面板。</p>
      <div class="demo">
        <div class="demo-row">
          <miro-collapse :select.sync="activeNames" single>
            <miro-collapse-item name="1">
              <div slot="title" style="padding: 8px">One</div>
              <div style="background: lightblue; text-align: center; line-height: 100px">
                One
              </div>
            </miro-collapse-item>
            <miro-collapse-item name="2">
              <div slot="title" style="padding: 8px">Two</div>
              <div style="background: coral; text-align: center; line-height: 100px">
                Two
              </div>
            </miro-collapse-item>
            <miro-collapse-item name="3">
              <div slot="title" style="padding: 8px">Three</div>
              <div style="background: #b9cd68; text-align: center; line-height: 100px">
                Three
              </div>
            </miro-collapse-item>
            <miro-collapse-item name="4">
              <div slot="title" style="padding: 8px">Four</div>
              <div style="background: #f8c84d; text-align: center; line-height: 100px">
                Four
              </div>
            </miro-collapse-item>
          </miro-collapse>
        </div>
        <demo-code :code="codeData.single.all"></demo-code>
      </div>
    </div>

    <div class="demo-block">
      <h2>自定义面板</h2>
      <p>title 内容需要通过具名 slot 插入，而 content 内容是默认 slot 。样式可由 HTML 片段自定义。</p>
      <div class="demo">
        <div class="demo-row">
          <miro-collapse :select.sync="activeNames">
            <miro-collapse-item name="1">
              <div slot="title" style="padding: 8px; text-align: center; background: rgba(173,216,230,0.69);">title
              </div>
              <div style="background: rgba(255,72,53,0.49); text-align: center; line-height: 100px">
                content
              </div>
            </miro-collapse-item>
          </miro-collapse>
        </div>
        <demo-code :code="codeData.slot.all"></demo-code>
      </div>
    </div>

    <div class="demo-block">
      <h2>使用注意</h2>
      <p>1. miro-collapse-item 必须传入 name ，类型为字符串；</p>
      <p>2. miro-collapse 必须使用 :select.sync 来传入 props ，以此同步更新 props 数据；</p>
      <p>3. :select.sync 传入的类型必须是数组，该数组中的数据为任意一个 name 或是所有 name 。</p>
    </div>

    <demo-table title="Collapse Attributes" :attributes="attributes.collapse"></demo-table>
    <demo-table class="next-table" title="Collapse Item Attributes"
                :attributes="attributes.collapseItem"></demo-table>
  </div>
</template>

<script>
  // mixin 引入 Prism 和 组件
  import mixin from '../mixin'

  let codeData = {
    default: {
      all: ``,
      html: `<miro-collapse :select.sync="activeNames">
  <miro-collapse-item name="1">
    <div slot="title" style="padding: 8px">One</div>
    <div style="background: lightblue; text-align: center; line-height: 100px">
      One
    </div>
  </miro-collapse-item>
  <miro-collapse-item name="2">
    <div slot="title" style="padding: 8px">Two</div>
    <div style="background: coral; text-align: center; line-height: 100px">
      Two
    </div>
  </miro-collapse-item>
  <miro-collapse-item name="3">
    <div slot="title" style="padding: 8px">Three</div>
    <div style="background: #b9cd68; text-align: center; line-height: 100px">
      Three
    </div>
  </miro-collapse-item>
  <miro-collapse-item name="4">
    <div slot="title" style="padding: 8px">Four</div>
    <div style="background: #f8c84d; text-align: center; line-height: 100px">
      Four
    </div>
  </miro-collapse-item>
</miro-collapse>`,
      js: `

export default {
  data(){
    return {
      activeNames: ['1']
    }
  }
}`
    },
    single: {
      all: ``,
      html: `<miro-collapse :select.sync="activeNames" single>
  <miro-collapse-item name="1">
    <div slot="title" style="padding: 8px">One</div>
    <div style="background: lightblue; text-align: center; line-height: 100px">
      One
    </div>
  </miro-collapse-item>
  <miro-collapse-item name="2">
    <div slot="title" style="padding: 8px">Two</div>
    <div style="background: coral; text-align: center; line-height: 100px">
      Two
    </div>
  </miro-collapse-item>
  <miro-collapse-item name="3">
    <div slot="title" style="padding: 8px">Three</div>
    <div style="background: #b9cd68; text-align: center; line-height: 100px">
      Three
    </div>
  </miro-collapse-item>
  <miro-collapse-item name="4">
    <div slot="title" style="padding: 8px">Four</div>
    <div style="background: #f8c84d; text-align: center; line-height: 100px">
      Four
    </div>
  </miro-collapse-item>
</miro-collapse>`,
      js: `

export default {
  data(){
    return {
      activeNames: ['1']
    }
  }
}`
    },
    slot: {
      all: ``,
      html: `<miro-collapse :select.sync="activeNames">
  <miro-collapse-item name="1">

    <div slot="title" style="padding: 8px; text-align: center; background: rgba(173,216,230,0.69);">
    title
    </div>

    <div style="background: rgba(255,72,53,0.49); text-align: center; line-height: 100px">
      content
    </div>

  </miro-collapse-item>
</miro-collapse>`,
      js: `

export default {
  data(){
    return {
      activeNames: ['1']
    }
  }
}`
    }
  }
  for (let code in codeData) {
    codeData[code].html = Prism.highlight(codeData[code].html, Prism.languages.html)
    codeData[code].js = Prism.highlight(codeData[code].js, Prism.languages.js)
    codeData[code].all = codeData[code].html + codeData[code].js
  }

  let attributes = {
    collapse: {
      select: {
        name: ':select.sync',
        instructions: '选择当前激活的面板，数组中的值为 name ',
        type: 'Array',
        optional: '——',
        default: '——'
      },
      single: {
        name: 'single',
        instructions: '是否开启手风琴效果，即只展开一个面板 ',
        type: 'Boolean',
        optional: '——',
        default: 'false'
      }
    },
    collapseItem: {
      name: {
        name: 'name',
        instructions: '唯一标志符',
        type: 'String',
        optional: '——',
        default: '——'
      },
    }
  }

  export default {
    name: "page-collapse",
    data(){
      return {
        showCode: false,
        codeData,
        attributes,
        activeNames: ['1']
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

  .next-table {
    margin-top: 50px;
  }


</style>
