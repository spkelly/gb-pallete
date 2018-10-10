
<template>
  <div id="pallete">
    <div
      v-for="(color, index) in pallete" :key="index"  
      v-on:click="handleClick(index)"
      :class="[palleteClass,{active:color.isActive}]"
    ></div>
  </div>
</template>

<script>
  export default {
    name:'colorPallete',
    data: function(){
      return{
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
        palleteSelection.isActive = !palleteSelection.isActive;
        this.$set(this.pallete,index,palleteSelection);
        console.log("working");
        this.$emit('changecolor',palleteSelection.color,index);
      }
    }
  }
</script>


<style>

  .active{background-color: blue !important;}

  #pallete {
  padding: 24px 0;
  justify-content: space-around;
  position: relative;
  display: flex;
  margin: 20px auto;
  width: 512px;
  border-top: 8px solid #113711;
  border-bottom: 8px solid #113711;
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
  background: #113711;
  position: absolute;
}

#pallete:before {
  left: -8px;
}

#pallete:after {
  right: -8px;
}

</style>