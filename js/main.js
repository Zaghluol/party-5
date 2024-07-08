/// <reference types="../@types/jquery" />
 
  $("#close").click(function(){
    $(".nav-side").css("display", "none");
    $(".home-content").css("width", "100%");
  });
  $("#open").click(function(){
    $(".nav-side").css("display", "block");
    $(".home-content").css("width", "80%");
  });
  // $("#close").on('click', function(){
  //   $("#nSide").css("width", "0" , function () {
  //     $(".home-content").css("width", "100%")
  //   })
  // })
  $("#p1").slideDown();
  $("#p2").slideUp();
  $("#p3").slideUp();
  $("#p4").slideUp();
  $("#s1").click(function(){
    $("#p1").slideToggle(500);
    $("#p2").slideUp();
    $("#p3").slideUp();
    $("#p4").slideUp();
  });
  $("#s2").click(function(){
    $("#p2").slideToggle(500);
    $("#p1").slideUp();
    $("#p3").slideUp();
    $("#p4").slideUp();
  });
  $("#s3").click(function(){
    $("#p3").slideToggle(500);
    $("#p2").slideUp();
    $("#p1").slideUp();
    $("#p4").slideUp();
  });
  $("#s4").click(function(){
    $("#p4").slideToggle(500);
    $("#p2").slideUp();
    $("#p3").slideUp();
    $("#p1").slideUp();
  });

$(document).ready(function () {
  var mg = new Date(2025, 5, 21, 0, 0, 0, 0);
  var tmr = window.setInterval(function () {
      var d = new Date();
      var dif = mg - d;
      var s = parseInt(dif / 1000);

      var sec = s % 60;
      var m = parseInt(s / 60);
      var min = m % 60;
      var h = parseInt(m / 60);
      var hour = h % 24;
      d = parseInt(h / 24);
      document.getElementById('day').innerHTML = d
      document.getElementById('hour').innerHTML = hour
      document.getElementById('min').innerHTML = min
      document.getElementById('sec').innerHTML = sec
  }, 1000);
});

var counter = 100;
$('.text').keydown(function() {
  var length = $(this).val().length;
  var remain = counter-length;
  if(remain>0)
            {
              $("#counter").text(remain);
            }
            else{
              $("#counter").text("No more character");
              document.querySelector('.text').setAttribute('readonly', true);
        }
});