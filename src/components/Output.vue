<template>
<section id="output">
  <MiniOutput />
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



<style lang="scss">

  #output{
    width: fit-content;
    margin-left: 40px;
    display: flex;
    flex-wrap: wrap;
  }

</style>
