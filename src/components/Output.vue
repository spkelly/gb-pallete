<template>
<section id="output">
  <TileOutput />
  <DataOutput />
  <miniOutput />
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



<style>

  #output{
    margin-left: 40px;
  }

</style>
