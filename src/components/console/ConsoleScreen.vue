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
  position: relative;
  border-radius: 30px 30px 110px 30px;
  max-width: fit-content;
  padding: 40px;
  padding-left: 80px;
  padding-right: 80px;
  padding-bottom: 50px;
  margin-right: 40px;
  margin-left:40px;
  /* padding-right:130px;
  padding-top: 60px; */
  background-color:#625F70;
}

.console__light{
  top:0px;
  left: 0px;
  position: absolute;
  height: 3%;
  width: 3%;
  border-radius: 100%;
  align-self: center;
  background-color:red;
}

</style>