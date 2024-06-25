let numeros = document.querySelectorAll('.numeros');
let operaciones = document.querySelectorAll('.operaciones');
let num1 = 0;
let num2 = 0;
let oper = ''
numeros.forEach((numero) => {
    numero.addEventListener('click', () => {
        if (document.getElementById('input').value === '0') {
            document.getElementById('input').value = numero.textContent;
        } else {
            document.getElementById('input').value += numero.textContent;
        }
    })
})
operaciones.forEach((operacion) => {
    operacion.addEventListener('click', () => {
        if (operacion === 'AC') {
            document.getElementById('input').value = '0';
        } else if (operacion === 'C') {
            document.getElementById('input').value = document.getElementById('input').value.slice(0, -1);
        } else {
            num1 = parseFloat(document.getElementById('input').value);
            oper = operacion.textContent;
            document.getElementById('input').value = '';
        }
    }) 
})
document.getElementById('igual').addEventListener('click', () => {
    num2 = parseFloat(document.getElementById('input').value);
    if (oper === '+') {
        document.getElementById('input').value = num1 + num2;
    } else if (oper === '-') {
        document.getElementById('input').value = num1 - num2;
    } else if (oper === '*') {
        document.getElementById('input').value = num1 * num2;
    } else if (oper === '/') {
        document.getElementById('input').value = (num1 / num2).toFixed(8);
    } else if (oper === '^') {
        document.getElementById('input').value = num1 ** num2;
    }
})