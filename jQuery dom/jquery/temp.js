(function($) {
    var methods = {
        init: function() {},
        destory: function() {}
    };
    $.fn.coolLightbox = function(method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if ($.type(method) === 'object') {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method' + method + ' does not exist!');
        }
    };
})(jQuery);

$('.lightbox').coolLightbox('init', {
    p1: value1,
    p2: value2
});


$('.lightbox').coolLightbox({
    p1: value1,
    p2: value2
});
