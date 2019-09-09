// author: liangzhu
// 导航选项卡
(function($) {
    'use strict'
    $.fn.navTab = function(config) {
        if (!config.showDom) return false;
        // 配置
        var _setting = {
            showDom: '',
            data: {},
        };
        for (let i in config) {
            if (_setting[i] != undefined) _setting[i] = config[i];
        }
        // 参数
        var that = $(this);
        var liList = that.find('li');
        var tabBox = $(_setting.showDom);
        var tabMap = new Map();
        // -----------------------------------------------------------------------------------------------------------------------
        // 增加 tab
        var addTab = function(name) {
                if (isExist(name)) return false;
                tabBox.children().removeClass('is-select');
                let dom = '<div class="tag-history is-select"><a><span>' + name + '</span><i class="fa fa-times tabClose" aria-hidden="true"></i></a></div>'
                tabBox.append(dom);
                $('.tag-history').last().on('click', function() {
                    toTab(this);
                });
                $('.tabClose').last().on('click', function() {
                    $(this).parents('.tag-history').remove();
                    toTab(tabBox.children().last());
                });
            },
            //  是否已存在这个 tab
            isExist = function(name) {
                if (!name) return false;
                let tabName = name;
                let isE = false;
                $.each(tabBox.children(), function(key, val) {
                    if ($(val).text() == tabName) {
                        isE = true;
                        toTab(val);
                        return false;
                    }
                })
                return isE;
            },
            // 跳转到该 tab 的页面
            toTab = function(dom) {
                if (!dom) return false;
                tabBox.children().removeClass('is-select');
                $(dom).addClass('is-select');
                $('iframe').attr('src', tabMap.get($(dom).text()))
            },
            // 遍历 tab
            eachTab = function(data) {
                for (let i in data) {
                    tabMap.set(i, data[i]);
                }
            };
        eachTab(_setting.data);
        liList.on('click', function() {
            addTab($(this).children().text());
        })
    };
})(jQuery);