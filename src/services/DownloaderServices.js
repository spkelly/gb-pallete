/* 
  Author: Sean Kelly
*/

import {COMMENT_HEADER, LINE_WIDTH, HEX_PREFIX, ASM_PREFIX, VARIABLE_NAME} from './constants';


function download(filename,blob){
  var link = document.createElement('a');
  let objectUrl = URL.createObjectURL(blob);

  link.setAttribute('download',filename);
  link.setAttribute('href',objectUrl);
  link.setAttribute('display', 'none');

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  //cleanup
  URL.revokeObjectURL(objectUrl);
}

export function exportToC(data,name){
  let fileData = generateCFile(data);
  let fileBlob = new Blob(fileData,{type:'text/x-c;charset=utf-8'});
  download(`${name}.h`,fileBlob);
}

export function exportToASM(data,name){
  let fileData = generateASMFile(data);
  let fileBlob = new Blob(fileData,{type:'text/x-asm;charset=utf-8'});
  download(`${name}.inc`,fileBlob);
}
// TODO these functions might be uneeded
function generateASMFile(data){
  // TODO: add asm File generation

  let fileparts = [];
  fileparts.push(generateASMBody(data));
  return fileparts; 
}
function generateCFile(data){
  let fileparts = [];
  fileparts.push(generateCBody(data));
  return fileparts
}

/*
  formats data into a C Header file
*/
function generateCBody(data){
  let textBuffer=COMMENT_HEADER+"/* Start of tile data */\n";
  textBuffer+="const unsigned char "+VARIABLE_NAME+"[] = \n{\n\t"
  let mappedData= data.map((char,index)=>{
    // Adds a newline and tab character to array after the 7th element in data array
    if(index < data.length -1){
      let text = index % LINE_WIDTH != LINE_WIDTH-1?
        HEX_PREFIX+char+',':
        HEX_PREFIX+char+','+"\n\t";

      return(text);
    }
    // does not add comma to last element
    return HEX_PREFIX+char +"\n";
    
  })

  let dataString = mappedData.join('');
  textBuffer += dataString;
  return textBuffer + "};\n";
}

function generateASMBody(data){
  let textBuffer=COMMENT_HEADER+"/* Start of tile data */\n";
  textBuffer += VARIABLE_NAME+"::\n\tDB ";

  let mappedData = data.map((char,index)=>{
    if(index < data.length -1){
      let text = index % LINE_WIDTH != LINE_WIDTH-1?
        ASM_PREFIX+char+',':
        ASM_PREFIX+char+"\n\tDB ";
      return(text);
    }
    return ASM_PREFIX+char +"\n";
  })

  let dataString = mappedData.join('');
  textBuffer += dataString 
  return textBuffer;
}


export function validateFilename(fileName){
  if(checkForIllegalCharacters(fileName)){
    if(fileName.length < 2){
      throw "File name is too short"
    }
    else if(fileName.length > 20){
      throw "File name is too long"
    }
    else{
      return true
    }
  }
  else{
    throw "File name includes illegal characters"
  }
}

function checkForIllegalCharacters(fileName){
  let illegalCharacters = /<|>|;|:/;
  return !illegalCharacters.test(fileName);
}

// function captilizeLetters(string){
//   for(let i = 0;i < string.length; i++){
//     string.ffdsfcharCodeAt(i);
//   }
// }
