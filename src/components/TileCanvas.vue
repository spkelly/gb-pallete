<template>
  <section >
  <div class="section-header">
      <h2 class="header__sub">
      <input type="text" class="file_name" placeholder="Untitled Tile (click to change title)"></input>
      </h2>
    </div>
  <div class="canvas_holder">
  <canvas id="viewport" ref="viewport">
  </canvas>
  <canvas id="can" ref="canvas" 
    v-on:mouseup="handleMouseUp"
    v-on:mousedown="handleMouseDown" 
    v-on:mousemove="handleMouseMove"
  ></canvas>
  </div>
  </section>
</template>

<script>
  import * as CanvasHelper from '../services/CanvasServices'
  
  export default{
    name: 'TileCanvas',
    computed:{
      pixelColor(){
        return this.$store.state.selectedColor
      }
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
      handleMouseUp: function(e){
        this.mouseDown = false;
      },
      handleMouseDown: function(e){
        let paintLocation= this.getPaintLocation(e);

        this.drawOnCanvas(paintLocation);
        this.mouseDown = true;
      },
      handleMouseMove: function(e){
        if(this.mouseDown){
          let paintLocation = this.getPaintLocation(e);
          this.drawOnCanvas(paintLocation);
        }
      },
     
      getPaintLocation: function(e){
        let pos = CanvasHelper.getMousePosition(e);
        let coords = CanvasHelper.getPixelCoordinates(pos);
        let offset = CanvasHelper.getPixelOffset(coords);
        return {coords,offset};
      },
      drawOnCanvas: function({coords,offset}){
        CanvasHelper.fillCell(this.ctx, offset, this.pixelColor);
        this.$emit('canvaschange', coords);
      }
    },
    mounted() {
      this.canvas = this.$refs.canvas;
      let vp = this.$refs.viewport;
      let vpCTX = vp.getContext("2d");
      CanvasHelper.drawGrid(vp,vpCTX);
      this.canvas.width = 500;
      this.canvas.height = 500;
      this.ctx = this.$refs.canvas.getContext("2d");
      this.$store.dispatch("initializeCanvas",this.canvas);

    }
  }
</script>

<style lang="css">
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
    height: 500px;
    border: 8px solid #9eb737;
    margin: 0 10px;
    position:relative;
  }
  #can {
    z-index: 0;
    position: absolute;
    left: 0px;
    height: 500px;
    width: 500px;
  }

  #viewport{
  background-color: #ccdba4;
  }

  #grid {
    border-top: 8px solid #113711;
    border-bottom: 8px solid #113711;
  }
</style>
