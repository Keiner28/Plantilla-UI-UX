$(document).ready(function () {
    $('.child').on('click', function () {
        //eliminar todos los elementos con la clase cuando esta activo.child

        $('.child').removeClass('active');

        //agregar la clase active al elemento que se le dio click
        $(this).addClass('active');

    });
});