import {convertPixelMatrix} from '../../services/ConverterServices';
import { SET_PIXEL_DATA, SET_IMAGE_DATA, SET_CONVERTED_PIXEL_DATA, GET_CONVERTED_PIXEL_DATA } from '../types';


    //TODO: initialize convertedpixelData so its not just a bunch of 0s
const state = {
  convertedPixelData:["00","00","00","00",
                      "00","00","00","00",
                      "00","00","00","00",
                      "00","00","00","00"],
  imageData:{},
  pixelMatrix: [],
}

const mutations = {
  [SET_PIXEL_DATA](state, newMatrix){
    state.pixelMatrix = newMatrix;
  },

  [SET_IMAGE_DATA](state, newImageData){
    state.imageData = newImageData;
  },
  
  [SET_CONVERTED_PIXEL_DATA](state, pixelData){
    state.convertedPixelData = pixelData;
  }
}

const getters = {
  [GET_CONVERTED_PIXEL_DATA](state){
    return convertPixelMatrix(state.pixelMatrix);
  },
  getPixelMatrix(){
    return state.pixelMatrix
  }
  
}
//TODO: Make initialization of converted pixel data
const actions = {
  shiftDataLeft({dispatch,getters}){
    let pixelMatrix = getters.getPixelMatrix;
    for(let row = 0; row < pixelMatrix.length; row ++){
      let firstColumn = pixelMatrix[row].shift();
      pixelMatrix[row].push(firstColumn);
    }

    dispatch("updateOutput",pixelMatrix);
  },
  shiftDataRight({dispatch,getters}){
    let pixelMatrix = getters.getPixelMatrix;
    for(let row = 0; row < pixelMatrix.length; row ++){
      let lastColumn = pixelMatrix[row].pop();
      pixelMatrix[row].unshift(lastColumn);
    }
    dispatch("updateOutput",pixelMatrix);
  },

  shiftDataUp({getters,dispatch}){
    let pixelMatrix = getters.getPixelMatrix;
    let firstRow = pixelMatrix.shift();
    pixelMatrix.push(firstRow);
    dispatch("updateOutput",pixelMatrix);
  },

  shiftDataDown({getters,dispatch}){
    let pixelMatrix = getters.getPixelMatrix;
    let temp = pixelMatrix.pop();
    pixelMatrix.unshift(temp);
    dispatch("updateOutput",pixelMatrix);
  },
  //TODO: Rename to updateOutput
  updateOutput({commit, getters}, newMatrix){
    
    let canvas = getters.getCanvas;
    let ctx = canvas.getContext("2d");
    let imageData = ctx.getImageData(0,0,500,500);
    
    commit(SET_PIXEL_DATA, newMatrix);
    commit(SET_IMAGE_DATA, imageData);
    // modify currentImageData
  },

  convertPixelMatrix({commit,getters}){
    let convertedPixelData = getters.getConvertedPixelData;
    commit((SET_CONVERTED_PIXEL_DATA, convertedPixelData));
  },

  resetMatrix({commit}){
    const emptyPixelMatrix = Array(8).fill(null).map(()=>Array(8).fill(0));
    commit(SET_PIXEL_DATA,emptyPixelMatrix);
  },

}



export default{
  state,
  actions,
  mutations,
  getters
}