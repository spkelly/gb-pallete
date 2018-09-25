const PIXEL_COUNT = 8;
const GRID_WIDTH = 500;
const GRID_HEIGHT = 500;
const PIXEL_SIZE = GRID_WIDTH/PIXEL_COUNT;

var canvas = document.getElementsByTagName("canvas")[0];
var ctx = canvas.getContext("2d");
var isHeld = false;
var prevCoords = {};


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

$("canvas").mouseleave((e)=>{
  isHeld = false;
});

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
  canvas.width = GRID_WIDTH;
  canvas.height = GRID_HEIGHT;

  ctx.lineWidth = 1;
  ctx.strokeStyle = "#ffffff25";
  ctx.setLineDash([4,4]);


  for(var x = 0; x <= GRID_WIDTH; x+= PIXEL_SIZE){
    ctx.moveTo(x,0);
    ctx.lineTo(x,GRID_HEIGHT);
    ctx.stroke();
  }

  for (let y = 0; y <= GRID_HEIGHT; y+= PIXEL_SIZE) {
    ctx.moveTo(0, y);
    ctx.lineTo(GRID_WIDTH, y);
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