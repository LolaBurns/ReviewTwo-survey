$(document).ready(function() {
  $("#userData").submit(function(event)  {
    event.preventDefault();
    var userNameInput = $("input#userName").val();
    var weatherInput = $("#weather").val();
    var activityInput = $("input:radio[name=activity]:checked").val();
    var priorityInput = $("#priority").val();
    var personalityInput = $("input:radio[name=personality]:checked").val();
    var results = weatherInput + activityInput + priorityInput + personalityInput;

    if (userNameInput === "") {
      alert("Please refresh the page and fill in your name to get your results.");
    } else if ((results === "aaaa") || (results === "abaa") || (results === "aaba") || (results === "aaab") || (results === "baaa") || (results === "caaa") || (results === "acaa") || (results === "aaca") || (results === "aaac")) {
      results = ("Southern California");
    } else if ((results === "cccc") || (results === "cacc") || (results === "ccac") || (results === "ccca") || (results === "cbcc") || (results === "ccbc") || (results === "cccb") ) { results = ("Alaska");
    } else {
      results = ("The American Northwest");
    }

    $(".userName").text(userNameInput);
    $(".resultSpot").text(results);

    $("#results").show();
    $("#userData").hide();
  });
});
