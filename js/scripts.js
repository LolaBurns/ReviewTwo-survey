$(document).ready(function() {
  $("#users").submit(function(event)  {
    event.preventDefault();
    var fieldInput = $("input#field").val();

    $(".field").text(fieldInput);

    $("#results").show();
    $("#questions").hide();
  });
});
