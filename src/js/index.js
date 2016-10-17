
$(document).ready(function(event) {

    document.body.classList.remove('no-fouc');

    var $thumbnailContainer = $('.thumbnails');
    var thumbnailHandler;

    if ($thumbnailContainer) {

        var $overlay = $('#modal-overlay');

        $overlay.find('a').on('click', function() {
            $('html').removeClass('overlay-open');
        });

        thumbnailHandler = function(e) {
            $overlay.find('img').attr('src', $(this).attr('src'));
            $('html').addClass('overlay-open');
        };

        $thumbnailContainer.find('img').on('click', thumbnailHandler);
    }
});
