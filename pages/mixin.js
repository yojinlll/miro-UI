import Vue from 'vue'

import Prism from 'prismjs'
import demoCode from './components/demo-code'
import demoTable from './components/demo-table'
import Icon from '../src/miro-icon'
import Button from '../src/miro-button/miro-button'
import ButtonGroup from '../src/miro-button/miro-button-group'
import Input from '../src/miro-input'

import Plugin from '../src/miro-toast/toastPlugin'
Vue.use(Plugin)

import Collapse from '../src/miro-collapse/miro-collapse'
import CollapseItem from '../src/miro-collapse/miro-collapse-item'

const mixin = {
  components: {
    'demo-code': demoCode,
    'demo-table': demoTable,

    'miro-button': Button,
    'miro-button-group': ButtonGroup,
    'miro-icon': Icon,
    'miro-input': Input,
    'miro-collapse': Collapse,
    'miro-collapse-item': CollapseItem,
  }
}

export default mixin