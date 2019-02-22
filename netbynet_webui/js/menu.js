 window.onload = function() {
(function(){ // menu

  var x = document.querySelector(".menu").childNodes[1].childNodes;
  var ul = document.querySelector(".ul");
  var li = [];
  var ElemdopM = document.querySelector(".dop_menu").childNodes;
  var ul_dop = {};
  var z = [];
  var key = ""
    for(var i = 0; i < ElemdopM.length; ++i){
      if(ElemdopM[i].nodeType == 1){
         key = ElemdopM[i].classList.value;
         ul_dop[key] = ElemdopM[i]
      }
    }

    for(var i = 0; i < x.length; ++i){
    if(x[i].nodeType == 1){
      li.push(x[i])
    }
  }
  window.onresize = function(){
        var a = document.querySelector(".active")
        var obj = a.getBoundingClientRect();
        var img = a.nextSibling;
        img.style.left = (((obj.width - 18)/2) + obj.left) + "px";
        // if(document.documentElement.clientWidth > 960){
        //    for(var i = 0; i < ElemdopM.length; ++i){
        //       if(ElemdopM[i].nodeType == 1){   
        //           if(ElemdopM[i].style.display == "flex"){
        //               ElemdopM[i].style.left = obj.left + "px"
        //         }
        //       }
        //     }
        // }else{
        //   console.log("!")
        //    for(var i = 0; i < ElemdopM.length; ++i){
        //     if(ElemdopM[i].nodeType == 1){
        //       if(ElemdopM[i].style.display == "flex"){
        //         ElemdopM[i].style.left = "210px"
        //       }
        //     }
        //   }
        // }
      } 
  function deleteImgClass(){
        for(var i = 0; i < li.length; ++i){
          li[i].childNodes.length == 2 ? li[i].removeChild(li[i].childNodes[1]) : "";
          li[i].childNodes[0].classList.remove("active");
        }
      }
  function positionMenuDefault(el){
        var obj = li[0].getBoundingClientRect();
        var obj2 = li[0].getBoundingClientRect();
        var left = ((obj.width - 18)/2) + obj.left;
        var left2 = obj2.left; 
        if(document.documentElement.clientWidth < 960){
          var left2 = 210;
        }else{
          var left2 = obj2.left; 
        }
        var img = document.createElement("img");
        for(var i = 0; i < ElemdopM.length; ++i){
            if(ElemdopM[i].nodeType == 1){
                ElemdopM[i].style.left = left2 + "px"
            }
        }
        img.style.left = left + "px";
        img.setAttribute("src", "img/arrow3.png")
        li[0].childNodes[0].classList.toggle("active")
        li[0].appendChild(img)
      }
      positionMenuDefault();

      var flag = true; //false
      var currentId = "";
      ul.onclick = function(e){
        // console.log(flag)
        if(e.target.tagName != "A") return;
        // e.preventDefault()
        deleteImgClass();
        e.target.classList.add("active")
        var obj = e.target.getBoundingClientRect();
        var left = ((obj.width - 18)/2) + obj.left // + left posiotion
        var img = document.createElement("img")
        img.style.left = left + "px";
          img.setAttribute("src", "img/arrow3.png")
          e.target.parentElement.appendChild(img)
        var id = e.target.getAttribute("href");
          if(ul_dop[id]){
             e.preventDefault()
              if(flag){
                document.querySelector(".wrap_dop_menu").style.height = "50px";
                document.querySelector(".dop_menu >"+" "+"."+id).style.display = "flex";
                flag = !flag // false
                currentId = id
              }else{
                if(currentId != id){
                   document.querySelector(".wrap_dop_menu").style.height = "0px";
                   for(var i = 0; i < ElemdopM.length; ++i){
                      if(ElemdopM[i].nodeType == 1){
                          ElemdopM[i].style.display = "none"
                        } 
                      }
                   document.querySelector(".wrap_dop_menu").style.height = "50px";
                   document.querySelector(".dop_menu >"+" "+"."+id).style.display = "flex";
                   currentId = id
                   flag = false
                }else{
                  document.querySelector(".wrap_dop_menu").style.height = "0px";
                  document.querySelector(".dop_menu >"+" "+"."+currentId).style.display = "none";
                  currentId = ""
                  flag = !flag // true
                }               
              }
          }else{
              document.querySelector(".wrap_dop_menu").style.height = "0px";
              for(var i = 0; i < ElemdopM.length; ++i){
                if(ElemdopM[i].nodeType == 1){
                   ElemdopM[i].style.display = "none"
                } 
              }
              if(!flag) flag = true
            }
        }

  }());
}