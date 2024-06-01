/*
    4) Realiza una calculadora que permita realizar las operaciones basicas (suma, resta, multiplicacion y division) con dos numeros, debe preguntarte el numero1, el numero2 y la operacion que deseas realizar
    var num1 = parseFloat(prompt('Ingresa el primer numero'));
    var num2 = parseFloat(prompt('Ingresa el segundo numero'));
    var oper = prompt('Ingresa la operacion que deseas realizar: suma, resta, multiplicacion o division');
    if (oper === '+' || oper ==='suma') {
        var suma = num1 + num2;
        alert('El resultado es: ' + suma);
    } else if (oper === '-' || oper ==='resta') {
        var resta = num1 - num2;
        alert('El resultado es: ' + resta);
    } else if (oper === '*' || oper ==='multiplicacion') {
        var multiplicacion = num1 * num2;
        alert('El resultado es: ' + multiplicacion);
    } else if (oper === '/' || oper ==='division') {
        var division = num1 / num2;
        alert('El resultado es: ' + division);
    } else {
        alert('Error');
    }
*/
function result() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var oper = document.getElementById('oper').value;
    if (oper === '+') {
        document.getElementById('result').value = num1 + num2;
    } else if (oper === '-') {
        document.getElementById('result').value = num1 - num2;
    } else if (oper === '*') {
        document.getElementById('result').value = num1 * num2;
    } else if (oper === '/') {
        document.getElementById('result').value = (num1 / num2).toFixed(4);
    }
}