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
  .output {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    text-align: left;
    font-size: 14px;
    height: 500px;
    width: 400px;
    border: 1px solid black;
    border: 8px solid #113711;
  }

  .output pre {
    margin: 0;
    padding: 0;
  }
  
  code{

    display:block;
    margin: 0 auto;
    font-family: 'VT323';
    font-size:32px;
  }
</style>