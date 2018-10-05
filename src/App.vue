<template>
  <div id="app">
    Gameboy Tile Generator
    <colorPallete v-on:changecolor="changeColor"/>
    <div class="flex-row">
      <div class="buttonHolder">
        Grid Size
        <div class="pixel__button-horiz">
          8x8
        </div>
        <div class="pixel__button-horiz">
          32x32
        </div>
      </div>
      <TileCanvas :pixelColor="selectedColor" v-on:canvaschange="handleCanvasChange" />
      <TileOutput :tileeData="tableData" />
    </div>
    <div class="buttonHolder">
      <div class="pixel__button-vert">
        clear grid
      </div>
      <div class="pixel__button-vert">
        generate data
      </div>
    </div>
  </div>
</template>

<script>
import colorPallete from './components/ColorPallete.vue';
import TileCanvas from './components/TileCanvas.vue';
import TileOutput from './components/TileOutput.vue';

export default {
  //TODO: sepearate into smaller components
  // TODO: move styles to other components
  name: 'app',
  data:function(){
    return{
      selectedColor:'#113711',
      colorPalleteShade: 3,
      tableData:[]
    }
  },
  methods:{
    changeColor: function(color, shade){
      this.selectedColor = color;
      this.colorPalleteShade = shade;
    },
    handleCanvasChange: function(e){
      let modifiedRow = this.tableData[e.row].slice(0);
      modifiedRow[e.col] = this.colorPalleteShade;
      this.$set(this.tableData,e.row,modifiedRow);
    }
  },
  components:{
    colorPallete,
    TileCanvas,
    TileOutput
  },
  mounted() {
    this.tableData = Array(8).fill(null).map(()=>{
     return Array(8).fill(0));
    };
  },
}
</script>

<style>

.output {
  text-align: left;
  font-size: 14px;
  height: 500px;
  width: 400px;
  border: 1px solid black;
  border: 8px solid #113711;
  overflow: wrap;
}

.output pre {
  margin: 0;
  padding: 0;
}

#pallete {
  padding: 24px 0;
  justify-content: space-around;
  position: relative;
  display: flex;
  margin: 20px auto;
  width: 512px;
  border-top: 8px solid #113711;
  border-bottom: 8px solid #113711;
  background-color: #ccdba4;
}

.pallete__color {
  width: 40px;
  height: 40px;
  border: 4px solid black;
  background-color: red;
}

.pallete__color-1 {
  background-color: #113711;
}

.pallete__color-2 {
  background-color: #346031;
}

.pallete__color-3 {
  background-color: #8daa27;
}

.pallete__color-4 {
  background-color: #9eb929;
}

#pallete:before,
#pallete:after {
  content: '';
  top: 0;
  width: 8px;
  height: 100%;
  background: #113711;
  position: absolute;
}

#pallete:before {
  left: -8px;
}

#pallete:after {
  right: -8px;
}

#can {
  margin: 0 10px;
  position: relative;
  border: 8px solid #113711;
  background-color: #ccdba4;
}

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

#grid {
  border-top: 8px solid #113711;
  border-bottom: 8px solid #113711;
}

#grid:before,
#grid:after {
  content: '';
  top: 0;
  width: 8px;
  height: 100%;
  background: #113711;
  position: absolute;
}

#grid:before {
  left: -8px;
}

#grid:after {
  right: -8px;
}



.buttonHolder {
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
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.flex-row {
  display: flex;
  justify-content: center;
}

code{
  display:block;
  width:50%;
  margin: 0 auto;
  font-family: 'VT323';
  font-size:32px;
}

</style>
