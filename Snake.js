// body.style.background="red"

import {getinputdirection} from './input.js'


export const snake_speed=2.7;
const snakebody=[
  {x: 11,y: 11},
  // {x: 11,y: 11},
  // {x: 12,y: 11},
];
let newSegments=0;

export function update() {
  addSegments()
   const inputdirection=getinputdirection();
  for (let i = snakebody.length-2; i >= 0; i--) {
    snakebody[i+1]={...snakebody[i]};
  }
  snakebody[0].x+=inputdirection.x;
  snakebody[0].y+=inputdirection.y;
  // snakebody[0].x+=1
  // snakebody[0].y+=0
  // snakebody[0].x+=0
  // snakebody[0].y+=1
}

export function draw(gameboard) {
  // export function draw() {
  snakebody.forEach(segment => {
    const snakeElement=document.createElement("div");
    // snakeElement.style.gridRowStart=segment.x;
    // snakeElement.style.gridColumnStart=segment.y;
    snakeElement.style.gridRowStart=segment.y;
    snakeElement.style.gridColumnStart=segment.x;
    snakeElement.classList.add("snake");
    gameboard.appendChild(snakeElement);
  });
}
export function expandsnake(amount) {
  newSegments += amount
}
export function onSnake(position,{ignoreHead=false}={}) {
return snakebody.some((segment,index)=>{
  if (ignoreHead && index === 0) { return false }
    return equalpositions(segment,position)
})
}
export function getSnakeHead(){
  return snakebody[0]
}

export function snakeIntersection(){
  return onSnake(snakebody[0],{ignoreHead:true})
}

 function equalpositions(pos1,pos2) {

  return(pos1.x===pos2.x && pos1.y===pos2.y)
  }


function addSegments() {
  for (let i = 0; i < newSegments; i++) {
     snakebody.push({...snakebody[snakebody.length-1]});
    
  }
  newSegments=0
}























