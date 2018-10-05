<template>
  <div class="out">
    <div class="output" >
      <code v-for="(row, index) in tileData" :key="index">
        {{row.join()}}
      </code>
    </div>
  </div>
</template>

<script>

export default {
  name: "TileOutput",
  props:{
    tileData:Array
  }
}
</script>

<style>

</style>