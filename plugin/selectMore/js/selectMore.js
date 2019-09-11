// author:liangzhu
// 这个只是模板，需要使用者根据业务修改此插件
// 样式最好不要改动
;
(function($) {
    $.fn.selectMore = function(config) {
        var that = $(this);
        var _setting = {
            width: 0, // 设置下拉框宽度
            headName: '', //设置头部名称
            data: [], // 数据
            head: true,
            footer: true
        };
        that.parent()
            .css('position', 'relative');
        // 导入配置
        if (config) {
            $.each(config, function(key, val) {
                if (_setting[key] != undefined) {
                    _setting[key] = val;
                }
            })
        }
        var _div = ' <div class="select-more-box"><div class="sm-head"><h2>' + _setting.headName + '</h2><i class="fa fa-times select-cancel" aria-hidden="true"></i></div><div class="sm-content"></div><div class="sm-foot"><div>内容:</div><div><input class="lz-form-item-input" type="text" autocomplete="off"></div><div><button type="button" class="lz-btn lz-btn-primary">+ 新增</button></div></div>';
        // 类方法-分模块进行
        var creat = function(data) {
                if (data == null || data == undefined) {
                    return push();
                }
                var content = '';
                $.each(data, function(key, val) {
                    var head = '<div class="sm-con-item-head">' + key + '：</div>';
                    var item = '';
                    for (var j = 0; j < val.length; j++) {
                        item += '<span class="sm-ct-list-btn lz-btn">' + val[j] + '</span>'
                    }
                    content += '<div class="sm-con-item">' + head + '<div class="sm-con-item-list">' + item + '</div>' + '</div>'
                })
                push(content);
            },
            push = function(content) {
                that.after(_div)
                that.siblings('div.select-more-box')
                    .hide();
                that.siblings('div.select-more-box')
                    .find('.sm-content')
                    .append(content);
                if (!_setting.head) {
                    that.siblings('div.select-more-box')
                        .find('.sm-con-item-head')
                        .css('display', 'none');
                }
                if (!_setting.footer) {
                    that.siblings('div.select-more-box')
                        .find('.sm-foot')
                        .css('display', 'none');
                }
            },
            hideBox = function() {
                if (that.siblings('div.select-more-box').css('display') == 'flex') {
                    that.siblings('div.select-more-box')
                        .css('display', 'none');
                }
            },
            showThisBox = function() {
                that.siblings('div.select-more-box').show();
            }
        creat(_setting.data);
        // 绑定事件
        that.on('focus', function() {
            var parentWid = that.parent().width();
            var inputWid = that.width();
            var domLeft = parentWid - inputWid - 22;
            that.siblings('div.select-more-box')
                .css({
                    'width': _setting.width != 0 ? _setting.width : 'calc(100% - 70px)',
                    'left': domLeft
                })
                .hide();
            showThisBox();
        });
        that.siblings('div.select-more-box')
            .find('.select-cancel')
            .on('click', function() {
                hideBox();
            });
        that.siblings('div.select-more-box')
            .find('.sm-ct-list-btn')
            .on('click', function() {
                that.val(that.val() + $(this).text());
            });
        $(document).on("click", function(e) {
            var target = $(e.target);
            if (target.closest(that.parent()).length == 0) {
                that.siblings('div.select-more-box').hide();
            }
        })
    }
})(jQuery)