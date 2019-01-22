<template>
  <svg class="icon" aria-hidden="true"
       :class="{loading: icon === 'loading'}"
       v-if="icon"
  >
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
  @keyframes spin {
    0% {transform: rotate(0deg);}
    100% {transform: rotate(360deg);}
  }
  .loading{
    animation: spin 1s infinite linear;
  }

</style>