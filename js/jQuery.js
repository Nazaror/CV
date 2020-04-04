$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.header__link').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
$('.slider').slider({
    animate: true,
    range: 'min',
    value: 2,
    min: 0,
    max: 3,
    step: 1,

    slide: function(event, ui) {
        $('input.range').val(ui.value);
    },

    change: function(event, ui) {
        $('input.range').val(ui.value);
    }

});
