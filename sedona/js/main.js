$(document).ready(function () {
    $(".hotel-search__button").on("click", function () {
        $(this).toggleClass("button--triggered");
        $(".hotel-search__button-overlay-wrapper").toggleClass("hotel-search__button-overlay-wrapper--triggered");
        $(".hotel-search__form").toggleClass("hotel-search__form--visible");
    });//search button and overlay script












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