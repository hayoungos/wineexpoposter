$(document).ready(function () {
  // 여기다가 코드를 작성하세요
  $(".box").on("mouseover", function () {

    $(".box").removeClass("active");
    $(this).addClass("active");






    // $(".box").css("background-color", "red");
    // $(".box").css("boder-radius", "0px");
    // $(".box").css("width", "100px");

    // $(this).css("background-color", "blue");
    // $(this).css("boder-radius", "30px");
    // $(this).css("width", "240px");
  });
});
