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
        编程是一门手艺，那就少不了大量的实践。在这过程中会遇到不少困难，需要借助文档、借助他人的经验，通过各种方法去解决困难，
        也就是所谓的踩坑， 踩的坑多了就进步了。同时为了避免重复踩坑就需要做好相关的笔记，所以此次初造轮子的相关难点都记录在README中。
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
