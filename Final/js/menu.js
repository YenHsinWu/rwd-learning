$(document).ready(function () {
  $(".toggle-hamburger-menu").on("click", function (event) {
    event.preventDefault();
    $("body").toggleClass("show-hamburger-menu");
  });
});
