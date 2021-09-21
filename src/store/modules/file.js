import * as types from '../types';
import { exportToC, exportToASM, validateFilename } from '../../services/DownloaderServices';

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
  },
  [types.GET_FILE_MSG]: state =>{

    let fileSuffix = state.fileType == "C"?'h':'inc';
    return `Are you sure you would like to save file: ${state.fileName}.${fileSuffix}?`;
  }
}

const actions = {
  [types.CHANGE_FILE_NAME](state,fileName){
      state.commit(types.SET_FILE_NAME, fileName)
  },
  [types.CHANGE_FILE_TYPE](state,toggle){
    if(toggle){
      state.commit(types.SET_FILE_TYPE,"ASM");
    }
    else{
      state.commit(types.SET_FILE_TYPE,"C");
    }
  },
  [types.CHECK_FOR_DOWNLOAD]({getters},){
    let {fileName} = getters[types.GET_FILE_INFO];
    return new Promise((resolve)=>{
      validateFilename(fileName);
      resolve();
    })
  },
  [types.DOWNLOAD]({getters}){
    return new Promise((resolve)=>{
      let { fileName, type } = getters[types.GET_FILE_INFO];
      let data = getters[types.GET_CONVERTED_PIXEL_DATA];
      if(type == "C"){
        exportToC(data,fileName)
      }
      else{
        exportToASM(data,fileName)
      }
      resolve();
    }).then(null,(reason)=>{
      console.log('Error in Download: ',reason);
    });
  }
}


export default{
  state,
  mutations,
  getters,
  actions
}