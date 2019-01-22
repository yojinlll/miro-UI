<template>
  <button class="miro-button" :class="{[`icon-${iconPosition}`]:true}">
    <svg class="icon" aria-hidden="true" v-if="icon">
      <use :xlink:href=`#i-${icon}`></use>
    </svg>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
  export default {
    name: "miroButton",
    props: {
      icon: {},
      iconPosition: {
        type: String,
        default: 'left',
        validator(value){
          return ! (value !== 'left' && value !== 'right');
        }
      }
    }
  }
</script>
<style lang="scss">
  .miro-button{
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 2px solid var(--border-color);
    background: var(--button-bg);
    color: var(--color);
    display: inline-flex; justify-content: center; align-items: center;
    vertical-align: middle;
    &:hover{
      border-color: var(--border-color-hover);
    }
    &:active{
      background-color: var(--button-active-bg);
    }
    &:focus{
      outline:none;
    }

    > .icon{
      order: 1;
      margin-right: .3em;
    }
    > .content{
      order: 2;
    }

    &.icon-right{
      > .icon{
        order: 2;
        margin-right: 0;
        margin-left: .3em;
      }
      > .content{
        order: 1;
      }
    }


  }

  .icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>