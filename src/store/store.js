import {convertPixelMatrix} from '../services/ConverterServices';


const store = {
  state:{
    pixelMatrix: [],
    fileType:0,
    canvas:{},
    clearedCanvas:{},
    currentImageData:{},
    convertedPixelData:["00","00","00","00","00","00","00","00","00","00","00","00","00","00","00","00"]
  },
  mutations: {
    //TODO: Clean this up
    updateMatrix(state, newMatrix){
      state.pixelMatrix = newMatrix;
      // modify currentImageData
      state.currentImageData = state.canvas.getContext("2d").getImageData(0,0,500,500);
    },

    clearCanvas(state){
      let ctx = state.canvas.getContext("2d");
      ctx.clearRect(0,0,state.canvas.width, state.canvas.height);
    },

    setCanvas(state,canvas){
      state.canvas = canvas;
      state.canvas.width = 500;
      state.canvas.height = 500;
    },
    convertPixelMatrix(state){
      state.convertedPixelData = convertPixelMatrix(state.pixelMatrix);
    },

    setClearedCanvas(state,imageData){
      state.clearedCanvas = imageData 
    },

    updateCanvas(state,imageData){
      state.canvas.getContext("2d").putImageData(imageData,0,0);
      state.currentImageData = imageData;
    },

    changeFileType(state,fileType){
      state.fileType = !state.fileType;
    }

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

    clearGrid({commit}){
      const emptyTileData = Array(8).fill(null).map(()=>Array(8).fill(0));     
      commit("clearCanvas");
      commit("updateMatrix",emptyTileData);
    }
  }
};

export default store;