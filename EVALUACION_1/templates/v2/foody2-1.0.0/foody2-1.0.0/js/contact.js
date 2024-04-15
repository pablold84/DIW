/* López Díaz Pablo. DNI: 71643564J **/
function enviarFormulario() {
  if (validarFormulario()) {
    alert("Información Enviada, ¡muchas Gracias!");
  }
}
function enviarFormularioRes() {
  if (validarFormulario()) {
    alert(
      "Información Enviada, Una vez verificado el contenido por el administrador se mostrará en la página ¡muchas Gracias!"
    );
  }
}

function validarFormulario() {
  var nombre = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var asunto = document.getElementById("subject").value;
  var mensaje = document.getElementById("message").value;

  // Realiza las validaciones necesarias, por ejemplo:
  if (
    nombre.length < 3 ||
    email.indexOf("@") === -1 ||
    asunto.length === 0 ||
    mensaje.length === 0
  ) {
    alert("Por favor, complete todos los campos correctamente.");
    return false;
  }

  return true;
}
