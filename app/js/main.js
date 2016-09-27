var fontArray = ['Above Demo', 'bromello', 'Capsule X Pro Medium', 'Cursus', 'GoodMorningAfternoon', 'Hey Now', 'Permanent Marker'];
var randomFont = fontArray[Math.floor(Math.random() * fontArray.length)];

$("#name").css("font-family", randomFont);

$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});

$("#sendMessage").on("click", function() {
  message = $("#contactform").serialize();
$.ajax({
    url: "https://formspree.io/bryan.gsmith33@gmail.com", 
    method: "POST",
    data: message,
    dataType: "json"
});
  $('#emailModal').modal('toggle');
  $("input, textarea").val("");
  return false;
});