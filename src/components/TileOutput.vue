<template>
  <div class="out">
    <div class="output" >
      <code v-for="(row, index) in pixelMatrix" :key="index">
        {{row.join()}}
      </code>
    </div>
    <div class="mini_output_holder">
      <MiniOutput />
      <MiniOutput />
      <MiniOutput />
      <MiniOutput />
    </div>
  </div>
</template>

<script>
import MiniOutput from './MiniOutput.vue'

export default {
  name: "TileOutput",
  props:{
    tileData:Array
  },
  components:{
    MiniOutput
  },
  methods:{
  },

  computed: {
    pixelMatrix(){
      return this.$store.state.pixelMatrix;
    }
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
    padding: 8px 0;
    border: 1px solid black;
    border: 8px solid #9eb737;
  }

  .mini_output_holder{
    background-color: #ccdaa6;
    margin-top: 10px;
    border: 8px solid #9eb737;
    display: flex;
    width: 200px;
    flex-wrap: wrap;
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
