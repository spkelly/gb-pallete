/* 
  Author: Sean Kelly
*/

/* 
  Converts a 2d array of pixels to a array of hexidecimals
  params
    pixelMatrix: a 2d array of pixelData (numbers between 0 - 3)
*/
export function convertPixelMatrix(pixelMatrix){

  let dataArray = [];
  pixelMatrix.forEach( pixelRow => {
    let hiBits = '';
    let loBits = hiBits;

    pixelRow.forEach( pixel => {
      
      let binary = convertToBase(10, 2, pixel);
      
      if(binary.length < 2 ){
        binary = padBinary(binary)
      }
      hiBits+=binary[0];
      loBits+=binary[1];
    });
    let numbers = convertNumbers(2, 16, loBits, hiBits);
    dataArray.push(numbers.flat(2));
  });
  return padStrings(dataArray.flat(2),2);
}

/* 
  Converts number to target base 
  params
    current: current base
    target: target base
    number: numerical string to convert
*/
export function convertToBase(base, target, number){
  return parseInt(number, base).toString(target);
}

/* 
  Converts array of numbers to a target base 
  params
    current: current base
    target: target base
    numbers: single or array of numbers
*/
function convertNumbers(current,target,...numbers){
  if (numbers.length == 1) {
    return convertToBase(current,target,numbers[0]);
    }

  return numbers.map(number =>{
    return convertToBase(current,target,number);
  });
}

/* 
  Pads leading 0 onto binary 
  params
    binary: binary to be padded
*/ 
function padBinary(binary){
  return '0' + binary
}

function padStrings(strings,constraint){
  return strings.map((string)=>{
    if(string.length < constraint){
      return '0'+string;
    }
    return string;
  });
}
