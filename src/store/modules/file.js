import * as types from '../types';
import { exportToC, exportToASM } from '../../services/DownloaderServices';

const state = {
  fileName:"TileData",
  fileType:"C"
}


const mutations = {
  [types.SET_FILE_TYPE] (state, newFileType){
    state.fileType = newFileType;
  },

  [types.SET_FILE_NAME] (state, newFileName){
    state.fileName = newFileName;
  }
}

const getters = {
  [types.GET_FILE_INFO]: state =>{
    return {
      fileName:state.fileName,
      type:state.fileType
    }
  }
}

const actions = {
  [types.CHANGE_FILE_NAME](state,fileName){
    if(fileName.length > 3){
      state.commit(types.SET_FILE_NAME, fileName)
    }
  },
  [types.CHANGE_FILE_TYPE](state,toggle){
    if(toggle){
      state.commit(types.SET_FILE_TYPE,"ASM");
    }
    else{
      state.commit(types.SET_FILE_TYPE,"C");
    }
  },
  [types.DOWNLOAD]({getters}){
    let fileInfo = getters[types.GET_FILE_INFO];
    let data = getters[types.GET_CONVERTED_PIXEL_DATA];
    if(fileInfo.fileType == "C"){
      exportToC(data,fileInfo.fileName)
    }
    else{
      exportToASM(data,fileInfo.fileName)
    }
  }
}


export default{
  state,
  mutations,
  getters,
  actions
}