// Esperar que el documento esté listo
$(document).ready(function () {

    // Inicializar tooltips
    $('[data-bs-toggle="tooltip"]').tooltip();
  
    // Al hacer click en el botón "Enviar por correo"
    $('#enviarCorreoSec').click(function () {
      alert('El correo fue enviado correctamente...');
    });
  
  });