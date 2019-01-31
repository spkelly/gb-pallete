import Canvas from './modules/canvas';
import File from './modules/file';
import Palette from './modules/palette';
import Output from './modules/output';
import modal from './modules/modal';
import {RESET, CLEAR_CANVAS, UPDATE_OUTPUT} from './types';

const store = {
  modules:{
    Canvas,
    modal,
    File,
    Palette,
    Output
  },

  mutations:{

  },

  
  actions:{
    [RESET]({dispatch}){
      const emptyTileData = Array(8).fill(null).map(()=>Array(8).fill(0));     
      dispatch(CLEAR_CANVAS);
      dispatch(UPDATE_OUTPUT, emptyTileData);
    }
  }
};

export default store;