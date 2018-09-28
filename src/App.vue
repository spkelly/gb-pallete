<template>
  <div id="app" v-on:changecolor="changeColor($event)">
    Gameboy Tile Generator
    <colorPallete />
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
      <TileCanvas :pixelColor="selectedColor" />
      <div class="output" contenteditable=true>
        <pre>


    const unsigned char example[] = {
      0x03,0x00,0x83,0x00,0x00,0x00,0x00,0x00,
    }
        </pre>
      </div>
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

export default {


  name: 'app',
  data:function(){
    return{
      selectedColor:'#FF0000'
    }
  },
  methods:{
    changeColor(color){
      console.log(color)
    }
  },
  components:{
    colorPallete,
    TileCanvas
  },
  events:{
    change
  }
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

</style>
