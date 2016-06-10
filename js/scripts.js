//Business Logic//

var workingArray = [];

function getInput() {
  var userNum = parseInt($('input').val());
  return userNum;
};

function createArray(inp) {
  for (i=1; i<=inp; i++) {
    workingArray.push(i);
  };
};

function pingArray(pingnum) {
  if (pingnum % 3 === 0) {
    return "Ping!";
  } else {
    return pingnum
  };
};

//   (p=0; p<=(pingarr.length()); p++) {
//     var pingCheck = parseInt(pingarr[p]);
//     if (pingCheck % 3 === 0) {
//       pingarr[p] = "ping";
//     };
//   };
// };

//User Input Logic//
$(document).ready(function() {

  $("form").submit(function() {
    var inputNum = getInput();
    alert(inputNum);
    alert(typeof(inputNum));

    var plainArray = createArray(inputNum);
    alert(workingArray);

    var pingedArray = workingArray.map(pingArray);
    alert(pingedArray);
  });


});
