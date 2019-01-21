<template>
<section id="output">
  <TileOutput />
  <DataOutput />
  
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
    display: flex;
    flex-wrap: wrap;
    width: 450px;
  }

</style>
