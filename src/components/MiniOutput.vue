<template>
  <section>
    <div class="section__header">
    <h2 class="header__sub">
      Mini Output
    </h2>
    </div>
    <div class="mini_output_holder">
      <MiniOutputCanvas />
      <MiniOutputCanvas />
      <MiniOutputCanvas />
      <MiniOutputCanvas />
    </div>
  </section>

</template>


<script>
import MiniOutputCanvas from './MiniOutputCanvas';


export default {
name:"MiniOutput",
components:{
  MiniOutputCanvas
}  
}
</script>

<style lang="scss">
    .mini_output_holder{
    background-color: #ccdaa6;
    margin-bottom: 24px;
    display: flex;
    width: 200px;
    flex-wrap: wrap;
  }
</style>
