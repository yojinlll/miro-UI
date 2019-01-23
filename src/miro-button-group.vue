<template>
  <div class="miro-button-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "miroButtonGroup",
    mounted(){
      for (let node of this.$el.children) {
        let name = node.nodeName.toLowerCase()
        if (name !== 'button') {
          console.warn(`miro-button-group 的子元素应该是 miro-button，不应该是 ${name}。`)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .miro-button-group {
    display: inline-flex;
    vertical-align: middle;

    > .miro-button {
      border-radius: 0;

      &:not(:first-child) {
        margin-left: -2px;
      }

      &:first-child {
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
      }
      &:last-child {
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
      }
    }
  }
</style>