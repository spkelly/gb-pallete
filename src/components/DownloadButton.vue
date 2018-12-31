<template>
  <div>
    <button v-on:click="download()"> Click Me</button>
  </div>
</template>

<script>
import {exportToC} from '../services/DownloaderServices';
import {convertPixelMatrix} from '../services/ConverterServices';

export default {
  name: "DownloadButton",

  methods:{
    download(){
      let pixelMatrix = convertPixelMatrix(this.$store.state.pixelMatrix);
      exportToC(pixelMatrix.flat(2));
    }
  }
}


</script>