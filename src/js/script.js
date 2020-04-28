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
    
    new WOW().init();

});