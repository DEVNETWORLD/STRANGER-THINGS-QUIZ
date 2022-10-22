// var readlineSync = require("readline-sync");
import readlineSync from 'readline-sync'
import chalk from 'chalk';

const log = console.log;
// var chalk = require("chalk");
var score = 0;
var userName = readlineSync.question("whats your name? ");
log("====================================\n");
console.log("welcome to Quizdad " + userName + "\n");
log("====================================\n");
log("If you're a Stranger Things fan then lets see how well you know the show.\n");
log("====================================\n");
log("Down you can see the questions based on stranger things the answer is among the given options choose the rights answers that suits the question by simply entering its option number")

function play(question, options, answer) {
  var userAnswer = readlineSync.keyInSelect(options, question);
  if (options[userAnswer] === answer) {
    log(chalk.green("You are right" + "\n"));
    score++;
    log(chalk.green("Current Score : " + score));
  }
  else {
    log(chalk.red("You are wrong th correct answer is " + answer + "\n"));
    log(chalk.red("Current Score : " + score));
  }
}
const quizList = [{
  question:
    "1: Who played character Eleven in Netflix's Stranger things?",
  options: ["Millie Bobby Brown", "Sadie Sink", "NATALIA DYER", "MAYA HAWKE"],
  answer: "Millie Bobby Brown"
}, {
  question:
    "2: Who got kidnapped by the demogorgon in first season?",
  options: ["STEVE HARRINGTON", "MIKE WHEELER", "DUSTIN HENDERSON", "WILL BYERS"],

  answer: "WILL BYERS"
}, {
  question:
    "3: Who is Vecna in Stranger things S4?",
  options: ["HENRY CREEL", "WILL BYERS", "EDDIE MUNSON", "Steve HARRINGTON"], answer: "HENRY CREEL"
}, {
  question: "4: Who was the first one to be flayed by the mind flayer in season 3 ?",
  options: ["JIM HOPPER", "BILLY HARGROVE", "JOY BYERS", "EDDIE MUNSON"],
  answer: "BILLY HARGROVE"
}, {
  question: "5: Who was Vecna's first victim ?",
  options: ["ROBBIN BUCKLEY", "VICKEY", "CHRISSY", "MAX"],
  answer: "CHRISSY"
}, {
  question: "6: Who opened the gate in s3?",
  options: ["ELEVEN", "THE RUSSIANS", "MAX", "EDDIE MUNSON"],
  answer: "THE RUSSIANS"
}

]
var j = 1;
for (var i = 0; i < quizList.length; i++) {
  log(chalk.bold("\nQuestion " + (j++)));
  var currentQuestion = quizList[i];
  play(currentQuestion.question, currentQuestion.options, currentQuestion.answer);
}




