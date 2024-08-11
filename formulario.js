/*
Crea un formulario de registro que pida:
  - Nombre
  - Correo
  - Teléfono
  - Contraseña
  - Pasaporte
  - Confirmar contraseña
  - Botón de enviar

  Este formulario debe validar que los campos no estén vacíos y que los datos
  esten correctamente validados, un nombre no puede contener caracteres especiales
  y debe tener minimo 2 caracteres, debe admitir espacios, la contraseña debe de 
  tener minimo 8 caracteres. El correo debe de tener un formato válido. El teléfono
  debe iniciar con el prefijo internacional y tener minimo 12 caracteres y maximo 20. 
  El pasaporte debe tener un formato válido. La confirmación de contraseña debe de
  ser igual a la contraseña.

  En caso de que los datos no sean válidos, se debe de mostrar un mensaje de error
  debajo del campo que no cumpla con la validación.
*/

function validarNombre() {
  let nombre = document.getElementById('nombre').value;
  let nombre_valido = document.getElementById('nombre_valido');
  nombre_valido.innerHTML = /^[A-Za-z]{2,}$/.test(nombre) ? '✔' : '❌';
  nombre_valido.className = /^[A-Za-z]{2,}$/.test(nombre) ? 'valid' : 'invalid';
}

function validarCorreo() {
  let correo = document.getElementById('correo').value;
  let correo_valido = document.getElementById('correo_valido');
  correo_valido.innerHTML = /^[a-z0-9-_.]+@[a-z]+\.[a-z]{2,4}$/.test(correo) ? '✔' : '❌';
  correo_valido.className = /^[a-z0-9-_.]+@[a-z]+\.[a-z]{2,4}$/.test(correo) ? 'valid' : 'invalid';
}

function validarTelefono() {
  let telefono = document.getElementById('telefono').value;
  let telefono_valido = document.getElementById('telefono_valido');
  telefono_valido.innerHTML = /^\+(\d{1,3})\s?(\d{10,16})$/.test(telefono) ? '✔' : '❌';
  telefono_valido.className = /^\+(\d{1,3})\s?(\d{10,16})$/.test(telefono) ? 'valid' : 'invalid';
}

function validarContrasena() {
  let contrasena = document.getElementById('contrasena').value;
  let contrasena_valida = document.getElementById('contrasena_valida');
  let regexContrasena = /^(?=.[A-Z])(?=.[a-z])(?=.\d)(?=.[\$%#\/]).{8,}$/;
  let esValido = regexContrasena.test(contrasena);
  contrasena_valida.innerHTML = esValido ? '✔' : '❌';
  contrasena_valida.className = esValido ? 'valid' : 'invalid';

  console.log("Contraseña:", contrasena, " - Válida:", esValido); // Para depuración
}

function validarConfirmar() {
  let contrasena = document.getElementById('contrasena').value;
  let confirmar = document.getElementById('confirmar').value;
  let confirmar_valida = document.getElementById('confirmar_valida');
  let esValido = contrasena === confirmar;
  confirmar_valida.innerHTML = esValido ? '✔' : '❌';
  confirmar_valida.className = esValido ? 'valid' : 'invalid';

  console.log("Confirmar:", confirmar, " - Coincide:", esValido); // Para depuración
}

function validarConfirmar() {
  let contrasena = document.getElementById('contrasena').value;
  let confirmar = document.getElementById('confirmar').value;
  let confirmar_valida = document.getElementById('confirmar_valida');
  let esValida = contrasena === confirmar;
  confirmar_valida.innerHTML = esValida ? '✔' : '❌';
  confirmar_valida.className = esValida ? 'valid' : 'invalid';

  console.log("Confirmar:", confirmar, " - Coincide:", esValida); // Para depuración
}

function validarPasaporte() {
  let pasaporte = document.getElementById('pasaporte').value;
  let pasaporte_valido = document.getElementById('pasaporte_valido');
  let esValido = /^[a-z]{3}[0-9]{6}$/.test(pasaporte);
  pasaporte_valido.innerHTML = esValido ? '✔' : '❌';
  pasaporte_valido.className = esValido ? 'valid' : 'invalid';
}

document.getElementById('nombre').addEventListener('input', validarNombre);
document.getElementById('correo').addEventListener('input', validarCorreo);
document.getElementById('telefono').addEventListener('input', validarTelefono);
document.getElementById('contrasena').addEventListener('input', validarContrasena);
document.getElementById('confirmar').addEventListener('input', validarConfirmar);
document.getElementById('pasaporte').addEventListener('input', validarPasaporte);
function ver() {
  let cambio = true;
  if (cambio) {
    document.getElementById('contrasena').type = "text";
    document.getElementById('confirmar').type = "text";
    cambio = false;
  }
  else {
    document.getElementById('contrasena').type = "password";
    document.getElementById('confirmar').type = "password";
    cambio = true;
  }
}