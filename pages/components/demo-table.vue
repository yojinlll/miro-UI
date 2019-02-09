<template>
  <div class="demo-block">
    <h2>{{title}}</h2>
    <div style="overflow-x: auto;">
      <table class="table">
        <thead>
        <tr>
          <th>参数</th>
          <th>说明</th>
          <th>类型</th>
          <th>可选值</th>
          <th>默认</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in attributes">
          <td>{{item.name}}</td>
          <td>{{item.instructions}}</td>
          <td>{{item.type}}</td>
          <td>{{item.optional}}</td>
          <td>{{item.default}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: "demo-table",
    props: {
      title: {
        type: String,
        default: 'Attributes'
      },
      attributes: Object
    }
  }
</script>

<style lang="scss" scoped>
  $border-color: #d1d3d6;
.demo-block{
  margin-top: 100px;

  .table {
    margin: 20px 0;
    border-collapse: collapse;
    line-height: 1.8em;
    width: 100%;
    font-size: 14px;

    tr {border-bottom: 1px solid $border-color;}
    th {color: #8e9093; font-weight: 400;}
    td, th {padding: 10px 20px; text-align: start; max-width: 200px;}
  }
}
</style>