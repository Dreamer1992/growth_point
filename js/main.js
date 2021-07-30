$(document).ready(function () {
    $('.section-three-carousel').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: "<button type='button' class='slick-prev pull-left'><img width='23' height='33' src='./img/common/arrow_purple.webp'></button>",
        nextArrow: "<button type='button' class='slick-next pull-left'><img width='23' height='33' src='./img/common/arrow_purple.webp'></button>",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
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
        prevArrow: "<button type='button' class='slick-prev pull-left'><img width='23' height='33' src='./img/common/arrow_purple.webp'></button>",
        nextArrow: "<button type='button' class='slick-next pull-left'><img width='23' height='33' src='./img/common/arrow_purple.webp'></button>",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
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
        prevArrow: "<button type='button' class='slick-prev pull-left'><img width='23' height='33' src='./img/common/arrow_orange.webp'></button>",
        nextArrow: "<button type='button' class='slick-next pull-left'><img width='23' height='33' src='./img/common/arrow_orange.webp'></button>",
    });

    $('.section-ten_carousel-right').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "<button type='button' class='slick-prev pull-left'><img width='23' height='33' src='./img/common/arrow_blue.webp'></button>",
        nextArrow: "<button type='button' class='slick-next pull-left'><img width='23' height='33' src='./img/common/arrow_blue.webp'></button>",
    });

    $('.reviews-carousel_nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        centerMode: true,
        centerPadding: '60px',
        prevArrow: "<button type='button' class='slick-prev pull-left'><img width='23' height='33' src='./img/common/arrow_purple.webp'></button>",
        nextArrow: "<button type='button' class='slick-next pull-left'><img width='23' height='33' src='./img/common/arrow_purple.webp'></button>",
        asNavFor: '.reviews-carousel_for',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerMode: false,
                    slidesToShow: 1
                }
            },
        ]
    });

    $('.reviews-carousel_for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        infinite: true,
        asNavFor: '.reviews-carousel_nav',
    });

    $('a[href^="#"]:not(.nav-link)').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 170
        }, 2500, 'swing');
    });

    $('a[href^="#nav_"], a.sign').on('click', function (e) {
        e.preventDefault();

        var top = 170;
        var target = this.hash;
        $target = $(target);

        if (window.matchMedia("(max-width: 768px)").matches) {
            target = 50
            $('.navbar-toggler').trigger('click')
        }

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 90
        }, 2500, 'swing');
    });

    const observer = lozad(); // lazy loads elements with default selector as '.lozad'
    observer.observe();

    $('.form').on('submit', function (e) {
        e.preventDefault();

        var data = $('.form').serializeArray();
        var isEmpty = false

        $(data).each(function (idx, el) {
            if (!el.value) {
                isEmpty = true
            }
        })

        if (isEmpty) {
            $('.form-error').fadeIn(500).delay(2500).fadeOut(500)
            return true
        }

        $.ajax({
            type: 'post',
            url: '../email.php',
            data: $('.form').serialize(),
            success: function () {
                alert('Спасибо. Форма была отправлена');
            }
        });

    });
});

// Youtube
function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}
r(function(){
    if (!document.getElementsByClassName) {
        // Поддержка IE8
        var getElementsByClassName = function(node, classname) {
            var a = [];
            var re = new RegExp('(^| )'+classname+'( |$)');
            var els = node.getElementsByTagName("*");
            for(var i=0,j=els.length; i < j; i++)
                if(re.test(els[i].className))a.push(els[i]);
            return a;
        }
        var videos = getElementsByClassName(document.body,"youtube");
    } else {
        var videos = document.getElementsByClassName("youtube");
    }
    var nb_videos = videos.length;
    for (var i=0; i < nb_videos; i++) {
        // Находим постер для видео, зная ID нашего видео
        if (!videos[i].style.backgroundImage) {
            videos[i].style.backgroundImage = 'url(http://i.ytimg.com/vi/' + videos[i].id + '/sddefault.jpg)';
        }

        // Размещаем над постером кнопку Play, чтобы создать эффект плеера
        var play = document.createElement("div");
        play.setAttribute("class","play");
        videos[i].appendChild(play);
        videos[i].onclick = function() {
            // Создаем iFrame и сразу начинаем проигрывать видео, т.е. атрибут autoplay у видео в значении 1
            var iframe = document.createElement("iframe");
            var iframe_url = "https://www.youtube.com/embed/" + this.getAttribute('data-id') + "?autoplay=1&autohide=1";
            if (this.getAttribute("data-params")) iframe_url+='&'+this.getAttribute("data-params");
            iframe.setAttribute("src",iframe_url);
            iframe.setAttribute("frameborder",'0');
            // Высота и ширина iFrame будет как у элемента-родителя
            iframe.style.width  = this.style.width;
            iframe.style.height = this.style.height;
            // Заменяем начальное изображение (постер) на iFrame
            this.parentNode.replaceChild(iframe, this);
        }
    }
});

// document.addEventListener('touchstart', onTouchStart, {passive: true});