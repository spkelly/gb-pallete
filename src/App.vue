<template>
  <div id="app">
    <header id="header">
      <h1 class="heading__primary">Gameboy Tile Generator</h1>
    </header>
    <div class="flex-row">
      <colorPallete />
      <TileCanvas  v-on:canvaschange="handleCanvasChange" />
      <TileOutput :tileData="$store.state.pixelMatrix" />
      <DataOutput />
    </div>
    <div class="flex-row">
      <DownloadButton />
    </div>
  </div>
</template>

<script>
import colorPallete from './components/ColorPallete.vue';
import TileCanvas from './components/TileCanvas.vue';
import TileOutput from './components/TileOutput.vue';
import DownloadButton from './components/DownloadButton.vue';
import DataOutput from './components/DataOutput.vue';
import {mapState} from 'vuex';

export default {
  // TODO: move styles to other components
  // TODO: Change class names in template
  name: 'app',

  computed:mapState({
    tileData: state => state.Output.pixelMatrix,
    selectedColor: state => state.Palette.selectedColor,
    selectedPallateData: state =>  state.Palette.selectedPalleteValue
  }),

  components:{
    colorPallete, 
    TileCanvas,
    TileOutput,
    DownloadButton,
    DataOutput
  },

  methods:{
    handleCanvasChange: function(e){
      let tileData = this.tileData;
      let modifiedRow = tileData[e.row].slice(0);

      modifiedRow[e.col] = this.selectedPallateData;
      this.$set(tileData,e.row,modifiedRow);
      this.$store.dispatch('updateOutput',tileData);
    },
  },
  mounted() {
    let data = Array(8).fill(null).map(()=>Array(8).fill(0));
    this.$store.dispatch('updateOutput',data);
    console.log(this.$store);
  },
}
</script>

<style>
.heading__primary{
  margin:0;
  font-size: 64px;
}
.heading__sub{
  font-size:12px;
}
#header{
  margin-bottom: 80px;
}
#app {
  min-width: 960px;
  position: absolute;
  text-align: center;
  bottom: 0px;
  font-size: 64px;
  top: 0px;
  right: 0px;
  left: 0px;
 /* background-color: #270e24;*/
  color: #9eb737;
  font-family: 'VT323', monospace;
}

.flex-row {
  display: flex;
  justify-content: center;

}
</style>
