<template>
    <div class="buttonHolder">
      <button class="button" @click="reset">clear grid</button>
      <button class="button" @click="download"> generate data</button>
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
  .button {
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