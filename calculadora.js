let oper = '';
function calcular(c) {
    if (c == 'AC') {
        oper = '';
    } else if (c == 'C') {
        oper = oper.slice(0, oper.length - 1);
    } else if (c == '=') {
        oper = String(eval(oper));
    } else {
        oper += c;
    }
    document.querySelector('#input').value = oper;
}
function modo(){
    document.querySelector("body").classList.toggle("bg-zinc-700");
    document.querySelector("#botones").classList.toggle("bg-blue-950");
    document.querySelector("#modo").classList.toggle("bg-blue-950");
    document.querySelector("#calculadora").classList.toggle("bg-black");
    document.getElementById('modo').textContent = document.getElementById('modo').textContent == '☀' ? '🌘' : '☀';
  }