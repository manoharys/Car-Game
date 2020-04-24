const score = document.querySelector('.score')
const gameStart = document.querySelector(".gameStart");
const gameArea = document.querySelector(".gameArea");


//Object which init game play
let player = {};

//Object which tracks the keyPresses
let keys = {
    ArrowTop: false,
    ArrowRight: false,
    ArrowDown: false,
    ArrowLeft: false
}

//Welcome window
gameStart.addEventListener('click', start);

//KeyPress Event
window.document.addEventListener('keydown', pressOn);
window.document.addEventListener('keyup', pressOff);

//functions which tracks the keypress events
{
    function pressOn(event) {
        keys[event.key] = true;
        //console.log(keys);
    }

    function pressOff(event) {
        keys[event.key] = false;
        //console.log(keys);
    }
}

//function which starts the game Play
function start() {
    console.log("Game started");
    gameArea.classList.remove('hide');
    gameStart.classList.add('hide');
    let car = document.createElement('div');
    car.innerText = "CAR";
    gameArea.appendChild(car);
    player.start = true;
    window.requestAnimationFrame(playGame);
}

//function 
function playGame(){
    if(player.start){
        console.log("inplay")
    }
    window.requestAnimationFrame(playGame);
}