<template>
  <section>
  <div class="section__header">
    <h2 class="header__sub">File Type</h2>
  </div>
  <div class="file__selection-holder" @click=changeFileType>
      <div class="file__selector" v-bind:class="{toggled:isToggled}"></div>
    <div class="file__selection">C</div>
    <div class="file__selection">ASM</div>
  </div>
  <div v-if="!isToggled" class="file__description file__description-c">
    This will generate a C file header with the TileData represented as an array of hexadecimal numbers
  </div>
  <div v-if="isToggled" class="file__description file__description-asm">
    This will generate an asm file written in RGBDS Assembly, click <a target="_blank" href="https://github.com/rednex/rgbds">here</a> for more information.
  </div>
  </section>
</template>


<script>
import {CHANGE_FILE_TYPE} from '../store/types';

export default {
  name:"FileControls",
  data(){
    return({
      isToggled:false
    })
    
  },
  methods:{
    changeFileType(){
      this.isToggled = !this.isToggled;
      this.$store.dispatch(CHANGE_FILE_TYPE, this.isToggled);
    }
  }
}
</script>



<style lang="css">

  .file__description{
    font-size: 24px;
    height: 70px;
  }

  .file__selection-holder{
    cursor: pointer;
    position: relative;
    margin-left: 10px;
    padding: 10px;
    font-size: 28px;
    
  }
  .file__selector{
    z-index: 1;
    box-sizing: border-box;
    position: absolute;
    top:14px;
    left:140px;
    width: 80px;
    height: 60px;
    border:8px solid #9eb737;
    transition: all .25s ease-in-out
  }

  .toggled{
    transform: translateX(64px);
  }
  .file__selection{
    display: inline-block;
    margin-top:20px;
    margin-left:14px;
    width: 50px;
    height: 40px;
    text-align: center;
  }

</style>
