<template>
  <div id="app">
    <header id="header">
      <!-- <h1 class="heading__primary">Gameboy Tile Generator</h1> -->
    </header>
    <button @click="shiftLeft">Shift Left Test</button>
    <button @click="shiftRight">Shift Right Test</button>
    <button @click="shiftUp">Shift Up Test</button>
    <button @click="shiftDown">Shift Down Test</button>
    <div class="flex-row">
      <section class="description">
        <p>This is a Gameboy Tile Generator.</p>
        <p>More description to come...</p>
      </section>
      <colorPallete />
      <Console v-on:canvaschange="handleCanvasChange" />
      <Output />
    </div>
    <div class="flex-row">
      <DownloadButton />
      
    </div>
  </div>
</template>

<script>
import colorPallete from './components/ColorPallete.vue';
import TileCanvas from './components/TileCanvas.vue';
import DownloadButton from './components/DownloadButton.vue';
import Output from './components/Output';
import Console from './components/console/Console';
import {mapState, mapActions} from 'vuex';
import { shiftLeft } from './services/CanvasServices';

export default {
  // TODO: move styles to other components
  // TODO: Change class names in template
  name: 'app',

  computed:mapState({
    tileData: state => state.Output.pixelMatrix,
    selectedColor: state => state.Palette.selectedColor,
    selectedPallateData: state =>  state.Palette.selectedPalleteValue
    })
  ,

  components:{
    Output,
    colorPallete, 
    TileCanvas,
    DownloadButton,
    Console
  },

  methods:{
    handleCanvasChange: function(e){
      let tileData = this.tileData;
      let modifiedRow = tileData[e.row].slice(0);

      modifiedRow[e.col] = this.selectedPallateData;
      this.$set(tileData,e.row,modifiedRow);
      this.$store.dispatch('updateOutput',tileData);
    },

    ...mapActions(['shiftLeft','shiftRight','shiftUp','shiftDown'])
  },
  mounted() {
    let data = Array(8).fill(null).map(()=>Array(8).fill(0));
    this.$store.dispatch('updateOutput',data);
  },
}
</script>

<style>
.description{
  width: 20%;
  margin-right:3%;
}

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
  background-color: #3d3d3d;
  height:2400px;
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
