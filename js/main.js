'use strict';



(function ($) {
    var timer = 700;
    $('.acordion__element--title').click(function () {
        var $this = $(this);
        var $parent = $this.parent();

        if ($parent.hasClass('show')) {
            $this.next().slideUp(timer);
        } else {
            var $element = $parent.parent().find('.show');
            $element.toggleClass('show');
            $element.children('.info').slideUp(timer);
            $this.next().slideDown(timer);
        }
        $this.parent().toggleClass('show');
    })
})(jQuery);