import {convertPixelMatrix} from '../../services/ConverterServices';


    //TODO: initialize convertedpixelData so its not just a bunch of 0s
const state = {
  convertedPixelData:["00","00","00","00","00","00","00","00","00","00","00","00","00","00","00","00"],
  imageData:{},
  pixelMatrix: [],
}

const mutations = {
  setPixelMatrix(state, newMatrix){
    state.pixelMatrix = newMatrix;
  },

  setImageData(state, newImageData){
    state.imageData = newImageData;
  },


}

const getters = {
  getConvertedPixelData(state){
    return convertPixelMatrix(state.pixelMatrix);
  }
  
}
//TODO: Make initialization of converted pixel data
const actions = {
  //TODO: Rename to updateOutput
  updateOutput({commit, getters}, newMatrix){
    commit("setPixelMatrix",newMatrix);
    let canvas = getters.getCanvas;
    let ctx = canvas.getContext("2d");
    let imageData = ctx.getImageData(0,0,500,500);
    console.log(imageData);
    commit("setImageData",imageData);
    // modify currentImageData
  },
  convertPixelMatrix({commit,getters}){
    let convertedPixelData = getters.getConvertedPixelData;
    commit(("setConvertedPixelData",convertedPixelData));
  },
  resetMatrix({commit}){
    const emptyTileData = Array(8).fill(null).map(()=>Array(8).fill(0));
    commit("updateMatrix",emptyTileData);
  },
}



export default{
  state,
  actions,
  mutations,
  getters
}