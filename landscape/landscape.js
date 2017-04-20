$(function() {
    $('.slide').colorbox({
        rel: 'photo',
        transition: 'elastic',
        closeButton: true,
        slideshow: false,
        slideshowAuto: false,
        maxWidth: '90%',
        maxHeight: '90%',
        opacity: 0.7
    });
    $('.inline').colorbox({
        inline: true,
        maxWidth: '90%',
        maxHeight: '90%',
        opacity: 0.7
    })
});