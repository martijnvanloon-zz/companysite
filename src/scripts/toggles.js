window.jQuery = require("jquery");
window.$ = require("jquery");


{
  $(".hamburger").click(function() {
    $(".hamburger").toggleClass("is-active");
    $(".menu-navigation").toggleClass("is-active");
  });
}
