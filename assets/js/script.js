/* Load JS on document ready */
$(document).ready(function () {
    /* Semantic UI Initialization */
    $('.tabbing.menu .item').tab();
    $('.special.card .image').dimmer({on: 'hover'});
    $('select.dropdown').dropdown({forceSelection: false});
    $('.ui.small.images > .image').click(function () {
        $('.ui.modal').modal('show');
    });
    $('.ui.sticky').sticky();
    $('.slider.control').click(function () {
        $('.ui.sidebar.inverted.vertical.menu').sidebar('toggle');
    });
    $('img').visibility({
        type: 'image',
        transition: 'fade in',
        duration: 1000
    });
    /* End of Semantic UI Initialization */
    $('.add-step').click(function () {
        addStep();
    });
});

function addStep() {
    var stepHtml = $('.custom-step');
    var step = stepHtml.html();
    step = step += step;
    stepHtml.html(step);
}