import Prism from 'prismjs'
import demoCode from './components/demo-code'
import demoTable from './components/demo-table'
import Button from '../src/miro-button/miro-button'
import ButtonGroup from '../src/miro-button/miro-button-group'
import Icon from '../src/miro-icon'

const mixin = {
  components: {
    'demo-code': demoCode,
    'demo-table': demoTable,

    'miro-button': Button,
    'miro-button-group': ButtonGroup,
    'miro-icon': Icon,
  }
}

export default mixin