

<template>
  <div id="pallete">
    <div
      v-for="(color, index) in pallete" :key="index"  
      v-on:click="handleClick(index)"
      v-bind:style="{backgroundColor:color.color}"
      :class="[palleteClass,{active: activeIndex == index}]">
    </div>
  </div>
</template>

<script>
import { CHANGE_COLOR } from '../store/types';

export default {
  name:'colorPallete',
  data(){
    return{
      activeIndex:3,
      pallete: [{
          color:'#9eb929',
        },
        {
          color:'#8daa27'
        },
        {
          color:'#346031'
        },
        {
          color:'#113711'
        }],
        palleteClass: 'pallete__color'
    }
  },
  methods:{
    handleClick: function(index){         
      let palleteSelection = this.pallete[index];
      this.activeIndex = index;
      this.$set(this.pallete,index,palleteSelection);
      this.$store.dispatch(CHANGE_COLOR,{color:palleteSelection.color,index});
    }
  }
}
</script>


<style lang="scss">

  .active{border-color: gold !important;}

  #pallete {
  position: relative;
  width: 48px;
  align-self: top;
  margin-top:100px;
  height: fit-content;
  justify-content: center;
  flex-direction: column;
  background-color: #ccdba4;
}

.pallete__color {
  cursor: pointer;
  width: 40px;
  height: 40px;
  border: 4px solid black;
  background-color: black;
}


</style>
