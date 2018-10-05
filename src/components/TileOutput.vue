<template>
  <div class="out">
    <div class="output" >
      <code v-for="(row, index) in tableData" :key="index">
        {{row.join()}}
      </code>
    </div>
  </div>
</template>

<script>

export default {
  name: "TileOutput",
  props:{
    tableData:Array
  }
}
</script>

<style>

</style>