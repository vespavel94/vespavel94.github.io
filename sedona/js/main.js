$(document).ready(function () {
    $(".hotel-search__button").on("click", function () {
        $(this).toggleClass("button--disabled");
    });

    $(".html_academy_copyright__link").mouseover(function () {
        $(".html_academy_copyright__logo").attr("src", "img/vector-smart-object-copy-8.png");
    }).mouseout(function () {
        $(".html_academy_copyright__logo").attr("src", "img/htmlacademy-svg.png");
    });
});