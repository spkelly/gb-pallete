import Canvas from './modules/canvas';
import File from './modules/file';
import Palette from './modules/palette';
import Output from './modules/output';
import {RESET, CLEAR_CANVAS, UPDATE_OUTPUT} from './types';

const store = {
  modules:{
    Canvas,
    File,
    Palette,
    Output
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