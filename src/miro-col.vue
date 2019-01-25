<template>
  <div class="miro-col" :class="[`col-${span}`]">
    <slot></slot>
    {{span}}
  </div>
</template>

<script>
  export default {
    name: "miroCol",
    props: {
      span: {type:[Number,String]}
    }
  }
</script>

<style lang="scss" scoped>
  .miro-col {
    /*line-height: 50px;*/
    height: 50px;
    background: lightblue;
    width: 100%;
    border: 1px solid #6c6c6c;

    $class-prefix: col-;
    @for $n from 1 through 24{
      &.#{$class-prefix}#{$n}{
        width: ($n / 24) * 100%;
      }
    }
  }
</style>