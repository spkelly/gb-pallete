import * as types from '../types';

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
  }
}


export default{
  state,
  mutations,
  actions
}