<template>
  <div id="app">
    Gameboy Tile Generator
    <div id="pallete">
      <div class="pallete__color pallete__color-1"></div>
      <div class="pallete__color pallete__color-2"></div>
      <div class="pallete__color pallete__color-3"></div>
      <div class="pallete__color pallete__color-4"></div>
    </div>
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

#pallete{
  padding: 24px 0;
  justify-content: space-around;
  position: relative;
  display: flex;
  margin: 20px auto;
  width: 512px;
  border-top: 8px solid #113711;
  border-bottom: 8px solid #113711;
    background-color: #ccdba4;
}
.pallete__color{
  width: 40px;
  height: 40px;
  border: 4px solid  black; 
  background-color: red;
}

.pallete__color-1{
  background-color: #113711;
}
.pallete__color-2{
  background-color: #346031;
}
.pallete__color-3{
  background-color: #8daa27;
}
.pallete__color-4{
  background-color: #9eb929;
}

#pallete:before, #pallete:after{
  content: '';
  top: 0;
  width: 8px;
  height: 100%;
  background: #113711;
  position: absolute;
}

#pallete:before{
  left: -8px;
}

#pallete:after{
  right: -8px;
}
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
  margin: auto;
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
