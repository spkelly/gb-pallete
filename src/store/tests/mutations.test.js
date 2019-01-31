import * as types from '../types';
import store from '../index';
import {expect} from 'chai'
const mutations = {
  ...store.modules.File.mutations,
  ...store.modules.Output.mutations,
  ...store.modules.Palette.mutations,
  ...store.modules.Canvas.mutations
}

const state = {
  ...store.modules.File.state,
  ...store.modules.Output.state,
  ...store.modules.Palette.state,
  ...store.modules.Canvas.state
}


describe('Vuex Mutations',()=>{

  describe('SET_FILE_TYPE',()=>{
    it('file type should be set to given file type',()=>{
      let fileType = "ASM";
      mutations[types.SET_FILE_TYPE](state,fileType);
      expect(state.fileType).to.equal(fileType);
    })
  })
  describe('SET_FILE_NAME',()=>{
    it('sets state to given file name',()=>{
      let newName = "aNewFileName";
      mutations[types.SET_FILE_NAME](state, newName);
      expect(state.fileName).to.equal(newName);
    })
  })
  describe('SET_PIXEL_DATA',()=>{
    it('sets state to given pixel data',()=>{
      let pixelData = Array(8).fill(null).map(()=>Array(8).fill(0));
      mutations[types.SET_PIXEL_DATA](state, pixelData);
      expect(state.pixelMatrix).to.equal(pixelData);
    })
  })
  describe('SET_IMAGE_DATA',()=>{
    it('sets state to given Image Data',()=>{

    })
  })
  describe('SET_CONVERTED_PIXEL_DATA',()=>{
    it('sets state to given Converted Data',()=>{})
  })
  describe('SET_SELECTED_PALETTE_VALUE',()=>{
    it('sets state to given Pallete Value',()=>{})
  })
});