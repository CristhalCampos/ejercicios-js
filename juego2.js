/*class Maquina {
    constructor() {
        this.opciones = ['piedra', 'papel', 'tijera'];
        this.victorias = 0;
        this.derrotas = 0;
    }
    opcion() {
        return this.opciones[Math.floor(Math.random() * 3)];
    }
    historial(ganador) {
        if (ganador === 'Maquina') {
            this.victorias++;
        } else if (ganador !== 'Empate') {
            this.derrotas++;
        }
        alert(`Victorias de la Maquina: ${this.victorias}\n Derrotas de la Maquina: ${this.derrotas}`);
    }
}
class Jugador {
    constructor(nombre) {
        this.nombre = nombre;
        this.victorias = 0;
        this.derrotas = 0;
    }
    historial(ganador) {
        if (ganador === this.nombre) {
            this.victorias++;
        } else if (ganador !== 'Empate') {
            this.derrotas++;
        }
        alert(`Victorias de ${this.nombre}: ${this.victorias}\n Derrotas de ${this.nombre}: ${this.derrotas}`);
    }
}
let nombre = prompt('Ingresa tu nombre');
let jugador = new Jugador(nombre);
let maquina = new Maquina;
let ganador = ''
while (jugador.victorias < 3 && maquina.victorias < 3) {
    let opcionM = maquina.opcion();
    let opcionJ = prompt('Elige una opción: Piedra, Papel o Tijera').toLowerCase();
    if (opcionJ === opcionM) {
        ganador = 'Empate';
        alert('Empate');
    } else if (
        opcionJ === "piedra" && opcionM === "tijera" || 
        opcionJ === "papel" && opcionM === "piedra" || 
        opcionJ === "tijera" && opcionM == "papel"
    ) {
        ganador = nombre;
        alert(`Gana: ${nombre}, Maquina jugó: ${opcionM}`);
    } else {
        ganador = 'Maquina';
        alert(`Gana: Maquina, Maquina jugó: ${opcionM}`);
    }
    maquina.historial(ganador);
    jugador.historial(ganador);
}
if (jugador.victorias > maquina.victorias) {
    alert(`Fin del juego\n Gana: ${nombre}`);
} else {
    alert('Fin del juego\n Gana: Maquina');
}*/

class Juego {
    constructor() {
        this.victorias = 0;
        this.derrotas = 0;
        this.partidas = [];
    }
    jugar() {
        let opciones = ['piedra', 'papel', 'tijera'];
        let opcionUsuario = prompt('Elige una opción: piedra, papel o tijera').toLowerCase();
        let opcionComputadora = opciones[Math.floor(Math.random() * 3)];
        if(opcionUsuario == opcionComputadora) {
            alert('Empate');
            this.partidas.unshift('Empate');
        } else if(
            opcionUsuario === "piedra" && opcionComputadora === "tijera" || 
            opcionUsuario === "papel" && opcionComputadora === "piedra" || 
            opcionUsuario === "tijera" && opcionComputadora == "papel"
        ) {
            alert(`Ganaste, la computadora eligió: ${opcionComputadora}`);
            this.victorias++;
            this.partidas.unshift('Ganaste');
        } else {
            alert(`Perdiste, la computadora eligió: ${opcionComputadora}`);
            this.derrotas++;
            this.partidas.unshift('Perdiste');
        }
        alert(`Victorias: ${this.victorias}, Derrotas: ${this.derrotas}`);
        alert(this.partidas.toString());
    }
}

let juego = new Juego();
while(true) {
    juego.jugar();
    let continuar = confirm('Desea jugar de nuevo?');
    if(!continuar) {
        break;
    }
}