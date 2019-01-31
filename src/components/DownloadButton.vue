<template>
    <div class="buttonHolder">
      <button class="button" @click="displayModal(fileMessage,false)"> Download</button>
      <button class="button" @click="reset">Clear</button>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import { RESET, DOWNLOAD } from '../store/types';
export default {
  name: "DownloadButton",
  computed:{
    ...mapGetters({
      fileMessage: 'getFileMsg'
    })
  },
  methods:{
    ...mapActions({
      download: DOWNLOAD,
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