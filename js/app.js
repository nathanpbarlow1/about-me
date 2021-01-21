'use strict';

var score = 0;

var userName = prompt('Hi! What is your name?');
alert('Welcome to my site ' + userName + '!');


//write 5 questions. they MUST accept yes or no OR y or n IN ANY CASE
//examples: YES, yes, YEs, yeS, Y, y,
function questionOne(){
  var liveLocationCity = prompt('Do I live in Seattle?').toLowerCase();
  if (liveLocationCity === 'yes' || liveLocationCity === 'y') {
    alert('That is actually not the case ' + userName );
  }else if (liveLocationCity === 'no' || liveLocationCity === 'n')
    alert('Good guess!');
  score++;

}

questionOne();
console.log('you are correct. ');

function questionTwo(){
  var liveLocationState = prompt('Do I live in Washington State?').toLowerCase();
  if (liveLocationState === 'yes' || liveLocationState === 'y') {
    alert('Yes, that\'s correct ' + userName + '!' );
    score++;
    // console.log('you are correct. ');
  }else if (liveLocationState === 'no' || liveLocationState === 'n')
    alert('Born and raised actually');

}

questionTwo();

function questionThree(){
  var snowboardingParticipant = prompt('What about snowboarding, do you think I do that?').toLowerCase();
  if (snowboardingParticipant === 'yes' || snowboardingParticipant === 'y') {
    alert('Yes, that is correct! ' + userName );
    score++;
    // console.log('you are correct. ');
  }else if(snowboardingParticipant === 'no' || snowboardingParticipant === 'n')
    alert('Nah brah, catch me on the slopes');

}

questionThree();

function questionFour(){
  var skateboardParticipant = prompt('How about skateboarding, do you think I do that?').toLowerCase();
  if (skateboardParticipant === 'yes' || skateboardParticipant === 'y') {
    alert('Yes! That\'s actually how I became interested in snowboarding');
    score++;
  }else if (skateboardParticipant === 'no' || skateboardParticipant === 'n')
    alert ('Actually, skateboarding was my first love!');
    // console.log('you are correct. ');

}

questionFour();

function questionFive(){
  var surfParticipant = prompt('You are probably noticing a trend by now, so do you think I surf?').toLowerCase();
  if (surfParticipant === 'no' || surfParticipant === 'n') {
    alert('You\'re correct! Unfortunately, it\'s too cold in Washington');
    score++;
  }else if (surfParticipant === 'yes' || surfParticipant === 'y')
    alert('Maybe someday...as long as I live in WA it\'s too cold');
    // console.log('you are correct. ');
  
  alert('Have a good time, ' + userName +'!');

}

questionFive(); 


// Question #6
// Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.
// Indicate through an alert if the guess is “too high” or “too low”.
// It should give the user exactly four opportunities to get the correct answer.
// After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.

function questionSix(){
  for (var i = 0; i < 4; i++){
    var answerSix = prompt('Guess a number between 1 and 10! You\'ve only got 4 guesses!');
    // console.log(answerSix);
    if (i === 3){
      alert('Sorry, you\'ve exhausted your chances...the answer was 7!');
      break;
    }
    if (answerSix === '7') {
      alert('That\'s correct!');
      break;
    } else if (answerSix <7) {
      alert('Too Low');
    } else if (answerSix >7) {
      alert ('Too High!');
    }
  }

}
questionSix();


// Question #7 As a user, I would like to guess the answer to a question that could have many possibilities so that I can have fun with with a guessing game.
// This question has multiple possible correct answers that are stored in an array
// Give the users 6 attempt to guess the correct answer.
// The guesses will end once the user guesses a correct answer or they run out of attempts.
// Display all the possible correct answers to the user.
// Consider using a loop of some sort for this question.
// As a user, I would like to know my final score so that I can know how well I did.
// Keep track of the total number of correct answers. At the end tell them how many they got correct out of the 7 questions asked.
var statesArray = [1, 2, 3, 4, 5];
var answeredSevenCorrectly = false;

function questionSeven(){
  for (var i = 0; i < 6; i++){
    var answerSeven = parseInt(prompt('How many states have I lived in? (please enter a integer)'));
    //console.log(answerSeven);
    for (var j =0; j < statesArray.length; j++){
      if(answerSeven === statesArray[j] ){
        alert('That is correct!');
        answeredSevenCorrectly = true;
        score++;
        break;
      }
    }
    if (answeredSevenCorrectly === true){
      break;
    } else{
      alert('Sorry, that\'s not correct.');
    }
  
    alert('The correct answers are 1, 2, 3, 4 & 5');
  }

}

questionSeven(); 

// if(answerSeven === '1' || answerSeven === 'one'){
//     alert('That is correct!');
//     score++;
//     break;
//   }
//   if(answerSeven === '2' || answerSeven === 'two'){
//     alert('That is correct!');
//     score++;
//     break;
//   }
//   if(answerSeven === '3' || answerSeven === 'three'){
//     alert('That is correct!');
//     score++;
//     break;
//   }
//   if(answerSeven === '4' || answerSeven === 'four'){
//     alert('That is correct!');
//     score++;
//     break;
//   }
//   if(answerSeven === '5' || answerSeven === 'five'){
//     alert('That is correct!');
//     score++;
//     break;
// }

// Check read me for credit for this loop!

alert(`Thanks for playing! You got a total score of ${score}`);
// console.log(score);
