//Business Logic//
var workingArray = [];

function getInput() {
  var userNum = parseInt($('input').val());
  return userNum;
};
function createArray(inp) {
  workingArray = [];
  for (i=1; i<=inp; i++) {
    workingArray.push(i);
  };
};
function pingArray(pingnum) {
  if (pingnum % 15 === 0) {
    return "Pingpong!"
  } else if (pingnum % 5 === 0) {
    return "Pong!"
  } else if (pingnum % 3 === 0) {
  return "Ping!";
  } else {
    return pingnum;
  };
};
function makeList(elem, ind, arr) {
  $("#outputList").append("<li>" + elem + "</li>");
};
function clearList() {
  $("#outputList").empty();
}
//User Input Logic//
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    clearList();
    var inputNum = getInput();
    createArray(inputNum);
    var pingedArray = workingArray.map(pingArray);
    pingedArray.forEach(makeList);
  });
});
