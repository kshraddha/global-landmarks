(function($) {
    $('#nav_icon').on('touchstart click', function(e) {
        e.preventDefault();
        var $body, $page, $nav_menu, transitionEnd;
        $body = $('body');
        $page = $('#page');
        $nav_menu = $('#nav_menu');
        transitionEnd = 'transitionend webkitTransitionEnd otransitionend MSTransitionEnd';
        $body.addClass('animating');
        if ($body.hasClass('nav_menu-visible')) {
            $body.addClass('right');
        } else {
            $body.addClass('left');
        }
        $page.on(transitionEnd, function() {
            $body.removeClass('animating left right');
            $body.toggleClass('nav_menu-visible');
            $page.off(transitionEnd);
        });
    });
})(jQuery);