/*
    2) Realiza un piedra papel o tijera en donde dos jugadores ingresen su opcion y se determine quien gana
    alert('Turno del jugador 1');
var player1 = prompt('Elige una opcion: piedra, papel o tijera');
alert('Turno del jugador 2');
var player2 = prompt('Elige una opcion: piedra, papel o tijera');
if (player1 === player2) {
    alert('Empate');
} else if (player1 === "piedra" && player2 === "tijera" || player1 === "papel" && player2 === "piedra" || player1 === "tijera" && player2 == "papel") {
    alert('Gana el jugador 1');
} else {
    alert('Gana el jugador 2');
}
*/
/*var opt1 = '';
var opt2 = '';
rock1.onclick = function() {
    opt1 = "rock";
}
paper1.onclick = function() {
    opt1 = "paper";
}
sicss1.onclick = function() {
    opt1 = "sicss";
}
rock2.onclick = function() {
    opt2 = "rock";
}
paper2.onclick = function() {
    opt2 = "paper";
}
sicss2.onclick = function() {
    opt2 = "sicss";
}
function jugar() {
    var player1 = document.getElementById('player1').value;
    var player2 = document.getElementById('player2').value;
    if (opt1 === opt2) {
        document.getElementById('win').innerHTML = 'Empate';
    } else if (opt1 === "rock" && opt2 === "sicss" || opt1 === "paper" && opt2 === "rock" || opt1 === "sicss" && opt2 == "paper") {
        document.getElementById('win').innerHTML = 'El ganador es ' + player1;
    } else {
        document.getElementById('win').innerHTML = 'El ganador es ' + player2;
    }
}*/

document.addEventListener("keydown", press);

let opt1 = "";
let opt2 = "";

function press(event) {
    const key = event.keyCode; // Cambiado keycode a keyCode
    switch (key) {
        case 65: // A
            opt1 = "rock";
            break;
        case 83: // S
            opt1 = "paper";
            break;
        case 68: // D
            opt1 = "sciss"; // Cambiado sicss a scissors
            break;
        case 37: // Izquierda
            opt2 = "rock";
            break;
        case 40: // Abajo
            opt2 = "paper";
            break;
        case 39: // Derecha
            opt2 = "sciss"; // Cambiado sicss a scissors
            break;
    }
}

function jugar() {
    const player1 = document.getElementById('player1').value;
    const player2 = document.getElementById('player2').value;

    if (opt1 === opt2) {
        document.getElementById('win').innerHTML = 'Empate';
    } else if (
        (opt1 === "rock" && opt2 === "sciss") || 
        (opt1 === "paper" && opt2 === "rock") || 
        (opt1 === "sciss" && opt2 === "paper")
    ) {
        document.getElementById('win').innerHTML = 'El ganador es ' + player1;
    } else {
        document.getElementById('win').innerHTML = 'El ganador es ' + player2;
    }
}
