<template>
  <section class="console">
    <div class="console__top"></div>
    <ConsoleScreen v-on:canvaschange="handleCanvasChange"/>
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

</style>
