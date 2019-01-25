<template>
  <div class="miro-row">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "miroRow"
  }
</script>

<style lang="scss" scoped>
  .miro-row{
    display: flex;
  }

</style>