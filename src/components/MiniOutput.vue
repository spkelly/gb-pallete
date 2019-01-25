<template>
  <canvas ref="mini_output" class="mini_output"></canvas>
</template>


<script>
import {CANVAS_MED,CANVAS_LARGE} from '../services/constants';
  export default{
    name:"MiniOuput",

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
      canvas.width = CANVAS_MED;
      canvas.height = CANVAS_MED;
      this.ctx = canvas.getContext("2d");
    }
  }
</script>

<style lang="css">
  .mini_output{
    width:100px;
    height:100px;
  }
</style>
