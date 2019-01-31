import {expect} from 'chai';
import {validateFilename} from '../DownloaderServices';

describe('DownloaderServices.js',()=>{
  describe('validateFilname()',()=>{
    it('should return true for a legal file name',()=>{
      let fileName = "legalfileName";
      let result = validateFilename(fileName);
      expect(result).to.be.true;
    });

    it('should return false for an illegal file name',()=>{
      let fileName = "<bad>filename";
      let result = validateFilename(fileName);
      expect(result).to.be.false;
    });

    it('should return false for an empty file name',()=>{
      let fileName = '';
      let result = validateFilename(fileName);
      expect(result).to.be.true;
    });
  });
});