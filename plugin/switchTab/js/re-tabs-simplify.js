// author: liangzhu
// 选项卡-精简版插件
;
(function($) {
    $.fn.resTabsSimp = function(options) {
        var self = $(this);
        var tabList = self.children('.ts-list');
        var tabListItem = tabList.find('li');
        var tabContent = self.children('.ts-container').children('.ts-content');
        tabContent.hide();
        tabContent.first().css('display', '');
        var toggleTab = function() {
            let index = $(tabListItem).index($(this));
            $(tabContent).each(function() {
                tabListItem.removeClass('active')
                tabContent.hide();
            })
            $(tabListItem[index]).addClass('active')
            $(tabContent[index]).show();
        }
        tabListItem.on('click', toggleTab);
    }
})(jQuery);