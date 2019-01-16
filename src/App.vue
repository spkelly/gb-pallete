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

export default {
  // TODO: sepearate into smaller components
  // TODO: move styles to other components
  // TODO: Change class names in template
  name: 'app',

  computed:{
    tileData(){
       return this.$store.state.Output.pixelMatrix
    },
    selectedColor(){
      return this.$store.state.Palette.selectedColor
    },
    selectedPallateData(){
      return this.$store.state.Palette.selectedPalleteValue
    }
  },

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
  background-color: #270e24;
  color: #9eb737;
  font-family: 'VT323', monospace;
}


.buttonHolder {
  display: flex;
  justify-content: center;
  font-size: 32px;
}

.pixel__button-horiz {
  font-size: 32px;
  color: #113711;
  background-color: #9eb737;
  width: 100px;
  height: 200px;
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.flex-row {
  display: flex;
  justify-content: center;

}



</style>
