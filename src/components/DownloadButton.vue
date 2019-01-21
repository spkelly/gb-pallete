<template>
  <div>
    <div class="buttonHolder">
      <div class="pixel__button-vert" v-on:click="$store.dispatch(RESET)">
        clear grid
      </div>
      <div class="pixel__button-vert" v-on:click="download()" >
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

      if(this.$store.state.File.fileType){
        exportToC(pixelMatrix.flat(2));
      }
      else{
        exportToASM(pixelMatrix.flat(2));
      }
    }
  }
}

</script>

<style>
  .buttonHolder {
    justify-content: center;
    font-size: 32px;
  }
  .pixel__button-vert {
    cursor: pointer;
    font-size: 32px;
    color: #113711;
    background-color: #9eb737;
    width: 200px;
    height: 60px;
    margin: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>