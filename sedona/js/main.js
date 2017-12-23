$(document).ready(function () {
    $(".hotel-search__button").on("click", function () {
        $(this).toggleClass("button--triggered");
        $(".hotel-search__button-overlay-wrapper").toggleClass("hotel-search__button-overlay-wrapper--triggered");
        $(".hotel-search__form").toggleClass("hotel-search__form--visible");
    });//search button and overlay script


    $(".form-counter__increment").on("click", function () {
        var input = $(this).siblings('input');
        var counterValue = +input.val();
        input.val(counterValue + 1);
    });
    $(".form-counter__decrement").on("click", function () {
        var input = $(this).siblings('input');
        var counterValue = +input.val();
        input.val(counterValue - 1);
        if(counterValue<1){
            input.val(counterValue);
        }
    });

    $(".html_academy_copyright__link").mouseover(function () {
        $(".html_academy_copyright__logo").attr("src", "img/vector-smart-object-copy-8.png");
    }).mouseout(function () {
        $(".html_academy_copyright__logo").attr("src", "img/htmlacademy-svg.png");
    });//HTMLAcademy logo color change (TODO: use sprite icon instead)

    $(".nav__tumbler").on("click", function () {
        var shiftingMenu = $(".menu__item");
        shiftingMenu.splice(2,1);
        shiftingMenu.each(function () {
            $(this).toggleClass("visible");
        });//hide-show nav items
    });
});