import { SET_SELECTED_PALETTE_VALUE, SET_SELECTED_COLOR, CHANGE_COLOR } from "../types";

const state = {
  selectedColor:'#113711',
  selectedPalleteValue:3
}

const mutations = {
  [SET_SELECTED_COLOR](state,newColor){
    state.selectedColor = newColor;
  },

  [SET_SELECTED_PALETTE_VALUE](state,newValue){
    state.selectedPalleteValue = newValue;
  },

  
}

const actions = {
  [CHANGE_COLOR]({commit},{color,index}){
    commit(SET_SELECTED_COLOR, color);
    commit(SET_SELECTED_PALETTE_VALUE, index);
  }
}


export default {
  state, 
  actions, 
  mutations
}