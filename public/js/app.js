/* eslint-disable no-undef */
$(window).on('load', function () {
    /*==============================
             Preloader
    ===============================*/
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');

    // --------Scroll To Top---------
    $(window).on('scroll', function () {
        var scrolled = $(window).scrollTop();
        if (scrolled > 350) $('.go-top').addClass('active');
        if (scrolled < 350) $('.go-top').removeClass('active');
    });
    // Click Event
    $('.go-top').on('click', function () {
        $("html, body").animate({
            scrollTop: "0"
        }, 500);
    });
    // --------Scroll To Top---------

})

$(document).ready(function () {

    // MODAL
    $('.sidenav').sidenav();
    $('.fixed-action-btn').floatingActionButton();
    $('.tooltipped').tooltip();

    //Partner Company Owl Carousel
    $(".partner-company").owlCarousel({
        items: 3,
        lazyLoad: true,
        loop: true,
        margin: 30,
        autoplay: true,
        autoplaySpeed: 300,
        center: true,
        dots: false,
        slideTransition: `ease`,
        autoplayHoverPause: true,
        autoHeight: true,
        responsive: {
            0: {
                items: 1
            },
            360: {
                items: 1
            },
            767: {
                items: 1
            },

            1000: {
                items: 1
            },
            1800: {
                items: 3
            }
        }
    });

    //counterUp JS
    $('.counter').counterUp({
        delay: 20,
        time: 2000
    });

    //Accordion
    // document.addEventListener('DOMContentLoaded', function () {
    //     var elems = document.querySelectorAll('.collapsible');
    //     var instances = M.Collapsible.init(elems, options);
    // });

    // Or with jQuery
    $('.collapsible').collapsible();

    //---- App Screenshots Slider JS -----
    $(".screenshots-img").owlCarousel({
        items: 3,
        lazyLoad: true,
        loop: true,
        margin: 0,
        autoplay: true,
        autoplaySpeed: 300,
        center: true,
        dots: true,
        slideTransition: `ease`,
        autoplayHoverPause: true
    });

    //---- Testimonial Slider JS -----
    $(".review-content").owlCarousel({
        items: 2,
        lazyLoad: true,
        loop: true,
        margin: 0,
        autoplay: true,
        autoplaySpeed: 300,
        center: false,
        dots: true,
        slideTransition: `ease`,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            360: {
                items: 1
            },
            767: {
                items: 1
            },

            1000: {
                items: 2
            },
            1800: {
                items: 2
            }
        }
    });

    //-----tilt JS-------
    const tilt = $('.feature-left-pic').tilt({
        perspective: 1500,
        transition: true,
    });

});

//sticky top
$(window).scroll(function () {
    if ($(window).scrollTop() > 190) {
        // show sticky header
        $(".navigation").addClass("nav-bg");

    } else {
        // hide sticky header
        $(".navigation").removeClass("nav-bg");
    };
});