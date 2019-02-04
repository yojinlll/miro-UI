<template>
  <div class="miro-collapse-item">
    <div class="miro-collapse-title" @click="onClick">
      {{miro}} - {{title}} - {{name}}
    </div>
    <div class="miro-collapse-content" v-if="toggle">
      content杀杀杀杀杀杀杀杀杀杀杀杀content杀杀杀杀杀杀杀杀杀杀杀杀content杀杀杀杀杀杀杀杀杀杀杀杀content杀杀杀杀杀杀杀杀杀杀杀杀content杀杀杀杀杀杀杀杀杀杀杀杀content杀杀杀杀杀杀杀杀杀杀杀杀content杀杀杀杀杀杀杀杀杀杀杀杀content杀杀杀杀杀杀杀杀杀杀杀杀content杀杀杀杀杀杀杀杀杀杀杀杀content杀杀杀杀杀杀杀杀杀杀杀杀content杀杀杀杀杀杀杀杀杀杀杀杀content杀杀杀杀杀杀杀杀杀杀杀杀content杀杀杀杀杀杀杀杀杀杀杀杀content杀杀杀杀杀杀杀杀杀杀杀杀
    </div>
  </div>
</template>

<script>
  import Spread from './miro-spread'

  export default {
    name: "miro-collapse-item",
    inject: ['eventBus'],
    data(){
      return {
        toggle: false,
        miro: null
      }
    },
    props: {
      title: {
        type: String | Number,
        required: true
      },
      name: {
        type: String,
      }
    },
    mounted(){
      this.eventBus.$on('select', (select) => {
        this.miro = select
        if (select instanceof Array) {
          select.indexOf(this.name) >= 0 ? this.toggle = true : this.toggle = false
        }
      })
    },
    methods: {
      onClick(){
        if (this.toggle) {
          this.eventBus.$emit('removeSelect', this.name)
        }else if (! this.toggle) {
          this.eventBus.$emit('addSelect', this.name)
        }
      }
    },
    components: {
      'miro-spread': Spread
    }
  }
</script>

<style lang="scss" scoped>
  $grey: #ddd;
  $border-radius: 4px;
  .miro-collapse-item {

    > .miro-collapse-title {
      border: 1px solid $grey;
      background: white;
      margin: -1px;
      min-height: 32px;
      display: flex;
      align-items: center;
      padding: 0 8px;
    }
    &:first-child {
      > .miro-collapse-title {
        border-top-left-radius: $border-radius;
        border-top-right-radius: $border-radius;
      }
    }
    &:last-child {
      > .miro-collapse-title:last-child {
        border-bottom-left-radius: $border-radius;
        border-bottom-right-radius: $border-radius;
      }
    }
    .miro-collapse-content {padding: 8px;}
  }

  .fade-enter-active, .fade-leave-active {
    transition: all ease-in-out .5s;
  }

  .fade-enter {
    height: 0;
    opacity: 0;
  }

  .fade-enter-to {
    height: 120px;
  }

  .fade-leave {
    height: 120px;
  }

  .fade-leave-to {
    height: 0;
  }
</style>