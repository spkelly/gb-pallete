import {expect} from 'chai';
import {validateFilename} from '../DownloaderServices';

describe('DownloaderServices.js',()=>{
  describe('validateFilname()',()=>{
    it('should pass a legal fileName',()=>{
      let fileName = "legalfileName";
      let result = validateFilename(fileName);
      expect(result).to.be.true;
    })
  });
});