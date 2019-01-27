<template>
  <section>
    <div class="section__header">
      <h2 class="header__sub">
        Mini Output
      </h2>
    </div>
    <div class="mini_output_holder">
      <MiniOutput />
      <MiniOutput />
      <MiniOutput />
      <MiniOutput />
    </div>
    <!-- <div class="out">
    <div class="output" >
      <code v-for="(row, index) in pixelMatrix" :key="index">
        {{row.join()}}
      </code>
    </div>
    
  </div> -->
  
  </section>
  
</template>

<script>
import MiniOutput from './MiniOutput.vue';

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
      return this.$store.state.Output.pixelMatrix;
    }
  }
}
</script>

<style lang="scss">
  @import '../scss/main';
  .section__header{
    margin-bottom: 24px;
  }
  .output {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    text-align: left;
    font-size: 14px;
    padding: 8px;
    border: 1px solid black;
    @include border;
  }

  .mini_output_holder{
    background-color: #ccdaa6;
    margin-bottom: 24px;
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
