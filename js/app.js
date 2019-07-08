'use strict';
var userName = prompt('What is you name?');
var numCorrect = 0;
var sevenCorrect = false;

//Creates arrays for questions 1-5
var questionArray = ['Did I graduate college?', 'Do I have any pets?', 'Are lagers my favorite style of beer?', 'Have I always lived in Iowa?', 'Is my favorite sport soccer?'];
var correctResponses = ['Yes, I graduated from the University of Northern Iowa in 2016.', 'Yes, I have two cats named Titan and Brownie.', 'That is correct, I actually prefer IPAs.', 'Yes, I have travelled outside the state but I have always lived in either Cedar Rapids or Cedar Falls.', 'Correct, my favorite sport is hockey. I\'m a Colorado Avalanche fan.'];
var incorrectResponses = ['That is incorrect, I graduated from the University of Northern Iowa in 2016.', 'That is incorrect, I have two cats named Titan and Brownie.', 'That is incorrect, I actually prefer IPAs.', 'That is incorrect, I have travelled outside the state but I have always lived in either Cedar Rapids or Cedar Falls.', 'That incorrect, my favorite sport is hockey. I\'m a Colorado Avalanche fan.'];
var answerArray = [];
var questionIndex = 0;
var correctAnswer = ['y', 'y', 'n', 'y', 'n'];
var correctAnswerTwo = ['yes', 'yes', 'no', 'yes', 'no'];
var incorrectAnswer = ['n', 'n', 'y', 'n', 'y'];
var incorrectAnswerTwo = ['no', 'no', 'yes', 'no', 'yes'];



runGame();

function runGame() {
  for (questionIndex = 0; questionIndex < 5; questionIndex++) {
      askQuestion();
  }
  questionSix();
  questionSeven();
  alert('Good game ' + userName + ', you got ' + numCorrect + ' out of 7 questions correct. Refresh to play again!');
}

function askQuestion() {
  answerArray[questionIndex] = prompt(questionArray[questionIndex]).toLowerCase().trim();
  if (answerArray[questionIndex] === correctAnswer[questionIndex] || answerArray[questionIndex] === correctAnswerTwo[questionIndex]) {
    alert(correctResponses[questionIndex]);
    numCorrect++;
  } else if (answerArray[questionIndex] === incorrectAnswer[questionIndex] || answerArray[questionIndex] === incorrectAnswerTwo[questionIndex]) {
    alert(incorrectResponses[questionIndex]);
  } else {
    alert('Please enter yes or no.');
  }
}


// function questionOne() {
//   answerArray[questionIndex] = prompt(questionArray[questionIndex]).toLowerCase().trim();
//   if (answerArray[questionIndex] === 'y' || answerArray[questionIndex] === 'yes') {
//     alert(yesResponses[questionIndex]);
//     numCorrect++;
//   } else if (answerArray[questionIndex] === 'n' || answerArray[questionIndex] === 'no') {
//     alert(noResponses[questionIndex]);
//   } else {
//     alert('Please enter yes or no.');
//   }
// }
// function questionTwo() {
//   answerArray[questionIndex] = prompt(questionArray[questionIndex]).toLowerCase().trim();
//   if (answerArray[questionIndex] === 'y' || answerArray[questionIndex] === 'yes') {
//     alert(yesResponses[questionIndex]);
//     numCorrect++;
//   } else if (answerArray[questionIndex] === 'n' || answerArray[questionIndex] === 'no') {
//     alert(noResponses[questionIndex]);
//   } else {
//     alert('Please enter yes or no.');
//   }
// }

// function questionThree() {
//   answerArray[questionIndex] = prompt(questionArray[questionIndex]).toLowerCase().trim();
//   if (answerArray[questionIndex] === 'y' || answerArray[questionIndex] === 'yes') {
//     alert(yesResponses[questionIndex]);
//   } else if (answerArray[questionIndex] === 'n' || answerArray[questionIndex] === 'no') {
//     alert(noResponses[questionIndex]);
//     numCorrect++;
//   } else {
//     alert('Please enter yes or no.');
//   }
// }

// function questionFour() {
//   answerArray[questionIndex] = prompt(questionArray[questionIndex]).toLowerCase().trim();
//   if (answerArray[questionIndex] === 'y' || answerArray[questionIndex] === 'yes') {
//     alert(yesResponses[questionIndex]);
//     numCorrect++;
//   } else if (answerArray[questionIndex] === 'n' || answerArray[questionIndex] === 'no') {
//     alert(noResponses[questionIndex]);
//   } else {
//     alert('Please enter yes or no.');
//   }
// }

// function questionFive() {
//   answerArray[questionIndex] = prompt(questionArray[questionIndex]).toLowerCase().trim();
//   if (answerArray[questionIndex] === 'y' || answerArray[questionIndex] === 'yes') {
//     alert(yesResponses[questionIndex]);
//   } else if (answerArray[questionIndex] === 'n' || answerArray[questionIndex] === 'no') {
//     alert(noResponses[questionIndex]);
//     numCorrect++;
//   } else {
//     alert('Please enter yes or no.');
//   }
// }

function questionSix() {
  var randomInt = Math.floor(Math.random()*10 + 1);
  console.log('RandomInt = ' + randomInt);
  for (var i = 4; i > 0; i--) {
    var answerSix = prompt('Guess a random number between one and ten. You have 4 attempts.').trim();
    answerSix = parseInt(answerSix);
    if (isNaN(answerSix)) {
      alert('Enter a valid number. ' + (i -1) + ' more tries');
    }
    else if (answerSix === randomInt) {
      alert('You got it! The random number is ' + randomInt);
      numCorrect++;
      break;
    }
    else if (answerSix < randomInt) {
      alert('Incorrect, try guessing a higher number. ' + (i - 1) + ' more tries');
    }
    else if (answerSix > randomInt) {
      alert('Incorrect, try guessing a lower number. ' + (i - 1) + ' more tries');
    }
  }
}

function questionSeven() {
  for (var i = 6; i > 0; i--) {
    var makeArray = ['hyundai', 'subaru', 'volkswagen', 'chrysler'];
    var answerSeven = prompt('I have owned 4 different vehicles. Guess the brand/make for any of my cars?').toLowerCase().trim();
    var checkIfTrue = makeArray.includes(answerSeven);
    if (checkIfTrue) {
      alert('You are correct. I did own a ' + answerSeven + '. Keep guessing for other makes.');
      sevenCorrect = true;
    }
    else {
      alert('Incorrect but keep guessing! You have ' + (i -1) + ' more tries.');
    }
  }
  alert('I have owned a Hyundai, Subaru, Volkswagen, and a Chrysler.');
  if (sevenCorrect) {
    numCorrect++;
  }
}
