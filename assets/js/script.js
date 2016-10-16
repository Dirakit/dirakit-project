/* Load JS on document ready */
$(document).ready(function () {
    /* Semantic UI Initialization */
    $('.tabbing.menu .item').tab();
    $('.special.card .image').dimmer({on: 'hover'});
    $('select.dropdown').dropdown({forceSelection:false});
    $('.ui.small.images > .image').click(function () {
        $('.ui.modal').modal('show');
    });
    /* End of Semantic UI Initialization */
});