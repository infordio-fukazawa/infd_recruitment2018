$(function() {
    $('.inline').colorbox({
        inline: true,
        rel: 'photo',
        transition: 'elastic',
        closeButton: false,
        slideshow: false,
        slideshowAuto: false,
        maxWidth: '800px',
        width: '90%',
        maxHeight: '90%',
        opacity: 0.7
    });
    $('.inline-html').on('click', function() {
        $.colorbox.close();
    });
});