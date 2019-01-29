<template>
<section id="output">
  <MiniOutput />
  <DataOutput />
  <TileOutput />
</section>
</template>


<script>
import DataOutput from './DataOutput';
import MiniOutput from './MiniOutput';
import TileOutput from './TileOutput';

export default {
  name:"Output",
  components:{
    DataOutput,
    MiniOutput,
    TileOutput
  }
  
}
</script>



<style lang="scss">

  #output{
    height: 610px;
    margin-left: 40px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }

</style>
