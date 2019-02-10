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
import Popover from '../src/miro-popover'

import Tabs from '../src/miro-tabs/miro-tabs'
import TabsPane from '../src/miro-tabs/miro-tabs-pane'
import TabsItem from '../src/miro-tabs/miro-tabs-item'
import TabsHead from '../src/miro-tabs/miro-tabs-head'

import GridRow from '../src/miro-grid/miro-grid-row'
import GridCol from '../src/miro-grid/miro-grid-col'

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
    'miro-popover': Popover,

    'miro-tabs': Tabs,
    'miro-tabs-head': TabsHead,
    'miro-tabs-item': TabsItem,
    'miro-tabs-pane': TabsPane,

    'miro-row': GridRow,
    'miro-col': GridCol,
  }
}

export default mixin