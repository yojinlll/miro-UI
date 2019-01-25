<template>
  <div class="miro-col" :class="colClass">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "miroCol",
    props: {
      span: {type: [Number, String]},
      offset: {type: [Number, String]},
      phone: {type: [Number, String, Object]},
      ipad: {type: [Number, String, Object]}
    },
    computed: {
      gutter(){
        return this.$parent.gutter
      },
      colClass(){
        let classArray = []
        let {span, offset, gutter, phone, ipad} = this

        classArray = [
          gutter && `gutter-${gutter}`,
          span && `span-${span}`,
          offset && `offset-${offset}`,
        ]

        if (typeof phone === 'object') {
          classArray.push(
            phone.span && `phone-span-${phone.span}`,
            phone.offset && `phone-offset-${phone.offset}`
          )
        }else {
          classArray.push(
            phone && `phone-span-${phone}`
          )
        }

        if (typeof ipad === 'object') {
          classArray.push(
            ipad.span && `ipad-span-${ipad.span}`,
            ipad.offset && `ipad-offset-${ipad.offset}`
          )
        }else {
          classArray.push(
            ipad && `ipad-span-${ipad}`
          )
        }

        return classArray
      },
    },
  }
</script>

<style lang="scss" scoped>
  .miro-col {
    width: 100%;
    $class-prefix: gutter-;
    @for $n from 1 through 100 {
      &.#{$class-prefix}#{$n}:not(:last-child) {
        margin-right: $n * 1px;
      }
    }

    $class-prefix: span-;
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

    @media (min-width: 577px) and (max-width: 993px) {
      $class-prefix: ipad-span-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: ipad-offset-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }

    @media (max-width: 577px) {
      $class-prefix: phone-span-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: phone-offset-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }

  }
</style>
