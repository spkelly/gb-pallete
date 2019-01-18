<template>
  <div class="console__screen">
    <div class="console__light"></div>
    <TileCanvas  v-on:canvaschange="handleCanvasChange" />
  </div>
</template>


<script>
import TileCanvas from "../TileCanvas";
export default {
  name:"ConsoleScreen",
  components:{
    TileCanvas
  },
  methods:{
    handleCanvasChange(coords){
      this.$emit('canvaschange', coords);
    }
  }
}
</script>


<style>

.console__screen{ 
  height: 1500px;
  display: flex;
  border-radius: 30px 30px 110px 30px;
  margin-right: 80px;
  margin-left:80px;
  padding-right:130px;
  padding-top: 60px;
  background-color:#625F70;
}

.console__light{
  height: 20px;
  width: 20px;
  border-radius: 100%;
  align-self: center;
  margin: 0 50px;
  background-color:red;
}

</style>