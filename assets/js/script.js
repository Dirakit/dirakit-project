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

    addStep();
});

$('.add-step').click(function () {
    addStep();
});


var counter = 1;
function addStep() {
    var stepHtml = $('.custom-step');
    var steps = "<div class='step-" + counter + "'>" +
        "<div class='inline fields'>" +
        "<div class='four wide field'>" +
        "Intro" +
        "</div>" +
        "<div class='eight wide field'>" +
        "<input type='text' placeholder='Judul Intro'>" +
        "</div>" +
        "<div class='four wide field'>" +
        "<button class='ui button fluid'><i class='upload icon'></i>Upload Gambar</button>" +
        "</div>" +
        "</div>" +
        "<div class='inline fields'>" +
        "<div class='four wide field'>" +
        "Langkah &nbsp; <span class='step-counter'>" + counter + "</span>" +
        "</div>" +
        "<div class='eight wide field'>" +
        "<textarea name='step' id='step'></textarea>" +
        "</div>" +
        "<div class='four wide field'>" +
        "<button class='ui button fluid'><i class='upload icon'></i>Upload Gambar</button>" +
        "</div>" +
        "</div>" +
        "</div>";
    counter++;

    var step = stepHtml.html();
    step = step += steps;
    stepHtml.html(step);
}