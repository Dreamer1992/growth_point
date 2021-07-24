$(document).ready(function () {
    $('.section-three-carousel').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: "<button type='button' class='slick-prev pull-left'><img src='./img/common/arrow_purple.webp'></button>",
        nextArrow: "<button type='button' class='slick-next pull-left'><img src='./img/common/arrow_purple.webp'></button>",
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.section-seven-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: "<button type='button' class='slick-prev pull-left'><img src='./img/common/arrow_purple.webp'></button>",
        nextArrow: "<button type='button' class='slick-next pull-left'><img src='./img/common/arrow_purple.webp'></button>",
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.section-ten_carousel-left').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "<button type='button' class='slick-prev pull-left'><img src='./img/common/arrow_orange.webp'></button>",
        nextArrow: "<button type='button' class='slick-next pull-left'><img src='./img/common/arrow_orange.webp'></button>",
    });

    $('.section-ten_carousel-right').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "<button type='button' class='slick-prev pull-left'><img src='./img/common/arrow_blue.webp'></button>",
        nextArrow: "<button type='button' class='slick-next pull-left'><img src='./img/common/arrow_blue.webp'></button>",
    });

    $('.reviews-carousel_nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '60px',
        prevArrow: "<button type='button' class='slick-prev pull-left'><img src='./img/common/arrow_purple.webp'></button>",
        nextArrow: "<button type='button' class='slick-next pull-left'><img src='./img/common/arrow_purple.webp'></button>",
        asNavFor: '.reviews-carousel_for',
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.reviews-carousel_for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.reviews-carousel_nav',
    });

    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a[href^="#"]').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash;
        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 170
        }, 1000, 'swing');
    });

    $('.video-play-btn').on('click', function () {
        var video = $(this).siblings('video')[0];

        if (video.paused || video.ended) {
            $(this).addClass('pause');
            video.load();
            video.play();
            video.removeAttribute('src');
        } else {
            $(this).removeClass('pause');
            video.pause();
            video.src = "";
        }
    });

});