// Esperar que el documento esté listo
$(document).ready(function () {

  // 1. Inicializar tooltips (Bootstrap)
  $('[data-bs-toggle="tooltip"]').tooltip();

  // 2. Evento click en el botón "Enviar por correo"
  $('#enviarCorreoSec').click(function () {
    alert('El correo fue enviado correctamente...');
  });

  // 3. Evento dblclick en títulos "INGREDIENTES" y "PREPARACIÓN"
  $('h3').on('dblclick', function () {
      $(this).css('color', '#DC3545'); 
  });

  // 4. Evento click en títulos de cards para toggle de descripción
  $('.card-title').click(function () {
      $(this).siblings('.card-text').toggle();
  });

});