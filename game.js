// body.style.background="red"

// import { snake_speed , update,draw } from './Snake.js'
import { update as updatesnake,draw as drawsnake , snake_speed 
  ,getSnakeHead,snakeIntersection} from './Snake.js'
import{ update as updatefood,draw as drawfood} from './food.js'
import {outsideGrid} from './grid.js';


const gameboard=document.getElementById("gameboard")
let lastrendertime=0;
let gameover=false;

function main(currenttime) {
if (gameover) {
//  return  alert("you lose")
if(confirm('You lose. press ok to restart.')){
window.location='/Snake.html';
}
return
}

  window.requestAnimationFrame(main);
  const secondssincelastrender=(currenttime-lastrendertime)/1000;
  if (secondssincelastrender<1/snake_speed) {return};
  // console.log(secondssincelastrender)
  lastrendertime=currenttime;
// console.log(currenttime);
// console.log("Render");
update()
draw()
// checkDeath()
}

  window.requestAnimationFrame(main)


function update() {
  updatesnake()
  updatefood()
  checkDeath()

}

function draw() {
  gameboard.innerHTML='';
  drawsnake(gameboard)
  drawfood(gameboard)
}

function checkDeath() {
  gameover = outsideGrid(getSnakeHead()) || snakeIntersection()
  // gameover = outsideGrid() || snakeIntersection()

}












