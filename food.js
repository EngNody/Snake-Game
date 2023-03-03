
import {expandsnake,onSnake} from './Snake.js'
import {randomGridPosition} from './grid.js'

// let food={x: 10,y: 1};
let food= getrandomfoodposition()
const EXPAND_RATE =1

export function update() {
if (onSnake(food)) {
  expandsnake(EXPAND_RATE)
  food = getrandomfoodposition()
}
}

export function draw(gameboard) {

    const foodsnake=document.createElement("div");                    
    foodsnake.style.gridRowStart=food.y;
    foodsnake.style.gridColumnStart=food.x;
    foodsnake.classList.add("food");
    gameboard.appendChild(foodsnake);
}

function getrandomfoodposition() {
  let newfoodposition;
while (newfoodposition==null || onSnake(newfoodposition)) {
  newfoodposition = randomGridPosition()
}
return newfoodposition
}









// if (food==snakebody) {
//   foodsnake.remove()
// }






