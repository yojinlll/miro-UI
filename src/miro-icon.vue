<template>
  <svg class="icon" aria-hidden="true" v-if="icon">
    <use :xlink:href=`#i-${icon}`></use>
  </svg>
</template>

<script>
  export default {
    name: "miroIcon",
    props: {
      icon: String
    }
  }
</script>

<style lang="scss" scoped>

</style>