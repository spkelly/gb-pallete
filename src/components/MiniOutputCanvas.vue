<template>
  <canvas ref="mini_output" class="mini_output"></canvas>
</template>
<script>
import {GRID_WIDTH,GRID_HEIGHT} from '../services/constants';
  export default{
    name:"MiniOuputCanvas",

    data(){
      return{
        ctx:{}
      }
    },

    computed:{
      currentImageData(){
        return this.$store.state.Output.imageData
      }
    },
    watch:{
      currentImageData(newData){
        if(newData){ 
          this.ctx.putImageData(newData,0,0);
        }  
      }
    },
    mounted(){
      let canvas = this.$refs.mini_output;
      canvas.width = GRID_WIDTH;
      canvas.height = GRID_HEIGHT;
      this.ctx = canvas.getContext("2d");
      if(this.$store.state.Output.imageData.data){
        this.ctx.putImageData(this.$store.state.Output.imageData,0,0);
      }
    }
  }
</script>

<style lang="css">
  .mini_output{
    width:100px;
    height:100px;
  }
</style>
