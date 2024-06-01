/*
    1) Realizar un programa que permita determinar si un numero es par o impar

    var num = prompt('Ingresa un numero');
    if (num % 2 == 0) {
        alert('Es un numero par');
    } else {
        alert('Es un numero impar');
    }
*/
function determ() {
    var num = document.getElementById('num').value;
    if (num % 2 == 0) {
        document.getElementById('result').innerHTML = 'El número ' + num + ' es par';
    } else {
        document.getElementById('result').innerHTML = 'El número ' + num + ' es impar';
    }
}
