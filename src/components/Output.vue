<template>
<section id="output">
  <TabViewer :tabNames="['Mini Output','Data Grid']">
    <MiniOutput />
    <TileOutput />
  </TabViewer>
  <DataOutput />
</section>
</template>


<script>
import DataOutput from './DataOutput';
import MiniOutput from './MiniOutput';
import TileOutput from './TileOutput';
import TabViewer from './TabViewer';

export default {
  name:"Output",
  components:{
    DataOutput,
    MiniOutput,
    TileOutput,
    TabViewer
  }
  
}
</script>



<style lang="scss">
@import '../scss/main.scss';

  #output{
    margin-left: 40px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    @include respond(small){
      width: 20%;
    }
    
  }

</style>
