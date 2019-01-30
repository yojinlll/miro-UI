<template>
  <div class="miro-input" :class="{error}">
    <input type="text" :value="value" :disabled="disabled" :readonly="readonly"
           @change="$emit('change', $event.target.value)"
           @input="$emit('input', $event.target.value)"
           @focus="$emit('focus', $event.target.value)"
           @blur="$emit('blur', $event.target.value)"
    >
    <template v-if="error">
      <miro-icon class="icon-error" icon="error"></miro-icon>
      <span class="error-msg">{{error}}</span>
    </template>
  </div>
</template>

<script>
  import Icon from './miro-icon'

  export default {
    name: "miroInput",
    props: {
      value: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      },
      error: {
        type: String
      }
    },
    components: {
      'miro-icon': Icon
    },
    mounted(){
      this.$on('input', (e) => {       // change input focus blur
        // this.$emit('test',e)
      })
    }
  }
</script>

<style lang="scss" scoped>
  $height: 32px;
  $border-color: #999;
  $border-color-hover: #666;
  $border-radius: 6px;
  $box-shadow-color: rgb(0, 0, 0, 0.5);
  $color: #444;
  $red: #f14530;

  .miro-input {
    > input {
      color: $color;height: 32px;border: 1px solid $border-color;
      border-radius: $border-radius;padding: 0 8px;

      &:hover {border-color: $border-color-hover;}
      &:focus {box-shadow: inset 0 1px 3px;}
      &[disabled], &[readonly] {border-color: #bbb;color: #bbb;cursor: not-allowed;}
    }

    &.error {
      > input { border-color: $red; }
      .icon-error, .error-msg { color: $red; }
    }
  }
</style>