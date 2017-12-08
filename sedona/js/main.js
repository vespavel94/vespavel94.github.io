$(document).ready(function () {
    $(".hotel-search__button").on("click", function () {
        $(this).toggleClass("button--disabled");
    });

    $(".html_academy_copyright__link").mouseover(function () {
        $(".html_academy_copyright__logo").attr("src", "img/vector-smart-object-copy-8.png");
    }).mouseout(function () {
        $(".html_academy_copyright__logo").attr("src", "img/htmlacademy-svg.png");
    });

    $(".nav__tumbler").on("click", function () {
        console.log("triggered");
        var shiftingMenu = $(".menu__item");
        shiftingMenu.splice(2,1);
        console.log(shiftingMenu);
        shiftingMenu.each(function () {
            $(this).toggleClass("visible");
        });
    });
});