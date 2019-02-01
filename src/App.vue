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
      <div class="right">
      <colorPallete />
      <Console v-on:canvaschange="handleCanvasChange" />
      <Output />
      </div>
      
    </div>
  <Modal v-if="modalVisible" :onConfirm="download"/>
  </div>
</template>

<script>
import colorPallete from './components/ColorPallete.vue';
import TileCanvas from './components/TileCanvas.vue';
import DownloadButton from './components/DownloadButton.vue';
import FileControls from './components/FileControls';
import Output from './components/Output';
import Console from './components/console/Console';
import Modal from './components/Modal.vue';
import {mapState, mapActions} from 'vuex';
import { UPDATE_OUTPUT, DOWNLOAD, DISPLAY_MODAL } from './store/types';

export default {
  // TODO: move styles to other components
  // TODO: Change class names in template
  name: 'app',

  computed:mapState({
    tileData: state => state.Output.pixelMatrix,
    selectedColor: state => state.Palette.selectedColor,
    selectedPallateData: state =>  state.Palette.selectedPalleteValue,
    modalVisible: state => state.modal.modalVisible
    })
  ,

  components:{
    Output,
    colorPallete, 
    TileCanvas,
    Modal,
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

    ...mapActions(['shiftLeft','shiftRight','shiftUp','shiftDown',DOWNLOAD,DISPLAY_MODAL])
  },
  mounted() {
    if(navigator.userAgent.match(navigator.userAgent.match(/Android/i)
                              || navigator.userAgent.match(/webOS/i)
                              || navigator.userAgent.match(/iPhone/i))){
     this[DISPLAY_MODAL]({message:"It appears that you are viewing this on a mobile device. This version of the site is still under construction, and may not be functional at this time. Please check back later...",isError:true})
      
    }
    let data = Array(8).fill(null).map(()=>Array(8).fill(0));
    this.$store.dispatch(UPDATE_OUTPUT,data);
  },
}
</script>

<style lang="scss">
@import './scss/main.scss';
@import './scss/base';
@import './scss/typography';
body{
  width: 100vw;
}

.link:visited{
  color: $color__dark__pink; 
}
.right{
  width: fit-content;
  display: flex;
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
  max-width: 400px;
  min-width: 300px;
  margin-right:40px;
  @include respond(small){
    align-self: center;
    margin: 0;
    
  }
}

#header{
  margin-bottom: 80px;
}

#app {
  background-color: $color__background;
  text-align: center;
}

.flex-row {
  overflow:hidden;
  padding-top: 60px;
  padding-bottom: 200px;
  margin: 0 auto;

  @include respond(medium){
        padding-top:10px;
  }
    @include respond(small){
    padding-bottom: 0;
    flex-wrap: wrap;
    // flex-direction: column;
  }
  justify-content: center;
  display: flex;
}
</style>
