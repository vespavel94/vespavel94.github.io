(function($){
	$.fn.initBeforeAfter = function(){
    	$(this).html('<div class="BA_before"></div>'+
    	'<div class="BA_after"></div>'+
		'<div class="BA_wrapper">' +
		'<span class="before_span">было</span>' +
		'<div class="BA_slider"></div>' +
		'</div>' +
		'<span class="after_span">стало</span>');
    	$(".BA_slider").initSlider({range: {min:0, max: 100}, flag: "beforeAfter"});
	}
})(jQuery);