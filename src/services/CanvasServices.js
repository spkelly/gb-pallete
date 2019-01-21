import {PIXEL_SIZE,GRID_HEIGHT,GRID_WIDTH} from './constants';

export function getMousePosition(canvas,e){
  let canvasRect = canvas.getBoundingClientRect();
  console.log("rect: ",canvasRect);
  console.log("client X: ",e.clientX,"client Y:",e.clientY);
  console.log("mouse X: ",e.clientX - canvasRect.x,"mouse Y:",e.clientY - canvasRect.y);

  return{
    x: e.clientX - canvasRect.x,
    y: e.clientY - canvasRect.y
  }
}

export function getPixelCoordinates(MousePos){
    console.log(MousePos);
    console.log("row",MousePos.y+"/"+PIXEL_SIZE + " = " ,Math.floor(MousePos.y/PIXEL_SIZE))
  return{
    col: Math.floor(MousePos.x/PIXEL_SIZE),
    row: Math.floor(MousePos.y/PIXEL_SIZE)
  }
}

export function getPixelOffset(coords){
  return {
    x:coords.col * PIXEL_SIZE,
    y:coords.row * PIXEL_SIZE
  }
}

export function logger(msg){
  console.log(msg);
}

export function shiftImageUp(ctx){
  let wrap_data = ctx.getImageData(0,0,GRID_WIDTH,PIXEL_SIZE);
  let remaining_data = ctx.getImageData(0,PIXEL_SIZE,GRID_WIDTH,GRID_HEIGHT-PIXEL_SIZE);
  ctx.clearRect(0,0,GRID_WIDTH,GRID_HEIGHT);
  ctx.putImageData(remaining_data,0,0);
  ctx.putImageData(wrap_data,0,GRID_HEIGHT-PIXEL_SIZE);
}

export function shiftImageDown(ctx){
  let wrap_data = ctx.getImageData(0,GRID_HEIGHT-PIXEL_SIZE,GRID_WIDTH,PIXEL_SIZE);
  let remaining_data = ctx.getImageData(0,0,GRID_WIDTH,GRID_HEIGHT-PIXEL_SIZE);
  ctx.clearRect(0,0,GRID_WIDTH,GRID_HEIGHT);
  ctx.putImageData(remaining_data,0,PIXEL_SIZE);
  ctx.putImageData(wrap_data,0,0);
}

export function shiftImageRight(ctx){
  let wrap_data = ctx.getImageData(GRID_WIDTH-PIXEL_SIZE,0,(PIXEL_SIZE),GRID_HEIGHT);
  let remaining_data = ctx.getImageData(0,0,GRID_WIDTH-PIXEL_SIZE,GRID_HEIGHT);
  ctx.clearRect(0,0,GRID_WIDTH,GRID_HEIGHT);
  ctx.putImageData(remaining_data,PIXEL_SIZE,0);
  ctx.putImageData(wrap_data,0,0);

}

export function shiftImageLeft(ctx){
  let wrap_data = ctx.getImageData(0,0,(PIXEL_SIZE),GRID_HEIGHT);
  let remaining_data = ctx.getImageData(PIXEL_SIZE,0,GRID_WIDTH,GRID_HEIGHT);
  ctx.putImageData(remaining_data,0,0);
  ctx.putImageData(wrap_data,Math.floor(PIXEL_SIZE*7),0);
}

export function drawGrid(canvas,ctx){ 
  console.log("I am drawing in helper")
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

export function checkForDraw(e){
  let position = getMousePosition(e);
  let coords = getPixelCoordinates(position);
  if(!_.isEqual(coords,prevCoords)){
    draw(coords);
  }
  prevCoords = coords;
}

export function draw(coords){
  console.log("Drawing", coords, prevCoords);
  let offset = getPixelOffset(coords);
  fillCell(offset);
}

export function fillCell(ctx, offset, color){
  ctx.fillStyle = color;
  ctx.fillRect(offset.x,offset.y,PIXEL_SIZE,PIXEL_SIZE);
  ctx.stroke();
}

export function redraw(ctx ,pixelData){
  for(let row = 0; row < pixelData.length; row ++){
    for (let col = 0; col < pixelData[row].length; col++) {
      let palleteData = pixelData[row][col];
      let color = checkColor(palleteData);
      let offset = getPixelOffset({x:row,y:col});
      fillCell(ctx,offset,color);
    }
  }
}

function checkColor(palleteData){
  switch(palleteData){
    case "3":
      return "#FFFFFF" 
    case "2":
      return "#FFFFFF" 
    case "1":
      return "#FFFFFF" 
    case "0":
      return "#FFFFFF" 
    default:
      return "error"
  }
}