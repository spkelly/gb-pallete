import {SET_FILE_TYPE,SET_FILE_NAME} from '../types';

const state = {
  fileName:"TileData",
  fileType:"C"
}


const mutations = {
  [SET_FILE_TYPE] (state, newFileType){
    state.fileType = newFileType;
  },

  [SET_FILE_NAME](state, newFileName){
    state.fileName = newFileName;
  }
}

const actions = {
  changeFileName(state,fileName){
    if(fileName.length > 3){
      state.commit(SET_FILE_NAME, fileName)
    }
  }
}


export default{
  state,
  mutations,
  actions
}