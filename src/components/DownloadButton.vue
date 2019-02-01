<template>
    <div class="buttonHolder">
      <button class="button" @click="handleClick"> Download</button>
      <button class="button" @click="reset">Clear</button>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import { RESET, DOWNLOAD,CHECK_FOR_DOWNLOAD } from '../store/types';
export default {
  name: "DownloadButton",
  computed:{
    ...mapGetters({
      fileMessage: 'getFileMsg'
    })
  },
  methods:{
    handleClick(){
      this.checkForDownload().then(()=>{
        console.log('passed')
        this.displayModal({message:this.fileMessage,isError:false})
      },
      (err)=>{
        console.log('failed');
        this.displayModal({message:err,isError:true});
      })
    },
    ...mapActions({
      download: DOWNLOAD,
      checkForDownload: CHECK_FOR_DOWNLOAD,
      reset: RESET,
      displayModal: 'displayModal'
    })
  }
}

</script>

<style lang="scss">
@import '../scss/main';
  .button {
    border-radius: 10px;
    border: none;
    display:inline-block;
    cursor: pointer;
    font-size: 32px;
    color: $color__dark__pink;
    background-color: $color__pink;
    margin: 10px;
    padding: 10px;
  }
</style>