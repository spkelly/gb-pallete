import Canvas from './modules/canvas';
import File from './modules/file';
import Palette from './modules/palette';
import Output from './modules/output';
const store = {
  modules:{
    Canvas,
    File,
    Palette,
    Output
  },
  actions:{
    reset({dispatch}){
      const emptyTileData = Array(8).fill(null).map(()=>Array(8).fill(0));     
      dispatch("clearCanvas");
      dispatch("updateOutput",emptyTileData);
    }
  }
};

export default store;