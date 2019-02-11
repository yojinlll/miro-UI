import Vue from 'vue'

import Prism from 'prismjs'
import demoCode from './components/demo-code'
import demoTable from './components/demo-table'

// import {miro} from '../src/miro-ui.js'
// Vue.use(miro)

const mixin = {
  components: {
    'demo-code': demoCode,
    'demo-table': demoTable,
  }
}

export default mixin