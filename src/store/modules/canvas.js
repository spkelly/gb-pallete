import * as types from "../types";
import {GRID_HEIGHT,GRID_WIDTH} from '../../services/constants';
import {shiftImageLeft,shiftImageRight, shiftImageUp, shiftImageDown} from '../../services/CanvasServices';
const state = {
  canvas:{}
}

const mutations = {
  [types.SET_CANVAS](state,canvas){
    state.canvas = canvas;
    state.canvas.width = GRID_HEIGHT;
    state.canvas.height = GRID_WIDTH;
  }
}

const getters = {
  [types.GET_CANVAS]: state => state.canvas
}

const actions = {
  [types.CLEAR_CANVAS]({getters}){
    let ctx = getters.getCanvas.getContext("2d");
    ctx.clearRect(0,0,state.canvas.width, state.canvas.height);
  },

  [types.INIT_CANVAS]({commit},canvas){
    commit(types.SET_CANVAS,canvas)
  },

  [types.SHIFT_CANVAS_RIGHT]({getters,dispatch}){
    let canvas = getters.getCanvas;
    let ctx = canvas.getContext("2d");
    shiftImageRight(ctx);
    dispatch("shiftDataRight");

  },
  [types.SHIFT_CANVAS_LEFT]({getters,dispatch}){
    let canvas = getters.getCanvas
    let ctx = canvas.getContext("2d");
    shiftImageLeft(ctx);
    dispatch("shiftDataLeft");
    // 
    // shiftImageRight(canvas);
  },
  [types.SHIFT_CANVAS_UP]({getters,dispatch}){
    let canvas = getters.getCanvas;
    let ctx = canvas.getContext("2d");
    shiftImageUp(ctx);
    dispatch("shiftDataUp");
  },
  [types.SHIFT_CANVAS_DOWN]({getters,dispatch}){
    let canvas = getters.getCanvas;
    let ctx = canvas.getContext("2d");
    shiftImageDown(ctx);
    dispatch("shiftDataDown");    
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}