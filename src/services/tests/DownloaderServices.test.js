var expect = require("chai").expect;
var DownloaderServices = require('../DownloaderServices');

describe('ConverterServices.js',()=>{
  describe('validateFilname()',()=>{
    it('should pass a legal fileName',()=>{
      let fileName = "legalfileName";
      let result = DownloaderServices.validateFilename(fileName);
      expect(result).to.be.true();
    })
  });
});