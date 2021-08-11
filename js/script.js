$(function() {

    // Fixed header

    let header = $('#header');
    let intro = $('#intro');
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    checkScroll(scrollPos, introH);

    $(window).on('scroll resize', function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);

    });

    function checkScroll(scrollPos, introH) {
        if(scrollPos > introH) {
            header.addClass('fixed');

        } else {
        header.removeClass('fixed');
        };

    };

    // Smooth scroll



    $('[data-scroll]').on('click', function(event) {
        event.preventDefault();

        nav.removeClass('show');

        let elementID = $(this).data('scroll');
        let elementOffset = $(elementID).offset().top;

        $('html, body').animate({
            scrollTop: elementOffset - 70
        }, 700);
    });

    // Nav Toggle

    let nav = $('#nav');
    let navToggle = $('#navToggle');

    navToggle.on('click', function(event) {
        event.preventDefault();

        nav.toggleClass('show');
    })

    // Reviews:https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js

    let slider = $('#reviewsSlider');



    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });






});