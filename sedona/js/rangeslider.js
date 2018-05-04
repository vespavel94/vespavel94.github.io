var sliderGap = $(".sliderGap");
sliderGap.on("mousedown touchstart",{min: 0, max: 100}, initSlider);

function initSlider(e){
  var startX = $(this).parent().offset().left,
		sliderWidth = parseInt($(this).parent().css("width")),
		gapWidth = parseInt($(this).css("width")),
		curr = $(this),
		rangeValue = 0,
		min = e.data.min,
  	max = e.data.max;
  
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
    rangeValue = insertValue(min, max, sliderWidth-gapWidth, shift);
    curr.siblings(".value").html(rangeValue);
  });
  $(document).on("mouseup touchend", function(){
    $(document).unbind("mousemove touchmove");
    $(document).unbind("mouseup touchend");
  });

  function insertValue(min, max, valueLength, shift){
    var basis = (valueLength/(max-min)),
      range = (min+(shift/basis)).toFixed();
    return range;
  }

}