<template>
  <div class="console__buttons">
  <div class="console__buttons-top">
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
  </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
import { SHIFT_CANVAS_LEFT, SHIFT_CANVAS_RIGHT, SHIFT_CANVAS_UP, SHIFT_CANVAS_DOWN } from '../../store/types';

export default {
  name:"ConsoleButtons",
  methods:{
    ...mapActions({
      shiftLeft: SHIFT_CANVAS_LEFT,
      shiftRight: SHIFT_CANVAS_RIGHT,
      shiftUp: SHIFT_CANVAS_UP,
      shiftDown: SHIFT_CANVAS_DOWN
    })
  }
}
</script>


<style lang="scss">
@import '../../scss/main';

  .console__buttons{


    &-face{
      position: relative;
      width: 120px;
      height: 130px;
    }

    %face-button{
      position: absolute;
      width:50px;
      height:50px;
      background-color:#A1295E;
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
    &-top{
      position: relative;
      display: flex;
    }
    &-bottom{
      position: relative;
      justify-content: center;
    }
    %bottom-buttons{
      position: absolute;
      margin-top: 40px;
      height:18px;
      width: 70px;
      border-radius: 30%;
      transform: rotate(-30deg);
      background-color: #867E8D;
    }
    &-start{
      @extend %bottom-buttons;
      top: 0;
      left: 45%;
    }
    &-select{
      @extend %bottom-buttons;
      left: 30%;
    }
  }

  .dpad{
    margin-right:110px;
    margin-left: 40px;
    min-width: 120px;
    max-width: 120px;
    height: 130px;
    position: relative;
    z-index: 2;

    %dpad-section{
      border-radius: 8px;
      display: block;
      position: absolute;
      height: 32%;
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
</style>