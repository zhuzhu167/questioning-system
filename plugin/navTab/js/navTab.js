(function($) {
    $.fn.navTab = function($tab, func) {
        var that = $(this);
        var liList = that.find('li');
        var tabBox = $($tab);
        var addTab = function(name) {
            tabBox.children().removeClass('is-select');
            var dom = '<div class="tag-history is-select"><a><span>' + name + '</span><i class="fa fa-times tabClose" aria-hidden="true"></i></a></div>'
            tabBox.append(dom);
        }
        liList.on('click', function() {
            addTab($(this).children().text());
            $('.tabClose').on('click', function() {
                $(this).parents('.tag-history').remove();
                tabBox.children().removeClass('is-select');
                $(tabBox.children().last()).addClass('is-select');
            });
            $('.tag-history').on('click', function() {
                tabBox.children().removeClass('is-select');
                $(this).addClass('is-select');
                console.log('该插件还没写完' + func);
            });
        })
    };
})(jQuery);