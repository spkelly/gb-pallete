<template>
  <section class="output-section">
    <div class="section__header">
      <h2 class="header__output">Pixel Data 
        <button class="data__copy" @click="copyData()">
        <img src="../assets/copy.svg" alt="Copy data" srcset="" title="Copy data"></button>
        </h2>
    </div>
    <div class="data__output">
      <p class="data__output-row" v-for="(data, index) in convertedPixelData" v-bind:key="index">
        ${{ data }}
      </p>
    </div>
  </section>
</template>


<script>
// import FileControls from './FileControls.vue';

export default {
  name: "DataOutput",
  computed: {
    convertedPixelData() {
      return this.$store.getters.getConvertedPixelData
    }
  },
  methods: {
    copyData() {
      const formatedData = this.$store.getters.getConvertedPixelData.map(e => "$" + e)
      navigator.clipboard.writeText(formatedData);
    },
  }
  //   components:{
  //   FileControls
  // }

}

</script>


<style lang="scss">
@import '../scss/main';

.output-section {
  margin-top: 20px;
}

.header__output {
  font-size: 2rem;
  width: 108px;
  background-color: $color__pink;
  color: $color__dark__pink;
  padding: 10px;
  font-weight: 400;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.data__output {
  @include border;
  display: flex;
  flex-wrap: wrap;
  max-width: 100px;
  height: 252px;
  padding: 10px;
  font-size: 30px;
  text-align: left;
  justify-content: space-between;
}

.data__output-row {
  flex: 1 0 50%;
  text-align: center;
  margin: 0;
  display: block;
}

.data__copy {
  border: none;
  width: 20px;
  background-color: #A1295E;
}

.data__copy:hover {
  cursor: pointer;
}

</style>