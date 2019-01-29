<template>
  <section class="output-section">
    <div class="section__header">
      <h2 class="header__output">Pixel Data</h2>
    </div>
    <div class="data__output">
      <p class="data__output-row" v-for="(data,index) in convertedPixelData" v-bind:key="index">
        ${{data}}
      </p>
    </div>
  </section>
</template>


<script>
import FileControls from './FileControls.vue';

export default{
  name: "DataOutput",
  computed: {
    convertedPixelData(){
      return this.$store.getters.getConvertedPixelData
    }
  },
    components:{
    FileControls
  }

}
</script>


<style lang="scss">
  @import '../scss/main';

  .output-section{
    margin-top: 20px;
  }

  .header__output{
    font-size: 2rem;
    width: 108px;
    background-color: $color__pink;
    color: $color__dark__pink;
    padding:10px;
    font-weight: 400;
    border-top-left-radius: 8px; 
    border-top-right-radius: 8px;
  }

  .data__output{
    @include border;
    display:flex;
    flex-wrap: wrap;
    max-width: 100px;
    height: 252px;
    padding: 10px;
    font-size:  30px;
    text-align: left;
    justify-content: space-between;
  }

  .data__output-row{
    flex: 1 0 50%;
    text-align: center;
    margin: 0;
    display: block;
  }
</style>