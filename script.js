$(document).ready(function () {
    $('.child').on('click', function () {
        $('.child').removeClass('active');
        $(this).addClass('active');
    });
});