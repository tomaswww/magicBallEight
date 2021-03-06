//  object
var answers = ["It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes - definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful."
];


// model
function shakeAndBake(array) {
  var pressBtn = document.getElementById("buttnSAB");
  pressBtn.addEventListener("click", function() {
    var indexAnswer = Math.round(Math.random() * (answers.length - 1));
    var setAnswer = document.getElementById("targetTextDisplay");
    shakeBall();
    setAnswer.innerHTML = answers[indexAnswer];
    // here the function to shake and randomly select answer
  })
};

function shakeBall() {
  var shakingIt = document.getElementById("theBall");
  shakingIt.classList.add("animated", "wobble");
  var popingUp = document.getElementById("theBallText");
  popingUp.classList.add("animated", "fadeIn", "delay-1s");
  setTimeout(function() {
    shakingIt.classList.remove("animated", "wobble");
    popingUp.classList.remove("animated", "fadeIn", "delay-1s");
  }, 1500);
}


// view
shakeAndBake(answers);
