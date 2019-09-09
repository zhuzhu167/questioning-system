// auhtor:liangzhu
// 手风琴选项卡
;
(function($) {
    $.fn.foldPanel = function() {
        var that = $(this);
        $(".subNav").click(function() {
            if ($(this).attr('class') == 'subNav') {
                that.find('i')
                    .removeClass("fa-chevron-down")
                    .addClass('fa-chevron-right');
                $(this).toggleClass("currentDd")
                    .siblings(".subNav")
                    .removeClass("currentDd")
                $(this).toggleClass("currentDt")
                    .siblings(".subNav")
                    .removeClass("currentDt")
                $(this).find("i")
                    .removeClass("fa-chevron-right")
                    .addClass('fa-chevron-down');
                $(this).next(".navContent")
                    .slideToggle(300)
                    .siblings(".navContent")
                    .slideUp(500)
            } else {
                $(this).toggleClass("currentDd")
                    .siblings(".subNav")
                    .removeClass("currentDd")
                $(this).toggleClass("currentDt")
                    .siblings(".subNav")
                    .removeClass("currentDt")
                $(this).find("i")
                    .removeClass("fa-chevron-down")
                    .addClass('fa-chevron-right');
                $(this).next(".navContent")
                    .slideToggle(300)
                    .siblings(".navContent")
                    .slideUp(500)
            }
        })
    }
})(jQuery)