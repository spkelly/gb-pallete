import { SET_SELECTED_PALETTE_VALUE, SET_SELECTED_COLOR } from "../types";

const state = {
  selectedColor:'#113711',
  selectedPalleteValue:3
}

const actions = {
  [SET_SELECTED_COLOR](state,newColor){
    state.selectedColor = newColor;
  },

  [SET_SELECTED_PALETTE_VALUE](state,newValue){
    state.selectedPalleteValue = newValue;
  },

  
}

const mutations = {
  changeColor({commit},{color,index}){
    commit(SET_SELECTED_COLOR, color);
    commit(SET_SELECTED_PALETTE_VALUE, index);
  }
}


export default {
  state, 
  actions, 
  mutations
}