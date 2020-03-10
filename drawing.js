var window1 = document.getElementById("window1");
var window2 = document.getElementById("window2");

window1.addEventListener('mouseover', (event) => {
    lightOn(event)
});

window2.addEventListener('mouseover', (event) => {
    lightOn(event);
});

function lightOn(event) {
    let window = event.target;
    let light = window.style.fill;
    if (light == "yellow") {
        window.style.fill = "black";
    } else {
        window.style.fill = "yellow";
    }

}

var eye1 = document.getElementById("eye1");
var eye2 = document.getElementById("eye2");

eye1.addEventListener('click', (event) => {
    eyesClose(event)
});

eye2.addEventListener('click', (event) => {
    eyesClose(event)
});

function eyesClose(event) {
    let eyeBall = event.target;
    let eyeBall1 = eyeBall.style.fill;
    if (eyeBall1 == "black") {
        eyeBall.style.fill = "white";
    } else {
        eyeBall.style.fill = "black";
    }

}

var door1 = document.getElementById("door");
door.addEventListener('click', (event) => {
    doorOpen(event)
});

function doorOpen(event) {
    let door = event.target;
    let color = door.style.fill;
    if (color == "yellow") {
        door.style.fill = "saddlebrown";
    } else {
        door.style.fill = "yellow";
    }
}

window.addEventListener('keypress', nightOrDay);
let body = document.body;


function nightOrDay(event) {
    if (event.key == "n") {
        body.style.background = "black";
    } else if (event.key == "r") {
        body.style.background = "red";
    } else {
        body.style.background = "lightblue";
    }
}
