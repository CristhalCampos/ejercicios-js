/*
    3) Realiza un programa que funcione como un semaforo, en donde se pueda ingresar un color y se muestre un mensaje dependiendo del color, si es verde imprima "Continua", amarillo imprima "despacio" o rojo "detente", sino es ninguno imprima "error"
    var color = prompt('Ingresa un color: verde, amarillo o rojo');
    if (color === 'verde') {
        alert('continue');
    } else if (color === 'amarillo') {
        alert('despacio');
    } else if (color === 'rojo') {
        alert('detente');
    } else {
        alert('error');
    }
*/

document.getElementById('rojo').addEventListener('click', function() {
    document.getElementById('rojo').style.backgroundColor = '#ff0000';
    document.getElementById('detente').innerHTML = 'Detente';
});
document.getElementById('amarillo').addEventListener('click', function() {
    document.getElementById('amarillo').style.backgroundColor = '#ffff00';
    document.getElementById('despacio').innerHTML = 'Despacio';
});
document.getElementById('verde').addEventListener('click', function() {
    document.getElementById('verde').style.backgroundColor = '#008000';
    document.getElementById('continue').innerHTML = 'Continue';
});