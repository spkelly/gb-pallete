import {convertPixelMatrix} from '../../services/ConverterServices';
import { SET_PIXEL_DATA, SET_IMAGE_DATA, SET_CONVERTED_PIXEL_DATA, GET_CONVERTED_PIXEL_DATA, GET_PIXEL_MATRIX, SHIFT_DATA_LEFT, SHIFT_DATA_RIGHT, SHIFT_DATA_UP, SHIFT_DATA_DOWN, UPDATE_OUTPUT, CONVERT_PIXEL_DATA, RESET_MATRIX } from '../types';


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
  [GET_PIXEL_MATRIX](){
    return state.pixelMatrix
  }
  
}
//TODO: Make initialization of converted pixel data
const actions = {
  [SHIFT_DATA_LEFT]({dispatch,getters}){
    let pixelMatrix = getters.getPixelMatrix;
    for(let row = 0; row < pixelMatrix.length; row ++){
      let firstColumn = pixelMatrix[row].shift();
      pixelMatrix[row].push(firstColumn);
    }

    dispatch("updateOutput",pixelMatrix);
  },
  [SHIFT_DATA_RIGHT]({dispatch,getters}){
    let pixelMatrix = getters.getPixelMatrix;
    for(let row = 0; row < pixelMatrix.length; row ++){
      let lastColumn = pixelMatrix[row].pop();
      pixelMatrix[row].unshift(lastColumn);
    }
    dispatch("updateOutput",pixelMatrix);
  },

  [SHIFT_DATA_UP]({getters,dispatch}){
    let pixelMatrix = getters.getPixelMatrix;
    let firstRow = pixelMatrix.shift();
    pixelMatrix.push(firstRow);
    dispatch("updateOutput",pixelMatrix);
  },

  [SHIFT_DATA_DOWN]({getters,dispatch}){
    let pixelMatrix = getters.getPixelMatrix;
    let temp = pixelMatrix.pop();
    pixelMatrix.unshift(temp);
    dispatch("updateOutput",pixelMatrix);
  },

  [UPDATE_OUTPUT]({commit, getters}, newMatrix){
    
    let canvas = getters.getCanvas;
    let ctx = canvas.getContext("2d");
    let imageData = ctx.getImageData(0,0,500,500);
    
    commit(SET_PIXEL_DATA, newMatrix);
    commit(SET_IMAGE_DATA, imageData);
    // modify currentImageData
  },

  [CONVERT_PIXEL_DATA]({commit,getters}){
    let convertedPixelData = getters.getConvertedPixelData;
    commit((SET_CONVERTED_PIXEL_DATA, convertedPixelData));
  },

  [RESET_MATRIX]({commit}){
    const emptyPixelMatrix = Array(8).fill(null).map(()=>Array(8).fill(0));
    commit(SET_PIXEL_DATA,emptyPixelMatrix);
  }

}



export default{
  state,
  actions,
  mutations,
  getters
}