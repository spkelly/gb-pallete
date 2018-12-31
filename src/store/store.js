



const store = {
  state:{
    pixelMatrix: []
  },
  mutations: {
    updateMatrix(state, newMatrix){
      state.pixelMatrix = newMatrix;
    },
  },
  actions:{
    resetMatrix({commit}){
      const emptyTileData = Array(8).fill(null).map(()=>Array(8).fill(0));
      commit("updateMatrix",emptyTileData);
    }
  }
};

export default store;