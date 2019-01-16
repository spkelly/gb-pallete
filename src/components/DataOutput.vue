<template>
  <section>
    <div class="sectionHeader">
      <h2 class="header__sub">Pixel Data</h2>
    </div>
    <div class="data__output">
      <p class="data__output-row" v-for="(data,index) in convertedPixelData" v-bind:key="index">
        ${{data}}
      </p>
    </div>
    <FileControls /> 
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


<style>
  .header__sub{
   font-size: 26px;
  }

  .data__output{
    display:flex;
    flex-wrap: wrap;
    max-width: 100px;
    height: 252px;
    padding: 10px;
    font-size:  30px;
    text-align: left;
    border: 8px solid #9eb737;
    margin-left: 10px;
    justify-content: space-between;
  }

  .data__output-row{
    text-align: center;
    margin: 0;
    display: block;
  }
</style>