//Desktop fixed navbar
const header = $(".header");
const navbar = $(".header .navbar");
const navbarPosition = header.height();
const navbarHeight = navbar.height();

$(window).on("resize", function () {
    navbarPosition = navbarPosition = navbar.offset().top;
});

$(window).on("scroll", function () {
    if ($(window).width() > 767) {
        if ($(window).scrollTop() > navbarPosition) {
            navbar.addClass("fixed");
            header.css("margin-top", navbarHeight.toString() + "px");
        } else {
            navbar.removeClass("fixed");
            header.css("margin-top", "0px")
        }
    } else {
        navbar.removeClass("fixed");
        header.css("margin-bottom", "0px")
    }
});

// Mobile Navbar
const navbarTag = $(".navbar");
const navMenu = $(".nav");
const hamburger = $(".navbar__hamburger");

hamburger.on("click", function () {
    navbarTag.toggleClass("active");
    navMenu.toggleClass("active");
});

$(".nav__link").each(function () {
    $(this).on("click", function () {
        navbarTag.removeClass("active");
        navMenu.removeClass("active");
    });
});

// Sliders
$(document).ready(function () {
    // $('.servicios__list').slick({
    //     autoplay: true,
    //     autoplaySpeed: 4000,
    //     infinite: true,
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     pauseOnHover: false,
    //     pauseOnFocus: false,
    //     responsive: [
    //         {
    //             breakpoint: 1199,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 1
    //             },
    //         },
    //         {
    //             breakpoint: 767,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 1
    //             },
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             },
    //         }
    //     ],
    // });

    $('.bienvenida__slide').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        cssEase: 'linear'
    });
    $('.backgrounds').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        cssEase: 'linear',
        arrows: false
    });
});


//Tabs
$(".tabs__list").on("click", ".tabs__item", function (event) {
    event.preventDefault();

    $(".tabs__item").removeClass("active");
    $(".tabs__content").removeClass("show");

    $(this).addClass("active");
    $($(this).attr('href')).addClass("show");
});