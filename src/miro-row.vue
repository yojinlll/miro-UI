<template>
  <div class="miro-row">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "miroRow",
    props: {
      gutter: {
        type: [Number,String]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .miro-row{
    display: flex;
  }

</style>