const score = document.querySelector('.score')
const gameStart = document.querySelector(".gameStart");
const gameArea = document.querySelector(".gameArea");


//Object which init game play
let player = {
    speed: 5
};

//Object which tracks the keyPresses
let keys = {
    ArrowUp: false,
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

function pressOn(event) {
    keys[event.key] = true;
    //console.log(keys);
}

function pressOff(event) {
    keys[event.key] = false;
    //console.log(keys);
}


//function which starts the game Play
function start() {
    console.log("Game started");
    gameArea.classList.remove('hide');
    gameStart.classList.add('hide');
    player.start = true;
    for (let i = 0; i < 10; i++) { //RoadLines
        let div = document.createElement('div');
        div.classList.add("line");
        div.y = (i * 150);
        div.style.top = (i * 150) + 'px';
        gameArea.appendChild(div);
    }
    window.requestAnimationFrame(playGame);
    let car = document.createElement('div');
    car.innerText = "CAR";
    car.setAttribute("class", "car");
    gameArea.appendChild(car);
    player.x = car.offsetLeft;
    player.y = car.offsetTop;
    //console.log(car.getBoundingClientRect());

}

//function 
function playGame() {
    console.log("inplay");
    let car = document.querySelector(".car");
    let road = gameArea.getBoundingClientRect();

    moveLines();
    //console.log("x="+player.x);
    //console.log("y="+player.y);
    //console.log(road);
    if (player.start) {
        if (keys.ArrowUp && (player.y > (road.top = -250))) {
            player.y -= player.speed;
        }
        if (keys.ArrowDown && player.y < road.bottom) {
            player.y += player.speed;
        }
        if (keys.ArrowLeft && player.x > 0) {
            player.x -= player.speed;
        }
        if (keys.ArrowRight && player.x < (road.width - 50)) {
            player.x += player.speed;
        }
        car.style.left = player.x + 'px';
        car.style.top = player.y + 'px';
        window.requestAnimationFrame(playGame);
    }
}

//Function which moves lines
function moveLines() {
    let lines = document.querySelectorAll('.line');
    lines.forEach(function (item) {
        //console.log("y=" + item.y);
        if (item.y >= 750) {
            item.y -= 750;
        }
        item.y += player.speed;
        item.style.top = item.y + 'px';
    })
}