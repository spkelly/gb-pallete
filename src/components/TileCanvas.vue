<template>
  <canvas id="can" ref="canvas" 
    v-on:mouseup="handleMouseUp"
    v-on:mousedown="handleMouseDown" 
    v-on:mousemove="handleMouseMove"
  ></canvas>
</template>

<script>
  import * as CanvasHelper from '../services/CanvasServices'
  
  export default{
    name: 'TileCanvas',
    props: {
      pixelColor: String
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
      this.ctx = this.$refs.canvas.getContext("2d");
      CanvasHelper.drawGrid(this.canvas,this.ctx);
    }
  }
</script>

<style lang="css">
  #can {
  margin: 0 10px;
  position: relative;
  border: 8px solid #113711;
  background-color: #ccdba4;
  } 

  #grid {
    border-top: 8px solid #113711;
    border-bottom: 8px solid #113711;
  }
</style>
