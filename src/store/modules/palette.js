const state = {
  selectedColor:'#113711',
  selectedPalleteValue:3
}

const actions = {
  setSelectedColor(state,newColor){
    state.selectedColor = newColor;
  },

  setSelectedPallateValue(state,newValue){
    state.selectedPalleteValue = newValue;
  },

  
}

const mutations = {
  changeColor({commit},{color,index}){
    commit("setSelectedColor", color);
    commit("setSelectedPallateValue", index);
  }
}


export default {
  state, 
  actions, 
  mutations
}