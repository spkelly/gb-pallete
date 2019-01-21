import { SET_CANVAS, CLEAR_CANVAS, INIT_CANVAS, GET_CANVAS } from "../types";
import {GRID_HEIGHT,GRID_WIDTH} from '../../services/constants';
import {shiftImageLeft,shiftImageRight, redraw, shiftImageUp, shiftImageDown} from '../../services/CanvasServices';
const state = {
  canvas:{}
}

const mutations = {
  [SET_CANVAS](state,canvas){
    state.canvas = canvas;
    state.canvas.width = GRID_HEIGHT;
    state.canvas.height = GRID_WIDTH;
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
    commit(SET_CANVAS,canvas)
  },

  shiftRight({getters,dispatch}){
    let canvas = getters.getCanvas;
    let ctx = canvas.getContext("2d");
    shiftImageRight(ctx);
    dispatch("shiftDataRight");

  },
  shiftLeft({getters,dispatch}){
    let canvas = getters.getCanvas
    let ctx = canvas.getContext("2d");
    shiftImageLeft(ctx);
    dispatch("shiftDataLeft");
    // 
    // shiftImageRight(canvas);
  },
  shiftUp({getters,dispatch}){
    let canvas = getters.getCanvas;
    let ctx = canvas.getContext("2d");
    shiftImageUp(ctx);
    dispatch("shiftDataUp");
  },
  shiftDown({getters,dispatch}){
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