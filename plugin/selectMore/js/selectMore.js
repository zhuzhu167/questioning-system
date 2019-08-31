;
(function ($) {
    $.fn.selectMore = function (date, config) {
        var _date = date
        var that = $(this);
        var _setting = {
            width: '100%',
            row: 0,
        }

        if (config) {
            _setting = config;
        }

        var _div = ' <div class="select-more-box"><div class="sm-head"><h2>主述</h2><i class="fa fa-times select-cancel" aria-hidden="true"></i></div><div class="sm-content"></div><div class="sm-foot"><div><div><span>内容</span></div><div></div></div></div></div>'
        var creat = function (date) {
                if (date) {
                    var content = '<div class="sm-con-item">12213123</div><div class="sm-con-item">shbuafg</div>'
                }
                push(content);
            },
            push = function (content) {
                that.after(_div);
                var inputWidth = that.css('width');
                console.log(inputWidth)
                that.siblings('div.select-more-box')
                    .css('width',inputWidth)
                that.siblings('div.select-more-box')
                    .find('.sm-content')
                    .append(content)
                showBox(0);
            },
            showBox = function (flag) {
                if (flag != 1 && that.siblings('div.select-more-box').css('display') == 'flex') {
                    that.siblings('div.select-more-box')
                        .css('display', 'none');
                } else if (flag == 1 && that.siblings('div.select-more-box').css('display') == 'none') {
                    that.siblings('div.select-more-box')
                        .css('display', 'flex');
                }

            };
        creat(_date);
        that.on('focus', function () {
            showBox(1);
        })

        that.siblings('div.select-more-box')
            .find('.select-cancel')
            .on('click', function () {
                console.log(1)
                showBox(0);
            })
    }
})(jQuery)