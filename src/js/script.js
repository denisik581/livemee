$(document).ready(function(){

    $('.still').click(function(e) {
        e.preventDefault();
        $('.still').toggleClass("more");
        $(".plus").toggleClass("questionAnswer__wrapper-item_active");
    });


    var positions = [],
    currentActive = null,
    links = $('.scroll-to');

    $(".anchor").each(function(){
        positions.push({
            top: $(this).position().top - 100,
            a: links.filter('[href="#'+$(this).attr('id')+'"]')
        });
    });

    positions = positions.reverse();

    $(window).on('scroll',function() {
        var winTop = $(window).scrollTop();
        for(var i = 0; i < positions.length; i++){
            if(positions[i].top < winTop){
                if(currentActive !== i){
                    currentActive = i;
                    links.removeClass('active');
                    positions[i].a.addClass("active");
                }
                break;
            }
        }
    });

    $("a[href^='#']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
    

    $('.questio_1, .questio_2, .questio_3, .questio_4, .questio_5, .questio_6, .questio_7, .instagamm, .requestt, .phonee, .menu__mobile').click(function(e) {
        e.preventDefault();
        $('.overlay').toggleClass("overlay__active");

        //$('.answer_1').css("display", 'block');
    });

    $('.questio_1').click(function(e) {
        $('.answer_1').css("display", 'block');
    });
    $('.questio_2').click(function(e) {
        $('.answer_2').css("display", 'block');
    });
    $('.questio_3').click(function(e) {
        $('.answer_3').css("display", 'block');
    });
    $('.questio_4').click(function(e) {
        $('.answer_4').css("display", 'block');
    });
    $('.questio_5').click(function(e) {
        $('.answer_5').css("display", 'block');
    });
    $('.questio_6').click(function(e) {
        $('.answer_6').css("display", 'block');
    });
    $('.questio_7').click(function(e) {
        $('.answer_7').css("display", 'block');
    });
    $('.instagamm').click(function(e) {
        $('.instagram').css("display", 'block');
    });
    $('.requestt').click(function(e) {
        $('.request').css("display", 'block');
    });
    $('.phonee').click(function(e) {
        $('.phoneee').css("display", 'flex');
    });
    $('.menu__mobile').click(function(e) {
        $('.mobile-menu').css("display", 'block');
    });

    $('.overlay__close, a, .button a').on('click', function () {
        $('.overlay').removeClass('overlay__active');
        $('.answer_1, .answer_2, .answer_3, .answer_4, .answer_5, .answer_6, .answer_7, .instagram, .request, .phoneee, .mobile-menu').fadeOut('slow');
    });
    $('.answer__wrapper-question, .qrewpp').on('click', function (e) {
        e.preventDefault();
    });

    $('.vopr_1').on('click', function() {
        $('.answer_1, .answer_2, .answer_3, .answer_4, .answer_5, .answer_6, .answer_7').fadeOut('fast');
        setTimeout(function() {
            $('.answer_1').fadeIn('fast');
          }, 250);
    });
    $('.vopr_2').on('click', function() {
        $('.answer_1, .answer_2, .answer_3, .answer_4, .answer_5, .answer_6, .answer_7').fadeOut('fast');
        setTimeout(function() {
            $('.answer_2').fadeIn('fast');
          }, 250);
    });
    $('.vopr_3').on('click', function() {
        $('.answer_1, .answer_2, .answer_3, .answer_4, .answer_5, .answer_6, .answer_7').fadeOut('fast');
        setTimeout(function() {
            $('.answer_3').fadeIn('fast');
          }, 250);
    });
    $('.vopr_4').on('click', function() {
        $('.answer_1, .answer_2, .answer_3, .answer_4, .answer_5, .answer_6, .answer_7').fadeOut('fast');
        setTimeout(function() {
            $('.answer_4').fadeIn('fast');
          }, 250);
    });
    $('.vopr_5').on('click', function() {
        $('.answer_1, .answer_2, .answer_3, .answer_4, .answer_5, .answer_6, .answer_7').fadeOut('fast');
        setTimeout(function() {
            $('.answer_5').fadeIn('fast');
          }, 250);
    });
    $('.vopr_6').on('click', function() {
        $('.answer_1, .answer_2, .answer_3, .answer_4, .answer_5, .answer_6, .answer_7').fadeOut('fast');
        setTimeout(function() {
            $('.answer_6').fadeIn('fast');
          }, 250);
    });
    $('.vopr_7').on('click', function() {
        $('.answer_1, .answer_2, .answer_3, .answer_4, .answer_5, .answer_6, .answer_7').fadeOut('fast');
        setTimeout(function() {
            $('.answer_7').fadeIn('fast');
          }, 250);
    });



    new WOW().init();

});