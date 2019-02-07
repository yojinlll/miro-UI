<template>
  <div class="demo-code">
    <div class="demo-code-title" @click="showCode = !showCode">
      <miro-icon icon="down" v-if="!showCode"></miro-icon>
      <miro-icon icon="up" v-else="showCode"></miro-icon>
    </div>
    <transition name="slide">
      <pre class="demo-code-content" v-if="showCode" v-html="code"></pre>
    </transition>
  </div>
</template>

<script>
  import Icon from '../../src/miro-icon'

  export default {
    name: "demo-code",
    data(){
      return {
        showCode: false
      }
    },
    props: {
      code: String
    },
    components: {
      'miro-icon': Icon
    }
  }
</script>

<style lang="scss">
  $border-color: #d1d3d6;
  $code-color: #f9f9f9;

  .demo-code {
    .demo-code-title {
      border: 1px solid $border-color;
      border-left: none;
      border-right: none;
      line-height: 2em;
      text-align: center;
      cursor: pointer;
    }
    .demo-code-content {
      background: $code-color;
      padding: 30px 40px 30px 20px;
      overflow-x: auto;

      span {line-height: 2em}
    }
  }

  .slide-enter, .slide-leave-to {opacity: 0;}

  .slide-enter-to, .slide-leave {opacity: 1;}

  .slide-enter-active, .slide-leave-active {transition: all .3s;}
</style>