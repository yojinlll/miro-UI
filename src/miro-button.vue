<template>
  <button class="miro-button" :class="{[`icon-${iconPosition}`]:true}" @click="onToggle">
    <miro-icon icon="loading" v-if="toggle"></miro-icon>
    <miro-icon :icon="icon" v-else></miro-icon>
    <div class="miro-button-content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
  import Icon from './miro-icon'

  export default {
    name: "miroButton",
    data(){
      return {
        toggle: false
      }
    },
    props: {
      icon: {},
      loading: {
        type: Boolean,
        default: false
      },
      iconPosition: {
        type: String,
        default: 'left',
        validator(value){
          return ! (value !== 'left' && value !== 'right')
        }
      }
    },
    methods:{
      onToggle(){
        this.$emit('click')
        if(this.loading){
          this.toggle = !this.toggle
        }
      }
    },
    components: {
      'miro-icon': Icon
    }
  }
</script>
<style lang="scss" scoped>
  .miro-button {
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    color: var(--color);
    display: inline-flex; justify-content: center; align-items: center;
    vertical-align: middle;
    cursor: pointer;

    &:hover {
      position: relative;
      border-color: var(--border-color-hover);
      z-index: 1;
    }
    &:active {
      position: relative;
      background-color: var(--button-active-bg);
      z-index: 1;
    }
    &:focus {
      outline: none;
    }

    > .miro-icon {order: 1; margin-right: .3em;}
    > .miro-button-content {order: 2;}

    &.icon-right {
      > .miro-icon {order: 2;margin-right: 0;margin-left: .3em;}
      > .miro-button-content {order: 1;}
    }
  }
</style>