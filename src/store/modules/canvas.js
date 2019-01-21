import { SET_CANVAS, CLEAR_CANVAS, INIT_CANVAS, GET_CANVAS, SHIFT_CANVAS_RIGHT, SHIFT_CANVAS_LEFT, SHIFT_CANVAS_UP, SHIFT_CANVAS_DOWN } from "../types";
import {GRID_HEIGHT,GRID_WIDTH} from '../../services/constants';
import {shiftImageLeft,shiftImageRight, shiftImageUp, shiftImageDown} from '../../services/CanvasServices';
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

  [SHIFT_CANVAS_RIGHT]({getters,dispatch}){
    let canvas = getters.getCanvas;
    let ctx = canvas.getContext("2d");
    shiftImageRight(ctx);
    dispatch("shiftDataRight");

  },
  [SHIFT_CANVAS_LEFT]({getters,dispatch}){
    let canvas = getters.getCanvas
    let ctx = canvas.getContext("2d");
    shiftImageLeft(ctx);
    dispatch("shiftDataLeft");
    // 
    // shiftImageRight(canvas);
  },
  [SHIFT_CANVAS_UP]({getters,dispatch}){
    let canvas = getters.getCanvas;
    let ctx = canvas.getContext("2d");
    shiftImageUp(ctx);
    dispatch("shiftDataUp");
  },
  [SHIFT_CANVAS_DOWN]({getters,dispatch}){
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