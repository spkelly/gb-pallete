const store = {
  state:{
    pixelMatrix: [],
    canvas:{},
    clearedCanvas:{},
    currentImageData:{}
  },
  mutations: {
    //TODO: Clean this up
    updateMatrix(state, newMatrix){
      state.pixelMatrix = newMatrix;
      // modify currentImageData
      state.currentImageData = state.canvas.getContext("2d").getImageData(0,0,500,500);
    },

    setCanvas(state,canvas){
      state.canvas = canvas;
      state.canvas.width = 500;
      state.canvas.height = 500;
    },

    setClearedCanvas(state,imageData){
      state.clearedCanvas = imageData
    },

    updateCanvas(state,imageData){
      state.canvas.getContext("2d").putImageData(imageData,0,0);
      state.currentImageData = imageData;
    },

  },
  actions:{
    resetMatrix({commit}){
      const emptyTileData = Array(8).fill(null).map(()=>Array(8).fill(0));
      commit("updateMatrix",emptyTileData);
    },

    initializeCanvas({commit},canvas){
      commit("setCanvas",canvas);
      commit("setClearedCanvas",canvas.getContext("2d").getImageData(0,0,100,100));
    },

    clearGrid({commit,state}){
      const emptyTileData = Array(8).fill(null).map(()=>Array(8).fill(0));
      commit("updateMatrix",emptyTileData);
      commit("updateCanvas",state.clearedCanvas);
    }
  }
};

export default store;