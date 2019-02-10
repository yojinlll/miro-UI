<template>
  <div class="demo">
    <h1>网格布局</h1>
    <div class="demo-block">
      <h2>基础用法</h2>
      <p>24网格布局</p>
      <div class="demo">
        <div class="demo-row noGutter">
          <miro-row>
            <miro-col span="24">24</miro-col>
          </miro-row>
          <miro-row>
            <miro-col span="12">12</miro-col>
            <miro-col span="12">12</miro-col>
          </miro-row>
          <miro-row>
            <miro-col span="8">8</miro-col>
            <miro-col span="8">8</miro-col>
            <miro-col span="8">8</miro-col>
          </miro-row>
          <miro-row>
            <miro-col span="6">6</miro-col>
            <miro-col span="6">6</miro-col>
            <miro-col span="6">6</miro-col>
            <miro-col span="6">6</miro-col>
          </miro-row>
        </div>
        <demo-code :code="codeData.default"></demo-code>
      </div>
    </div>
    <div class="demo-block">
      <h2>gutter</h2>
      <p>设置间隙</p>
      <div class="demo">
        <div class="demo-row">
          <miro-row>
            <miro-col span="24">24</miro-col>
          </miro-row>
          <miro-row gutter="5">
            <miro-col span="12">12</miro-col>
            <miro-col span="12">12</miro-col>
          </miro-row>
          <miro-row gutter="5">
            <miro-col span="8">8</miro-col>
            <miro-col span="8">8</miro-col>
            <miro-col span="8">8</miro-col>
          </miro-row>
          <miro-row gutter="5">
            <miro-col span="6">6</miro-col>
            <miro-col span="6">6</miro-col>
            <miro-col span="6">6</miro-col>
            <miro-col span="6">6</miro-col>
          </miro-row>
        </div>
        <demo-code :code="codeData.gutter"></demo-code>
      </div>
    </div>
    <div class="demo-block">
      <h2>offset</h2>
      <p>设置间隔</p>
      <div class="demo">
        <div class="demo-row">
          <miro-row>
            <miro-col span="24">24</miro-col>
          </miro-row>
          <miro-row gutter="5">
            <miro-col span="8">12</miro-col>
            <miro-col span="8" offset="8">12</miro-col>
          </miro-row>
          <miro-row gutter="5">
            <miro-col span="6">6</miro-col>
            <miro-col span="6">6</miro-col>
            <miro-col span="6" offset="6">6</miro-col>
          </miro-row>
        </div>
        <demo-code :code="codeData.offset"></demo-code>
      </div>
    </div>
    <div class="demo-block">
      <h2>响应式布局</h2>
      <p>可响应 PC、IPad、Phone 三种样式。</p>
      <p>默认为 PC 样式。设备宽度在 577px 到 993px 之间则为 IPad 样式，设备宽度小于 577px 为 Phone 样式。不同的样式之间的 span 和 offset
        数值相互独立，当页面宽度符合样式便响应。</p>
      <div class="demo">
        <div class="demo-row response">
          <miro-row>
            <miro-col span="24">24</miro-col>
          </miro-row>
          <miro-row gutter="5">
            <miro-col span="12" ipad="18">IPad</miro-col>
            <miro-col span="12" ipad="6">IPad</miro-col>
          </miro-row>
          <miro-row gutter="5">
            <miro-col span="12" phone="6">Phone</miro-col>
            <miro-col span="12" phone="18">Phone</miro-col>
          </miro-row>
          <miro-row gutter="5">
            <miro-col span="12" phone="12" ipad="12">Phone</miro-col>
            <miro-col span="12" :phone="{span:6,offset:6}" :ipad="{span:6,offset:6}">
              IPad
            </miro-col>
          </miro-row>
        </div>
        <demo-code :code="codeData.response"></demo-code>
      </div>
    </div>

    <div class="demo-block">
      <h2>使用注意</h2>
      <p>1. 在任意样式下，Row 元素所包含的 Col 元素的 span 和 offset 的数值总和应为 24 。</p>
      <p>2. phone 和 ipad 的类型可以为字符串，数字，对象。不需要设置 offset 时，默认为 span 。需要设置 offset 时，phone 或 ipad 必须为对象，并且键名应该包含 span 和 offset 。</p>
    </div>

    <demo-table title="Grid Row Attributes" :attributes="attributes.row"></demo-table>
    <demo-table class="next-table" title="Grid Col Attributes"
                :attributes="attributes.col"></demo-table>
  </div>
</template>

<script>
  // mixin 引入 Prism 和 组件
  import mixin from '../mixin'

  let codeData = {
    default: `.miro-col {
  line-height: 50px;
  background: lightblue;
  text-align: center;
  margin-top: 5px;
  border: 1px solid #606060;
  margin-left: -1px;
}


<miro-row>
  <miro-col span="24">24</miro-col>
</miro-row>
<miro-row>
  <miro-col span="12">12</miro-col>
  <miro-col span="12">12</miro-col>
</miro-row>
<miro-row>
  <miro-col span="8">8</miro-col>
  <miro-col span="8">8</miro-col>
  <miro-col span="8">8</miro-col>
</miro-row>
<miro-row>
  <miro-col span="6">6</miro-col>
  <miro-col span="6">6</miro-col>
  <miro-col span="6">6</miro-col>
  <miro-col span="6">6</miro-col>
</miro-row>`,
    gutter: `.miro-col {
  line-height: 50px;
  background: lightblue;
  text-align: center;
  margin-top: 5px;
}


<miro-row>
  <miro-col span="24">24</miro-col>
</miro-row>
<miro-row gutter="5">
  <miro-col span="12">12</miro-col>
  <miro-col span="12">12</miro-col>
</miro-row>
<miro-row gutter="5">
  <miro-col span="8">8</miro-col>
  <miro-col span="8">8</miro-col>
  <miro-col span="8">8</miro-col>
</miro-row>
<miro-row gutter="5">
  <miro-col span="6">6</miro-col>
  <miro-col span="6">6</miro-col>
  <miro-col span="6">6</miro-col>
  <miro-col span="6">6</miro-col>
</miro-row>`,
    offset: ` <miro-row>
  <miro-col span="24">24</miro-col>
</miro-row>
<miro-row gutter="5">
  <miro-col span="8">12</miro-col>
  <miro-col span="8" offset="8">12</miro-col>
</miro-row>
<miro-row gutter="5">
  <miro-col span="6">6</miro-col>
  <miro-col span="6">6</miro-col>
  <miro-col span="6" offset="6">6</miro-col>
</miro-row>`,
    response: `<miro-row>
  <miro-col span="24">24</miro-col>
</miro-row>
<miro-row gutter="5">
  <miro-col span="12" ipad="18">IPad</miro-col>
  <miro-col span="12" ipad="6">IPad</miro-col>
</miro-row>
<miro-row gutter="5">
  <miro-col span="12" phone="6">Phone</miro-col>
  <miro-col span="12" phone="18">Phone</miro-col>
</miro-row>
<miro-row gutter="5">
  <miro-col span="12" phone="12" ipad="12">Phone</miro-col>
  <miro-col span="12" :phone="{span:6,offset:6}" :ipad="{span:6,offset:6}">
    IPad
  </miro-col>
</miro-row>`
  }
  for (let code in codeData) {
    codeData[code] = Prism.highlight(codeData[code], Prism.languages.html)
  }


  let attributes = {
    row: {
      gutter: {
        name: 'gutter',
        instructions: '设置 col 之间的间隙，单位为px',
        type: 'Number,String',
        optional: '1 - 100',
        default: '——'
      }
    },
    col: {
      span: {
        name: 'span',
        instructions: '设置网格所占宽度的比例，最大值为24',
        type: 'Number,String',
        optional: '1 - 24',
        default: '——'
      },
      offset: {
        name: 'offset',
        instructions: '设置间隔所占宽度的比例，最大值为24',
        type: 'Number,String',
        optional: '1 - 24',
        default: '——'
      },
      phone: {
        name: 'phone',
        instructions: '设置 Phone 宽度下的 span 和 offset',
        type: 'Number,String,Object',
        optional: '——',
        default: '——'
      },
      ipad: {
        name: 'ipad',
        instructions: '设置 IPad 宽度下的 span 和 offset',
        type: 'Number,String,Object',
        optional: '——',
        default: '——'
      }
    }
  }

  export default {
    name: "page-grid",
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

  .demo-row {
    &.response {
      font-size: 12px;
    }
    &.noGutter {
      .miro-col {border: 1px solid #606060; margin-left: -1px;}
    }

    .miro-col {
      line-height: 50px;
      background: lightblue;
      text-align: center;
      margin-top: 5px;
    }
  }


</style>
