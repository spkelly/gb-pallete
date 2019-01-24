<template>
  <div>
    <div class="buttonHolder">
      <div class="button" @click="reset">
        clear grid
      </div>
      <div class="button" @click="download">
        generate data
      </div>
    </div>
    
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import { RESET, DOWNLOAD } from '../store/types';
export default {
  name: "DownloadButton",

  methods:{
    ...mapActions({
      download: DOWNLOAD,
      reset: RESET
    })
  }
}

</script>

<style lang="scss">
@import '../scss/main';

  .buttonHolder {
    margin-top:20px;
  }
  .button {
    display: inline;
    cursor: pointer;
    font-size: 32px;
    color: $color__dark__pink;
    background-color: $color__pink;
    padding: 10px;
    margin: 20px;
  }
</style>