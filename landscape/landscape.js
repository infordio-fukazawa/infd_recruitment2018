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
    for (var i = 1 ; i <= $('.inline').length ; i++ ) {
        $('#inline_' + i + ' > div').html($('.inline_' + i + ' img').clone());
        $('#inline_' + i + ' > p'  ).html($('.inline_' + i + ' span').text());
    }
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