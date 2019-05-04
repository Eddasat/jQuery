(function($) {
    var namespace = 'colorful';

    var methods = {
        init: function(options) {
            options = $.extend({}, $.fn[namespace].defaults, options);

            if (options.font) {
                this.css('color', options.color);
            }
            if (options.background) {
                this.css('background-color', options.color);
            }

            return this;
        }
    };

    $.fn[namespace] = function(method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if ($.type(method) === 'object') {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method' + method + ' does not exist!');
        }
    };

    $.fn[namespace].defaults = {
        color: 'red',
        background: false,
        font: true
    };
})(jQuery);
