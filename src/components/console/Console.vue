<template>
  <section class="console">
    <div class="console__top"></div>
    <ConsoleScreen size={CANVAS_LARGE} v-on:canvaschange="handleCanvasChange"/>
    <div class="console__bottom">
      <ConsoleButtons />
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
import ConsoleButtons from './ConsoleButtons';
import {CANVAS_LARGE} from '../../store/types';

export default {
  name:"Console",
  components:{
    ConsoleScreen,
    ConsoleButtons
  },
  methods:{
    handleCanvasChange(coords){
      this.$emit('canvaschange', coords);
    }
  }
}
</script>


<style style lang="scss">
@import "../../scss/main";

.console{
  overflow: hidden;
  position: relative;
  display: flex;
  width:fit-content;
  min-width: 426px;
  max-width: 426px;
  flex-direction: column;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color:#CBCBC1;
  height: 700px;
  border-bottom-right-radius:100px;
  border-bottom-left-radius: 40px;

  &__top{
    min-height: 6%;
  }
  &__bottom{
  height:100%;
  flex-grow: 1;
  margin-top: 60px;
  }
  
  &__shadow{
  position: absolute;
  right:0;
  bottom:0;
  width:180px;
  height:120px;
  background-color: #AAA79C;
  clip-path: polygon(10% 100%, 100% 100%, 100% 15%);
  }

}

.console__speaker{
  position: absolute;
  right: 0px;
  bottom: 30px;
  transform: rotate(-34deg);
  width: 200px;
  
  &-element{
    display: inline-block;
    margin:0 6px;
    border-radius: 20%;
    width: 10px;
    height:70px;
    background-color:#8A8777;
  }
}

</style>
