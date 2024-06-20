class Maquina {
    constructor() {
        this.opciones = ['Piedra', 'Papel', 'Tijera'];
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
        console.log(`Victorias de la Maquina: ${this.victorias}`);
        console.log(`Derrotas de la Maquina: ${this.derrotas}`);
    }
}
class Jugador {
    constructor(nombre, opcionJ) {
        this.nombre = nombre;
        this.opcionJ = opcionJ;
        this.victorias = 0;
        this.derrotas = 0;
    }
    historial(ganador) {
        if (ganador === this.nombre) {
            this.victorias++;
        } else if (ganador !== 'Empate') {
            this.derrotas++;
        }
        console.log(`Victorias de ${this.nombre}: ${this.victorias}`);
        console.log(`Derrotas de ${this.nombre}: ${this.derrotas}`);
    }
}

function opcionJugador() {
    let opciones = ['Piedra', 'Papel', 'Tijera'];
    return opciones[Math.floor(Math.random() * 3)];
}
let jugador1 = 'Pepe'
let opcionJ = opcionJugador();
let jugador = new Jugador(jugador1, opcionJ);
let maquina = new Maquina;
let opcionM = maquina.opcion();
let ganador = ''
for (let i = 1; i <= 3; i++) {
    if (opcionJ === opcionM) {
        ganador = 'Empate';
        console.log('Empate');
    } else if (opcionJ === "Piedra" && opcionM === "Tijera" || opcionJ === "Papel" && opcionM === "Piedra" || opcionJ === "Tijera" && opcionM == "Papel") {
        ganador = jugador1;
        console.log(`Gana: ${jugador1}, Maquina jugó: ${opcionM}`);
    } else {
        ganador = 'Maquina';
        console.log(`Gana: Maquina, Maquina jugó: ${opcionM}`);
    }
    maquina.historial(ganador);
    jugador.historial(ganador);
}
