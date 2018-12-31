

const store = {
  state:{
    pixelMatrix: [],
    canvas:{},
    clearedCanvas:{}
  },
  mutations: {
    updateMatrix(state, newMatrix){
      state.pixelMatrix = newMatrix;
      console.log(state.canvas.getContext("2d").getImageData(0,0,500,500));
    },
    setCanvas(state,canvas){
      state.canvas = canvas;
    },

    setClearedCanvas(state,imageData){
      state.clearedCanvas = imageData
    },

    updateCanvas(state,imageData){
      state.canvas.getContext("2d").putImageData(imageData,0,0);
    },

  },
  actions:{
    resetMatrix({commit}){
      const emptyTileData = Array(8).fill(null).map(()=>Array(8).fill(0));
      commit("updateMatrix",emptyTileData);
    },

    initializeCanvas({commit},canvas){
      commit("setCanvas",canvas);
      commit("setClearedCanvas",canvas.getContext("2d").getImageData(0,0,500,500));
    },

    clearGrid({commit,state}){
      console.log(state);
      const emptyTileData = Array(8).fill(null).map(()=>Array(8).fill(0));
      commit("updateMatrix",emptyTileData);
      commit("updateCanvas",state.clearedCanvas);
    }
  }
};

export default store;