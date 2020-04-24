const score = document.querySelector('.score')
const gameStart = document.querySelector(".gameStart");
const gameArea = document.querySelector(".gameArea");

let keys = {
    ArrowTop:false,
    ArrowRight:false,
    ArrowDown:false,
    ArrowLeft:false
}

//Welcome window
gameStart.addEventListener('click',start);

//KeyPress Event
window.document.addEventListener('keydown',pressOn);
window.document.addEventListener('keyup',pressOff);

//function which tracks the keypress events
function pressOn(event){
    //console.log(event.key);
    keys[event.key] = true;
    console.log(keys);
}
function pressOff(event){
   //console.log(event.key)
   keys[event.key] = false;
   console.log(keys);
}
function start(){
    console.log("Game started");
}
