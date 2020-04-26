$(document).ready(function(){

    $('.still').click(function(e) {
        e.preventDefault();
        $('.still').toggleClass("more");
        $(".plus").toggleClass("questionAnswer__wrapper-item_active");
    });

});