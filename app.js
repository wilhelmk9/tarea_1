// Función para mostrar los datos ingresados en el formulario
function mostrarDatos() {
    // Obtener valores de los campos del formulario
    var nombres = document.getElementById("nombres").value;
    var apellidos = document.getElementById("apellidos").value;
    var telefono = document.getElementById("telefono").value;
    var email = document.getElementById("email").value;
    var fechaNacimiento = document.getElementById("fecha_nacimiento").value;
    var mensaje = document.getElementById("mensaje").value;
  
    // Concatenar los datos en una variable
    var datosCompletos =
      "Nombres: " + nombres + "\n" +
      "Apellidos: " + apellidos + "\n" +
      "Número telefónico: " + telefono + "\n" +
      "Correo electrónico: " + email + "\n" +
      "Fecha de nacimiento: " + fechaNacimiento + "\n" +
      "Mensaje: " + mensaje;
  
    // Mostrar los datos en un alert
    alert(datosCompletos);
  }

  
  