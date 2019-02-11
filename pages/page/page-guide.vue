<template>
  <div class="demo">
    <h1>使用指南</h1>
    <div class="demo-block">
      <h2>安装</h2>
      <div class="demo">
        <div class="demo-row">
        </div>
      </div>
    </div>
    <div class="demo-block">
      <h2>引入</h2>
      <div class="demo">
        <div class="demo-row">
          <pre v-html="codeData.all"></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  let codeData = {
    all: `import Vue from 'vue'
import { miro } from 'miro-ui'

Vue.use( miro )`,
    part: `import Vue from 'vue'
import { Button,Toast,Popover } from './miro-ui'

Vue.use( Button )
Vue.use( Toast )
Vue.use( Popover )
`,
  }

  for (let code in codeData) {
    codeData[code] = Prism.highlight(codeData[code], Prism.languages.js)
  }


  export default {
    name: "page-guide",
    data(){
      return {
        showCode: false,
        codeData
      }
    },
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
