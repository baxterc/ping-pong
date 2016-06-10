//Business Logic//
var workingArray = [];
//Functions converting user input//
function getInput() {
  var userNum = parseInt($('input').val());
    if (isNaN(userNum) === false) {
    return userNum;
  } else {
    alert("Please enter a number greater than zero.");
  }
};
function getUserPing() {
  var userPi = parseInt($('#userPing').val());
    if (isNaN(userPi) === true) {
    alert("Please enter a number greater than zero.");
  } else {
    return userPi;
  }
};
function getUserPong() {
  var userPo = parseInt($('#userPong').val());
  if (isNaN(userPo) === true) {
    alert("Please enter a number greater than zero.");
  } else {
    return userPo;
  }
};
function getUserRange() {
  var userRng = parseInt($('#userRange').val());
    if (isNaN(userRng) === true) {
    alert("Please enter a number greater than zero.");
  } else {
    return userRng;
  }
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
};
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
    createArray(inputNum); //takes inputNum to make length of array
    var userPingedArray = workingArray.map(pingArray);
    userPingedArray.forEach(makeList);
  });
});
