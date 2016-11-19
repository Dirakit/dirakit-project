/* Load JS on document ready */
$(document).ready(function () {
    /* Semantic UI Initialization */
    $('.tabbing.menu .item').tab();
    $('.special.card .image, .ui.tiny.images .image').dimmer({on: 'hover'});
    $('.ui.images > .image').click(function () {
        $('.ui.modal').modal('show');
    });

    $('.slider.control').click(function () {
        $('.ui.sidebar.inverted.vertical.menu').sidebar('toggle');
    });
    $('img').visibility({
        type: 'image',
        transition: 'fade in',
        duration: 1000
    });

    $('.ui.dropdown').dropdown();

    $('.ui.stackable.four.column.grid.container')
        .visibility({
            once: false,
            // update size when new content loads
            observeChanges: true,
            // load content on bottom edge visible
            onBottomVisible: function () {
                // loads a max of 5 times
                window.loadFakeContent();
            }
        })
    ;

    $('.ui.card .content a.header').popup({
        variation: 'very wide'
    });
    /* End of Semantic UI Initialization */
});

function initFroala() {
    $(this).froalaEditor();
}

$('.add-step').click(function () {
    addStep();
});

var counter = 1;
function addStep() {
    var stepHtml = $('.custom-step');
    var steps = "<div class='challenge-steps-container step-" + counter + "'>" +
        "Langkah &nbsp; <span class='step-counter'>" + counter + "</span>" +
        "<div class='sixteen wide field'>" +
        "<input type='text' placeholder='Judul Intro'>" +
        "</div>" +
        "<div class='sixteen wide field ui segment'>" +
        "Drop Here to Upload Image and Click to Delete" +
        "<div class='ui small images'>" +
        "<img class='image' src='./assets/images/10.png'/>" +
        "<img class='image' src='./assets/images/10.png'/>" +
        "<img class='image' src='./assets/images/10.png'/>" +
        "</div>" +
        "</div>" +
        "<div class='sixteen wide field'>" +
        "<textarea name='step' class='challenge-step-" + counter + "' rows='30'></textarea>" +
        "</div>" +
        "</div>";

    var step = stepHtml.html();
    step = step += steps;
    stepHtml.html(step);

    var challengeStep = '.challenge-step-' + counter;
    var textAreaStep = 'textarea' + challengeStep;
    var uploadHolderStep = 'input' + challengeStep;
    console.log(textAreaStep);
    console.log(uploadHolderStep);
    $(uploadHolderStep).dropzone({url: "eassets/images/"});
    $(textAreaStep).froalaEditor();
    counter++;

}
var infiniteContents = '<div class="column">' +
    '<div class="ui fluid special card">' +
    '<div class="blurring dimmable image">' +
    '<div class="ui dimmer">' +
    '<div class="content">' +
    '<a class="center" href="#">' +
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam consequuntur, cum dolor est ipsa ipsam ipsum labore mollitia neque nihil nisi numquam odio officiis placeat sed ut? Quas, reiciendis!' +
    '</a>' +
    '</div>' +
    '</div>' +
    '<img src="assets/images/13.png" alt="13">' +
    '</div>' +
    '<div class="content">' +
    '<a href="#" class="header">Lorem Ipsum</a>' +
    '<div class="meta">' +
    '<a href="#"><i class="folder icon"></i>Showcase</a>' +
    '<a href="#"><i class="user icon"></i>Admin</a>' +
    '<a href="#"><i class="unhide icon"></i>2200</a>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '<div class="column">' +
    '<div class="ui fluid special card">' +
    '<div class="blurring dimmable image">' +
    '<div class="ui dimmer">' +
    '<div class="content">' +
    '<a class="center" href="#">' +
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam consequuntur, cum dolor est ipsa ipsam ipsum labore mollitia neque nihil nisi numquam odio officiis placeat sed ut? Quas, reiciendis!' +
    '</a>' +
    '</div>' +
    '</div>' +
    '<img src="assets/images/13.png" alt="13">' +
    '</div>' +
    '<div class="content">' +
    '<a href="#" class="header">Lorem Ipsum</a>' +
    '<div class="meta">' +
    '<a href="#"><i class="folder icon"></i>Showcase</a>' +
    '<a href="#"><i class="user icon"></i>Admin</a>' +
    '<a href="#"><i class="unhide icon"></i>2200</a>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '<div class="column">' +
    '<div class="ui fluid special card">' +
    '<div class="blurring dimmable image">' +
    '<div class="ui dimmer">' +
    '<div class="content">' +
    '<a class="center" href="#">' +
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam consequuntur, cum dolor est ipsa ipsam ipsum labore mollitia neque nihil nisi numquam odio officiis placeat sed ut? Quas, reiciendis!' +
    '</a>' +
    '</div>' +
    '</div>' +
    '<img src="assets/images/13.png" alt="13">' +
    '</div>' +
    '<div class="content">' +
    '<a href="#" class="header">Lorem Ipsum</a>' +
    '<div class="meta">' +
    '<a href="#"><i class="folder icon"></i>Showcase</a>' +
    '<a href="#"><i class="user icon"></i>Admin</a>' +
    '<a href="#"><i class="unhide icon"></i>2200</a>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '<div class="column">' +
    '<div class="ui fluid special card">' +
    '<div class="blurring dimmable image">' +
    '<div class="ui dimmer">' +
    '<div class="content">' +
    '<a class="center" href="#">' +
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam consequuntur, cum dolor est ipsa ipsam ipsum labore mollitia neque nihil nisi numquam odio officiis placeat sed ut? Quas, reiciendis!' +
    '</a>' +
    '</div>' +
    '</div>' +
    '<img src="assets/images/13.png" alt="13">' +
    '</div>' +
    '<div class="content">' +
    '<a href="#" class="header">Lorem Ipsum</a>' +
    '<div class="meta">' +
    '<a href="#"><i class="folder icon"></i>Showcase</a>' +
    '<a href="#"><i class="user icon"></i>Admin</a>' +
    '<a href="#"><i class="unhide icon"></i>2200</a>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>';
var count = 1;
window.loadFakeContent = function () {
    // load fake content
    var
        $segment = $('.ui.stackable.four.column.grid.container'),
        $loader = $segment.find('.inline.loader'),
        $content = infiniteContents;
    if (count <= 5) {
        $loader.addClass('active');
        setTimeout(function () {
            $loader
                .removeClass('active')
                .before($content)
            ;
            $('.ui.sticky')
                .sticky('refresh')
            ;
            $('.visibility.example > .overlay, .visibility.example > .demo.segment, .visibility.example .items img')
                .visibility('refresh')
            ;
        }, 1000);
    }
    count++;
};

$('.ui.form')
    .form({
        fields: {
            email: {
                identifier: 'email',
                rules: [{
                    type: 'empty',
                    prompt: 'Email tidak boleh kosong'
                }]
            },
            name: {
                identifier: 'name',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Nama Lengkap tidak boleh kosong'
                    },
                    {
                        type: 'minLength[2]',
                        prompt: 'Nama minimal 2 karakter'
                    }
                ]
            },
            password: {
                identifier: 'password',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Password tidak boleh kosong'
                    },
                    {
                        type: 'minLength[8]',
                        prompt: 'Password minimal 8 karakter'
                    }
                ]
            },
            confirmPassword: {
                identifier: 'password-confirmation',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Konfirmasi Password tidak boleh kosong'
                    },
                    {
                        type: 'minLength[8]',
                        prompt: 'Konfirmasi Password minimal 8 karakter'
                    },
                    {
                        type: 'match[password]',
                        prompt: 'Konfirmasi Password tidak sesuai dengan Password'
                    }
                ]
            },
            termsAndCondition: {
                identifier: 'accept-tnc',
                rules: [{
                    type: 'checked',
                    prompt: 'Anda harus menerima Syarat dan Ketentuan yang berlaku'
                }]
            }
        }
    })
;