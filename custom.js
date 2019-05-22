$(window).load(function() {

    // loading

    $(".loader").fadeOut('fast');
    $('body').removeClass('inactive');

    // skrollr

    if($('.page-home').length && $(window).width() >= 768) {
        setTimeout(function () {
            var s = skrollr.init({
                smoothScrolling: false,
                mobileDeceleration: 0.004
            });

            skrollr.menu.init(s);

        }, 1000);
    }

});


$(document).ready(function(){

    $('#btn-subscribe').on('click', function (e) {
        e.preventDefault();
        $(this).parents('.aside-form').toggleClass('active');
    });

    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });

    $('.fancybox').fancybox({
        prevEffect	: 'elastic',
        nextEffect	: 'elastic',
        openEffect: "elastic",
        closeEffect: "elastic",
        openSpeed: "500",
        helpers	: {
            title	: { type : 'inside' },
            thumbs	: {
                width	: 50,
                height	: 50
            }
        }
    });

    // stiky main nav

    $("#main-nav").sticky({
        topSpacing:0
    }).on('sticky-start', function() {
        $('body').addClass('is-sticky')
    }).on('sticky-end', function() {
        $('body').removeClass('is-sticky')
    });

    $('.btn-group-aside').sticky({ topSpacing: 115 });

    // remove class animate when complete

    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

    $(".animated").one(animationEnd, function() {
        $(this).removeClass('animated');
        //console.log('removed');
    });

    // magnific popup

    $('.button-modal-mnf').magnificPopup({
        removalDelay: 500,
        closeBtnInside: true,
        modal: false,
        mainClass: 'mfp-zoom-in',
        closeOnBgClick: true
    });

    var $service_slick = $('#service-slick');
        //$modal_dv_slick = $('#modal-dv-slick');


    // $service_slick.find('.item').magnificPopup({
    //     removalDelay: 500,
    //     closeBtnInside: true,
    //     modal: false,
    //     mainClass: 'mfp-zoom-in',
    //     closeOnBgClick: true,
    //     callbacks: {
    //         open: function(item) {
    //             $modal_dv_slick.slick('setPosition');
    //             $service_slick.slick('slickPause');
    //         },
    //
    //         close: function() {
    //             $service_slick.slick('slickPlay');
    //         }
    //     }
    // }).on('click', function () {
    //     //console.log($(this).data('modal'));
    //     $modal_dv_slick.slick('slickGoTo', $(this).data('modal') - 1, true);
    // });
    
    var $tit_slick = $('#tit-slick'),
        $modal_ti_slick = $('#modal-ti-slick');


    $tit_slick.find('.item').magnificPopup({
        removalDelay: 500,
        closeBtnInside: true,
        modal: false,
        mainClass: 'mfp-zoom-in',
        closeOnBgClick: true,
        callbacks: {
            open: function(item) {
                $modal_ti_slick.slick('setPosition');
                $tit_slick.slick('slickPause');
            },

            close: function() {
                $tit_slick.slick('slickPlay');
            }
        }
    }).on('click', function () {
        //console.log($(this).data('modal'));
        $modal_ti_slick.slick('slickGoTo', $(this).data('modal') - 1, true);
    });

    $('.popup-youtube').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });    
   

    // slick slider

    $('.slickslider').slick({
        prevArrow: '<a href="#" class="slick-prev">Previous</a>',
        nextArrow: '<a href="#" class="slick-next">Next</a>'
    });

    //
    $service_slick.on('init', function(event, slick){
        $(this).find('.slick-slide').on('click', function () {
            $(this).find('.half-left-rounded').addClass('active');
            $(this).siblings().find('.half-left-rounded').removeClass('active');
        });
    });

    $service_slick.slick({
        prevArrow: '<a href="#" class="slick-prev">Previous</a>',
        nextArrow: '<a href="#" class="slick-next">Next</a>',
        slidesToShow: 5,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 5000,
        //asNavFor: '#modal-dv-slick',
        //focusOnSelect: true,
        //infinite: false,
        responsive: [
            {
                breakpoint: 1170,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    // $modal_dv_slick.slick({
    //     //asNavFor: '#service-slick',
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     swipeToSlide: true
    //     // fade: true,
    //     // cssEase: 'linear'
    // });
    
    
    $tit_slick.slick({
        prevArrow: '<a href="#" class="slick-prev">Previous</a>',
        nextArrow: '<a href="#" class="slick-next">Next</a>',
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 5000,
        asNavFor: '#modal-ti-slick',
        //focusOnSelect: true,
        //infinite: false,
        responsive: [
            {
                breakpoint: 1170,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $modal_ti_slick.slick({
        //asNavFor: '#service-slick',
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true
        // fade: true,
        // cssEase: 'linear'
    });


    $('#place-slick-v').slick({
        prevArrow: '<a href="#" class="slick-prev">Previous</a>',
        nextArrow: '<a href="#" class="slick-next">Next</a>',
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
        vertical: true,
        verticalSwiping: true
    }).mousewheel(function(e) {
        e.preventDefault();
        if (e.deltaY < 0) {
            $(this).slick('slickNext');
        }
        else {
            $(this).slick('slickPrev');
        }
    });

    /*$('#tit-slick').slick({
        prevArrow: '<a href="#" class="slick-prev">Previous</a>',
        nextArrow: '<a href="#" class="slick-next">Next</a>',
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,"autoplay": true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1170,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });*/
    

});