'use strict';
var trigger = $(".date-input input");
const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var date = new Date();
var currDay = date.getDate();
var options = {
    month: 'long'
};

trigger.on("click", renderDatepicker);

function renderDatepicker() {
    console.log($(this));
    $(document).on("mouseup", removeDatepicker);

    var calendarWrapper = $(document.createElement("div"));
    calendarWrapper.addClass("cal-container");
    calendarWrapper.html("<div class=\"cal-container__header\">\n" +
        "    <button class=\"prev\">Prev</button>\n" +
        "    <span class=\"curr-month-year\">" + date.toLocaleString("ru", options) + " " + date.getFullYear() + "</span>\n" +
        "    <button class=\"next\">next</button>\n" +
        "  </div>\n" +
        "  <div class=\"cal-container__days-row\">\n" +
        "    <span>Пн</span>\n" +
        "    <span>Вт</span>\n" +
        "    <span>Ср</span>\n" +
        "    <span>Чт</span>\n" +
        "    <span>Пт</span>\n" +
        "    <span>Сб</span>\n" +
        "    <span>Вс</span>\n" +
        "  </div>");
    var dateWrapper = $(document.createElement("div"));
    dateWrapper.addClass("cal-container__date-wrapper");
    if (date.getFullYear() % 4 == 0) {
        DAYS_IN_MONTH[1] = 29;//visokosnii god
    }

    var currMonth = date.getMonth();
    date.setDate(1);
    var startDayOfMonth = date.getDay() - 1;
    var daysCount = DAYS_IN_MONTH[currMonth];
    for (var i = 0; i < startDayOfMonth; i++) {
        var cell = $(document.createElement("div"));
        cell.addClass("day_cell day--prev_month");
        cell.appendTo(dateWrapper);
    }
    for (var i = 1; i < daysCount + 1; i++) {
        var cell = $(document.createElement("div"));
        cell.addClass("day_cell");
        cell.html(i);
        if (i == currDay) {
            cell.addClass("day--current");
        }
        cell.appendTo(dateWrapper);
    }

    dateWrapper.appendTo($(calendarWrapper));
    console.log($(this));
    console.log($(this).closest(".date-input"));
    calendarWrapper.appendTo($(this).closest(".date-input"));


    $(".day_cell").on("click", insertDate);
    $(".next").on("click", function () {
        console.log($(this));
        $(".cal-container").remove();
        date.setMonth(date.getMonth() + 1);
        console.log($(this));
        renderDatepicker.call($(this));
    })
}

function insertDate() {
    $(this).parents(".date-input").children("input").val($(this).html() + "  " + date.toLocaleString("ru", options) + "  " + date.getFullYear());
}

function removeDatepicker() {
    if ($(".cal-container").has(event.target).length === 0) {
        $(".cal-container").remove();
        $(document).unbind("mouseup");
    }
}

