/* López Díaz Pablo. DNI: 71643564J **/

/**
 * Añado un evento para controlar si el formulario está correctamente validado, si es así
 * envío un mensaje al usuario para informale que todo ha ido bien, si hay algún error, le muestro el motivo de error por cada campo
 */
document.getElementById("myForm").addEventListener("submit", function (event) {
  // Verificar si el formulario es válido
  if (this.checkValidity() === false) {
    // Si el formulario no es válido, detener el envío del formulario
    event.preventDefault();
    event.stopPropagation();
  } else {
    // Si todas las validaciones son correctas, mostrar la alerta
    alert("¡Formulario enviado correctamente!");
  }

  // Agregar clase "was-validated" para mostrar mensajes de validación de Bootstrap
  this.classList.add("was-validated");
});
