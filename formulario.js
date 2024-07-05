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
let nombre = document.getElementById('nombre');
let correo = document.getElementById('correo');
let telefono = document.getElementById('telefono');
let contrasena = document.getElementById('contrasena');
let confirmar = document.getElementById('confirmar');
let regex_nombre = /^[A-Z][a-z]\s?{2,}$/;
let regex_correo = '';
let regex_telefono = /^\+(\d{1,3})\s?(\d{10,15})$/;
let regex_contraseña = /^[A-Z][a-z][0-9][*$.]{8,}$/;
function validar() {
  document.getElementById('telefono_valido').innerHTML = regex_telefono.test(telefono.value) ? '✔' : '❌';
  document.getElementById('nombre_valido').innerHTML = regex_telefono.test(nombre.value) ? '✔' : '❌';
  if (contrasena === confirmar) {

  } else {
    document.getElementById('valido').innerHTML = 'Datos no válidos';
  }
}