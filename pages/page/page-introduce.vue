<template>
  <div class="demo">
    <h1>介绍</h1>
    <div class="demo-block">
      <h2></h2>
      <p>
        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
        该作品的目的是通过实现组件的方式去掌握 Vue 各种特性，各组件的基础功能实现思路基于 element-ui ，
        也有参考其他开源作品的实现方式。在剔除了部分不常用的功能的同时，添加了本人觉得适用的属性，也对部分组件进行了用例测试。
      </p>
      <p>
        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
        编程是一门手艺，那就少不了大量的实践。在这过程中会遇到不少问题，需要通过阅读文档外加重复实践，通过各种方法去解决遇到的问题，
        通过不断的踩坑吸取经验来进步。所以学习的过程中的复习还是很重要的，已将组件实现过程中出现的难点记录在 README 。
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "page-guide",
    data(){
      return {
        showCode: false,
      }
    },
  }
</script>

<style lang="scss" scoped>
  $border-color: #d1d3d6;

  .demo {
    margin: 50px 0;
    min-height: 450px;

    h1 {
      margin-top: 50px;
      font-size: 2.5em;
    }

    .demo-block {
      > h2 {
        margin-top: 100px;
        font-size: 1.8em;
        padding-bottom: 10px;
        border-bottom: 1px solid $border-color;
      }
      > p {margin: 1.5em 0;}

      .demo {
        border: 1px solid $border-color;
        border-radius: 6px;

        .demo-row {
          margin: 40px;

          @media (max-width: 500px) {
            & {
              margin: 40px 20px;
            }
          }
        }
      }
    }
  }


</style>
