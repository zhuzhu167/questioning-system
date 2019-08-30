// author: liangzhu
// 表单验证插件
// 只写了不能为空的验证规则，如需加其他验证规则，自行扩展，（提示：在外面直接用extend扩展，在此处扩展直接在__RULES__加规则）
(function(global, factory, plug) {
    return factory.call(global, global.jQuery, plug);
})(typeof window !== undefined ? window : this, function($, plug) {
    var __DFFS__ = {
        raise: "change"
    };
    var __RULES__ = {
        "require": function() {
            return !!this.val();
        }
    };
    $.fn[plug] = function(ops) {
        this.each(function() {
            var $this = $(this);
            $.extend($this, ops);
            $this.raise = $this.data("bv-raise") || $this.raise || __DEFF__.raise;
            var $field = $this.find("[data-bv=true]");
            $field.on($this.raise, function() {
                var $field = $(this);
                $field.siblings("span").text("");
                var result = true,
                    error = null;
                $.each(__RULES__, function(rule, valid) {
                    if ($field.data("bv-" + rule)) {
                        result = valid.call($field);
                        if (!result) {
                            error = $field.data("bv-" + rule + "-error");
                            $field.siblings("span").text(error);
                            return false;
                        }
                    }
                });
            });
            $this.on("submit", function() {
                $field.trigger($this.raise);
                return false
            })
        });
    }
}, "bootstrapValidator");