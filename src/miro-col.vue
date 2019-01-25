<template>
  <div class="miro-col" :class="[span && `col-${span}`, offset && `offset-${offset}`, gutter && `gutter-${gutter}`]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "miroCol",
    props: {
      span: {type: [Number, String]},
      offset: {type: [Number, String]}
    },
    computed: {
      gutter(){return this.$parent.gutter}
    },

  }
</script>

<style lang="scss" scoped>
  .miro-col {
    height: 50px;
    background: lightblue;
    width: 100%;
    border: 1px solid #6c6c6c;
    $class-prefix: col-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
    $class-prefix: gutter-;
    @for $n from 1 through 100 {
      &.#{$class-prefix}#{$n}:not(:first-child) {
        margin-left: $n * 1px;
      }
    }
  }
</style>
