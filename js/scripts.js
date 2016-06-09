$(document).ready(function() {
  $("#userData").submit(function(event)  {
    event.preventDefault();
    var fieldInput = $("input#userName").val();

    $(".userName").text(fieldInput);

    $("#results").show();
    $("#userData").hide();
  });
});
