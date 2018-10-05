
<template>
  <div id="pallete">
    <div  v-on:click="$emit('changecolor','#113711',3)" class="pallete__color pallete__color-1"></div>
    <div  v-on:click="$emit('changecolor','#346031',2)" class="pallete__color pallete__color-2"></div>
    <div  v-on:click="$emit('changecolor','#8daa27',1)" class="pallete__color pallete__color-3"></div>
    <div  v-on:click="$emit('changecolor','#9eb929',0)" class="pallete__color pallete__color-4"></div>
  </div>
</template>

<script>
// TODO: use v-for for this
  export default {
    name:'colorPallete',
    data: function(){
      return{
        colors: ['#113711','#346031','#8daa27','#9eb929']
      }
    }
  }
</script>
