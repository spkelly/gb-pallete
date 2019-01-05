
<template>
  <div id="pallete">
    <div
      v-for="(color, index) in pallete" :key="index"  
      v-on:click="handleClick(index)"
      v-bind:style="{backgroundColor:color.color}"
      :class="[palleteClass,{active: activeIndex == index}]"
    ></div>
  </div>
</template>

<script>
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
        this.$emit('changecolor',palleteSelection.color,index);
      }
    }
  }
</script>


<style>

  .active{border-color: gold !important;}

  #pallete {
  padding: 24px 0;
  justify-content: space-around;
  position: relative;
  display: flex;
  margin: 20px auto;
  width: 512px;
  border-top: 8px solid #9eb737;
  border-bottom: 8px solid #9eb737;
  background-color: #ccdba4;
}

.pallete__color {
  width: 40px;
  height: 40px;
  border: 4px solid black;
  background-color: black;
}

#pallete:before,
#pallete:after {
  content: '';
  top: 0;
  width: 8px;
  height: 100%;
  background: #9eb737;
  position: absolute;
}

#pallete:before {
  left: -8px;
}

#pallete:after {
  right: -8px;
}

</style>
