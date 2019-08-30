// author: liangzhu
// 选项卡-精简版插件
;
(function($) {
    $.fn.resTabsSimp = function(options) {
        var self = $(this);
        var tabList = self.find('.ts-list');
        var tabListItem = tabList.find('li');
        var tabContent = self.children('.ts-content')
        var toggleTab = function() {
            var index = $(tabListItem).index($(this));
            $(tabContent).each(function() {
                tabListItem.removeClass('active')
                tabContent.hide();
            })
            $(tabListItem[index]).addClass('active')
            $(tabContent[index]).show();
        }
        tabListItem.on('click', toggleTab)
    }
})(jQuery);