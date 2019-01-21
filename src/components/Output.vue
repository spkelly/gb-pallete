<template>
<section id="output">
  <TileOutput />
  <DataOutput />
  <FileControls /> 
</section>
</template>


<script>
import DataOutput from './DataOutput';
import MiniOutput from './MiniOutput';
import TileOutput from './TileOutput';
import FileControls from './FileControls';

export default {
  name:"Output",
  components:{
    DataOutput,
    MiniOutput,
    TileOutput,
    FileControls
  }
  
}
</script>



<style>

  #output{
    margin-left: 40px;
    display: flex;
  }

</style>
