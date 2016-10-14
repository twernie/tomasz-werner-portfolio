$(window).scroll(function() {
    if ($(this).scrollTop() > 1000) {
        $(".bottom-nav").stop().animate({
            opacity: 1
        }, 500);
    } else {
        $(".bottom-nav").stop().animate({
            opacity: 0
        }, 500);
    }
});
