<template>
  <section class="console">
    <div class="console__top"></div>
    <ConsoleScreen v-on:canvaschange="handleCanvasChange"/>
    <div class="console__bottom">
      <div class="console__buttons">
        <div class="dpad">
          <div class="dpad__horiz">
            <div class="dpad__right" @click="shiftRight"></div>
            <div class="dpad__left" @click="shiftLeft"></div>
          </div>
          <div class="dpad__vert">
            <div class="dpad__up" @click="shiftUp"></div>
            <div class="dpad__down" @click="shiftDown"></div>
          </div>
        </div>
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
import {mapActions} from 'vuex';
import { SHIFT_CANVAS_LEFT, SHIFT_CANVAS_RIGHT, SHIFT_CANVAS_UP, SHIFT_CANVAS_DOWN } from '../../store/types';
export default {
  name:"Console",
  components:{
    ConsoleScreen
  },
  methods:{
    handleCanvasChange(coords){
      this.$emit('canvaschange', coords);
    },
    ...mapActions({
      shiftLeft: SHIFT_CANVAS_LEFT,
      shiftRight: SHIFT_CANVAS_RIGHT,
      shiftUp: SHIFT_CANVAS_UP,
      shiftDown: SHIFT_CANVAS_DOWN})
  }
}
</script>


<style style lang="scss">
@import "../../scss/main";

.console{
  overflow: hidden;
  position: relative;
  display: flex;
  min-width: 520px;
  flex-direction: column;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color:#CBCBC1;
  height: 900px;
  border-bottom-right-radius:130px;
  border-bottom-left-radius: 40px;

  &__top{
    min-height: 6%;
  }
  &__bottom{
  height:100%;
  flex-grow: 1;
  margin-top: 80px;
  }
  
  &__shadow{
  position: absolute;
  right:0;
  bottom:0;
  width:240px;
  height:180px;
  background-color: #AAA79C;
  clip-path: polygon(10% 100%, 100% 100%, 100% 15%);
  }

}

.console__speaker{
  position: absolute;
  right: 8px;
  bottom: 40px;
  transform: rotate(-34deg);
  width: 200px;
  
  &-element{
    display: inline-block;
    margin:0 10px;
    border-radius: 20%;
    width: 10px;
    height:100px;
    background-color:#8A8777;
  }
}
.dpad{
  margin-right:160px;
  margin-left: 40px;
  width: 130px;
  height: 130px;
  position: relative;
  z-index: 2;

  %dpad-section{
    border-radius: 8px;
    display: block;
    position: absolute;
    height: 35%;
    width:100%;
    top: 32%;
    background-color: black;
  }
  &__horiz{
    @extend %dpad-section;
  }
  &__vert{
    @extend %dpad-section;
    transform: rotate(90deg);

  }
  %dpad-trigger{
    cursor: pointer;
    position: absolute;
    height:100%;
    width:35%;
  }
  &__up{
    @extend %dpad-trigger;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    top:0px;
  }
  &__right{
    @extend %dpad-trigger;
    right:0px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  &__left{
    @extend %dpad-trigger;
    left:0px;
    float: left;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  &__down{
    @extend %dpad-trigger;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    bottom:0px;
    right: 0px;
  }
}
.console__buttons{
  position: relative;
  display: flex;

  &-face{
    position: relative;
    width: 180px;
    height: 130px;
  }

  %face-button{
    position: absolute;
    width:75px;
    height:75px;
    border-radius: 100%;
  }
  &-a{
    @extend %face-button;
    top: 0px;
    right: 0px;
  }
  &-b{
    @extend %face-button;
    bottom: 10px;
    left: 0px;
  }
  &-bottom{
    margin-top:30px;
    position: relative;
    display: flex;
    justify-content: center;
  }
  %bottom-buttons{
    align-self: center;
    margin-top: 40px;
    height:18px;
    width: 70px;
    border-radius: 30%;
    transform: rotate(-30deg);
    background-color: #867E8D;
  }
  &-start{
    @extend %bottom-buttons;
    margin-right: 30px;
    margin-left: -70px;

  }
  &-select{
    @extend %bottom-buttons;
  }
}











</style>
