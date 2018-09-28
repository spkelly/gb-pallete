<template>
  <div id="pallete">
    <div  v-on:click="$emit('changecolor','#113711')" class="pallete__color pallete__color-1"></div>
    <div  v-on:click="$emit('changecolor','#346031')" class="pallete__color pallete__color-2"></div>
    <div  v-on:click="$emit('changecolor','#8daa27')" class="pallete__color pallete__color-3"></div>
    <div  v-on:click="$emit('changecolor','#9eb929')" class="pallete__color pallete__color-4"></div>
  </div>
</template>

<script>
  export default {
    name:'colorPallete'
  }
</script>
