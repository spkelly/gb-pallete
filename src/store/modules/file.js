const state = {
  fileName:"TileData",
  fileType:"C"
}


const actions = {
  setFileType(state, newFileType){
    state.fileType = newFileType;
  },

  setFileName(state, newFileName){
    state.fileName = newFileName;
  }
}

const mutations = {
  changeFileName(state,fileName){
    if(fileName.length > 3){
      state.commit('setFileName', fileName)
    }
  }
}


export default{
  state,
  mutations,
  actions
}