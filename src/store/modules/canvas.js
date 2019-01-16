import { SET_CANVAS, CLEAR_CANVAS, INIT_CANVAS, GET_CANVAS } from "../types";

const state = {
  canvas:{}
}

const mutations = {
  [SET_CANVAS](state,canvas){
    state.canvas = canvas;
    state.canvas.width = 500;
    state.canvas.height = 500;
  }
}

const getters = {
  [GET_CANVAS](state){
    return state.canvas
  }
}

const actions = {
  [CLEAR_CANVAS]({getters}){
    let ctx = getters.getCanvas.getContext("2d");
    ctx.clearRect(0,0,state.canvas.width, state.canvas.height);
  },

  [INIT_CANVAS]({commit},canvas){
    commit(SET_CANVAS,canvas);
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}