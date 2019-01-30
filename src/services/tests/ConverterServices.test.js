import {expect} from 'chai';
import {convertToBase} from '../ConverterServices';


describe('ConverterServices.js',()=>{
  describe('ConvertToBase()',()=>{
    
    it('should convert a single numerical string to target base', ()=>{
      const base10 = "23";
      const binary = "10111";

      let result = convertToBase(10,2,base10);
      expect(result).to.equal(binary);
    });

  });

});