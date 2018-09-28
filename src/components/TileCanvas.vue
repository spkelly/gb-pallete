<template>
  <canvas id="can" ref="canvas" v-on:mousedown="handleMouseDown"></canvas>
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
        ctx:{}
      }
    },
    methods:{
      handleMouseDown: function(e){
        let pos = CanvasHelper.getMousePosition(e);
        let coords = CanvasHelper.getPixelCoordinates(pos);
        let offset = CanvasHelper.getPixelOffset(coords);
        this.drawOnCanvas(offset);
      },
      handleMouseMove: function(){

      },
      drawOnCanvas: function(offset){
        CanvasHelper.fillCell(this.ctx, offset, this.pixelColor);
      }
    },
    mounted() {
      this.canvas = this.$refs.canvas;
      this.ctx = this.$refs.canvas.getContext("2d");
      CanvasHelper.drawGrid(this.canvas,this.ctx);
    }
  }
</script>