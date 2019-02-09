<template>
  <div class="demo">
    <h1>图标</h1>
    <div class="demo-block">
      <h2>基础用法</h2>
      <p>基础的按钮用法</p>
      <div class="demo">
        <div class="demo-row">
          <miro-icon icon="settings"></miro-icon>
          <miro-icon icon="info"></miro-icon>
          <miro-icon icon="error"></miro-icon>
          <miro-icon icon="close"></miro-icon>
          <miro-icon icon="download"></miro-icon>
        </div>
        <demo-code :code="codeData.default"></demo-code>
      </div>
    </div>
    <div class="demo-block">
      <h2>可选图标</h2>
      <div class="demo demo-list">
        <ul class="icon-list clearfix">
          <li v-for="item in allIcon">
            <miro-icon :icon="item"></miro-icon>
            <span>{{item}}</span>
          </li>
        </ul>
      </div>
    </div>

    <demo-table :attributes="attributes"></demo-table>
  </div>
</template>

<script>
  // mixin 引入 Prism 和 组件
  import mixin from '../mixin'

  let codeData = {
    default: `<miro-icon icon="settings"></miro-icon>
<miro-icon icon="info"></miro-icon>
<miro-icon icon="error"></miro-icon>
<miro-icon icon="close"></miro-icon>
<miro-icon icon="download"></miro-icon>
`,
  }
  for (let code in codeData) {
    codeData[code] = Prism.highlight(codeData[code], Prism.languages.html)
  }

  export default {
    name: "page-icon",
    data(){
      return {
        showCode: false,
        codeData,
        allIcon: ['info','error','list','close','download','thumbs-up','settings','up','down','left','right','delete','check','share','start'],
        attributes: {
          icon: {
            name: 'icon',
            instructions: '设置 icon',
            type: 'String',
            optional: '——',
            default: '——'
          }
        },
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
          display: flex;
          justify-content: space-around;
          font-size: 1.5em;

          @media (max-width: 500px) {
            & {
              margin: 40px 10px;
            }
          }
        }
        .icon-list {
          li {
            border: 1px solid $border-color;
            float: left;
            width: 6em;
            height: 6em;
            margin-top: -1px;
            margin-left: -1px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            > .miro-icon{font-size: 2em; margin-bottom: .3em}
            > span{font-size: 14px;}
          }
        }
      }

      .demo-list {
        border: none;
      }
    }
  }

  .clearfix::after {
    content: '';
    display: block;
    clear: both;
  }

</style>
