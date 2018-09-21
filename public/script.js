var canvas = document.getElementsByTagName("canvas")[0];
var ctx = canvas.getContext("2d");

let pixelCount = 8;

canvas.width = 400;
canvas.height = 400;

pixelSize = canvas.width/pixelCount;

$("canvas").mousedown((e)=>{

  let position = getMousePosition(e);
  console.table(position);
})

function drawGrid(){ 
  ctx.lineWidth = 1;


  for(var x = 0; x <= canvas.width; x+= pixelSize){
    ctx.moveTo(x,0);
    ctx.lineTo(x,canvas.height);
  }

  for (let y = 0; y <= canvas.height; y+= pixelSize) {
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
  }
  ctx.stroke();


}

function getMousePosition(e){
  let target = e.target;

  return{
    x: e.pageX - target.offsetLeft,
    y: e.pageY - target.offsetTop
  }
}

drawGrid();