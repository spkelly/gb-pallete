<template>
    <div class="canvas_holder">
      <canvas id="viewport" ref="viewport"></canvas>
      <canvas id="can" ref="canvas" 
        v-on:mouseup="handleMouseUp"
        v-on:mousedown="handleMouseDown" 
        v-on:mousemove="handleMouseMove"
      ></canvas>
    </div>
</template>

<script>
import * as CanvasHelper from '../services/CanvasServices'

export default{
  name: 'TileCanvas',
  computed:{
    pixelColor(){
      return this.$store.state.Palette.selectedColor
    },
  },
  data(){
    return{
      canvas:{},
      ctx:{},
      mouseDown: false
    }
  },
    // TODO: Make this cleaner especially getPaintLocation()
  methods:{
    handleMouseUp(e){
      this.mouseDown = false;
    },

    handleMouseDown(e){
      let paintLocation= this.getPaintLocation(e);
      this.drawOnCanvas(paintLocation);
      this.mouseDown = true;
    },

    handleMouseMove(e){
      if(this.mouseDown){
        let paintLocation = this.getPaintLocation(e);
        this.drawOnCanvas(paintLocation);
      }
    },
    
    getPaintLocation(e){
      console.log("I am here am checking mouse position");
      let pos = CanvasHelper.getMousePosition(this.canvas,e);
      console.log("I am here am checking Pixel Coordinates my mouse position is", pos);
      let coords = CanvasHelper.getPixelCoordinates(pos);
      console.log("I am here am checking mouse position");
      let offset = CanvasHelper.getPixelOffset(coords);
      return {coords,offset};
    },

    drawOnCanvas({coords,offset}){
      CanvasHelper.fillCell(this.ctx, offset, this.pixelColor);
      this.$emit('canvaschange', coords);
    }
  },

  mounted() {
    this.canvas = this.$refs.canvas;
    let vp = this.$refs.viewport;
    let vpCTX = vp.getContext("2d");
    CanvasHelper.drawGrid(vp,vpCTX);
    this.ctx = this.$refs.canvas.getContext("2d");
    this.$store.dispatch("initializeCanvas",this.canvas);
  }
}
</script>

<style lang="css">
  .section__header{
    display: none;
  }
  .file_name{
    text-align: center;
    width: 80%;
    font-size: 26px;
    font-family: 'VT323', monospace;
    color: #9eb737;
    background-color: transparent;
    border:none;
  }

  ::placeholder{
    color:#9eb737;
    opacity: 1;
  }

  .canvas_holder{
    cursor: pointer;
    height: 300px;
    width: 300px;
    margin:0 auto;
    position:relative;
  }

  #can {
    z-index: 0;
    position: absolute;
    left: 0px;
    height: 300px;
    width: 300px;
  }

  #viewport{
  background-color: #ccdba4;
  }

  #grid {
    border-top: 8px solid #113711;
    border-bottom: 8px solid #113711;
  }
</style>
