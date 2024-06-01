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
var opt1 = '';
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

/*document.addEventListener("keydown", press);
function press(event) {
    var key = event.keycode;
    if (key == 65) {
        opt1 = "rock";
    } else if (key == 83) {
        opt1 = "paper";
    } else if (key == 68) {
        opt1 = "sicss";
    } else if (key == 37) {
        opt2 = "rock";
    } else if (key == 40) {
        opt2 = "paper";
    } else if (key == 39) {
        opt2 = "sicss";
    }
}*/

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
}