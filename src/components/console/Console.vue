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
  right: 8px;
  bottom: 40px;
  transform: rotate(-34deg);
  width: 200px;
}

.console__speaker-element{
  display: inline-block;
  margin:0 10px;
  border-radius: 20%;
  width: 10px;
  height:100px;
  background-color:#8A8777;
}

.console__shadow{
  position: absolute;
  right:0;
  bottom:0;
  width:240px;
  height:180px;
  background-color: #AAA79C;
  clip-path: polygon(10% 100%, 100% 100%, 100% 15%);
}

#console{
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color:#CBCBC1;
  height: 900px;
  border-bottom-right-radius:130px;
  border-bottom-left-radius: 40px;
}

.console__top{
    min-height: 6%;
}
.console__bottom{
  height:100%;
  flex-grow: 1;
  margin-top: 80px;
}

.console__buttons{
  position: relative;
  display: flex;
}



.console__buttons-dpad{
  
  margin-right:160px;
  margin-left: 40px;
  width: 130px;
  height: 130px;
  position: relative;
}
.console__buttons-face{
  position: relative;
  width: 180px;
  height: 130px;
}

.console__buttons-dpad::before{
  border-radius: 8px;
  display: block;
  position: absolute;
  height: 35%;
  width:100%;
  content:'';
  top: 32%;
  background-color: black;
}

.console__buttons-dpad::after{
   border-radius: 8px;
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
  width:75px;
  height:75px;
  border-radius: 100%;
  background-color: #AC2D5E;

}

.console__buttons-b{
  bottom: 10px;
  left: 0px;
  position: absolute;
  margin: 0 10px;
  width:75px;
  height:75px;
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
  margin-top: 40px;
  margin-right: 30px;
  margin-left: -70px;
  height:18px;
  width: 70px;
  background-color: #867E8D;
  border-radius: 30%;
  transform: rotate(-30deg);
}
.console__buttons-select{
  align-self: center;
  margin-top: 40px;
  height:18px;
  width: 70px;
  background-color: #867E8D;
  border-radius: 30%;
  transform: rotate(-30deg);
}

</style>
