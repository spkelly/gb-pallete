import * as types from '../types';

const state = {
  modalVisible: false,
  modalMsg: '',
  isError: false
}


const mutations = {
  [types.TOGGLE_MODAL](state, condition){
    state.modalVisible = condition;
  },
  [types.SET_MODAL_MESSAGE](state,msg){
    state.modalMsg = msg;
  },
  [types.SET_ERROR](state, isError){
    state.isError = isError
  }
}


const actions = {
  [types.DISPLAY_MODAL]({commit},{message,isError}){
    commit(types.SET_MODAL_MESSAGE,message);
    commit(types.SET_ERROR,isError);
    commit(types.TOGGLE_MODAL,true);
  },
  [types.HIDE_MODAL]({commit}){
    commit(types.TOGGLE_MODAL,false);
  }
}


export default{
  state,
  mutations,
  actions
}