var canvas = document.getElementsByTagName("canvas")[0];
var ctx = canvas.getContext("2d");
var isHeld = false;
var prevCoords = {};

const PIXEL_COUNT = 16;
const GRID_WIDTH = 400;
const GRID_HEIGHT = 400;
const PIXEL_SIZE = GRID_WIDTH/PIXEL_COUNT;


canvas.width = GRID_WIDTH;
canvas.height = GRID_HEIGHT;



$("canvas").mousedown((e)=>{
  e.preventDefault();
  isHeld = true
  checkForDraw(e);
})

$("canvas").mouseup((e)=>{
  e.preventDefault();
  isHeld = false;
})

$("canvas").mousemove((e)=>{
  if(isHeld){
    checkForDraw(e)
  }
})



  //TODO: use this for exporting
function checkForDraw(e){
  let position = getMousePosition(e);
  let coords = getPixelCoordinates(position);
  if(!_.isEqual(coords,prevCoords)){
    draw(coords);
  }
  prevCoords = coords;
}

function draw(coords){
  console.log("Drawing", coords, prevCoords);
  let offset = getPixelOffset(coords);
  fillCell(offset);
}

function fillCell(offset, color){
  ctx.fillStyle = "#113711";
  ctx.fillRect(offset.x,offset.y,PIXEL_SIZE,PIXEL_SIZE);
  ctx.stroke();
}

function drawGrid(){ 
  ctx.lineWidth = 1;


  for(var x = 0; x <= canvas.width; x+= PIXEL_SIZE){
    ctx.moveTo(x,0);
    ctx.lineTo(x,canvas.height);
    ctx.stroke();
  }

  for (let y = 0; y <= canvas.height; y+= PIXEL_SIZE) {
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
  }
  ctx.stroke();


}

function getPixelOffset(coords){
  return {
    x:coords.col * PIXEL_SIZE,
    y:coords.row * PIXEL_SIZE
  }
}

function getPixelCoordinates(MousePos){
  return{
    col: Math.floor(MousePos.x/PIXEL_SIZE),
    row: Math.floor(MousePos.y/PIXEL_SIZE)
  }
}



function getMousePosition(e){
  let target = e.target;

  return{
    x: e.pageX - target.offsetLeft,
    y: e.pageY - target.offsetTop
  }
}


drawGrid();