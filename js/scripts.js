//Business Logic//
var workingArray = [];
// var userPingNum = 3;
// var userPongNum = 5;
//Functions converting user input//
function getInput() {
  var userNum = parseInt($('input').val());
  return userNum;
};
function getUserRange() {
  var userRng = parseInt($('#userRange').val());
  return userRng;
  alert(userRng);
};
function getUserPing() {
  var userPi = parseInt($('#userPing').val());
  return userPi;
  alert(userPin);
};
function getUserPong() {
  var userPo = parseInt($('#userPong').val());
  return userPo;
  alert(userPo);
};
//Function to create array of values//
function createArray(inp) {
  workingArray = [];
  if (((inp / userPingNum)>=1) && ((inp / userPingNum) <= 2)) {
    $("#onePing").show();
  };
  for (i=1; i<=inp; i++) {
    workingArray.push(i);
  };
};
function pingArray(pingnum) {
  if (pingnum % (userPingNum * userPongNum) === 0) {
    return "Pingpong!";
  } else if (pingnum % userPingNum === 0) {
    return "Ping!";
  } else if (pingnum % userPongNum === 0) {
  return "Pong!";
  } else {
    return pingnum;
  };
};
function makeList(elem, ind, arr) {
  $("#outputList").append("<li>" + elem + "</li>");
};
function clearList() {
  $("#outputList").empty();
  $("#onePing").hide();
}
//User Input Logic//
$(document).ready(function() {
  $("#mainsubmit").submit(function(event) {
    userPingNum = 3;
    userPongNum =5;
    event.preventDefault();
    clearList();
    var inputNum = getInput();
    createArray(inputNum);
    var pingedArray = workingArray.map(pingArray);
    pingedArray.forEach(makeList);
  });
  $("#usersubmit").submit(function(event) {
    event.preventDefault();
    clearList();
    var inputNum = getUserRange();
    userPingNum = getUserPing();
    userPongNum = getUserPong();
    createArray(inputNum);
    var userPingedArray = workingArray.map(pingArray);
    userPingedArray.forEach(makeList);
  });
});
