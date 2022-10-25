$(document).ready(function () {
    $('.menu-item').on('click', function () {
        $('.menu-item').removeClass('menu-item-active');
        $(this).addClass('menu-item-active');
    });
});