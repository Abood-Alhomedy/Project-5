$(document).ready(function () {
  $(".close-slide ").click(function () {
    $(".slid-closed").toggleClass("cl");
    $(".none").toggleClass("di");
    $(".close-slide-2").toggleClass("di");
    $(".close-slide ").toggleClass("di");
    $(".size").toggleClass("close-size");
  });

  $(".close-slide-2 ").click(function () {
    $(".slid-closed").toggleClass("cl");
    $(".none").toggleClass("di");
    $(".close-slide-2").toggleClass("di");
    $(".close-slide ").toggleClass("di");
    $(".size").toggleClass("close-size");
  });
});
