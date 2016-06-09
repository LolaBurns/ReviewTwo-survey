$(document).ready(function() {
  $("#userData").submit(function(event)  {
    event.preventDefault();
    var userNameInput = $("input#userName").val();
    var weatherInput = $("#weather").val();
    var activityInput = $("input:radio[name=activity]:checked").val();
    var priorityInput = $("#priority").val();
    var personalityInput = ("input:radio[name=personality]:checked").val(;)

    $(".userName").text(fieldInput);

    $("#results").show();
    $("#userData").hide();
  });
});
