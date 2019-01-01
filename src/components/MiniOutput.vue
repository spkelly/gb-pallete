<template>
  <canvas ref="mini_output" class="mini_output"></canvas>
</template>


<script>
  export default{
    name:"MiniOuput",

    data(){
      return{
        ctx:{}
      }
    },

    computed:{
      currentImageData(){
        return this.$store.state.currentImageData
      }
    },
    watch:{
      currentImageData(newData){
        if(newData){
          
          this.ctx.putImageData(newData,0,0);
          this.ctx.scale(.5,.5);
        }
        
      }
    },
    mounted(){
      let canvas = this.$refs.mini_output;
      canvas.width = 500;
      canvas.height = 500;
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