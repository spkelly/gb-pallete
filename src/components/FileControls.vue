<template>
  <section>
  <div class="section__header">
    <h2 class="header__sub">File Type</h2>
  </div>
  <div class="file__controls-holder">
    <form class="file__controls"  autocomplete="off">
      <input name="filetype" type="radio" value="c" v-model="selected"  v-on:change="changeFileType" checked="checked">
      <label for="">C </label>
      <input name="filetype" type="radio" value="asm" v-model="selected" v-on:change="changeFileType">
      <label for="">ASM</label>
      
    </form>
  </div>
  </section>
</template>


<script>
  export default {
    name:"FileControls",
    data(){
      return({
        selected: 'C'
      })
      
    },
    methods:{
      changeFileType(){
        this.$store.commit("changeFileType", this.selected);
      }
    }
  }
</script>



<style lang="css">

  .file__controls-holder{
    margin-left: 10px;
    padding: 10px;
    font-size: 28px;
    border:8px solid #9eb737;
  }
  .file__controls{
    text-align: left;
  }

</style>
