$(document).ready(function(){
    /* dodawanie klasy do animacji*/
    $('*[data-animate]').addClass("hiden").each(function(){
        $(this).viewportChecker({
            classToAdd: 'show animated ' + $(this).data('animate'),
            classToRemove: 'hiden',
            offset:200
        });
    });
    /* glowny slider */
    $('#main-slider').bxSlider({
        loop:true,
        mode: 'fade',
        auto: true,
        controls: true,
        pager: false
    });
    /* Slider komentarze */
    $('#komentarze-slider').bxSlider({
        mode: 'vertical',
        auto: true,
        controls: false,
        pager: false
    });
    /*Slider projekty*/
    $('#projekty-carousel').owlCarousel({
        autoplayTimeout: 4000,
        autoplay:true,
        margin:10,
        responsive:{
        0:{items:1},
        600:{items:3},
        1000:{items:4}
        }
    });
});