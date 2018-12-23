//  object
var answers = ["yes","no"];
var max;



// model
function shakeAndBake(array){
  var pressBtn = document.getElementById("buttnSAB");
  pressBtn.addEventListener("click", function() {
    var max = answers.lenght;
    var indexAnswer = Math.round((Math.random() * ((max - 1) + 1)) + 1);
    var setAnswer = document.getElementById("targetTextDisplay");
    setAnswer.innerHTML = answers[indexAnswer];
    // here the function to shake and randomly select answer
  })
};


// view
shakeAndBake(answers);
