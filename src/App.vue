<template>
  <div id="app">
    Gameboy Tile Generator
    <div id="grid">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {

  }
}
</script>

<style>
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
  font-family:'VT323', monospace;
}

#grid{
  position:relative;
  margin: 120px auto;
  border-top: 8px solid #113711;
  border-bottom: 8px solid #113711;

  width: 512px;
  display: flex;
  flex-wrap: wrap;

}

  #grid:before, #grid:after{
    content: '';
    top: 0;
    width: 8px;
    height: 100%;
    background: #113711;
    position: absolute;
  }

  #grid:before{
    left: -8px;
  }

  #grid:after{
    right: -8px;
  }

#grid div{
  background-color: #ccdba4;
  height: 64px;
  box-sizing: border-box;
  border: 2px dashed white;
  width: 64px;
}

</style>
