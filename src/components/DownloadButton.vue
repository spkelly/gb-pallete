<template>
  <div>
    <div class="buttonHolder">
      <div class="button" v-on:click="$store.dispatch(RESET)">
        clear grid
      </div>
      <div class="button" v-on:click="download()" >
        generate data
      </div>
    </div>
    
  </div>
</template>

<script>
import { exportToC, exportToASM } from '../services/DownloaderServices';
import { convertPixelMatrix } from '../services/ConverterServices';
import { RESET } from '../store/types';
export default {
  name: "DownloadButton",

  methods:{
    download(){
      let pixelMatrix = this.$store.getters.getConvertedPixelData

      if(this.$store.state.File.fileType == "C"){
        exportToC(pixelMatrix.flat(2));
      }
      else{
        exportToASM(pixelMatrix.flat(2));
      }
    }
  }
}

</script>

<style lang="scss">
@import '../scss/main';

  .buttonHolder {
    margin-top:20px;
  }
  .button {
    display: inline;
    cursor: pointer;
    font-size: 32px;
    color: $color__dark__pink;
    background-color: $color__pink;
    padding: 10px;
    margin: 20px;
  }
</style>