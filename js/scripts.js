//Business Logic//

function getInput() {
  var userNum = $('input').val();
  return userNum;
}

//User Input Logic//
$(document).ready(function() {

  $("form").submit(function() {
    var inputNum = getInput();
    alert(inputNum);
  });


});
