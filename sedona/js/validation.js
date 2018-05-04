var field = $("input[type=text]"),
btn = $(".checkForm");
field.before("<div class='error-msg'></div>");
field.after("<div class='validator-icon'></div>");

var validation = {
  "check-phone": {
    validationRule: /^\d[\d\(\)\ -]{4,14}\d$/,
    errorMsg: "Неверный формат"
  },
  "check-mail": {
    validationRule: /^[A-Za-z0-9][A-Za-z0-9\.\-_]*[A-Za-z0-9]*@([A-Za-z0-9]+([A-Za-z0-9-]*[A-Za-z0-9]+)*\.)+[A-Za-z]*$/,
    errorMsg: "Not correct mail"
  },
  "check-name": {
    validationRule: /^[a-zа-я]+$/i,
    errorMsg: "Имя не должно содержать цифр и спецсимволов"
  },
  checkValid: function(curr){
    for (var key in this){
      if (curr.hasClass(key)){
        curr[0].isValid = this[key].validationRule.test(curr.val());
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
  }
}

field.on("keyup", function(){
  validation.checkValid($(this));
});

btn.on("click", function(){
  var isFormValid = true;
  field.each(function(){
    if ($(this).attr('required')){
      if($(this).val().length==0){
        isFormValid = false;
        $(this).prevAll(".error-msg").show();
        $(this).prevAll(".error-msg").html("Обязательно для заполнения!");
      }
      else{
        if($(this)[0].hasOwnProperty("isValid")){
          $(this)[0].isValid = $(this)[0].isValid && true;
        }
        else{
          $(this)[0].isValid = true;
        }
      }
      isFormValid = isFormValid && $(this)[0].isValid;
    }
  });
  showPopup(isFormValid);
});

function showPopup(isFormValid){
  if (isFormValid){
    alert("Success");
    $(".error-msg").hide();
  } else{
    alert("Mistake");
  }
}
