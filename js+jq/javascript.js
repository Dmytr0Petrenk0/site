$(document).ready(function() {
    $(".header__burger__menu").click(function() {
        $(".header__burger__menu,.header__menu").toggleClass("active");
        $("body").toggleClass("lock");
    });
});