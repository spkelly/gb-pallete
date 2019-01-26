<template>
  <div id="app">
    <div class="flex-row">
      <section class="description">
        <h1 class="heading__primary">This is a Gameboy Tile Generator.</h1>
        <p class="paragraph">This tool is built to assist in designing and generating the data needed to display your drawn image to the game boy screen.</p>
        <p class="paragraph">More information on programming for the gameboy can be found below.</p>

<a class="link" href="https://github.com/gbdev/awesome-gbdev">Awesome GB Dev github</a>
<a class="link" href="https://www.youtube.com/watch?v=HyzD8pNlpwI">Ultimate Gameboy Talk</a>

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
@import './scss/base';
@import './scss/typography';

.link:visited{
  color: $color__dark__pink; 
}
.link:link{
  color: $color__pink;
}

.link{
  display: block;
  font-size: 2rem;
}

ul{
  text-align: left;
}
body{
  margin: 0;
}


.description{
  height:940px;
  width: 20%;
  min-width: 415px;
  margin-right:40px;
}

#header{
  margin-bottom: 80px;
}

#app {
  background-color: $color__background;
  min-width: 960px;
  text-align: center;
}

.flex-row {
  padding-top: 60px;
  @include respond(medium){
    padding-top:10px;
  }
  display: flex;
  justify-content: center;

}
</style>
