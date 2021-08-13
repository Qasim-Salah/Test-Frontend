// Golbal $ , alert , console

$(function () {
    'use strict';


    $('.header').height($(window).height());


    $('.header .arrow i').click(function () {
        $('html,body').animate({
            scrollTop: $('.feat').offset().top
        }, 2000)
    })

    var leftArrow = $('.testim .fa-chevron-left'),
        rightArrow = $('.testim .fa-chevron-right');

    function checkClients() {
        $('.client:first').hasClass('active') ? leftArrow.fadeOut() : leftArrow.fadeIn();
        $('.client:last').hasClass('active') ? rightArrow.fadeOut() : rightArrow.fadeIn();
    }

    checkClients();

    $('.testim i').click(function () {
        if ($(this).hasClass('fa fa-chevron-right')) {
            $('.testim .active').fadeOut(100, function () {
                $(this).removeClass('active').next('.client').addClass('active').fadeIn();
                checkClients();
            });
        } else {
            $('.testim .active').fadeOut(100, function () {
                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();

                checkClients();

            });
        }
    });
    $('html').niceScroll({
        cursorcolor: '#f7600e',
        cursorwidth: 10,
        cursorborderradius: 0,
        cursorborder: '1px solid #f7600e',

    });
});

