var field = $("input[type=text]"); //must contain set of inputs to be checked for validity
var btn = $(".checkForm");  //"accept" button of form
field.before("<div class='error-msg'></div>"); //creates div for errorMessage for each element in field collection
field.after("<div class='validator-icon'></div>");

var validation = {
  "check-phone": {
    validationRule: /^\d[\d\(\)\ -]{4,14}\d$/,
    errorMsg: "Номер телефона в формате: x-xxx-xxx-xx-xx"
  },
  "check-mail": {
    validationRule: /^[A-Za-z0-9][A-Za-z0-9\.\-_]*[A-Za-z0-9]*@([A-Za-z0-9]+([A-Za-z0-9-]*[A-Za-z0-9]+)*\.)+[A-Za-z]*$/,
    errorMsg: "Адрес в формате: addr@domain.locale"
  },
  "check-name": {
    validationRule: /^[a-zа-я]+$/i,
    errorMsg: "Без цифр и спецсимволов"
  },
  checkValid: function(curr){   //input element is argument here
    for (var key in this){      //filters input classList and apply rule from validation object
      if (curr.hasClass(key)){
        curr[0].isValid = this[key].validationRule.test(curr.val());  //creates .isValid property in JQuery element, which faces validity of current input element 
        if (!curr[0].isValid){
          curr.removeClass("is-valid")  
          curr.addClass("not-valid");
          curr.prevAll(".error-msg").show();
          curr.prevAll(".error-msg").html(this[key].errorMsg);
        }
        else{
        curr.removeClass("not-valid")  
        curr.addClass("is-valid");  
        curr.prevAll(".error-msg").hide();
        }
      }
    }
  },
  checkForm: function(){ //checks all required fields and returns validity of form
    var isFormValid = true;
    field.each(function(){
      if ($(this).hasClass("valid-required")){
        if($(this).val().length==0){
          isFormValid = false;
          $(this).removeClass("is-valid")  
          $(this).addClass("not-valid");
          $(this).prevAll(".error-msg").show();
          $(this).prevAll(".error-msg").html("Обязательно для заполнения!");
        }
        else{
          if($(this)[0].hasOwnProperty("isValid")){  //necessary if .isValid prop wasn't initialized before by checkValid callback
            $(this)[0].isValid = $(this)[0].isValid && true;
          }
          else{
            $(this)[0].isValid = true;
          }
        }
        isFormValid = isFormValid && $(this)[0].isValid; //if all required inputs are valid and not empty, this variable is true
      }
    });
    return isFormValid;
  }
}

field.on("keyup", function(){ //RealTime check on typing data in input
  validation.checkValid($(this)); 
});

btn.on("click", function(){  //listener for "accept" button, check whole form
  showPopup(validation.checkForm());
});

function showPopup(isFormValid){
      $(".popupFade").show();
      if (isFormValid){
          $(".popup-error").hide();
          $(".popup-success").show();
      } else{
        $(".popup-success").hide();
        $(".popup-error").show();
      }
      $(document).on("mouseup", hidePopup);
}

function hidePopup(event){
  if ($(".popupFade").has(event.target).length === 0) {
    $(".popupFade").hide();
    $(document).unbind("mouseup");
  }
}   
