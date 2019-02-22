(function($){
  $.fn.initSlider = function(data){
    $(this).html('<div class="sliderGap"></div>'+
      '<p class="sliderValue">0</p>'); 
    var sliderGap = $(this).children(".sliderGap");
    sliderGap.on("mousedown touchstart", data, Slider);
  }
})(jQuery);

function Slider(e){
  var startX = $(this).parent().offset().left,
		sliderWidth = parseInt($(this).parent().css("width")),
		gapWidth = parseInt($(this).css("width")),
		curr = $(this),
		rangeValue = 0,
		min = e.data.range.min,
    max = e.data.range.max,
    flag = e.data.flag;
  
  $(document).on("mousemove touchmove", function(d){
    if (d.type=="touchmove"){
      var shift = d.changedTouches[0].pageX - startX - gapWidth/2;
    } else{
      var shift = d.pageX - startX - gapWidth/2;
    }
  
    if (shift > sliderWidth - gapWidth){
  	 shift = sliderWidth - gapWidth;
    }
    if (shift < 0){
  	 shift = 0;
    }  
    curr.css("left", shift + "px");
    rangeValue = countValue(min, max, sliderWidth-gapWidth, shift);
    
    if(flag == "beforeAfter"){    //for_BeforeAfter.js plugin
      curr.parents(".BA_wrapper").siblings(".BA_after").css("width", rangeValue + "%");
      curr.parents(".BA_wrapper").siblings(".BA_before").css("width", 100 - rangeValue + "%");
    }

    curr.siblings(".sliderValue").html(rangeValue);
  });
  $(document).on("mouseup touchend", function(){
    $(document).unbind("mousemove touchmove");
    $(document).unbind("mouseup touchend");
  });

  function countValue(min, max, valueLength, shift){    //returns current value of slider
    var basis = (valueLength/(max-min)),
      range = (min+(shift/basis)).toFixed();
    return range;
  }

}