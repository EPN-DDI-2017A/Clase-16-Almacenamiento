$(document).ready(function () {

  $('#iniciar-sesion').on('click', function (e) {
    e.preventDefault();

    $.ajax({
        url: 'inicio_sesion.php',
        method: 'POST',
        data: {
          'usuario': $('#usuario').val(),
          'clave': $('#clave').val()
        },
        success: function (data) {
          console.log('success', data);
        },

        error: function () {
          console.log('failed');
        },

        always: function () {
            console.log('done');
        }
      }
    );
  })

});