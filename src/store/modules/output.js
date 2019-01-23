import {convertPixelMatrix} from '../../services/ConverterServices';
import * as types from '../types';


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
  [types.SET_PIXEL_DATA](state, newMatrix){
    state.pixelMatrix = newMatrix;
  },

  [types.SET_IMAGE_DATA](state, newImageData){
    state.imageData = newImageData;
  },
  
  [types.SET_CONVERTED_PIXEL_DATA](state, pixelData){
    state.convertedPixelData = pixelData;
  }
}

const getters = {
  [types.GET_CONVERTED_PIXEL_DATA]: state => convertPixelMatrix(state.pixelMatrix),
  [types.GET_PIXEL_MATRIX]: state => state.pixelMatrix
}

//TODO: Make initialization of converted pixel data
const actions = {
  [types.SHIFT_DATA_LEFT]({dispatch,getters}){
    let pixelMatrix = getters.getPixelMatrix;
    for(let row = 0; row < pixelMatrix.length; row ++){
      let firstColumn = pixelMatrix[row].shift();
      pixelMatrix[row].push(firstColumn);
    }

    dispatch("updateOutput",pixelMatrix);
  },
  [types.SHIFT_DATA_RIGHT]({dispatch,getters}){
    let pixelMatrix = getters.getPixelMatrix;
    for(let row = 0; row < pixelMatrix.length; row ++){
      let lastColumn = pixelMatrix[row].pop();
      pixelMatrix[row].unshift(lastColumn);
    }
    dispatch("updateOutput",pixelMatrix);
  },

  [types.SHIFT_DATA_UP]({getters,dispatch}){
    let pixelMatrix = getters.getPixelMatrix;
    let firstRow = pixelMatrix.shift();
    pixelMatrix.push(firstRow);
    dispatch("updateOutput",pixelMatrix);
  },

  [types.SHIFT_DATA_DOWN]({getters,dispatch}){
    let pixelMatrix = getters.getPixelMatrix;
    let temp = pixelMatrix.pop();
    pixelMatrix.unshift(temp);
    dispatch("updateOutput",pixelMatrix);
  },

  [types.UPDATE_OUTPUT]({commit, getters}, newMatrix){
    
    let canvas = getters.getCanvas;
    let ctx = canvas.getContext("2d");
    let imageData = ctx.getImageData(0,0,500,500);
    
    commit(types.SET_PIXEL_DATA, newMatrix);
    commit(types.SET_IMAGE_DATA, imageData);
    // modify currentImageData
  },

  [types.CONVERT_PIXEL_DATA]({commit,getters}){
    let convertedPixelData = getters.getConvertedPixelData;
    commit((types.SET_CONVERTED_PIXEL_DATA, convertedPixelData));
  },

  [types.RESET_MATRIX]({commit}){
    const emptyPixelMatrix = Array(8).fill(null).map(()=>Array(8).fill(0));
    commit(types.SET_PIXEL_DATA,emptyPixelMatrix);
  }

}



export default{
  state,
  actions,
  mutations,
  getters
}