/*
  Proyectos de la sección
  1) Utiliza programación orientada a objetos para crear un juego de peleas
  donde existan dos personajes y se peleen entre ellos hasta que uno de los dos
  se quede sin vida (por turnos).
  
  un personaje tiene nombre, vida y ataque, defensa
  
  Cada turno se debe imprimir el daño que se le hace al personaje y la vida que le queda
  a cada uno. Al final se debe imprimir el ganador.

  Los personajes deben tener un metodo que les permita atacar a otro personaje
  y un metodo que les permita defenderse.

  Deben ejecutar uno de los dos metodos de forma aleatoria.
  Y quien ataca o defiende primero debe ser aleatorio.

  La defensa lo que hace es sumar +3 de vida al personaje que se defiende

  el ataque debe ser debe tener un porcentaje aleatorio de quitar el 100% del ataque
  del personaje que ataca
*/

class Dragon {
    constructor(nombre, vida, poder) {
        this.nombre = nombre;
        this.vida = vida;
        this.poder = poder;
    }
    calcularGolpe() {
        return (Math.random().toFixed(1) * this.poder);
    }
    ataque(rival) {
        const golpe = this.calcularGolpe();
        rival.vida -= golpe;
        console.log(`${this.nombre} ataca a ${rival.nombre} y le quita ${golpe}`);
        console.log(`Vida de ${this.nombre}: ${this.vida}`);
        console.log(`Vida de ${rival.nombre}: ${rival.vida}`);
    }
    defensa(rival) {
        this.vida += 3;
        console.log(`${this.nombre} se defiende de ${rival.nombre}`);
        console.log(`Vida de ${this.nombre}: ${this.vida}`);
        console.log(`Vida de ${rival.nombre}: ${rival.vida}`);
    }
}

let dragon1 = new Dragon('Bud', 100, 10);
let dragon2 = new Dragon('Rocko', 100, 10);

let turnos = [dragon1.nombre, dragon2.nombre];
let metodos = ['atacar', 'defender'];

function seleccionar() {
    return Math.floor(Math.random() * 2);
}

let turno = turnos[seleccionar()];
let metodo = '';

while (dragon1.vida > 0 && dragon2.vida > 0) {
    if (turno == dragon1.nombre) {
        metodo = metodos[seleccionar()]
        if (metodo == 'atacar') {
            dragon1.ataque(dragon2);
        } else {
            dragon1.defensa(dragon2);
        }
        console.log('---');
        if (dragon1.vida <= 0 || dragon2.vida <= 0) {
            break;
        }
        metodo = metodos[seleccionar()]
        if (metodo == 'atacar') {
            dragon2.ataque(dragon1);
        } else {
            dragon2.defensa(dragon1);
        }
        console.log('---');
    } else {
        metodo = metodos[seleccionar()]
        if (metodo == 'atacar') {
            dragon2.ataque(dragon1);
        } else {
            dragon2.defensa(dragon1);
        }
        console.log('---');
        if (dragon1.vida <= 0 || dragon2.vida <= 0) {
            break;
        }
        metodo = metodos[seleccionar()]
        if (metodo == 'atacar') {
            dragon1.ataque(dragon2);
        } else {
            dragon1.defensa(dragon2);
        }
        console.log('---');
    }
}

if (dragon1.vida > dragon2.vida) {
    console.log(`El ganador es ${dragon1.nombre}`);
} else {
    console.log(`El ganador es ${dragon2.nombre}`);
}
