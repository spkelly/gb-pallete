
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


<style>

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
  background-color: red;
}

.pallete__color-1 {
  background-color: #113711;
}

.pallete__color-2 {
  background-color: #346031;
}

.pallete__color-3 {
  background-color: #8daa27;
}

.pallete__color-4 {
  background-color: #9eb929;
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