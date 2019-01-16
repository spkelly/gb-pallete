const state = {
  canvas:{}
}

const mutations = {
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
}

const getters = {
  getCanvas(state){
    return state.canvas
  },
  getCanvasContext(state){
    return state.canvas.getContext("2d");
  },
  getImageData(state){
    let imageData = state.canvas.getContext("2d").getImageData(0,0,500,500);
    return imageData;
  }
}

const actions = {
  clearCanvas({getters}){
    let ctx = getters.getCanvas.getContext("2d");
    ctx.clearRect(0,0,state.canvas.width, state.canvas.height);
  },
  initializeCanvas({commit},canvas){
    commit("setCanvas",canvas);
    commit("setClearedCanvas",canvas.getContext("2d").getImageData(0,0,100,100));
  },
}


export default {
  state,
  actions,
  mutations,
  getters
}