<template>
  <section id="console">
    <div class="console__top"></div>
    <ConsoleScreen v-on:canvaschange="handleCanvasChange"/>
    <div class="console__bottom">
      <div class="console__buttons">
        <div class="console__buttons-dpad"></div>
        <div class="console__buttons-face">
          <div class="console__buttons-a"></div>
          <div class="console__buttons-b"></div>
        </div>
      </div>
      <div class="console__buttons-bottom">
        <div class="console__buttons-start"></div>
        <div class="console__buttons-select"></div>
        <div class="console__speaker"></div>
      </div>
      <div class="console__shadow"></div>
      <div class="console__speaker">
        <div class="console__speaker-element"></div>     
        <div class="console__speaker-element"></div>     
        <div class="console__speaker-element"></div>     
        <div class="console__speaker-element"></div>     
        <div class="console__speaker-element"></div>     
        <div class="console__speaker-element"></div>     
      </div>
    </div>
  </section>
</template>

<script>
import ConsoleScreen from './ConsoleScreen';
export default {
  name:"Console",
  components:{
    ConsoleScreen
  },
  methods:{
    handleCanvasChange(coords){
      this.$emit('canvaschange', coords);
    }
  }
}
</script>


<style>

.console__speaker{
  position: absolute;
  right: 20px;
  bottom: 50px;
  transform: rotate(-32deg);
  width: 280px;
}

.console__speaker-element{
  display: inline-block;
  margin:0 14px;
  border-radius: 20%;
  width: 16px;
  height:140px;
  background-color: #868277;
}

.console__shadow{
  position: absolute;
  right:0;
  bottom:0;
  width:320px;
  height:200px;
  background-color: #AAA79C;
  clip-path: polygon(0 100%, 100% 100%, 100% 0%);
}

#console{
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color:#CBCBC1;
  height: 1450px;
  border-bottom-right-radius:180px;
  border-bottom-left-radius: 40px;
}

.console__top{
    height: 160px;
}
.console__bottom{
  height:100%;
  flex-grow: 1;
  margin-top: 200px;
}

.console__buttons{
  position: relative;
  display: flex;
}



.console__buttons-dpad{
  
  margin-right: 250px;
  width: 225px;
  height: 225px;
  margin-left: 90px;
  position: relative;
}
.console__buttons-face{
  position: relative;
  width: 280px;
  height: 230px;
}

.console__buttons-dpad::before{
  display: block;
  position: absolute;
  height: 35%;
  width:100%;
  content:'';
  top: 32%;
  background-color: black;
}

.console__buttons-dpad::after{
  position: absolute;
  display: block;
  height: 35%;
  width:100%;
  top: 33%;
  content:'';
  transform: rotate(90deg);
  background-color: black;
}

.console__buttons-a{
  position: absolute;
  top: 0px;
  right: 0px;
  width:120px;
  height:120px;
  border-radius: 100%;
  background-color: #AC2D5E;

}

.console__buttons-b{
  bottom: 40px;
  left: 10px;
  position: absolute;
  margin: 0 10px;
  width:120px;
  height:120px;
  border-radius: 100%;
  background-color: #AC2D5E;
}

.console__buttons-bottom{
  margin-top:30px;
  position: relative;
  display: flex;
  justify-content: center;
}

.console__buttons-start{
  align-self: center;
  margin-top: 50px;
  height:30px;
  width: 120px;
  background-color: #867E8D;
  border-radius: 30%;
  transform: rotate(-30deg);
}
.console__buttons-select{
  align-self: center;
  margin-top: 50px;
  height:30px;
  width: 120px;
  background-color: #867E8D;
  border-radius: 30%;
  transform: rotate(-30deg);
}

</style>
