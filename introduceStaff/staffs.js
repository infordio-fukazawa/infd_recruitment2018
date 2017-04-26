$(function() {
    $('.inline').colorbox({
        inline: true,
        rel: 'photo',
        transition: 'elastic',
        closeButton: true,
        slideshow: false,
        slideshowAuto: false,
        maxWidth: '90%',
        maxHeight: '90%',
        opacity: 0.7
    });
    $('.inline-html').on('click', function() {
        $.colorbox.next();
    });
});