<template>
  <div id="app">
    Gameboy Tile Generator
    <colorPallete v-on:changecolor="changeColor"/>
    <div class="flex-row">
      <div class="buttonHolder-vert">
        Grid Size
        <div class="pixel__button-horiz">
          8x8
        </div>
        <div class="pixel__button-horiz">
          32x32
        </div>
      </div>
      <TileCanvas :pixelColor="selectedColor" v-on:canvaschange="handleCanvasChange" />
      <TileOutput :tileData="$store.state.pixelMatrix" />
    </div>
    <div class="buttonHolder">
      <div class="pixel__button-vert" v-on:click="$store.dispatch('clearGrid')">
        clear grid
      </div>
      <div class="pixel__button-vert" >
        generate data
      </div>
      
    </div>
    <DownloadButton />
  </div>
</template>

<script>
import colorPallete from './components/ColorPallete.vue';
import TileCanvas from './components/TileCanvas.vue';
import TileOutput from './components/TileOutput.vue';
import DownloadButton from './components/DownloadButton';

export default {
  // TODO: sepearate into smaller components
  // TODO: move styles to other components
  // TODO: Change class names in template
  name: 'app',
  data:function(){
    return{
      selectedColor:'#113711',
      colorPalleteShade: 3,
     
    }
  },

  computed:{
    tileData(){
       return this.$store.state.pixelMatrix
    }
  },
  methods:{
    changeColor: function(color, shade){
      this.selectedColor = color;
      this.colorPalleteShade = shade;
    },
    handleCanvasChange: function(e){
      let tileData = this.tileData;
      let modifiedRow = tileData[e.row].slice(0);

      modifiedRow[e.col] = this.colorPalleteShade;
      this.$set(tileData,e.row,modifiedRow);
      this.$store.commit('updateMatrix',tileData);
    },
    clearCanvas(){
      
    }
  },
  components:{
    colorPallete,
    TileCanvas,
    TileOutput,
    DownloadButton
  },
  mounted() {
    let data = Array(8).fill(null).map(()=>Array(8).fill(0));
    this.$store.dispatch('resetMatrix',data);
  },
}
</script>

<style>
#app {
  position: absolute;

  text-align: center;
  bottom: 0px;
  font-size: 64px;
  top: 0px;
  right: 0px;
  left: 0px;
  background-color: #9cba29;
  color: #113711;
  font-family: 'VT323', monospace;
}


.buttonHolder {
  display: flex;
  justify-content: center;
  font-size: 32px;
}

.buttonHolder-vert{
  display: flex;
  flex-direction:column;
  justify-content: center;
  font-size: 32px;
}


.pixel__button-horiz {
  font-size: 32px;
  color: #ccdba4;
  background-color: #113711;
  width: 100px;
  height: 200px;
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pixel__button-vert {
  font-size: 32px;
  color: #ccdba4;
  background-color: #113711;
  width: 200px;
  height: 100px;
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.flex-row {
  display: flex;
  justify-content: center;
}



</style>
