<template>
  <div>
    <form class="file-controls"  autocomplete="off">
      <input name="filetype" type="radio" value="c" v-model="selected"  v-on:change="changeFileType" checked="checked">
      <label for="">C </label><br>
      <input name="filetype" type="radio" value="asm" v-model="selected" v-on:change="changeFileType">
      <label for="">ASM</label> <br>
      
    </form>
  </div>
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
  .file-controls{
    text-align: left;
  }

</style>
