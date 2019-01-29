<template>
  <section class="file__controls">
    <label class="header__sub">Tile Name:</label>
    <input :value="fileName" @input="updateFileName" type="text" /><br>
  <div class="file__selection-holder" @click=changeFileType>
     <label class="header__sub">File Type:</label>
    <div class="file__selector" v-bind:class="{toggled:isToggled}"></div>
    <div class="file__selection">C</div>
    <div class="file__selection">ASM</div>
  </div>
  <div v-if="!isToggled" class="file__description file__description-c">
    This will generate a C hearder file with the TileData represented as an array of hexadecimal numbers
  </div>
  <div v-if="isToggled" class="file__description file__description-asm">
    This will generate an asm file written in RGBDS Assembly, click <a target="_blank" href="https://github.com/rednex/rgbds">here</a> for more information.
  </div>
  </section>
</template>


<script>
import {CHANGE_FILE_TYPE,CHANGE_FILE_NAME} from '../store/types';
import {mapState} from 'vuex'

export default {
  name:"FileControls",
  data(){
    return({
      isToggled:false,
    })    
  },
  computed:{
    ...mapState({
      fileName: state => state.File.fileName
      })
  },
  methods:{
    changeFileType(){
      this.isToggled = !this.isToggled;
      this.$store.dispatch(CHANGE_FILE_TYPE, this.isToggled);
    },
    updateFileName(e){
      this.$store.dispatch(CHANGE_FILE_NAME,e.target.value)
    }
  }
}
</script>



<style lang="scss">
@import '../scss/main';
  .file__controls{
    padding: 20px 0;
  }
  input{
    width:28%;
    background: transparent;
    border: none;
    border-bottom: 2px solid $color__pink;
  }

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
    top:18px;
    left:200px;
    width: 68px;
    height: 50px;
    @include border;
    transition: all .25s ease-in-out
  }

  .toggled{
    transform: translateX(60px);
  }
  .file__selection{
    display: inline-block;
    margin-top:20px;
    margin-left:14px;
    width: 50px;
    height: 40px;
  }

</style>
