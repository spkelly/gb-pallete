<template>
  <div id="app">
    <!-- <header id="header">
      <h1 class="heading__primary">Gameboy Tile Generator</h1> 
    </header> -->
    <div class="flex-row">
      <section class="description">

        <h1 class="heading__primary">This is a Gameboy Tile Generator.</h1>
        <h1 class="heading__primary">More description to come...</h1>
        <FileControls /> 
        <div>
          <DownloadButton />
        </div>
      </section>
      <colorPallete />
      <Console v-on:canvaschange="handleCanvasChange" />
      <Output />
    </div>

  </div>
</template>

<script>
import colorPallete from './components/ColorPallete.vue';
import TileCanvas from './components/TileCanvas.vue';
import DownloadButton from './components/DownloadButton.vue';
import FileControls from './components/FileControls';
import Output from './components/Output';
import Console from './components/console/Console';
import {mapState, mapActions} from 'vuex';
import { shiftLeft } from './services/CanvasServices';
import { UPDATE_OUTPUT } from './store/types';

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
    FileControls,
    Console
  },

  methods:{
    handleCanvasChange: function(e){
      let tileData = this.tileData;
      let modifiedRow = tileData[e.row].slice(0);

      modifiedRow[e.col] = this.selectedPallateData;
      this.$set(tileData,e.row,modifiedRow);
      this.$store.dispatch(UPDATE_OUTPUT,tileData);
    },

    ...mapActions(['shiftLeft','shiftRight','shiftUp','shiftDown'])
  },
  mounted() {
    let data = Array(8).fill(null).map(()=>Array(8).fill(0));
    this.$store.dispatch(UPDATE_OUTPUT,data);
  },
}
</script>

<style lang="scss">
@import './scss/main.scss';


body{
  margin: 0;
}
.description{
  height:940px;
  width: 20%;
  min-width: 415px;
  margin-right:3%;
}

.heading__primary{
  margin:0;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 44px;
}

.heading__sub{
  font-size:12px;
}

#header{
  margin-bottom: 80px;
}

#app {
  background-color: $color__background;
  min-width: 960px;

  text-align: center;
  font-size: 64px;
 /* background-color: #270e24;*/
  color: #9eb737;
  font-family: 'VT323', monospace;
}

.flex-row {
  display: flex;
  justify-content: center;

}
</style>
